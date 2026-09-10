import * as THREE from "three";

const form = document.getElementById("wait-form");
const msg = document.getElementById("wait-msg");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.email;
    if (!email.checkValidity()) {
      email.reportValidity();
      return;
    }
    msg.hidden = false;
    form.reset();
  });
}

const canvas = document.getElementById("mesh-canvas");
const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const narrow = window.matchMedia("(max-width: 480px)").matches;

if (!canvas || reduce) {
  if (canvas) canvas.style.display = "none";
} else {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: !narrow,
    alpha: true,
    powerPreference: "low-power",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, narrow ? 1.25 : 1.75));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
  camera.position.z = 4.2;

  const group = new THREE.Group();
  scene.add(group);

  const core = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.85, 0.28, narrow ? 80 : 140, narrow ? 12 : 20),
    new THREE.MeshStandardMaterial({
      color: 0x2dd4bf,
      emissive: 0x0d9488,
      emissiveIntensity: 0.35,
      metalness: 0.55,
      roughness: 0.28,
    })
  );
  group.add(core);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.55, 0.035, 12, narrow ? 48 : 80),
    new THREE.MeshBasicMaterial({ color: 0x5eead4, transparent: true, opacity: 0.55 })
  );
  ring.rotation.x = Math.PI / 2.6;
  group.add(ring);

  const dots = new THREE.Points(
    new THREE.IcosahedronGeometry(1.9, 1),
    new THREE.PointsMaterial({ color: 0x93c5fd, size: 0.035, transparent: true, opacity: 0.7 })
  );
  group.add(dots);

  const key = new THREE.DirectionalLight(0xffffff, 1.15);
  key.position.set(2.5, 2, 3);
  scene.add(key);
  scene.add(new THREE.AmbientLight(0x4a6a8a, 0.55));
  const fill = new THREE.PointLight(0x2dd4bf, 1.2, 8);
  fill.position.set(-2, -1, 2);
  scene.add(fill);

  function resize() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / Math.max(h, 1);
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener("resize", resize);

  let raf = 0;
  function frame(t) {
    raf = requestAnimationFrame(frame);
    const s = t * 0.0004;
    core.rotation.y = s;
    core.rotation.x = s * 0.35;
    ring.rotation.z = -s * 0.5;
    dots.rotation.y = s * 0.25;
    group.rotation.y = Math.sin(s * 0.7) * 0.15;
    renderer.render(scene, camera);
  }
  raf = requestAnimationFrame(frame);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf);
    else raf = requestAnimationFrame(frame);
  });
}

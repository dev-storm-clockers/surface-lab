/**
 * Light CSS-perspective card tilt (pointer / touch).
 * Mobile-safe: skips if prefers-reduced-motion or coarse pointer without hover.
 */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  function bind(el) {
    var max = Number(el.dataset.tiltMax || 10);
    function onMove(e) {
      var rect = el.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width;
      var y = (e.clientY - rect.top) / rect.height;
      var rx = (0.5 - y) * max;
      var ry = (x - 0.5) * max;
      el.style.transform =
        "perspective(900px) rotateX(" + rx + "deg) rotateY(" + ry + "deg)";
    }
    function reset() {
      el.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
    }
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", reset);
    el.addEventListener("pointercancel", reset);
  }

  document.querySelectorAll("[data-tilt]").forEach(bind);
})();

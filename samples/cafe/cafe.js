(function () {
  const cards = document.querySelectorAll(".flip-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const on = card.getAttribute("aria-pressed") === "true";
      card.setAttribute("aria-pressed", on ? "false" : "true");
      card.classList.toggle("is-flipped", !on);
    });
  });

  const hero = document.querySelector("[data-parallax]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!hero || reduce) return;

  const layers = hero.querySelectorAll(".layer");
  hero.addEventListener("pointermove", (e) => {
    const r = hero.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    layers.forEach((el, i) => {
      const d = (i + 1) * 12;
      el.style.transform = `translate3d(${x * d}px, ${y * d}px, 0)`;
    });
  });
  hero.addEventListener("pointerleave", () => {
    layers.forEach((el) => { el.style.transform = ""; });
  });
})();

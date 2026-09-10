(function () {
  const card = document.getElementById("rsvp-card");
  const form = document.getElementById("rsvp-form");
  const detail = document.getElementById("ok-detail");
  const reset = document.getElementById("rsvp-reset");
  if (!card || !form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const name = form.name.value.trim() || "friend";
    const guests = form.guests.value;
    detail.textContent =
      guests === "1"
        ? `See you at the pavilion, ${name}.`
        : `See you at the pavilion, ${name} (+${Number(guests) - 1}).`;
    card.classList.add("is-flipped");
  });

  reset?.addEventListener("click", () => {
    card.classList.remove("is-flipped");
  });
})();

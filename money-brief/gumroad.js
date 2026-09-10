/**
 * Surface Lab Money Brief — Gumroad CTA wiring
 * Fetches gumroad.json and sets href on [data-sku] Buy links.
 * Phil pastes real URLs into gumroad.json only — no HTML rebuild.
 */
(function () {
  var FALLBACK = "#";
  // Resolve against the page URL (not currentScript — null for deferred scripts).
  var configUrl = new URL("gumroad.json", window.location.href).href;

  function apply(config) {
    if (!config || typeof config !== "object") config = {};
    document.querySelectorAll("[data-sku]").forEach(function (el) {
      var sku = el.getAttribute("data-sku");
      var url = config[sku];
      if (typeof url === "string" && url.trim()) {
        el.setAttribute("href", url.trim());
      } else {
        el.setAttribute("href", FALLBACK);
      }
    });
  }

  fetch(configUrl, { cache: "no-store" })
    .then(function (res) {
      if (!res.ok) throw new Error("gumroad.json " + res.status);
      return res.json();
    })
    .then(apply)
    .catch(function () {
      apply({});
    });
})();

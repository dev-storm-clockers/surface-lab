/**
 * Surface Lab — Editorial Twin Buy CTA
 * Loads ../money-brief/gumroad.json and wires [data-sku="editorialTwin"] only.
 * Phil pastes real URL into gumroad.json → editorialTwin — no HTML rebuild.
 */
(function () {
  var FALLBACK = "#";
  var KEY = "editorialTwin";
  var configUrl = new URL("../money-brief/gumroad.json", window.location.href).href;

  function apply(config) {
    var url = config && typeof config[KEY] === "string" ? config[KEY].trim() : "";
    document.querySelectorAll('[data-sku="' + KEY + '"]').forEach(function (el) {
      el.setAttribute("href", url || FALLBACK);
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

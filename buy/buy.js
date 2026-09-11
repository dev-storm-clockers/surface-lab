/**
 * Surface Lab — Editorial Twin Buy CTA
 * Loads ./stripe.json and wires [data-sku="editorialTwin"] only.
 * Paste real Stripe Payment Link into stripe.json → editorialTwin — no HTML rebuild.
 */
(function () {
  var KEY = "editorialTwin";
  var configUrl = new URL("./stripe.json", window.location.href).href;

  function apply(url) {
    var href = url && String(url).trim() ? String(url).trim() : "#";
    document.querySelectorAll('[data-sku="' + KEY + '"]').forEach(function (el) {
      el.setAttribute("href", href);
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
  }

  fetch(configUrl, { cache: "no-store" })
    .then(function (res) {
      if (!res.ok) throw new Error("stripe.json " + res.status);
      return res.json();
    })
    .then(function (data) {
      apply(data && data[KEY]);
    })
    .catch(function () {
      apply("#");
    });
})();

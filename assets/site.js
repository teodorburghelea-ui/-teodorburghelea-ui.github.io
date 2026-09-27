// Mobile menu toggle
document.querySelectorAll('.menu-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var nav = document.getElementById(btn.getAttribute('aria-controls'));
    var open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
});

// E-mail links are assembled here so that spam robots cannot read the address from the page source.
document.querySelectorAll('a.email').forEach(function (a) {
  var addr = a.dataset.u + '@' + a.dataset.d;
  a.href = 'mailto:' + addr + (a.dataset.subject ? '?subject=' + encodeURIComponent(a.dataset.subject) : '');
  if (!a.dataset.keepText) a.textContent = addr;
});

// Publication filter (publications page only)
var q = document.getElementById('pub-filter');
if (q) {
  var items = Array.prototype.slice.call(document.querySelectorAll('.pubs li'));
  var count = document.getElementById('pub-count');
  var update = function () {
    var terms = q.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    var shown = 0;
    items.forEach(function (li) {
      var text = li.textContent.toLowerCase();
      var ok = terms.every(function (t) { return text.indexOf(t) !== -1; });
      li.hidden = !ok;
      if (ok) shown++;
    });
    document.querySelectorAll('.pub-group').forEach(function (g) {
      g.hidden = !g.querySelector('li:not([hidden])');
    });
    count.textContent = terms.length ? shown + ' of ' + items.length + ' shown' : items.length + ' entries';
  };
  q.addEventListener('input', update);
  update();
}

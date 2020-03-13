/*
  Ugly Bulma navbar handler
  Now with no jQuery!
  - 2018
*/

(function() {
  function a(b, c) {
    if (!this instanceof a) throw new Error("cn_cll_fnc");
    this.b = b;
    this.c = c;
  };
  a.prototype.apply = function() {
    let b = this;
    d(b.b)("click", function(a) {
      a.preventDefault();
      e(b.b)(f);
      e(b.c)(f);
    })
  };
  let g = function(a, b) {
      return a.bind(b);
    },
    b = document,
    c = b.querySelector.bind(b),
    d = function(a) {
      return g(a.addEventListener, a);
    },
    e = function(a) {
      let b = a.classList;
      return g(b.toggle, b);
    },
    f = "is-active";
  d(b)("DOMContentLoaded", function() {
    let n = new a(c(".navbar-burger"), c("#navbarMenuHeroA"));
    n.apply();
  })
})()

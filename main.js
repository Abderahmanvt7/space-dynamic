window.addEventListener("load", function () {
  document.querySelector(".header-section").classList.add("visible");

  this.setTimeout(function () {
    document
      .querySelector(".hero-section .hero-content")
      .classList.add("visible");
    this.document.querySelector(".hero-section").classList.add("visible");
    document
      .querySelector(".hero-section .hero-image")
      .classList.add("visible");
  }, 500);
});

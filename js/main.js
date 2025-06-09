const mobileToggleBtn = document.querySelector(".mobile-toggle-btn");
const navMenu = document.querySelector(".nav-menu");

mobileToggleBtn.addEventListener("click", () => {
  if (navMenu.hasAttribute("hidden-on-mobile")) {
    navMenu.style.maxHeight = navMenu.scrollHeight + "px";
    navMenu.removeAttribute("hidden-on-mobile");
  } else {
    navMenu.style.maxHeight = 0;
    navMenu.setAttribute("hidden-on-mobile", "");
  }
});

window.onresize = function () {
  if (window.matchMedia("(max-width:576px)").matches)
    if (!navMenu.hasAttribute("hidden-on-mobile"))
      navMenu.style.maxHeight = navMenu.scrollHeight + "px";
};

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((element) => {
  element.addEventListener("click", (event) => {
    document
      .querySelector(".active-nav-link")
      .classList.remove("active-nav-link");
    event.currentTarget.classList.add("active-nav-link");
  });
});

window.addEventListener("scroll", (event) => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("fixed-on-scroll");
    document.querySelector(".scroll-to-top-btn").style.bottom = ".8rem";
  } else {
    document.querySelector("header").classList.remove("fixed-on-scroll");
    document.querySelector(".scroll-to-top-btn").style.bottom = "-4rem";
  }
});

const accordionItemsHeaders = document.querySelectorAll(
  ".accordion-item .accordion-header"
);

accordionItemsHeaders.forEach((element) => {
  element.addEventListener("click", (event) => {
    const accordionCollapse = event.currentTarget.nextElementSibling;
    const accordionArrow = event.currentTarget.lastElementChild;

    if (
      (accordionCollapse.style.maxHeight == 0 ||
        accordionCollapse.style.maxHeight == "0px") &&
      !accordionCollapse.classList.contains("show")
    ) {
      accordionCollapse.style.maxHeight =
        accordionCollapse.lastElementChild.scrollHeight + "px";
      accordionArrow.style.transform = "scaleY(-1)";
    } else {
      accordionCollapse.style.maxHeight = 0;
      accordionCollapse.classList.remove("show");
      accordionArrow.style.transform = "scaleY(1)";
    }
  });
});

window.addEventListener("load", () => {
  document.querySelector(".accordion-collapse.show").style.maxHeight =
    document.querySelector(".accordion-collapse.show").scrollHeight + "px";
  document.querySelector(
    ".accordion-header:has(+.accordion-collapse.show) i"
  ).style.transform = "scaleY(-1)";
});

// Get Custom Pointer
const customPointer = document.querySelector(".custom-pointer");

//  Move Pointer ALong with Mouse Move
document.addEventListener("mousemove", function (eventObj) {
  customPointer.style.left = eventObj.x - 10 + "px";
  customPointer.style.top = eventObj.y - 10 + "px";
});

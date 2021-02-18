/*stickyNavbar = document.getElementById("stickyNavbar")
var myScrollFunc = function()
{
    var y = window.scrollY;
    if (y >= 50)
    {
        stickyNavbar.className = "show"
    }
    else
    {
        stickyNavbar.className = "hide"
    }
};

window.addEventListener("scroll", myScrollFunc);
*/

/******************************* Navbar ********************************/
/*// menu toggle button
$(document).ready(function()
{
  $(".menu-icon").on("click", function()
  {
    $("nav ul").toggleClass("showing");
  });
});*/

// srolling effect
$(window).on("scroll", function()
{
  if($(window).scrollTop())
  {
    $('nav').addClass('black');
  }
  else
  {
    $('nav').removeClass('black');
  }
})

/*****************************************************************************/

/******************************* Scrolling ***********************************/
//Background
const sections = [...document.querySelectorAll("section")];

let options =
{
  rootMargin: "0px",
  threshold: 0.25
};

const callback = (entries, observer) =>
{
  entries.forEach((entry) =>
  {
    const { target } = entry;
    console.log(entry, target);

    if (entry.intersectionRatio >= 0.25)
    {
      target.classList.add("is-visible");
    }
    else
    {
      target.classList.remove("is-visible");
    }
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) =>
{
  observer.observe(section);
});

window.onload(removeClass());

/****************************************************************************/

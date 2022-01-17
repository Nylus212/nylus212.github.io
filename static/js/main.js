/******************************* Navbar ********************************/

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




document.querySelectorAll('a[href^="#"]').forEach(anchor =>
{
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function registerObservers()
{
  sections.forEach((section, index) =>
  {
    observer.observe(section);
  });
}

registerObservers();

//window.onload(removeClass());

window.addEventListener('resize', function()
{
    registerObservers();
});

/****************************************************************************/

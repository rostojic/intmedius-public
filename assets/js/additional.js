let header = document.querySelector("#header-wrapper");
let headerHeight = header.offsetHeight;
let featuredTop = document.querySelector("#featured-wrapper").offsetTop;

window.onscroll = () => {
  if (
    document.body.scrollTop >= featuredTop - headerHeight ||
    document.documentElement.scrollTop >= featuredTop - headerHeight
  ) {
    header.style.borderBottom = "2px solid white";
  } else {
    header.style.borderBottom = "none";
  }
};

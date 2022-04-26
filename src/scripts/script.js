//header animation

const logoTag = document.querySelector("#logo")

//when page is scrolled to a certain point (80px)
//make eyes scale down until it disappears
//toggle class to eyes (to scale from 1-0 and set opacity to 0, with animation)
//make eyes appear in sticker tray at same time with scale up
//toggle class to tray eyes (make visible, scale from 0 to 1)
document.addEventListener("scroll", () => {
  const pixels = window.pageYOffset;

  if(pixels > 20){
    logoTag.classList.add("scrolled")
  } else{
    logoTag.classList.remove("scrolled")
  }
})
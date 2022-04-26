//header animation

const logoTag = document.querySelector("#logo");
const trayEyesTag = document.querySelector("#sticker-tray img:last-child");

//when page is scrolled to a certain point (80px)
//make eyes scale down until it disappears
//toggle class to eyes (to scale from 1-0 and set opacity to 0, with animation)
//make eyes appear in sticker tray at same time with scale up
//toggle class to tray eyes (make visible, scale from 0 to 1)
document.addEventListener("scroll", () => {
  const pixels = window.pageYOffset;

  if (pixels > 40) {
    logoTag.classList.add("scrolled");
    trayEyesTag.classList.add("scrolled");
  }
});



//Parallax
const sections = document.querySelectorAll("section")
const addMovement = () => {
  //get top and then middle of window
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight * 0.5)

  sections.forEach(section => {
    section.style.color = "red"
    //get middle of each section
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight * 0.5)
    
    //get distance between section from the visible area of page
    const distanceToSection = midView - midSection
    
    //picking tags to parallax
    const image = section.querySelector("img")
    const contentTag = section.querySelector("div")

    //apply parallax
    section.style.color = "red"

  });
}

addMovement()

document.addEventListener("scroll", () => {
  addMovement()
})

window.addEventListener("resize", () =>{
  addMovement()
}) 
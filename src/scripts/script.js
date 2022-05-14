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

  if (pixels > 600) {
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

  sections.forEach((section, index) => {
  
    //get middle of each section
    const topSection = section.offsetTop
    const midSection = topSection + (section.offsetHeight * 0.5)
    
    //get distance between section from the visible area of page
    const distanceToSection = midViewport - midSection
    
    //picking tags to parallax
    const contentTag = section.querySelector("div")

    let distToSectionModifier = distanceToSection * 0.1
    //for all the even sections (indices), make content move up instead of down
    //is the index divisible by 2
    //a.k.a. is the index's remainder 0? (modulo operator time: %)
    //this is also why distToSectionModifier is a let and not a const
    if (index%2 == 0){
      distToSectionModifier = distanceToSection * -0.1;
    }

    //apply parallax
    contentTag.style.transform = `translateY(${distToSectionModifier}px)`
  });
}

addMovement()

document.addEventListener("scroll", () => {
  addMovement()
})

window.addEventListener("resize", () =>{
  addMovement()
}) 
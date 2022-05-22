//✨✨✨Parallax & Background Color✨✨✨
export const sections = document.querySelectorAll("section");
export const bodyTag = document.querySelector("body");

const addMovement = () => {
  //get top and then middle of window
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight * 0.5;

  sections.forEach((section, index) => {
    //get middle of each section

    const topSection = section.offsetTop;
    const midSection = topSection + section.offsetHeight * 0.4;

    //get distance between section from the visible area of page
    const distanceToSection = midViewport - midSection;

    //picking tags to parallax
    const contentTag = section.querySelector("div");

    let distToSectionModifier = distanceToSection * 0.1;
    //for all the even sections (indices), make content move up instead of down
    //is the index divisible by 2
    //a.k.a. is the index's remainder 0? (modulo operator time: %)
    //this is also why distToSectionModifier is a let and not a const
    if (window.innerWidth > 600) {
      if (index % 2 == 0) {
        distToSectionModifier = distanceToSection * -0.1;
      }
    }

    const uploadTitleTag = document.querySelector("#upload-button h2");

    //apply parallax
    contentTag.style.transform = `translateY(${distToSectionModifier}px)`;

    //check the background
    if (topViewport > 2600) {
      bodyTag.style.backgroundColor = "white";
      uploadTitleTag.style.color = "black";
    } else if (distanceToSection > -300) {
      const dataBackground = section.getAttribute("data-background");
      bodyTag.style.backgroundColor = dataBackground;
      uploadTitleTag.style.color = "white";
    }
  });
};

document.addEventListener("scroll", () => {
  addMovement();
});
window.addEventListener("resize", () => {
  addMovement();
});

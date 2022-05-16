//✨✨✨Parallax & Background Color✨✨✨
const sections = document.querySelectorAll("section");
export const bodyTag = document.querySelector("body");
const addMovement = () => {
  //get top and then middle of window
  const topViewport = window.pageYOffset;
  const midViewport = topViewport + window.innerHeight * 0.5;

  sections.forEach((section, index) => {
    //get middle of each section
    const topSection = section.offsetTop;
    const midSection = topSection + section.offsetHeight * 0.5;

    //get distance between section from the visible area of page
    const distanceToSection = midViewport - midSection;

    //picking tags to parallax
    const contentTag = section.querySelector("div");

    let distToSectionModifier = distanceToSection * 0.1;
    //for all the even sections (indices), make content move up instead of down
    //is the index divisible by 2
    //a.k.a. is the index's remainder 0? (modulo operator time: %)
    //this is also why distToSectionModifier is a let and not a const
    if (index % 2 == 0) {
      distToSectionModifier = distanceToSection * -0.1;
    }

    //apply parallax
    contentTag.style.transform = `translateY(${distToSectionModifier}px)`;

    //check the background
    if (distanceToSection > -300) {
      const dataBackground = section.getAttribute("data-background");
      bodyTag.style.backgroundColor = dataBackground;
    }
  });
};
addMovement();
document.addEventListener("scroll", () => {
  addMovement();
});
window.addEventListener("resize", () => {
  addMovement();
});
//✨✨✨ Stickers, Sticker Selector, Brush Selector ✨✨✨
export const stickersTag = document.querySelector("div.stickers");
const stickerCursorTag = document.querySelectorAll("div.stickers img");
export const stickerSelectorTag = document.querySelectorAll(".sticker-tray img");
console.log(stickerCursorTag);
export const stickers = [
  new URL("../assets/stickers/rainbow.png", import.meta.url),
  new URL("../assets/stickers/heart.png", import.meta.url),
  new URL("../assets/stickers/cactus.png", import.meta.url),
  new URL("../assets/stickers/sun.png", import.meta.url),
  new URL("../assets/stickers/clover.png", import.meta.url),
  new URL("../assets/stickers/cheese.png", import.meta.url),
  new URL("../assets/stickers/sparkle.png", import.meta.url),
  new URL("../assets/stickers/ufo.png", import.meta.url),
  new URL("../assets/stickers/fire.png", import.meta.url),
  new URL("../assets/stickers/eyes.png", import.meta.url),
];
const largeCursors = [
  new URL("../assets/stickers/large/rainbow.png", import.meta.url),
  new URL("../assets/stickers/large/heart.png", import.meta.url),
  new URL("../assets/stickers/large/cactus.png", import.meta.url),
  new URL("../assets/stickers/large/sun.png", import.meta.url),
  new URL("../assets/stickers/large/clover.png", import.meta.url),
  new URL("../assets/stickers/large/cheese.png", import.meta.url),
  new URL("../assets/stickers/large/sparkle.png", import.meta.url),
  new URL("../assets/stickers/large/ufo.png", import.meta.url),
  new URL("../assets/stickers/large/fire.png", import.meta.url),
  new URL("../assets/stickers/large/eyes.png", import.meta.url),
];
export const mediumCursors = [
  new URL("../assets/stickers/medium/rainbow.png", import.meta.url),
  new URL("../assets/stickers/medium/heart.png", import.meta.url),
  new URL("../assets/stickers/medium/cactus.png", import.meta.url),
  new URL("../assets/stickers/medium/sun.png", import.meta.url),
  new URL("../assets/stickers/medium/clover.png", import.meta.url),
  new URL("../assets/stickers/medium/cheese.png", import.meta.url),
  new URL("../assets/stickers/medium/sparkle.png", import.meta.url),
  new URL("../assets/stickers/medium/ufo.png", import.meta.url),
  new URL("../assets/stickers/medium/fire.png", import.meta.url),
  new URL("../assets/stickers/medium/eyes.png", import.meta.url),
];
const smallCursors = [
  new URL("../assets/stickers/small/rainbow.png", import.meta.url),
  new URL("../assets/stickers/small/heart.png", import.meta.url),
  new URL("../assets/stickers/small/cactus.png", import.meta.url),
  new URL("../assets/stickers/small/sun.png", import.meta.url),
  new URL("../assets/stickers/small/clover.png", import.meta.url),
  new URL("../assets/stickers/small/cheese.png", import.meta.url),
  new URL("../assets/stickers/small/sparkle.png", import.meta.url),
  new URL("../assets/stickers/small/ufo.png", import.meta.url),
  new URL("../assets/stickers/small/fire.png", import.meta.url),
  new URL("../assets/stickers/small/eyes.png", import.meta.url),
];
export let number = 0;

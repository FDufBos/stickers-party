//✨✨✨UI Sound✨✨✨
import Snd from 'snd-lib';
import { stickerSelectorTag, number, bodyTag, mediumCursors, stickers, stickersTag } from './parallax';
import { snd } from './uiSound';






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
//sticker selector
const chooseSticker = () => {
  stickerSelectorTag.forEach((stickerSelector) => {
    stickerSelector.addEventListener("click", () => {
      number = parseInt(stickerSelector.getAttribute("data-index"));
      bodyTag.style.cursor = `url('${mediumCursors[number]}'), auto`;
    });
  });
};

number = chooseSticker();

//when user clicks on document place selected sticker in position of the cursor

const addSticker = (x, y) => {
  //<img src="sticker.png" />
  const img = document.createElement("img");
  if (stickers[number] === undefined) {
    img.setAttribute("src", stickers[0]);
  } else {
    img.setAttribute("src", stickers[number]);
  }
  stickersTag.appendChild(img);

  //remove half the window width
  //so stickers are centered
  img.style.left = x - window.innerWidth / 2 + "px";
  img.style.top = y + "px";
};

document.addEventListener("click", (event) => {
  //play sound when sticker is placed
  snd.play(Snd.SOUNDS.TAP, {volume:0.2});
  addSticker(event.pageX, event.pageY);
});

//✨✨✨ Sticker Tray Dropdown✨✨✨
const trayContainer = document.querySelector(".tray-container");
const brushTrayTag = document.querySelector(".brush-tray");

trayContainer.addEventListener("mouseover", () => {
  brushTrayTag.style.bottom = "-3px"
  brushTrayTag.style.opacity = "1"
  brushTrayTag.style.visibility = "visible"
})

trayContainer.addEventListener("mouseout", () => {
  brushTrayTag.style.bottom = "43px"
  brushTrayTag.style.opacity = "0"
  brushTrayTag.style.visibility = "hidden"
})
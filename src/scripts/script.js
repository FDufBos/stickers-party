import Snd from "snd-lib";
import {} from "./headerAnimation.js"
import {bodyTag} from "./parallax";
import { snd } from "./uiSound";

//✨✨✨ Stickers, Sticker Selector, Brush Selector ✨✨✨
const stickersTag = document.querySelector("div.stickers");
const stickerCursorTag = document.querySelectorAll("div.stickers img");
const stickerSelectorTag = document.querySelectorAll(".sticker-tray img");
const trayContainer = document.querySelector(".tray-container");
const brushTrayTag = document.querySelector(".brush-tray");

const stickers = [
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
const mediumCursors = [
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


let number = 0;

//sticker selector
const chooseSticker = () => {
  stickerSelectorTag.forEach((stickerSelector) => {
    stickerSelector.addEventListener("click", () => {
      number = parseInt(stickerSelector.getAttribute("data-index"));
      //set custom cursors (the 24 sets position of cursor)
      bodyTag.style.cursor = `url('${mediumCursors[number]}') 24 24, auto`;
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

  //remove half the window width so stickers are centered
  img.style.left = (x - window.innerWidth / 2) + "px";
  img.style.top = y + "px";
};

//click event that runs addSticker
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("tray") || event.target.classList.contains("selector") || event.target.classList.contains("no-click")){
    
  } else {
  //play sound when sticker is placed
  snd.play(Snd.SOUNDS.TAP, { volume: 0.2 });
  
  addSticker(event.pageX, event.pageY);
  console.log(stickerCursorTag);
  }
  
});

//✨✨✨ Sticker Tray Dropdown Effect✨✨✨

function showTray() {
  bodyTag.style.cursor = "cursor"
  brushTrayTag.style.bottom = "-3px";
  brushTrayTag.style.opacity = "1";
  brushTrayTag.style.visibility = "visible";
}

function hideTray() {
  brushTrayTag.style.bottom = "43px";
  brushTrayTag.style.opacity = "0";
  brushTrayTag.style.visibility = "hidden";
}

trayContainer.addEventListener("mouseover", () => {
  showTray()
});

trayContainer.addEventListener("mouseout", () => {
  hideTray()
});



//✨✨✨ Change brush size✨✨✨
//switch between small, medium, and large stickers and
//when you click on small, medium, and large selectors
//in the brush tray

// const brushSizes = 
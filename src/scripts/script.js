//✨✨✨UI Sound✨✨✨
import Snd from 'snd-lib';
import { stickerSelectorTag, number, bodyTag, mediumCursors, stickers, stickersTag } from './parallax';
import { snd } from './uiSound';

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
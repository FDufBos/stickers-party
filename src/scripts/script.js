//✨✨✨UI Sound✨✨✨
import Snd from 'snd-lib';

const snd = new Snd();

// Get all anchor elements.
const images = document.getElementsByTagName('img');

// Event handler for click
const onClick = (e) => {
	
}

// Load audio file
snd.load(Snd.KITS.SND01).then(() => {
	// Listen click event of all anchor elements.
	for (let i=0; i<images.length; i++) {
		images[i].addEventListener('click', onClick)
	}
})



//✨✨✨header animation✨✨✨

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

//✨✨✨Parallax & Background Color✨✨✨
const sections = document.querySelectorAll("section");
const bodyTag = document.querySelector("body");

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

//✨✨✨ Stickers ✨✨✨

const stickersTag = document.querySelector("div.stickers");
const stickerSelectorTag = document.querySelectorAll("#sticker-tray img");

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
]
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
]
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
]

// bodyTag.style.cursor = `url('${stickers[0]}'), auto`;
//select sticker from #sticker-tray

let number = 0;

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
//play sound when sticker is placed

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
  snd.play(Snd.SOUNDS.TAP, {volume:0.2});
  addSticker(event.pageX, event.pageY);
});

//✨✨✨ Sticker Tray ✨✨✨
const trayContainer = document.querySelector(".tray-container");
const brushTrayTag = document.querySelector(".brush-tray");

trayContainer.addEventListener("mouseover", () => {
  brushTrayTag.style.bottom = "0px"
  brushTrayTag.style.opacity = "1"
  brushTrayTag.style.visibility = "visible"
})

trayContainer.addEventListener("mouseout", () => {
  brushTrayTag.style.bottom = "43px"
  brushTrayTag.style.opacity = "0"
  brushTrayTag.style.visibility = "hidden"
})
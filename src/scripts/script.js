import {} from "./headerAnimation.js";
import {} from "./stickers.js";
import {} from "./uploadImage.js"


const link = document.querySelector("link[rel~='icon']");
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}
link.href = '"url:../assets/img/sparkle.ico';


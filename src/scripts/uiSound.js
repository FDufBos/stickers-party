import Snd from 'snd-lib';

export const snd = new Snd();
// Get all anchor elements.
const images = document.getElementsByTagName('img');
// Event handler for click
const onClick = (e) => {
};
// Load audio file
snd.load(Snd.KITS.SND01).then(() => {
  // Listen click event of all anchor elements.
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', onClick);
  }
});

const userUploadDivTag = document.querySelector("#user-uploaded-images");
const uploadTitleTag = document.querySelector("#upload-button h2");
//✨✨✨✨Add your own image✨✨✨✨
const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    const newImage = document.createElement("img");
    newImage.setAttribute("src", uploaded_image);
    newImage.setAttribute("class", "uploaded-image");
    userUploadDivTag.append(newImage);
    uploadTitleTag.innerHTML = "Upload another!";
    // document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

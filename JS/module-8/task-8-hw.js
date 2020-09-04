import gallery from "./gallery-items.js";

// добавляю массив картинок в галерею

document.addEventListener("DOMContentLoaded", () => {
  let galleryRef = document.querySelector(".gallery");
  const galleryHtml = gallery.map((img) => {
    return (img = `<li class="gallery__item">
    <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"/>
    </a>
    </li>`);
  });
  galleryRef.insertAdjacentHTML("beforeEnd", galleryHtml.join(""));

  const imgRef = document.querySelector(".gallery__image");
  const lightboxRef = document.querySelector(".lightbox");
  const buttonRef = lightboxRef.querySelector(".lightbox__button");
  const lightboxImg = lightboxRef.querySelector(".lightbox__image");
  const linklImg = document.querySelector(".gallery__link");
  const lightboxOverlay = lightboxRef.querySelector(".lightbox__overlay");
  const openmodal = (event) => {
    if (event.target.classList.contains("gallery__image")) {
      event.preventDefault();
      console.log(event.target);
      lightboxRef.classList.add("is-open");
      lightboxOverlay.classList.add("is-open");
      lightboxImg.src = event.target.dataset.source;
      lightboxOverlay.addEventListener("keypress", function (event) {
        if (event.keyCode === 27) {
          lightboxOverlay.classList.remove("is-open");
        }
      });
    }
  };

  const closemodal = (event) => {
    lightboxRef.classList.remove("is-open");
    lightboxOverlay.classList.remove("is-open");
    lightboxImg.src = "";
    lightboxOverlay.removeEventListener("keypress", event);
  };

  galleryRef.addEventListener("click", openmodal);
  buttonRef.addEventListener("click", closemodal);
  lightboxOverlay.addEventListener("click", closemodal);
});



// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line


const galleryBox = document.querySelector(".gallery");
const galleryMarkup = createGalleryItem(galleryItems);

galleryBox.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItem (items){
 return items.map((item) => {
  const {preview, original, description} = item;
   return `
   <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
   </a>
  </div>`;
 }).join("");
}



galleryBox.addEventListener("click", onImageClick);

function onImageClick (event){
    event.preventDefault();    
    if(!event.target.classList.contains("gallery__image")){
        return;        
    }            
    const originImage = event.target.getAttribute("data-source");   
    const instance = basicLightbox.create(`<img src="${originImage}">`)
    instance.show()
  
        const closeModal = (event) => {
          if (event.key === "Escape") {
            instance.close()           
          }
        };

        document.addEventListener("keydown", closeModal)
        document.addEventListener("keyup", () => {
           document.removeEventListener("keydown", closeModal)
        });      
}


console.log(galleryItems);

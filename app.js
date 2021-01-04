/**
 * 
 * Objective: When user clicks an image open up that image
 * 
 * Steps:
 *    1. retrieve elements to be used: .img-container img, .modal, .full-img
 *    2. on click of an image find out which alt value the image has
 *       because imgsContainer was retireved via: querySelectorAll which is an array
 *       hence we have to loop through the array and then attach an event listener to each one
 *   3. open modal
 *   4. display image inside the modal of .image-container img, which was clicked on by the user - first image is alt=1 and etc.
 *      a. get the attribute of alt for the clicked img 
 *      b. plug in the alt value from the clicked img into the img clicked, pass it it as a .src value, keeping all img dirctories in place and order
 *   5. close the open image and modal when you click on the .full-img or the modal  
 */

const imgsContainer = document.querySelectorAll(".img-container img"),
      modal         = document.querySelector(".modal"),
      fullImage     = document.querySelector(".full-img");
      
let modalOpen = false;    

function openModal(e){
   if (!modalOpen) {
      const imgAttr = e.getAttribute("alt");
      fullImage.src = "img/full/" + imgAttr + ".jpg";
      fullImage.classList.add('open');
      modal.classList.add("open");
      modalOpen = true;
   }
};

function closeModal(){
   modal.classList.remove("open");
   modalOpen = false;
}

 imgsContainer.forEach(e => {
    e.addEventListener("click", ()=> {
      openModal(e);
    });
 });

 modal.addEventListener("click", ()=> {
   closeModal();
 })

 window.addEventListener("keydown", (e) => {
    if(e.key === 'Escape'){
       closeModal();
    }
 });




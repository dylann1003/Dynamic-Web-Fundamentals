// toggles menu button
const menuButton = document.getElementById("menu");

function toggleMenu() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

// handles the window resizing

function handleResize() {
    const menu = document.getElementById("menu");
    const navBar = document.getElementById('navigation')

    if (window.innerWidth > 1000) {
      navBar.classList.remove("hide");
    } else {
      navBar.classList.add("hide");
    }
  }
  
  handleResize();
  window.addEventListener("resize", handleResize);


// add bigger image viewer
const gallerySection = document.querySelector('.gallery');
gallerySection.addEventListener('click', viewHandler);

// add viewer
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

  function viewHandler(event) {
	const clickedElement =  event.target

	// get the src attribute from that element and 'split' it on the "-"
    const src = clickedElement.getAttribute('src');
    const srcPart = src.split('-');

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newImage = srcPart[0] + '-full.jpeg'

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImage, clickedElement.alt));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer)

}

// close viewer
function closeViewer() {
    const viewer = document.querySelector('.viewer');
    if (viewer) {
        viewer.remove();
    }
}
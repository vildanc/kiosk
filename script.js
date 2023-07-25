
;const boxes = document.querySelectorAll('.box');
const backBtn = document.querySelector('.back-btn');
const nextBtn = document.querySelector('.next-btn');
let currentBoxIndex = 0;

function showBox(index) {
    boxes.forEach((box, i) => {
        if (i === index) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
}

function showNextBox() {
    currentBoxIndex++;
    if (currentBoxIndex >= boxes.length) {
        currentBoxIndex = 0;
    }
    showBox(currentBoxIndex);
}

function showPreviousBox() {
    currentBoxIndex--;
    if (currentBoxIndex < 0) {
        currentBoxIndex = boxes.length - 1;
    }
    showBox(currentBoxIndex);
}

backBtn.addEventListener('click', showPreviousBox);
nextBtn.addEventListener('click', showNextBox);

showBox(currentBoxIndex);


/* sertifikalar */
// script.js
// Function to enlarge the clicked image
function enlargeImage(src) {
  const enlargedImageContainer = document.querySelector('.enlarged-image-container');
  const enlargedImage = document.getElementById('enlarged-image');
  const overlay = document.querySelector('.overlay');

  // Show the enlarged image
  enlargedImage.src = src;
  enlargedImageContainer.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling when the image is enlarged
}

// Function to close the enlarged image
function closeEnlarged() {
  const enlargedImageContainer = document.querySelector('.enlarged-image-container');
  const overlay = document.querySelector('.overlay');

  // Hide the enlarged image
  enlargedImageContainer.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto'; // Restore scrolling when the image is closed
}

// Attach the event handlers for hover effect on images
const images = document.querySelectorAll('.images img');
images.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.1)';
  });
  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
  image.addEventListener('click', () => {
    enlargeImage(image.src);
  });
});

// Event listener for the overlay to close the enlarged image when the background is clicked
const overlay = document.querySelector('.overlay');
overlay.addEventListener('click', closeEnlarged);

// Event listener for the container to close the enlarged image when the main content is clicked
const container = document.querySelector('.container');
container.addEventListener('click', closeEnlarged);

// Event listener for the document to close the enlarged image when clicking outside the image container
document.addEventListener('click', (event) => {
  const enlargedImageContainer = document.querySelector('.enlarged-image-container');
  if (!enlargedImageContainer.contains(event.target)) {
    closeEnlarged();
  }
});

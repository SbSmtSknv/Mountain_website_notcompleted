const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let slideIndex = 2;

function nextSlide() {
    slideIndex = (slideIndex + 1) % slider.childElementCount;
    updateSliderPosition();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slider.childElementCount) % slider.childElementCount;
    updateSliderPosition();
}

function updateSliderPosition() {
    const offset = -slideIndex * slider.clientWidth;
    slider.style.transform = `translateX(${offset * 0.09}px)`;
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

updateSliderPosition();






const slideBot = document.querySelector('.slide');
const prevBtn = document.querySelector('.button-1');
const nextBtn = document.querySelector('.button-2');
let sliderIndex = 0;

function nextSlider() {
    sliderIndex = (sliderIndex + 1) % slideBot.childElementCount;
    updateSlidePosition();
}

function prevSlider() {
    sliderIndex = (sliderIndex - 1 + slideBot.childElementCount) % slideBot.childElementCount;
    updateSlidePosition();
}

function updateSlidePosition() {
    const offSet = -sliderIndex * slideBot.clientWidth;
    slideBot.style.transform = `translateX(${offSet * 0.15}px)`;
}

nextBtn.addEventListener('click', nextSlider);
prevBtn.addEventListener('click', prevSlider);

updateSlidePosition();




document.addEventListener("DOMContentLoaded", function() {
    const consentCheckbox = document.getElementById("consentCheckbox");
    const submitButton = document.getElementById("submitButton");
    const dataForm = document.getElementById("dataForm");
    const message = document.getElementById("message");
  
    submitButton.addEventListener("click", function() {
      if (consentCheckbox.checked) {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        
        // Simulate sending data to the server
        // In a real scenario, you would use AJAX or fetch to send data to a server
        // For this example, we'll just display a message
        message.textContent = `Data sent: Name - ${name}, Email - ${email}`;
      } else {
        message.textContent = "Please give your consent before submitting.";
      }
      
    });
  });
  
 
  
  const openModalButton = document.getElementById('openModalButton');
  const modalOverlay = document.getElementById('modalOverlay');
  const closeModal = document.getElementById('closeModal');
  
  // Open modal when the button is clicked
  openModalButton.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
  });
  
  // Close modal when close button is clicked
  closeModal.addEventListener('click', () => {
    modalOverlay.style.display = 'none';
  });
  
  // Close modal when clicking outside the modal
  window.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.style.display = 'none';
    }
  });

  
  
  
  
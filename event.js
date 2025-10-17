// Book Now Button
function bookNow() {
  alert("✅ Thank you for booking with EventX! We’ll contact you shortly.");
}

// Smooth Scroll and Active Navbar Link
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 80;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Navbar shadow on scroll
  const navbar = document.querySelector('.navbar');
  if(window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Smooth scroll
navLinks.forEach(link => {
  link.addEventListener('click', function(e){
    if(this.hash !== ""){
      e.preventDefault();
      const hash = this.hash;
      document.querySelector(hash).scrollIntoView({behavior:"smooth"});
    }
  });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  const formMessage = document.getElementById('formMessage');
  // Simple validation
  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  if(name && email && message){
    formMessage.style.color = 'green';
    formMessage.textContent = "📩 Your message has been sent successfully!";
    this.reset();
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = "⚠️ Please fill in all fields!";
  }
});

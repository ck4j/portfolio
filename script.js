// DOM Elements
const navbar = document.querySelector('.navbar');
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const backToTop = document.getElementById('backToTop');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const skillBars = document.querySelectorAll('.progress-bar');
const sections = document.querySelectorAll('section');
const contactForm = document.getElementById('contactForm');

// Mobile Menu Toggle
mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');

    if (mobileMenu.classList.contains('active')) {
        mobileMenu.querySelector('.bar:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 6px)';
        mobileMenu.querySelector('.bar:nth-child(2)').style.opacity = '0';
        mobileMenu.querySelector('.bar:nth-child(3)').style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        mobileMenu.querySelectorAll('.bar').forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }
});

// Close mobile menu when clicking on a nav link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
        mobileMenu.querySelectorAll('.bar').forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to top button
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }

    // Highlight active nav link based on scroll position
    updateActiveNavLink();

    // Animate skill bars when in viewport
    animateSkillBars();

    // Animate sections when in viewport
    animateSections();
});

// Update active nav link on scroll
function updateActiveNavLink() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Project filtering
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        // Filter projects
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Animate skill bars when in viewport
function animateSkillBars() {
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        const barPosition = bar.getBoundingClientRect().top;
        
        if (barPosition < window.innerHeight - 100) {
            bar.style.width = `${progress}%`;
        }
    });
}

// Animate sections when in viewport
function animateSections() {
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        
        if (sectionPosition < window.innerHeight - 100) {
            section.classList.add('fade-in');
        }
    });
}

// Form submission handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Form validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !subject || !message) {
            showFormMessage('Please fill in all fields', 'error');
            return;
        }
        
        // Simulate form submission (replace with actual submission logic)
        const formBtn = document.querySelector('.form-btn');
        const originalText = formBtn.textContent;
        
        formBtn.disabled = true;
        formBtn.textContent = 'Sending...';
        
        setTimeout(() => {
            // Simulate successful submission
            showFormMessage('Message sent successfully!', 'success');
            contactForm.reset();
            formBtn.disabled = false;
            formBtn.textContent = originalText;
        }, 1500);
    });
}

// Show form submission message
function showFormMessage(message, type) {
    // Remove existing message if any
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message element
    const messageElement = document.createElement('div');
    messageElement.className = `form-message ${type}`;
    messageElement.textContent = message;
    messageElement.style.padding = '10px';
    messageElement.style.marginTop = '10px';
    messageElement.style.borderRadius = '5px';
    messageElement.style.textAlign = 'center';
    
    if (type === 'success') {
        messageElement.style.backgroundColor = '#d1fae5';
        messageElement.style.color = '#065f46';
    } else {
        messageElement.style.backgroundColor = '#fee2e2';
        messageElement.style.color = '#b91c1c';
    }
    
    // Add message to the form
    contactForm.appendChild(messageElement);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        messageElement.remove();
    }, 3000);
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active nav link
    updateActiveNavLink();
    
    // Initialize skill bars animation
    animateSkillBars();
    
    // Initialize section animations
    animateSections();
    
    // Add load animations to sections
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('slide-up');
        }, index * 200);
    });
    
    // Initial project filtering (show all)
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Typing effect for hero section
const typeElement = document.querySelector('.highlight');
if (typeElement) {
    const text = typeElement.textContent;
    typeElement.textContent = '';
    
    let charIndex = 0;
    const typeInterval = setInterval(() => {
        if (charIndex < text.length) {
            typeElement.textContent += text.charAt(charIndex);
            charIndex++;
        } else {
            clearInterval(typeInterval);
        }
    }, 100);
}

// For Formspree form handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Don't prevent default as we want the form to submit to Formspree
        const formBtn = document.querySelector('.form-btn');
        const originalText = formBtn.textContent;
        
        formBtn.disabled = true;
        formBtn.textContent = 'Sending...';
        
        // We'll show a success message when the page returns from Formspree
        // So we don't need additional handling here
    });
}
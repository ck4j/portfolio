/* Base Styles */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
    --primary-color: #2563eb;
    --secondary-color: #3b82f6;
    --dark-color: #1e293b;
    --light-color: #f8fafc;
    --text-color: #334155;
    --bg-color: #ffffff;
    --gray-color: #94a3b8;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 70px;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    line-height: 1.3;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
}

.container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
    padding: 0 15px;
}

section {
    padding: 100px 0;
}

.section-header {
    text-align: center;
    margin-bottom: 60px;
}

.section-header h2 {
    font-size: 36px;
    margin-bottom: 15px;
    color: var(--dark-color);
    position: relative;
    display: inline-block;
}

.underline {
    width: 80px;
    height: 4px;
    background: var(--primary-color);
    margin: 0 auto;
    position: relative;
}

.underline::before {
    content: '';
    position: absolute;
    width: 40px;
    height: 4px;
    background: var(--secondary-color);
    top: 0;
    left: 0;
    animation: slide 2s infinite;
}

@keyframes slide {
    0% { left: 0; }
    50% { left: 40px; }
    100% { left: 0; }
}

.btn {
    display: inline-block;
    padding: 12px 28px;
    border-radius: 30px;
    font-weight: 500;
    font-size: 16px;
    transition: var(--transition);
    text-align: center;
    cursor: pointer;
    border: none;
}

.primary-btn {
    background: var(--primary-color);
    color: var(--light-color);
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.2);
}

.primary-btn:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.3);
}

.secondary-btn {
    background: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.secondary-btn:hover {
    background: var(--primary-color);
    color: var(--light-color);
    transform: translateY(-3px);
}

/* Navbar */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: var(--bg-color);
    z-index: 1000;
    padding: 15px 0;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.navbar.scrolled {
    padding: 10px 0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
}

.logo {
    font-size: 24px;
    font-weight: 700;
    color: var(--primary-color);
}

.nav-menu {
    display: flex;
    align-items: center;
}

.nav-menu li {
    margin-left: 30px;
}

.nav-link {
    font-size: 16px;
    font-weight: 500;
    color: var(--dark-color);
    transition: var(--transition);
    padding: 5px 0;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-color);
    transition: var(--transition);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary-color);
}

.menu-toggle {
    display: none;
    cursor: pointer;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--dark-color);
    transition: var(--transition);
}

/* Hero Section */
.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(219, 234, 254, 0.4) 100%);
    position: relative;
    overflow: hidden;
    text-align: center;
    padding-top: 70px;
}

.hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, rgba(255, 255, 255, 0) 70%);
    animation: rotate 30s linear infinite;
    z-index: 1;
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    padding: 0 20px;
}

.hero h1 {
    font-size: 56px;
    margin-bottom: 20px;
    color: var(--dark-color);
}

.highlight {
    color: var(--primary-color);
    position: relative;
    display: inline-block;
}

.highlight::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: rgba(37, 99, 235, 0.2);
    z-index: -1;
}

.subheading {
    font-size: 24px;
    margin-bottom: 40px;
    color: var(--gray-color);
}

.cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 40px;
}

.scroll-down {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    animation: bounce 2s infinite;
}

.scroll-down i {
    font-size: 24px;
    color: var(--primary-color);
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
    40% { transform: translateY(-20px) translateX(-50%); }
    60% { transform: translateY(-10px) translateX(-50%); }
}

/* About Section */
.about-content {
    display: flex;
    align-items: center;
    gap: 50px;
}

.about-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.image-container {
    position: relative;
    width: 350px;
    height: 350px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: var(--shadow);
}

.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-container::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 50%;
    border: 2px solid var(--primary-color);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.05); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
}

.about-text {
    flex: 1;
}

.about-text p {
    margin-bottom: 20px;
    font-size: 17px;
}

.personal-info {
    margin: 30px 0;
}

.info-item {
    margin-bottom: 15px;
    display: flex;
}

.info-label {
    font-weight: 600;
    width: 100px;
}

.info-value {
    color: var(--primary-color);
}

/* Skills Section */
.skills {
    background-color: var(--light-color);
}

.skills-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.skill-category h3 {
    margin-bottom: 20px;
    font-size: 24px;
    color: var(--dark-color);
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
}

.skill-item {
    background: var(--bg-color);
    border-radius: 10px;
    padding: 20px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.skill-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.skill-icon {
    font-size: 40px;
    margin-bottom: 15px;
    color: var(--primary-color);
}

.skill-item p {
    font-weight: 500;
    margin-bottom: 10px;
}

.skill-progress {
    width: 100%;
    height: 8px;
    background: #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
}

.progress-bar {
    height: 100%;
    background: var(--primary-color);
    border-radius: 4px;
    width: 0;
    transition: width 1.5s ease-in-out;
}

/* Projects Section */
.projects-filter {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    flex-wrap: wrap;
    gap: 10px;
}

.filter-btn {
    padding: 10px 20px;
    border: none;
    border-radius: 30px;
    background: var(--light-color);
    color: var(--text-color);
    cursor: pointer;
    transition: var(--transition);
    font-size: 16px;
    font-weight: 500;
}

.filter-btn:hover, .filter-btn.active {
    background: var(--primary-color);
    color: var(--light-color);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 30px;
}

.project-card {
    background: var(--bg-color);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.project-img {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.project-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.project-card:hover .project-img img {
    transform: scale(1.1);
}

.project-info {
    padding: 20px;
}

.project-info h3 {
    margin-bottom: 10px;
    font-size: 20px;
}

.project-info p {
    margin-bottom: 15px;
    color: var(--gray-color);
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 15px;
}

.tag {
    padding: 5px 10px;
    background: #e2e8f0;
    color: var(--text-color);
    border-radius: 4px;
    font-size: 14px;
}

.project-links {
    display: flex;
    gap: 15px;
}

.project-link {
    color: var(--primary-color);
    font-size: 14px;
    font-weight: 500;
    transition: var(--transition);
}

.project-link:hover {
    color: var(--secondary-color);
}

.project-link i {
    margin-right: 5px;
}

/* Contact Section */
.contact {
    background: linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(219, 234, 254, 0.4) 100%);
}

.contact-content {
    display: flex;
    gap: 50px;
}

.contact-info {
    flex: 1;
}

.contact-item {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
}

.contact-icon {
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: var(--light-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-right: 20px;
    box-shadow: 0 4px 10px rgba(37, 99, 235, 0.2);
}

.contact-details h3 {
    font-size: 18px;
    margin-bottom: 5px;
}

.contact-details p {
    color: var(--gray-color);
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 30px;
}

.social-link {
    width: 40px;
    height: 40px;
    background: var(--light-color);
    color: var(--primary-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: var(--transition);
}

.social-link:hover {
    background: var(--primary-color);
    color: var(--light-color);
    transform: translateY(-3px);
}

.contact-form {
    flex: 1;
    background: var(--bg-color);
    border-radius: 10px;
    padding: 30px;
    box-shadow: var(--shadow);
}

.form-group {
    margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 15px 20px;
    border: 1px solid #e2e8f0;
    border-radius: 5px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.form-group textarea {
    height: 150px;
    resize: none;
}

.form-btn {
    width: 100%;
    padding: 15px;
    font-size: 18px;
}

/* Footer */
.footer {
    padding: 30px 0;
    background: var(--dark-color);
    color: var(--light-color);
    text-align: center;
}

/* Back to Top Button */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: var(--primary-color);
    color: var(--light-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 999;
}

.back-to-top.active {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background: var(--secondary-color);
    transform: translateY(-3px);
}

/* Animation Classes */
.fade-in {
    animation: fadeIn 1s ease forwards;
}

.slide-up {
    animation: slideUp 0.8s ease forwards;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
}

/* Responsive Design */
@media screen and (max-width: 992px) {
    .hero h1 {
        font-size: 42px;
    }
    
    .about-content,
    .contact-content {
        flex-direction: column;
    }
    
    .image-container {
        width: 300px;
        height: 300px;
    }
}

@media screen and (max-width: 768px) {
    .section-header h2 {
        font-size: 30px;
    }
    
    .menu-toggle {
        display: block;
    }
    
    .nav-menu {
        position: fixed;
        top: 70px;
        left: -100%;
        width: 100%;
        background: var(--bg-color);
        flex-direction: column;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        transition: 0.4s;
        padding: 10px 0;
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-menu li {
        margin: 10px 0;
    }
    
    .hero h1 {
        font-size: 36px;
    }
    
    .cta-buttons {
        flex-direction: column;
        gap: 15px;
    }
    
    .skills-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }
}

@media screen and (max-width: 576px) {
    section {
        padding: 70px 0;
    }
    
    .hero h1 {
        font-size: 28px;
    }
    
    .subheading {
        font-size: 18px;
    }
    
    .projects-filter {
        flex-direction: column;
        align-items: center;
    }
}

/* Add these styles to styles.css */

/* Chatbot Toggle Button */
.chatbot-toggle {
    position: fixed;
    bottom: 30px;
    right: 90px; /* Changed from left: 30px to right: 90px to avoid overlap */
    display: flex;
    align-items: center;
    background: var(--primary-color);
    color: white;
    border-radius: 50px;
    padding: 10px 20px 10px 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
    z-index: 998;
    transition: var(--transition);
}

.chatbot-toggle:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
}

.toggle-bubble {
    width: 40px;
    height: 40px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}

.toggle-bubble i {
    color: var(--primary-color);
    font-size: 20px;
}

.toggle-text {
    font-weight: 500;
    font-size: 14px;
}

/* Chatbot Container */
.chatbot-container {
    position: fixed;
    bottom: 100px;
    right: 30px; /* Changed from left: 30px to right: 30px */
    width: 350px;
    height: 500px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 999;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px);
    transition: var(--transition);
}

.chatbot-container.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Chatbot Header */
.chatbot-header {
    padding: 15px;
    background: var(--primary-color);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chatbot-header h3 {
    margin: 0;
    font-size: 18px;
}

.close-btn {
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: var(--transition);
}

.close-btn:hover {
    opacity: 0.8;
}

/* Chatbot Messages Area */
.chatbot-messages {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

.message {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    max-width: 80%;
}

.bot-message {
    align-self: flex-start;
}

.user-message {
    align-self: flex-end;
}

.message-content {
    padding: 12px 15px;
    border-radius: 18px;
    font-size: 14px;
    line-height: 1.4;
}

.bot-message .message-content {
    background: #f0f4f8;
    color: var(--text-color);
    border-bottom-left-radius: 5px;
}

.user-message .message-content {
    background: var(--primary-color);
    color: white;
    border-bottom-right-radius: 5px;
}

/* Chatbot Input Area */
.chatbot-input {
    padding: 15px;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
}

.chatbot-input input {
    flex: 1;
    padding: 12px 15px;
    border: 1px solid #e2e8f0;
    border-radius: 30px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    transition: var(--transition);
}

.chatbot-input input:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
}

.chatbot-input button {
    background: var(--primary-color);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
}

.chatbot-input button:hover {
    background: var(--secondary-color);
}

/* Typing Indicator Animation */
.typing-indicator {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background: #f0f4f8;
    border-radius: 18px;
    border-bottom-left-radius: 5px;
    width: fit-content;
}

.typing-indicator span {
    width: 8px;
    height: 8px;
    background: var(--gray-color);
    border-radius: 50%;
    margin: 0 2px;
    opacity: 0.6;
    animation: typing 1s infinite;
}

.typing-indicator span:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typing {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

/* Responsive Styles for Chatbot */
@media screen and (max-width: 576px) {
    .chatbot-container {
        width: calc(100% - 30px);
        right: 15px; /* Changed from left: 15px to right: 15px */
        bottom: 90px;
    }
    
    .chatbot-toggle {
        right: 15px; /* Changed from left: 15px to right: 15px */
        padding: 8px 15px 8px 8px;
    }
    
    .toggle-bubble {
        width: 30px;
        height: 30px;
    }
    
    .toggle-text {
        font-size: 12px;
    }
}

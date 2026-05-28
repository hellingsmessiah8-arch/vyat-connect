console.log("VYAT CONNECT WEBSITE LOADED");

// Hamburger Menu Logic
(function initHamburger() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.querySelector(".navbar nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
})();

// Inject WhatsApp Floating Button globally
(function injectWhatsApp() {
  if (document.querySelector('.whatsapp-float')) return; // Prevent duplicate injection
  const whatsappHtml = `
    <a href="https://wa.me/265994437293" class="whatsapp-float" target="_blank" rel="noopener noreferrer">
      <svg width="35" height="35" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.01 2.01c-5.5 0-9.98 4.48-9.98 9.98 0 1.95.56 3.77 1.52 5.34l-1.53 4.54 4.67-1.48c1.54.91 3.32 1.44 5.23 1.44 5.5 0 9.98-4.48 9.98-9.98S17.51 2.01 12.01 2.01zm0 18.25c-1.63 0-3.15-.43-4.48-1.17l-.32-.18-3.08.97 1.01-2.98-.2-.31A8.25 8.25 0 0 1 3.76 12c0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25z"/>
        <path d="M16.5 14.18c-.24-.12-1.45-.71-1.67-.8-.22-.08-.38-.12-.55.12-.16.24-.63.8-.77.96-.14.16-.28.18-.52.06-.24-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.75-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.34.99 2.5c.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28z"/>
      </svg>
    </a>
  `;
  document.body.insertAdjacentHTML('beforeend', whatsappHtml);
})();
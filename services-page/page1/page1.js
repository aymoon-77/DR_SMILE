// nav bar background

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

//   accordian

  // Toggle accordions
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.symbol').textContent = '+';
      });
      if (!isOpen) {
        item.classList.add('open');
        item.querySelector('.symbol').textContent = '—';
      }
    });
  });

  // Show more button
  document.getElementById('showMoreBtn').addEventListener('click', () => {
    const hiddenSection = document.querySelector('.hidden-questions');
    hiddenSection.style.display = 'block';
    document.getElementById('showMoreBtn').style.display = 'none';
  });



  // return button 
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
    let scrollPosition = document.documentElement.scrollTop;
    let pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (scrollPosition > pageHeight / 4) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};


document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".contianerr").forEach((container) => {
        gsap.to(container, {
            y: 0, 
            opacity: 1, 
            duration: 0.2, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: container,
                start: "top 130%", 
                end: "top 60%", 
                toggleActions: "play none none none",
                // markers: true 
            }
        });
    });
});
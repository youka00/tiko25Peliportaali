document.addEventListener("DOMContentLoaded", () => {
    const btn1 = document.getElementById("btn1");
    const btn2 = document.getElementById("btn2");

    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");

    btn1.addEventListener("click", () => {
        const isOpen = section1.style.display === "flex";
        section1.style.display = isOpen ? "none" : "flex";
        section2.style.display = "none";
    });

    btn2.addEventListener("click", () => {
        const isOpen = section2.style.display === "flex";
        section2.style.display = isOpen ? "none" : "flex";
        section1.style.display = "none";
    });

    //CONFETTI ON PODIUM SCROLL
    function launchConfetti() {
        const colors = ['#a64dff', '#ff6fd8', '#ffe44d', '#4dffb4', '#4da6ff', '#ff4d4d'];
        for (let i = 0; i < 120; i++) {
            const piece = document.createElement('div');
            piece.style.cssText = `
                position: fixed;
                width: ${Math.random() * 10 + 6}px;
                height: ${Math.random() * 10 + 6}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
                left: ${Math.random() * 100}vw;
                top: -20px;
                opacity: 1;
                z-index: 9999;
                pointer-events: none;
                transform: rotate(${Math.random() * 360}deg);
            `;
            document.body.appendChild(piece);

            const duration = Math.random() * 2000 + 1500;
            const drift = (Math.random() - 0.5) * 200;

            piece.animate([
                { transform: `translateY(0) translateX(0) rotate(0deg)`, opacity: 1 },
                { transform: `translateY(110vh) translateX(${drift}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
            ], {
                duration,
                easing: 'ease-in',
                fill: 'forwards'
            }).onfinish = () => piece.remove();
        }
    }

    const podium = document.getElementById('podium');
    let confettiFired = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !confettiFired) {
                confettiFired = true;
                launchConfetti();
            }
        });
    }, { threshold: 0.3 });

    observer.observe(podium);
});
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
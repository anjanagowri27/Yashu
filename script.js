/* ==========================================
   OPEN MY HEART BUTTON
========================================== */

const openHeartBtn = document.getElementById("openHeartBtn");

openHeartBtn.addEventListener("click", () => {

    createBurst(
        window.innerWidth / 2,
        openHeartBtn.getBoundingClientRect().top + 50
    );

    document.getElementById("music").scrollIntoView({
        behavior: "smooth"
    });

});


/* ==========================================
   MUSIC PLAYER + VINYL
========================================== */

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");
const vinyl = document.getElementById("vinyl");

let isPlaying = false;

musicBtn.addEventListener("click", () => {

    if (!isPlaying) {

        bgMusic.play();

        vinyl.classList.add("spinning");

        musicBtn.textContent = "🎵 Music Playing";

        isPlaying = true;

    } else {

        bgMusic.pause();

        vinyl.classList.remove("spinning");

        musicBtn.textContent = "▶ Play";

        isPlaying = false;
    }

});


/* ==========================================
   SPARKLES ON CLICK
========================================== */

const sparkleContainer =
document.getElementById("sparkle-container");

document.addEventListener("click", (e) => {

    for (let i = 0; i < 10; i++) {

        const sparkle =
        document.createElement("span");

        sparkle.classList.add("sparkle");

        sparkle.style.left =
        e.pageX + "px";

        sparkle.style.top =
        e.pageY + "px";

        sparkle.style.animationDuration =
        (Math.random() * 1 + 1) + "s";

        sparkle.style.transform =
        `translate(
        ${Math.random() * 120 - 60}px,
        ${Math.random() * -150}px
        )`;

        sparkleContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }

});


/* ==========================================
   SPECIAL BURST
========================================== */

function createBurst(x, y) {

    for (let i = 0; i < 25; i++) {

        const sparkle =
        document.createElement("span");

        sparkle.classList.add("sparkle");

        sparkle.style.left = x + "px";
        sparkle.style.top = y + "px";

        sparkle.style.transform =
        `translate(
        ${Math.random() * 300 - 150}px,
        ${Math.random() * 300 - 150}px
        )`;

        sparkleContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1800);
    }

}



/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
document.querySelectorAll(
".journey-card, .memory-card, .thanks-card, .apology-box, .gallery-grid img, .final-section"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});




/* ==========================================
   OPTIONAL FLOATING AMBIENT SPARKLES
========================================== */

setInterval(() => {

    const sparkle =
    document.createElement("span");

    sparkle.classList.add("ambient-sparkle");

    sparkle.style.left =
    Math.random() * window.innerWidth + "px";

    sparkle.style.top =
    window.scrollY + window.innerHeight + "px";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 5000);

}, 1200);

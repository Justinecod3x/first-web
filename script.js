
/* Display the current year */
document.getElementById("year").textContent =
    new Date().getFullYear();


/* Create floating hearts */
function makeHeart(x, y) {
    const heart = document.createElement("span");

    const hearts = [
        "💗",
        "💕",
        "💖",
        "♡",
        "💘",
        "🌸"
    ];

    heart.className = "floating-heart";

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        (x + Math.random() * 70 - 35) + "px";

    heart.style.top =
        (y + Math.random() * 30 - 15) + "px";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1900);
}


/* Send You Hearts button */
document.getElementById("heartButton")
    .addEventListener("click", function (event) {

        const x = event.clientX || window.innerWidth / 2;
        const y = event.clientY || window.innerHeight / 2;

        for (let i = 0; i < 18; i++) {
            setTimeout(function () {
                makeHeart(x, y);
            }, i * 55);
        }
    });


/* Surprise message button */
document.getElementById("surpriseButton")
    .addEventListener("click", function () {

        const message = document.getElementById("message");

        message.classList.toggle("show");

        for (let i = 0; i < 12; i++) {
            setTimeout(function () {
                makeHeart(
                    window.innerWidth / 2,
                    window.innerHeight / 2
                );
            }, i * 70);
        }
    });
const imageUpload = document.getElementById("imageUpload");
const memoryGallery = document.getElementById("memoryGallery");

imageUpload.addEventListener("change", function () {
    const files = Array.from(this.files);

    files.forEach(function (file) {
        if (!file.type.startsWith("image/")) {
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {
            const img = document.createElement("img");

            img.src = event.target.result;
            img.alt = "Our beautiful memory";

            memoryGallery.appendChild(img);
        };

        reader.readAsDataURL(file);
    });

    this.value = "";
});
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


const testDesc = document.querySelector(".description");
const imageDesc = document.querySelector(".photo-descriptive");

const cofee = document.querySelector(".cofee");
const title = document.querySelector(".l-heading");

const tl = gsap.timeline({ defaults: { duration: 1 } });
tl.from(".anim1", { y: -50, opacity: 0, stagger: 0.4 })
    .from("aside", { backgroundPosition: "200px", opacity: 0 }, "-=1")
    .from(
        cofee,
        {
            x: 40,
            opacity: 0,
        },
        "-=0.2"
    );

document.querySelector(".btn").addEventListener("click", () => {
    tl.reversed() ? tl.play() : tl.reverse();
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        form.style.transform = "scale(1.1)";
        setTimeout(() => {
            form.style.transform = "scale(1)";
            alert("🎉 Form Submitted Successfully!");
        }, 300);
    });

    // Floating Orbs Interaction Effect
    document.addEventListener("mousemove", function (e) {
        document.querySelectorAll(".orb").forEach(orb => {
            let moveX = (e.clientX / window.innerWidth) * 50;
            let moveY = (e.clientY / window.innerHeight) * 50;
            orb.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
});

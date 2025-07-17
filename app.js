document.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    document.querySelectorAll(".parallax").forEach((el) => {
        const speed = el.getAttribute("data-speed");
        el.style.transform = `translate(
        ${x * speed * 20}px,
        ${y * speed * 20}px)`;
    });
});

const signinButton = document.getElementById("signinButton");
const signinPage = document.getElementById("signinPage");
const closeIcon = document.getElementById("closeIcon");

signinButton.addEventListener("click", () => {
    signinPage.classList.remove("closeSignin");
    signinPage.classList.add("openSignin");
});
closeIcon.addEventListener("click", () => {
    signinPage.classList.remove("openSignin");
    signinPage.classList.add("closeSignin");
});

const generativeIcons = document.querySelectorAll(
    ".generative-section .grid3 .info-icons div"
);

generativeIcons.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        const currentActive = document.querySelector(
            ".generative-section .grid3 .info-icons div.active"
        );
        if (currentActive !== el) {
            generativeIcons.forEach((icon) => icon.classList.remove("active"));
            el.classList.add("active");
        }
    });
});
const sidebar = document.querySelector(".sidebar");
const menueIcon = document.querySelector(".menu-icon");
const closeSidebar = document.querySelector(".sidebar .close-icon");

menueIcon.addEventListener("click", () => {
    sidebar.classList.remove("close-sidebar");
    sidebar.classList.add("open-sidebar");
});
closeSidebar.addEventListener("click", () => {
    sidebar.classList.remove("open-sidebar");
    sidebar.classList.add("close-sidebar");
});

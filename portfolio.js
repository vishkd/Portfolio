let button = document.getElementById("theme");
let container = document.getElementById("container");
let image=document.getElementById("sun");

button.addEventListener("click", () => {
    if (container.style.background === "white") {
        container.style.transition = "1.5s"
        container.style.background = " #0d1b2a";
        container.style.color = "beige";
        image.src="./sun_icon.jpg"
    }
    else {
        container.style.transition = "1.5s"
        container.style.background = "white";
        container.style.color = "black";
        image.src="./moon.jpg";
    }
});

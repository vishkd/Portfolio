// Ensure the element exists before attaching the event listener
let projects = document.getElementById("projects");

if (projects) {
    projects.addEventListener("click", (e) => {
        e.preventDefault(); // Optional: prevent default click behavior if needed

        // Scroll smoothly to the "projects" section
        projects.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
}

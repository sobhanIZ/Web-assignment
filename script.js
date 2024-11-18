document.addEventListener("DOMContentLoaded", function() {
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function(event) {
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            if (!name.value || !email.value) {
                alert("Please fill in all fields.");
                event.preventDefault();
            }
        });
    });
});
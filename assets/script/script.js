document.addEventListener("DOMContentLoaded", function () {
    const sliderElement = document.querySelector("#slider");
    const sizePassword = document.querySelector("#valor");
    const passwordElement = document.querySelector("#password");
    const containerPassword = document.querySelector("#container-password");
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const specialChars = "!@#$%&*"; // Lista de caracteres especiais

    let newPassword = "";

    // Display the initial value of the slider
    sizePassword.innerHTML = sliderElement.value;

    // Update the slider value as the user interacts
    sliderElement.addEventListener('input', function () {
        sizePassword.innerHTML = this.value;
    });

    // Function to generate the password
    function generatePassword() {
        let pass = "";
        const charsetLength = charset.length;

        // Generate the password based on the slider value
        for (let i = 0; i < sliderElement.value; i++) {
            // If we are past the 5th character, add special characters
            if (i >= 5) {
                pass += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
            } else {
                pass += charset.charAt(Math.floor(Math.random() * charsetLength));
            }
        }

        // Update the generated password in the HTML
        passwordElement.innerHTML = pass;

        // Save the generated password
        newPassword = pass;

        // Show the password container
        containerPassword.classList.remove("hide");
    }

    // Function to copy the generated password to clipboard
    function copyPassword() {
        if (newPassword && newPassword !== "65656") {
            // Copy the password to clipboard
            navigator.clipboard.writeText(newPassword)
                .then(() => {
                    alert("Password copied successfully!");
                })
                .catch((err) => {
                    console.error("Error copying the password:", err);
                    alert("Failed to copy the password.");
                });
        } else {
            alert("Please generate a password first.");
        }
    }

    // Adding event listeners
    const buttonElement = document.querySelector("#button");
    buttonElement.addEventListener('click', generatePassword);
    containerPassword.addEventListener('click', copyPassword);
});

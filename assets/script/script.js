document.addEventListener("DOMContentLoaded", function () {
    const sliderElement = document.querySelector("#slider");
    const sizePassword = document.querySelector("#valor");
    const passwordElement = document.querySelector("#password");
    const containerPassword = document.querySelector("#container-password");
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const specialChars = "!@#$%&*";
    let newPassword = "";
    sizePassword.innerHTML = sliderElement.value;
    sliderElement.addEventListener('input', function () {
        sizePassword.innerHTML = this.value;
    });
    function generatePassword() {
        let pass = "";
        const charsetLength = charset.length;
        for (let i = 0; i < sliderElement.value; i++) {
            if (i >= 5) {
                pass += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
            } else {
                pass += charset.charAt(Math.floor(Math.random() * charsetLength));
            }
        }
        passwordElement.innerHTML = pass;
        newPassword = pass;
        containerPassword.classList.remove("hide");
    }
    function copyPassword() {
        if (newPassword && newPassword !== "65656") {
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
    const buttonElement = document.querySelector("#button");
    buttonElement.addEventListener('click', generatePassword);
    containerPassword.addEventListener('click', copyPassword);
});

# Random Password Generator

Welcome to the **Random Password Generator** project! This is a simple and powerful tool designed to generate secure and unique passwords based on user input. It provides a custom range for password length and allows you to easily copy the generated password to your clipboard.

## 🚀 Features
- **Customizable Length**: Choose password lengths between 5 and 25 characters using a slider.
- **Random & Secure**: Generates strong passwords by combining uppercase, lowercase, numbers, and special characters.
- **Clipboard Copy**: Click on the generated password to copy it to your clipboard instantly.
- **Visually Appealing**: Simple yet sleek design, offering an engaging user experience.

## 🖥️ Tech Stack
- **HTML**: Markup language to structure the content of the page.
- **CSS**: Styling the page with modern UI elements to ensure a responsive and clean layout.
- **JavaScript**: Logic for password generation, handling user input, and clipboard copy functionality.

## 🎨 How It Works
1. **Set Length**: Use the slider to choose the length of the password.
2. **Generate Password**: Click the "Generate Password" button to generate a secure password.
3. **Copy Password**: Click on the generated password to copy it to your clipboard.

## ⚙️ Code Explanation
- **HTML**: The basic structure includes a slider for selecting password length, a button for generating the password, and a display area for showing the password.
- **CSS**: The style is minimalistic, ensuring the interface is user-friendly while maintaining a modern look.
- **JavaScript**: 
  - The `generatePassword` function is the core of the password generation logic. It randomly selects characters from a charset and combines them based on the user's input length.
  - The `copyPassword` function allows users to easily copy the password to the clipboard.

## 💡 Key Features:
- **Random Character Selection**: The password generator selects random characters from a pool of:
  - Lowercase letters (`a-z`)
  - Uppercase letters (`A-Z`)
  - Numbers (`0-9`)
  - Special characters (`!@#$%&*`)
- **Special Character Bonus**: From the 5th character onwards, special characters are added to enhance the strength of the generated password.

## 🌍 Contributing
Feel free to fork this repository and contribute by creating pull requests. Suggestions for improving the UI/UX or enhancing the security of the password generation are always welcome!

---

Made with ❤️ by [David William](https://www.linkedin.com/in/trydavid/) | [GitHub](https://github.com/trydaviqix)

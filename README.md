# 🔐 Custom Encryption / Decryption Web App

A lightweight, browser-based encryption and decryption tool built with pure **HTML**, **CSS**, and **JavaScript**. It uses a custom **keypad-style encoding algorithm** with **binary length verification** to secure text messages — no libraries, no dependencies, no server required.

---

## 📸 Overview

This web app lets users:
- Type a message and encrypt it using a secret numeric key
- Paste ciphertext and decrypt it back to the original message
- Copy the output with a single click
- Reset the form instantly

---

## 🚀 Features

- **Custom Encryption Algorithm** — Keypad-style encoding with binary length verification for message security
- **Numeric Key Input** — Users supply a secret number as the encryption/decryption key
- **Encrypt & Decrypt** — Dual-mode operation from a single interface
- **Copy Output** — One-click copy of the result to clipboard
- **Reset** — Clears all fields instantly
- **Status Feedback** — On-screen messages confirm actions (copied, error, etc.)
- **Zero Dependencies** — Runs entirely in the browser; no npm, no frameworks

---

## 🗂️ Project Structure

```
encryption-project/
├── index.html   # App layout and UI elements
├── style.css    # Styling and layout
└── script.js    # Encryption, decryption, and helper logic
```

---

## 🛠️ How to Run

**No installation needed.** Just open the file in any modern browser:

```bash
# Clone the repository
git clone https://github.com/koharjitendra/encryption-project.git

# Open in browser
cd encryption-project
open index.html   # macOS
# or double-click index.html on Windows/Linux
```

---

## 📖 How to Use

1. **Encrypt a message**
   - Type your message in the *Message / Ciphertext* field
   - Enter a secret numeric key in the *Key* field
   - Click **Encrypt** — the encoded output appears below

2. **Decrypt a message**
   - Paste the ciphertext into the *Message / Ciphertext* field
   - Enter the **same** numeric key used during encryption
   - Click **Decrypt** — the original message is restored

3. **Copy / Reset**
   - Click **Copy Output** to copy the result to your clipboard
   - Click **Reset** to clear all fields

> ⚠️ **Note:** You must use the exact same key for encryption and decryption. Using a different key will produce incorrect or garbled output.

---

## 🔒 Algorithm Overview

The encryption uses a **keypad-style encoding** approach:
- Each character in the input message is mapped through a positional encoding scheme influenced by the numeric key
- **Binary length verification** is applied to validate message integrity during decryption
- This is a **custom, educational algorithm** — it is not a standard cryptographic protocol (e.g., AES, RSA) and should not be used for securing sensitive real-world data

---

## 🧰 Tech Stack

| Technology | Role |
|------------|------|
| HTML5 | Structure and UI layout |
| CSS3 | Styling and responsive design |
| JavaScript (Vanilla) | Encryption logic and DOM interaction |

---

## 📌 Limitations

- The algorithm is custom-built for learning purposes and is **not cryptographically secure** for production use
- Key must be a number; text keys are not supported
- No persistent storage — all data is lost on page refresh

---

## 🤝 Contributing

Contributions and suggestions are welcome!

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source. Feel free to use, modify, and distribute it for educational purposes.

---

## 👤 Author

**Jitendra Kohar**
- GitHub: [@koharjitendra](https://github.com/koharjitendra)

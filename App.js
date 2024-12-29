import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { SMTPClient } from "emailjs";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Create SMTP client
const client = new SMTPClient({
    user: "ssountharya71@gmail.com", // Your email
    password: "mahendran03_", // Your email password
    host: "smtp.example.com", // SMTP host (e.g., Gmail: smtp.gmail.com)
    ssl: true,
});

// Route for sending emails
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await client.sendAsync({
            text: `Message from: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            from: "ssountharya71@gmail.com", // Sender email
            to: "sountharyaks@gmail.com", // Receiver email
            subject: "Contact Form Submission",
        });

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/send-email", formData);
            setStatus(response.data.message);
        } catch (error) {
            setStatus("Failed to send email. Please try again later.");
            console.error("Error:", error);
        }
    };

    return (
        <div id="contact" className="max-w-md mx-auto p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-semibold">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block font-semibold">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block font-semibold">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    ></textarea>
                </div>
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Send Message
                </button>
            </form>
            {status && <p className="mt-4">{status}</p>}
        </div>
    );
};

export default ContactForm;

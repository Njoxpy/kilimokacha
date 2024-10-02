import React, { useState } from "react";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        { text: "Hello! How can I assist you today?", from: "bot" }
    ]);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, { text: message, from: "user" }]);
            setMessage("");
            // Here you can add logic to send the message to the bot
        }
    };

    return (
        <div className="fixed bottom-5 right-5 z-50">
            <button
                onClick={toggleChatbot}
                className="bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition"
            >
                <i className="fas fa-comment"></i>
            </button>

            {isOpen && (
                <div className="bg-white shadow-lg rounded-lg mt-2 w-80">
                    <div className="bg-green-500 text-white p-3 rounded-t-lg flex justify-between items-center">
                        <h3>Chat with Us!</h3>
                        <button onClick={toggleChatbot} className="text-white text-lg">&times;</button>
                    </div>
                    <div className="p-3 max-h-60 overflow-y-auto">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`my-2 p-2 rounded-lg ${msg.from === "bot" ? "bg-gray-200" : "bg-green-100"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="flex p-2">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="border rounded-l-lg p-2 w-full"
                            placeholder="Type your message..."
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-green-500 text-white rounded-r-lg p-2 hover:bg-green-600"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;

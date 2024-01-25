import React, { useState } from "react";
import axios from "axios";
import "../components/css/mail.css";

const EmailSender = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a file.");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = async () => {
      const attachment = reader.result.split(",")[1];

      try {
        await axios.post("http://localhost:3001/send-email", {
          to,
          subject,
          text,
          attachment,
        });

        alert("Email sent successfully!");
      } catch (error) {
        console.error("Email sending failed:", error);
        alert("Email sending failed.");
      }
    };

    reader.readAsDataURL(file);
  };

  return (
    <div id="main">
      <h1>Mail</h1>
      <form onSubmit={sendEmail}>
        <table>
          <tr>
            <td>To:</td>
            <td><input
            type="email"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          /></td>
          </tr>
          <tr>
            <td>Zadeva:</td>
            <td><input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          /></td>
          </tr>
          <tr>
            <td>Sporocilo</td>
            <td> <textarea value={text} onChange={(e) => setText(e.target.value)} /></td>
          </tr>
          <tr>
            <td>File:</td>
            <td> <input type="file" accept=".txt" onChange={onFileChange} /></td>
          </tr>
        </table>
        
        <button type="submit">Poslji</button>
      </form>
    </div>
  );
};

export default EmailSender;

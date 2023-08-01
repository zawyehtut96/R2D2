import React, { useState } from "react";
import axios from "axios";

const PersonalizedEmail = () => {
  const [recipientName, setRecipientName] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [generatedEmail, setGeneratedEmail] = useState("");

  const handleGenerate = () => {
    axios.post("http://localhost:8000/generate_personalized_email/", {
      recipient_name: recipientName,
      email_subject: emailSubject,
      email_body: emailBody,
    })
      .then(response => {
        setGeneratedEmail(response.data.email);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Personalized Email</h2>
      <div>
        <label>Recipient Name:</label>
        <input type="text" value={recipientName} onChange={e => setRecipientName(e.target.value)} />
      </div>
      <div>
        <label>Email Subject:</label>
        <input type="text" value={emailSubject} onChange={e => setEmailSubject(e.target.value)} />
      </div>
      <div>
        <label>Email Body:</label>
        <textarea value={emailBody} onChange={e => setEmailBody(e.target.value)} />
      </div>
      <button onClick={handleGenerate}>Generate</button>
      <div>
        <h3>Generated Email:</h3>
        <p>{generatedEmail}</p>
      </div>
    </div>
  );
};

export default PersonalizedEmail;

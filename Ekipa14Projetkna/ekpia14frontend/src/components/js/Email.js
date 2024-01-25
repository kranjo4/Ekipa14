import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Dropzone from 'react-dropzone';

const EmailSender = () => {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    // Assuming only one file is allowed
    setFile(acceptedFiles[0]);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!file) {
      alert('Please upload a file.');
      return;
    }

    const templateParams = {
      to_email: 'luka.cresnar@gmail.com',
      attachment: file,
    };

    // Replace 'your_service_id', 'your_template_id', and 'your_user_id' with your EmailJS credentials
    emailjs.send(
      'service_gxsnx1c',
      'template_46o4tqh',
      templateParams,
      'HOKWLeygDRg41AxWi'
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error('Email sending failed:', error);
        alert('Email sending failed.');
      });
  };

  return (
    <div>
      <h1>Email Sender</h1>
      <form onSubmit={sendEmail}>
        <Dropzone onDrop={onDrop} accept=".pdf,.doc,.docx">
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop a file here, or click to select a file</p>
              </div>
            </section>
          )}
        </Dropzone>

        <button type="submit">Send Email</button>
      </form>
    </div>
  );
};

export default EmailSender;
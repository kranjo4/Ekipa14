const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  try {
    const { to, subject, text, attachment } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'luka.cresnar@gmail.com', 
        pass: 'vdsptmuopovqzfgt', 
      },
    });

    const info = await transporter.sendMail({
      from: 'luka.cresnar@gmail.com', 
      to,
      subject,
      text,
      attachments: [
        {
          filename: 'attachment.txt',
          content: attachment,
        },
      ],
    });

    console.log('Mail poslan:', info);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Napaka:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
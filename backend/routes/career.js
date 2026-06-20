import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import process from "node:process";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/send-email", upload.single("resume"), async (req, res) => {
  try {
    const { name, phone, email, designation } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to:  "enquiryzylowweb@gmail.com",
      subject: "New Career Form Submission",
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Designation: ${designation}
      `,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path,
        },
      ],
    });

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Email failed" });
  }
});

export default router;
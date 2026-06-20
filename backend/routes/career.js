/* global process */
import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.get("/check", (req, res) => {
  res.send("Career route working");
});

router.post("/send-email", upload.single("resume"), async (req, res) => {
  console.log("Career route loaded");
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
      attachments: req.file
  ? [{
      filename: req.file.originalname,
      path: req.file.path,
    }]
  : [],
    });

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Email failed" });
  }
});

export default router;
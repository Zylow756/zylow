import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/send-email", upload.single("resume"), async (req, res) => {
  try {
    const { name, phone, email, designation } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "officezylow1991@gmail.com",
        pass: "qjli difu jejb mffu", // use app password (IMPORTANT)
      },
    });

    await transporter.sendMail({
      from: "officezylow1991@gmail.com",
      to: "zylow0744@gmail.com",
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
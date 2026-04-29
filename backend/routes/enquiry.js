import express from "express";
import nodemailer from "nodemailer";
import XLSX from "xlsx";

const router = express.Router();

router.post("/send-enquiry", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    const data = [{ Name: name, Phone: phone, Email: email, Message: message }];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiry");

    const filePath = "./enquiry.xlsx";
    XLSX.writeFile(workbook, filePath);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "officezylow1991@gmail.com",
        pass: "qjli difu jejb mffu",
      },
    });

    await transporter.sendMail({
      from: "officezylow1991@gmail.com",
      to: "zylow0744@gmail.com",
      subject: "New Enquiry Form",
      text: "New enquiry received",
      attachments: [
        {
          filename: "enquiry.xlsx",
          path: filePath,
        },
      ],
    });

    res.json({ success: true });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

export default router;
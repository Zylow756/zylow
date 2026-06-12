import express from "express";
import nodemailer from "nodemailer";
import XLSX from "xlsx";
import process from "process";

const router = express.Router();

router.post("/send-enquiry", async (req, res) => {
  try {
    const { name, phone, email, message, company, projectType, timeline } = req.body;

    const data = [{
      Name: name || "",
      Phone: phone || "",
      Email: email || "",
      Company: company || "",
      ProjectType: projectType || "",
      Timeline: timeline || "",
      Message: message || "",
      Date: new Date().toLocaleString()
    }];

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiry");

    const filePath = "./enquiry.xlsx";
    XLSX.writeFile(workbook, filePath);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "enquiryzylowweb@gmail.com",
      subject: "New Enquiry Form",
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
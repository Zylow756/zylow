import express from "express";
import cors from "cors";
import enquiryRoute from "./routes/enquiry.js";
import careerRoute from "./routes/career.js";
import dotenv from "dotenv";
import process from "process";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "https://zylowebs.in",
      "https://www.zylowebs.in"
    ],
    methods: ["GET", "POST"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", enquiryRoute);
app.use("/api", careerRoute);

app.get("/", (req, res) => {
  res.send("Server working");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
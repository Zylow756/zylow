/* eslint-env node */
import express from "express";
import cors from "cors";
import enquiryRoute from "./routes/enquiry.js";
import careerRoute from "./routes/career.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/*app.use(
  cors({
    origin: [
      "https://zylowebs.in",
      "https://www.zylowebs.in"
    ],
    methods: ["GET", "POST"],
  })
);*/

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", enquiryRoute);
app.use("/", careerRoute);

app.get("/", (req, res) => {
  res.send("Server working");
});

app.get("/test", (req, res) => {
  res.json({
    success: true,
    message: "Node server is running",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
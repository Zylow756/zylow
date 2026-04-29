import express from "express";
import cors from "cors";
import enquiryRoute from "./routes/enquiry.js";
import careerRoute from "./routes/career.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", enquiryRoute);
app.use("/api",careerRoute)

app.get("/", (req, res) => {
  res.send("Server working");
});


app.listen(5000, () => console.log("Server running on port 5000"));
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

// allow frontend to talk to backend
app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
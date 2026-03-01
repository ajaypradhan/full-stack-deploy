import express from "express";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://187.77.187.252:5174",
      "http://187.77.187.252:5173",
      "http://187.77.187.252:3000",
    ],
    credentials: true,
  }),
);

app.get("/api/message", (req, res) => {
  res.send({ message: "Hello spoxtale test server" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

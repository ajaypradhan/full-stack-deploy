import express from "express";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    credentials: true,
  }),
);

app.get("/api/message", (req, res) => {
  res.send({ message: "Hello spoxtale test server" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

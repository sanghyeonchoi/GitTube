import app from "./app";
<<<<<<< HEAD
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";
=======
>>>>>>> parent of aca91d8 (3.2까지 완료)

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);

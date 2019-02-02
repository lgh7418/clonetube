import "./db";
import app from "./app";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";  // mongoose가 이 모델을 database에 등록하도록 import해줌

const PORT = process.env.PORT || 4000;

const handleListening = () => 
    console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
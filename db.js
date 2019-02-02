import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();   // .env 파일 안의 정보를 불러오는 함수

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);


db.once("open", handleOpen); // once: connection을 한 번만! , "open" 했을 때 함수 호출
db.on("error", handleError);
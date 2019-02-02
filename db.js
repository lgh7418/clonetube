import mongoose from "mongoose";

mongoose.connect(
    "mongodb://localhost:27017/we-tube",
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
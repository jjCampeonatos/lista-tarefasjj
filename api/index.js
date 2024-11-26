import express from "express";

const app = express();

app.use(express.jason());
app.use(cors());

app.listen(8800);
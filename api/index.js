import express from "express";
import cors from "cors";
import { rout_user } from "./routes/user.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(rout_user)


app.listen(3333, () => console.log("O servidor esta rodando.")) ;
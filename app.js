import cors from "cors";
import express from "express";
import router from "./routes/routs.js";
import expressEjsLayouts from "express-ejs-layouts";
import "./utils/Database.js";

const app = express();
const port = 3000;

app.set('view engine','ejs');

app.use(cors());
app.use(express.json());
app.use(express.static(('public')));
app.use(expressEjsLayouts);
app.use(express.urlencoded({extended: true}));

app.use('/',router);

app.listen(port,() => {
     console.log(`Server Is Running On http://localhost:${port}`);
});


import express from "express";
import { insertAPIkey } from "../controllers/APIkeyController.js";
import {insertAnimals,searchAnimals,updateManyAnimals} from "../controllers/AnimalsController.js";

const router = express.Router();

router.get('/',(req,res) => {
    res.render('Home',{
        title: "animalsapi.com | The Open Animals API",
        layout: "layouts/main"
    })
});
router.get('/APIkey',(req,res) => {
    let msg = "";
    res.render('APIkey',{
        title : "animalsapi.com | APIkey",
        layout: "layouts/main",
        msg,
    })
});
router.put('/animals',updateManyAnimals);
router.post('/APIkey',insertAPIkey);
router.get('/animals',searchAnimals);
router.post('/animals',insertAnimals);

export default router;
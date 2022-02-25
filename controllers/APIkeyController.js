import APIkey from "../Models/APIkey.js";
import bcrypt from "bcrypt";

export const insertAPIkey = async (req,res) => {
    const salt = bcrypt.genSaltSync(1);
    const hashAPIkey = bcrypt.hashSync(req.body.Email, salt);
    req.body.APIkey = hashAPIkey;
    req.body.CreatedAt = new Date();
    const duplikat = await APIkey.find({Email: req.body.Email});
    if(duplikat.length != 0) {
        res.render('APIkey',{
            title : "animalsapi.com | APIkey",
            layout: "layouts/main",
            msg: "EMAIL SUDAH TERDAFTAR" 
        });
    }else {
        APIkey.insertMany(req.body,(error,result) => {
           if(error) {
            res.render('APIkey',{
                title : "animalsapi.com | APIkey",
                layout: "layouts/main",
                msg: error, 
            });
           }else {
               res.render('APIkey',{
                   title : "animalsapi.com | APIkey",
                   layout: "layouts/main",
                   msg: `Your APIkey : ${result[0].APIkey}`, 
               });
           }
        });
    }
}
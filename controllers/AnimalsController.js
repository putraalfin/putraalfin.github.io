import Animals from "../Models/Animals.js";
import APIkey from "../Models/APIkey.js";

export const updateManyAnimals = async (req,res) => {
     const animals = await Animals.find();
     animals.forEach(data => {
         const image = data.Image.split("/");
         const http = image[0];
         const local = image[2];
         const folder = image[3];
         const nama = image[5];
         const hasil = `${http}//${local}/${folder}/data/${nama}`;
         console.log(hasil);
         return
         Animals.updateOne({Nama : data.Nama
           },{
             $set: {
                 Image : hasil
             }
         }).then((result,err) => {
             console.log(result);
         });
     });
}

export const insertAnimals = async (req,res) => {
    try {
        const saveanimals = await Animals.insertMany(req.body);
        return;
        res.status(200).json(saveanimals);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const searchAnimals = async (req,res) => {
    if(req.query.APIkey) {
    const apikey = await APIkey.find({APIkey: req.query.APIkey});
    if(apikey.length != 0) {
        let create = apikey[0].CreatedAt.getDay();
        let time = new Date().getDay();
        if(time - create <= 1) {
        if(req.query.Name) {
            Animals.find({Nama: {$regex: req.query.Name.toUpperCase()}}).limit(10).then((result,err)=> {
                res.json(result);
            });     
        }else if(req.query.Category && req.query.Type) {
            let animals = [];
             Animals.find({Category: {$regex: req.query.Category.toUpperCase()}}).limit(15).then((result,err) => {
                result.forEach(index => {
                     if(index.Type == req.query.Type.toUpperCase()) {
                         animals.push(index);
                     }
                    });
                    res.json(animals);
             }); 
        }else if(req.query.Category && req.query.Kelas){
            Animals.find({Category: {$regex: req.query.Category.toUpperCase()}}).limit(15).then((result,err) => {
               let animals = [];
                result.forEach(index => {
                    if(index.Kelas == req.query.Kelas.toUpperCase()) {
                        animals.push(index); 
                    }
                });
              res.json(animals);
            });  
        }else if(req.query.Type) {
            Animals.find({Type: {$regex: req.query.Type.toUpperCase()}}).limit(10).then((result,err)=> {
                res.json(result);
            }); 
        }else if(req.query.Category) {
            Animals.find({Category: {$regex: req.query.Category.toUpperCase()}}).limit(10).then((result,err)=> {
                res.json(result);
            }); 
        }else if(req.query.Kelas) {
            Animals.find({Kelas: {$regex: req.query.Kelas.toUpperCase()}}).limit(10).then((result,err)=> {
                res.json(result);
            });
        }else {
            res.json("add a query to request data to our Api");
        }
     }else {
        APIkey.findByIdAndDelete({"_id": apikey[0]._id}).then((result)=> {
            res.json("Your APIkey has expired, please request your APIkey again by visiting the APIkey page on our official website animalsapi.com");
        });
     }
    }else {
      res.json("Your APIkey is not registered in our system, please request an APIkey on the APIkey page on our official website")  
    }
    }else {
        res.json("Add an APIkey to every query, if you don't have one, ask for your APIkey on the APIkey page on our official website");
    }
}
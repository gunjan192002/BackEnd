import multer from "multer";

// the below part of the code is as it is taken from multer site to uplad a single file 
//from the device to storage and multer acts a middle ware
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./public/temp")
    },
    //check what are the different option present for 
    //the option of file
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  // we are using disc storage here 
export const upload = multer({ 
    storage, 
})
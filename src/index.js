// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";

import connectDB from "./db/index.js"
dotenv.config({ path: './env' });
// when mongoose finishes connecting to the server it returns a  promise, so we use .then() method on that promise and pass in an arrow function as its
connectDB().then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log('Server is runnign ar port :', process.env.PORT || 8000);
    })
}).catch((err)=>
{console.log("MONGO db connection failde!!!!",err)});



































// const app=express();
//     ;(async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/{DB_NAME}`)
//             application.on("error",(error)=>{
//                 console.log("ERROR",error);
//                 throw error;
//             })
//             app.listen(process.env.PORT,()=>{
//                 console.log(`APP is listning on port ${process.env.PORT}`);
//             })
//         } catch (error) {
//             console.log("Error: ", error);

//         }
//     })()
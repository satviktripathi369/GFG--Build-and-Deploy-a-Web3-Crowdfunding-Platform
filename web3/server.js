const express =require('express');
const cors=require("cors");
const path=require("path");


const app=express();

app.use(cors());
app.use(express.json());


app.listen(5001,console.log("server started!!"));

const _dirname = path.dirname("");
console.log(_dirname);
const buildpath = path.join(_dirname , "../client/dist");
console.log(buildpath)
app.use(express.static(buildpath)) 
app.get("/*", function(req, res){
    console.log("here");
    res.sendFile(
        path.join(__dirname,"../client/dist"),
        
        function(err){
            if(err){
                res.status(500).send(err);
            }
        }
    );
});//
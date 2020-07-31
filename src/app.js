const express=require("express");
const path=require("path");
const app=express();
var directory=path.join(__dirname,'../public');
app.use(express.static(directory));

app.get("",(req,res)=>{
	res.send(index);
})
app.listen(3000,()=>{
	console.log("listen to port 3000");
})
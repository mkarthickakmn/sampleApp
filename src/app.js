const express=require("express");
const path=require("path");
const app=express();
const port=process.env.PORT||3000;
var directory=path.join(__dirname,'../public');
app.use(express.static(directory));

app.get("",(req,res)=>{
	res.send(index);
})
app.listen(port,()=>{
	console.log("listen to port "+port);
})
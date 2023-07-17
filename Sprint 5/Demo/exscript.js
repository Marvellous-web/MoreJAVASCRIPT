function greet()
{
    var n = prompt("Enter name");
    document.getElementById("greet").innerHTML= "<h2> Welcome"+n+"</h2>";

}

function changeDate()
{
    setInterval(()=>{
        var d = new Date();
        var t =d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
    document.getElementById("clock").innerHTML="<h3>"+t+"</h3>"; },1000);
}

function changeColor()
{
    setInterval(()=>{

    //Math.random();
    var max= 255;
    var min= 0;
    var r =Math.floor(Math.random() *(max - min)+ min);

    var g = Math.floor(Math.random() *(max - min)+ min);
    var b = Math.floor(Math.random() *(max - min)+ min);
    document.body.style.background= "rgb("+r+","+g+","+b+")";
    },3000);

}

function timeout()
{
 
    setTimeout(()=>{console.log("How are");},3000);
    setTimeout(()=>{console.log("Hi");},1000);
    setTimeout(()=>{console.log("you");},5000);
}

greet();
changeDate();
changeColor();
timeout();
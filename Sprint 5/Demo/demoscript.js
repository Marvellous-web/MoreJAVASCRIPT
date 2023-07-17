var mypromise = axios("https://api.exchangerate.host/latest");
mypromise.then((response)=>{
    var t =response.data;
    console.log(t);
}).catch((reject)=>{
    console.log("Interrupted");

})




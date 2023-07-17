// Reuse the solution created to dynamically create order form fields developed 
// in the previous sprint challenge
//funtion for display add order details
let submitbutton=document.getElementById("btn");
submitbutton.addEventListener("click",displayForm);
function displayForm()
{
    // event.preventDefault();
    var frm1=document.getElementById("frm");
    frm1.style.display="block";
}

//function for calculate total amount
let amtbtn=document.getElementById("b1");
amtbtn.addEventListener("click",calculate);
function calculate(){
    var price1=parseInt(document.getElementById("pr").value);
    var amount1=parseInt(document.getElementById("qty").value);
    var total=price1*amount1;
    document.getElementById("i1").value=total
    alert("Total amount to be paid :" + total);
}

// save all details in one array
let arr=[];
function saveOrder(){
    var date1=document.getElementById("dt").value;
    var name1=document.getElementById("name").value;
    var emailId1=document.getElementById("emailId").value;
    var contactntno=document.getElementById("contno").value;
    var addr=document.getElementById("address").value;
    var cat1=document.getElementById("cat").value;
    var item1=document.getElementById("item").value;
    var p11=document.getElementById("pr").value;
    var q11=document.getElementById("qty").value;
    var v1=document.getElementById("i1").value;
    var obj={
        "CustomerId":document.getElementById("id").value,
        "Orderdate":date1,
        "Customername":name1,
        "customeremailId":emailId1,
        "Contactnumber":contactntno,
        "Customeraddress":addr,
        "catogery":cat1,
        "item":item1,
        "price":p11,
        "quantity":q11,
        "TotalAmount":v1
    };
    arr.push(obj);
    console.log(arr);
    alert("Thank You!! Your Order Placed Successfully")

}
//Save the order details captured from the form in json-server using Axios API

const url='  http://localhost:3001/order';
function submitOrder(event) {
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    const postPromise = axios.post(url,formProps);
    postPromise.then(response=>{
        event.preventDefault();
        console.log(response);
    });
}
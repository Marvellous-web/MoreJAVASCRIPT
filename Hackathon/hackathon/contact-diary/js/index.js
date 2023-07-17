// Write the JavaScript code here to make Contact App functional

const url = 'http://localhost:3000/contacts';
var contactsArray=[];

// Code to show the persisted data
const showPersistedData = axios.get(url);
showPersistedData.then((response)=>{
    response.data.forEach(element => {
        contactsArray.push(element);
    });
})

console.log(contactsArray);

setTimeout(()=>{
    displayData();
},4000)

function displayData()
{
    var table=document.getElementById("table");
    var tr=document.createElement("tr");
    table.appendChild(tr);
    var th1=document.createElement("th");
    var th2=document.createElement("th");
    var th3=document.createElement("th");
    var th4=document.createElement("th");
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    tr.appendChild(th4);
    var tx1=document.createTextNode("Name");
    var tx2=document.createTextNode("Job Title");
    var tx3=document.createTextNode("Email Id");
    var tx4=document.createTextNode("Contact No");
    th1.appendChild(tx1);
    th2.appendChild(tx2);
    th3.appendChild(tx3);
    th4.appendChild(tx4);


    for(i=0; i<contactsArray.length; i++)
    {
        var tr=document.createElement("tr");
        table.appendChild(tr);//14
        var td1=document.createElement("td");
        var span=document.createElement("span");
        td1.appendChild(span);
        var s1=document.createTextNode(contactsArray[i].firstName.charAt(0) + contactsArray[i].lastName.charAt(0)+" ");
        span.appendChild(s1);
        span.style.marginRight='10px'
        span.setAttribute("class","badge badge-primary");
        span.style.backgroundColor='blue';
        span.style.borderRadius='100px';

        // var td2=document.createElement("td");
        var td3=document.createElement("td");
        var td4=document.createElement("td");
        var td5=document.createElement("td");
        tr.appendChild(td1);
        // tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        var tx1=document.createTextNode(contactsArray[i].firstName +"  "+ contactsArray[i].lastName);
        // var tx2=document.createTextNode(contactsArray[i].lastName);
        var tx3=document.createTextNode(contactsArray[i].jobTitle);
        var tx4=document.createTextNode(contactsArray[i].email);
        var tx5=document.createTextNode(contactsArray[i].contactNo);
        td1.appendChild(tx1);
        // td2.appendChild(tx2);
        td3.appendChild(tx3);
        td4.appendChild(tx4);
        td5.appendChild(tx5);
    }
}

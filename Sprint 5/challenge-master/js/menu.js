//Write code to get menu data from the json-server using axios API
const url='http://localhost:3000/menu';
const menuArray=[];

const showMenu=axios.get(url);
showMenu.then((response)=>{
    response.data.forEach(element => {
       menuArray.push(element);
    });
})
console.log(menuArray);

setTimeout(()=>{
    displayMenu();
},4000);

function displayMenu(){
    var d1=document.getElementById("menu");
    var table=document.createElement("table");
    table.style.backgroundColor='lightgreen';
    table.style.marginLeft='20%';
    table.style.borderRadius='20px'
    table.style.width='35%'
    d1.appendChild(table);
    var row=document.createElement("tr");
    table.appendChild(row);
    var th1=document.createElement("th");
    var th2=document.createElement("th");
    row.appendChild(th1);
    row.appendChild(th2);
    var tx1=document.createTextNode("Category");
    var tx2=document.createTextNode("Price");
    th1.appendChild(tx1);
    th2.appendChild(tx2);

    for(i=0;i<menuArray.length;i++)
    {
       
        var tr=document.createElement("tr");
        table.appendChild(tr);
        var td1=document.createElement("td");
        var td2=document.createElement("td");
        tr.appendChild(td1);
        tr.appendChild(td2);
        var txt1=document.createTextNode(menuArray[i].itemName);
        var txt2=document.createTextNode(menuArray[i].price);
        td1.appendChild(txt1);
        td2.appendChild(txt2);
    }
    
}
function findItems(event) {
    // console.log(event.target);
    if(menu.value=="Starters"){
        var allMenu=menuArray.filter(obj=>obj.category=="Starters");
        allMenu.forEach(element=>console.log(element.itemName +" "+ element.price));
        }
        var arr1=[];
        arr1.push(allMenu);
        console.log(allMenu);
        var starters=document.getElementById("starters");
        var table1=document.createElement("table");
        table1.style.backgroundColor='lightgreen';
        table1.style.marginLeft='20%';
        table1.style.borderRadius='20px'
        table1.style.width='35%'
        starters.appendChild(table1);
        for(i=0; i<arr1.length; i++){
            var tr=document.createElement("tr");
            table1.appendChild(tr);
            var col1=document.createElement("td");
            var col2=document.createElement("td");
            tr.appendChild(col1);
            tr.appendChild(col2);
            var text1=document.createTextNode(arr1[i].itemName);
            var text2=document.createTextNode(arr1[i].price);
            col1.appendChild(text1);
            col2.appendChild(text2);
    }
 

    if(menu.value=="Desserts"){
        var allDesserts=menuArray.filter(obj=>obj.category=="Desserts");
        allDesserts.forEach(element=>console.log(element.itemName +" "+ element.price));
    }

    if(menu.value=="Beverages"){
        var allBeverages=menuArray.filter(obj=>obj.category=="Beverages");
        allBeverages.forEach(element=>console.log(element.itemName +" "+ element.price));
    }

    if(menu.value=="Main Course"){
        var allMainCourse=menuArray.filter(obj=>obj.category=="Main Course");
        allMainCourse.forEach(element=>console.log(element.itemName +" "+ element.price));
    }


}

//Write code to load menu data using window onload event: getPromise is the promise result obained 
//from Axios call
// window.onload = () => getPromise.then((response) => {
    
// });

//Write code to filter the menu item from list
// const category = document.getElementById('category');
// category.addEventListener('change', function (e) {
//     findItems(category.value);
// });





let menu = [
    {
        'category': 'Beverages',
        'name': 'Coke',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    },
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Coke',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};

//Write function to filter menu items by Category and sort them alphabetically
function listByCategory(menus, categoryName){
    let result=menu.filter(a=>{
        if(a.category==categoryName)
        return true;
    })
    .sort((a,b)=>{
        if(a.name<b.name){
            return -1;
        }
        else{
            return 1;
        }
        return 0;
    });
    console.log(result);
}
//Write function to calculate the amount of each ordered item
let totalAmount=order.items.map(x=>({"name":x.name,"amount":x.price*x.quantity}));
console.log(totalAmount);

//Write function to calculate the subtotal amount for the main meal ordered
let mainMeal=menu.filter(x=>x.category=="Main Meal").map(a=>a.name);
let subtotal=order.items.filter(t=>mainMeal.includes(t.name)).map(m=>({"name":m.name,"subtotal":m.price*m.quantity}));
console.log(mainMeal);
console.log(subtotal);

//Write function to find the totalAmount of the order based on the calculated mainMealAmount value
let result=subtotal.reduce((sum,a)=>sum+a.subtotal,0);
console.log(result);

//Write function to calculate the final amount after discount


//Write function to display the total amount 
let totalAmt=order.items.reduce((total,item)=>{return total=+item.price*item.quantity},0);
console.log(totalAmt);

//Write function to display the final amount


//Invoke  functions 



export{}
//TALLEST MOUNTAIN
//Declare an interface called Mountain
interface Mountain{
    name:string;
    height:number;
}
//Declare an array called mountains 
let mountains:Mountain[] = [
    {
        name:"Kilimanjaro",
        height: 19341
    },
    {
        name:"Everest",
        height: 29029
    },
    {
        name:"Denali",
        height: 20310
    }
];
//Declare a function called findNameOfTallestMountain
function findNameOfTallestMountain(mountains:Mountain[]):string{
    let tallestMountain:Mountain = mountains.reduce((prev,current)=>(prev.height>current.height)?prev:current);
            return tallestMountain.name;
    }
    //Call findNameOfTallestMountain
    let MountainName:string = findNameOfTallestMountain(mountains);
    console.log(MountainName);
    
    //2. PRODUCTS
    //Declare an interface called Product
    interface Product{
        name:string;
        price:number
    }
    //Declare an array called products 
    let products:Product[]=[
        {
            name: "TV",
            price: 1000,
        },
        {
            name: "DVD Player",
            price: 500,
        },
        {
            name: "Blu Ray",
            price: 200,
        },
        {
            name: "MacLaptop",
            price: 2500,
        }
    ];
    //Declare a function called calcAverageProductPrice
    function calcAverageProductPrice(products:Product[]):number{
        let cost:number =0;
     products.forEach((p:Product)=> 
    cost+= p.price); 
    let avgPrice:number = cost/products.length;
    return avgPrice;  
    }

    //Call calcAverageProductPrice,
    let AvgPrice:number = calcAverageProductPrice(products);
    console.log(AvgPrice);
    
    //3. INVENTORY
    //Declare an interface called InventoryItem
    interface InventoryItem{
            product:Product;
            quantity:number;            
    }   
   // Declare an interface called InventoryItem
    let inventory:InventoryItem[]=[
        {
            product:{
                name:"motor",
                price:10.00},
            quantity:10,
            
        },
        {
            product:{
                name:"sensor",
                price:12.50},
            quantity:4
        },
        {
            product:{
                name:"LED",
                price:1.00},
            quantity:20
        },
    ];
    //Declare a function called calcInventoryValue
    function calcinventoryValue(inventory:InventoryItem[]):number{
        let totalValue:number =0;
        inventory.forEach((e:InventoryItem)=> {
            totalValue += e.product.price*e.quantity})
    
            return totalValue;
        }
       //Call calcInventoryValue 
        let value:number = calcinventoryValue(inventory);
        console.log(value);
    
    
    
    
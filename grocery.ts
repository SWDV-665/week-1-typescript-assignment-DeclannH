class Grocery {     

  
 name: string;
 quantity: number;
 price: number;      
   
 constructor(n: string, q: number, p: number) {        
 this.name = n;         
 this.quantity = q;        
 this.price = p;} 
 
 display() {
	const element = document.getElementById("Store");
	const display = document.createElement("p");
	display.textContent = '${e.name} ${e.quantity} -> $${e.price}';	
	}
 
 } ;
 
 
 
 
 let list_of_items = [
 
 new Grocery("Pasta Sauce", 10, 2.26),   
 new Grocery("Tater Tots", 28, 5.58),
 new Grocery("Juice", 11, 4.99) ]  
 
 const ele = document.getElementById("store");  

 list_of_items.forEach(e => e.display());
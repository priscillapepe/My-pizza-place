// // $(document).ready(function(){
// //     $("button#submit").submit(function(event){
// //         event.preventDefault();
// //         function buyNow(size, crust, topping, quantity) {
// //                 this.size = size;
// //                 this.prize = 0;
// //                 this.crust = crust;
// //                 this.topping = topping;
// //                 this.quantity = quantity;
// //                 size = ["small", "medium", "large"];
// //                 crust = ["Cripsy", "Stuffed", "GltenFree"];
// //                 topping = ["Pepperoni", "Bacon", "Mushrooms"];
// //                 quantity = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
// //             }
        
// //         var size = $("#size option:selected").val();
// //         var crust = $("#crust option:selected").val();
// //         var topping = $("#topping option:selected").val();
// //         var quantity = $("#quantity").val();
// //         var totalPrice = [];
        
// //         alert("your total price of the order is")
       
// //     });
//     // buyNow.prototype.Price = function(){
//     //     if(this.size === size[0]){
//     //         this.price += 400;
//     //     }
//     //     else if(this.size === size[1]){
//     //         this.size += 600;
//     //     }
//     //     else if(this.size === size[2]){
//     //         this.size += 800;
//     //     }
//     //     if(this.crust === crust[0]){
//     //         this.crust += 200;
//     //     }
//     //     else if(this.crust === crust[1]){
//     //         this.crust += 250;
//     //     }
//     //     else if(this.crust === crust[2]){
//     //         this.crust += 300
//     //     }
//     //     if(this.topping === topping[0]){
//     //         this.topping += 150
//     //     }
//     //     else if(this.topping === topping[1]){
//     //         this.topping += 200
//     //     }
//     //     else if(this.topping === topping[2]){
//     //         this.topping +=250
//     //     }
//     //     return this.price
    $(document).ready(function () {
        $("button#sumbmit").click(function (event){
        event.preventDefault()
        // const order = document.getElementById("btn");
        // var delivery = document.addEventListener("click", function () {
    
    
            var pizzaFlavor = parseInt(document.getElementById("flavour").value);
            alert(flavor)
            var pizzaSize = parseInt(document.getElementById("size").value);
            var pizzaCrust = parseInt(document.getElementById("crust").value);
            var pizzaToppings = parseInt(document.getElementById("toppings").value);
            var number = parseInt(document.getElementById("number").value);
    
         var total = (pizzaFlavor + pizzaSize + pizzaCrust + pizzaToppings)
         var totalCost = total * number
    $(totalCost).append()
    $("#pizzaFlavor option:selecte").value();
    $("#pizzaSize option:selecte").value();
    $("#pizzaCrust option:selecte").value();
    $("#pizzaToppings option:selecte").value();
    $("totalCost").value();
        })
    $("#btn").click(function() {
       
        prompt(`Enter your location`);
        prompt(`Enter your number`);
        alert(`Your will be delivered to you in a few minutes,please have Ksh.200 with you and total amount of your order for delivery.`)
    
    })
    $("#pick").click(function(){
        alert("You can pick ur order in our shop")
    })
    
    });
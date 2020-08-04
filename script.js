$(document).ready(function(){
    $("#button-pressed").click(function(){
        $("#make-order").toggle("2000")
    });
});
function Results (type,size,crust,toppings) {
    this.type = type;
    this.size= size;
    this.crust= crust;
    this.toppings=toppings;
};
Results.prototype.order = function() {
    return "Your order is of " + this.type + " pizza  with " + this.toppings + " as toppings and " + this.crust + " for crust ."
};
function TotalPrice (price, quantity, delivery,toppings,crust) {
    this.price= price;
    this.quantity=quantity;
    this.delivery=delivery;
    this.toppings=toppings;
    this.crust=crust;
};
TotalPrice.prototype.finalTotal = function () {
    return ( this.price + this.delivery + this.toppings + this.crust )* this.quantity ;
};
var sizePrices = [750, 800, 600]
var priceToppings = [100,120,80,]
var toppingsName= ["Pepperoni" , "mushroom" , " bacon"]
var crustNames= ["Crispy", "Classic", "Glutton-free"]
var crustPrices = [100,120,200]
var deliveryPrices = [0, 250];
$(document).ready(function(){
    $('form#myForm').submit(function (event) {
        event.preventDefault();
        var pizzaType = $('#type').val();
        var pizzaSize = parseInt($('#size').val());
        var pizzaToppings=parseInt($('#topping').val());
        var priceCrust =parseInt($('#crust').val());
        var pizzaTop = $('#top').val();
        var pizzaQty = parseInt($('#quantity').val());
        var pizzaPick = parseInt($('#delivery').val());
        var price = sizePrices[pizzaSize - 1];
        var DeliveryCost = deliveryPrices[pizzaPick - 1];
        var ToppingsCost = priceToppings[pizzaToppings-1];
        var crustCost = crustPrices[priceCrust-1]
        var topNames = toppingsName[pizzaTop-1]
        var crustName = crustNames[priceCrust-1]
        newOrder = new Results(pizzaType,pizzaSize, crustName,toppingNames);
        newTotal = new TotalPrice(price, pizzaQty, DeliveryCost,ToppingCost,crustCost);
        if (pizzaPick===1){
            alert( newOrder.order());
            alert("You owe us: " + newTotal.finalTotal());
            alert("Thank you for considering us! " )
            }else{
                if(pizzaPick===2){
                var location= prompt(" Where would your like your Pizza to be Delivered? ");
                var locations =["Nairobi", "Olympic lane", "Ngong lane plaza"]
                if((location !== locations[0]) && (location !== locations[1]) && (location !== locations[2]) && (location !== locations[3]){
                    alert("Choose a location listed below")
                    alert(locations)
                }
                else  {
                    prompt("Please enter your phone number to facilitate communication and faster delivery.")
                    alert("Your order has been received and it will be delivered to " + place + " An additional 100/= will be charged for delivery.");
                    alert(newOrder.order());
                    alert("Your bill is: " + newTotal.finalTotal());
                    alert("Thank you for shopping with us! Your Order will be arriving soon." )
                }
            }
        }
    })
});
// $(".open").on("click",function(){
//     $(".popup, .popup-content").addClass("We have received your message");
//   });

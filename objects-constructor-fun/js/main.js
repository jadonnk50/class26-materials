//Create a constructor with 4 properties and 3 methods
let pizzaTwo = {}
pizzaTwo.size = 'small'
pizzaTwo.toppings = ['spinach', 'onion', 'jalapenos', 'garlic']
pizzaTwo.crust = 'thin'
pizzaTwo.sauce = 'normal'

pizzaTwo.estimateDeliveryTime = function() {
    console.log('Calculating...');
}
pizzaTwo.burnMouth = function() {
    console.log('Swwwooooooshhhhhhhh!!!');
}
pizzaTwo.frisbee = function() {
    console.log('YEEEeeeeeeeettttttt');
}


function PizzaMachine(sizes, toppingss, crusts, sauces) {
    this.sizes = sizes
    this.toppingss = toppingss
    this.crusts = crusts
    this.sauces = sauces
    this.estimateDeliveryTimes = function() {
        console.log('Calculating...');
    }
    this.burnMouths = function() {
        console.log('Swwwwoooooshhhhh');
    }
    this.frisbees = function() {
        console.log('Yeeeeeeeetttttttttt!!!!!');
    }
}

let pizza = new PizzaMachine('large', ['waffles', 'garlic'], 'Spinach', 'deep dish')
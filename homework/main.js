//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM


fetch("https://www.cataas.com/api/cats?tags=tag1,tag2&skip=0&limit=10")
.then(result => result.json())
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log(`error ${err}`);
})




























/* document.querySelector('button').addEventListener('click', runApi)


function runApi() {
    let drinksDiv = document.getElementsByClassName('drinks');
    let drink = document.querySelector('input').value;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
.then(result => result.json())
.then(data => {
    let drinks = data.drinks;
    let ranDrink = Math.floor(Math.random()*drinks.length)
        drinksDiv += document.querySelector('h2').innerText = drinks[ranDrink].strDrink
        drinksDiv += document.getElementById('instructions').innerText = drinks[ranDrink].strInstructions
        drinksDiv += document.querySelector('img').src = drinks[ranDrink].strDrinkThumb
        drinksDiv += document.getElementById('category').innerText = drinks[ranDrink].strCategory

    console.log(data.drinks);

})
.catch(err => {console.log(`error ${err}`)})
} */

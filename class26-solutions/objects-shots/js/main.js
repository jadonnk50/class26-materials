//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
/* document.querySelector('button').addEventListener('click', getDrink) */

/* function getDrink(){ */

    /* let obtain = document.querySelector('input').value */
    let entriesDiv = document.getElementById('entries');
    fetch("https://api.publicapis.org/entries")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          let entries = data.entries;
          let ranResult = Math.floor(Math.random()*entries.length);
          entriesDiv += document.getElementById('api').innerText = data[ranResult].API;
          entriesDiv += document.getElementById('category').innerText = data[ranResult].Category;
          entriesDiv += document.getElementById('description').innerText = data[ranResult].Description;
          entriesDiv += document.getElementById('link').innerText = data[ranResult].Link;
          console.log(data[ranResult]);
          })
          .catch(err => {
            console.log(`error ${err}`)
        });
              
      



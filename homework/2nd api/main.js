//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
/* document.querySelector('button').addEventListener('click', getDrink) */

/* function getDrink(){ */

    /* let obtain = document.querySelector('input').value */
    /* let entriesDiv = document.getElementById('entries'); */
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          /* let entries = data.entries; */
          /* let ranResult = Math.floor(Math.random()*entries.length); */
          document.getElementById('updated').innerText = data.time.updated;
          document.getElementById('updatedISO').innerText = data.time.updatedISO;
          document.getElementById('updatedUK').innerText = data.time.updateduk;
          document.getElementById('chartname').innerText = data.chartName;
          document.getElementById('disclaimer').innerText = data.disclaimer;
          document.getElementById('symbol').innerText = data.bpi.EUR.symbol;
          document.getElementById('rate').innerText = data.bpi.EUR.rate;
          document.getElementById('description').innerText = data.bpi.EUR.description;
          document.getElementById('rate_float').innerText = data.bpi.EUR.rate_float;
          document.getElementById('symbols').innerText = data.bpi.GBP.symbol;
          document.getElementById('rates').innerText = data.bpi.GBP.rate;
          document.getElementById('descriptions').innerText = data.bpi.GBP.description;
          document.getElementById('rate_floats').innerText = data.bpi.GBP.rate_float;
          document.getElementById('symbolss').innerText = data.bpi.USD.symbol;
          document.getElementById('ratess').innerText = data.bpi.USD.rate;
          document.getElementById('descriptionss').innerText = data.bpi.USD.description;
          document.getElementById('rate_floatss').innerText = data.bpi.USD.rate_float;

          console.log(data.bpi.USD);
          })
          .catch(err => {
            console.log(`error ${err}`)
        });
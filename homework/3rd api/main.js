
document.querySelector('button').addEventListener('click', runApi)

    
        let myArr = []
        let nameInput = document.querySelector('input').value;
        myArr = myArr.push(nameInput);
        console.log(myArr);
    function runApi() {
        
        
        for (i = 0; i < myArr.length; i++) {
            fetch(`https://api.genderize.io/?name=${myArr[i]}`)
            .then(result => result.json())
            .then(data => {
                 document.querySelector('h2').innerText = data.count
                 document.getElementById('gender').innerText = data.gender
                 document.getElementById('name').innerText = data.name
                 document.getElementById('probability').innerText = data.probability
                console.log(data);
            })
            .catch(err => {console.log(`error ${err}`)})
        }
    }

/* function runApi() { 
    let nameInput = document.querySelector('input').value;
    myArr.push(nameInput); */
    /* let newVal = "";
    for (i = 0; i < myArr.length; i++) {
        newVal = newVal + myArr[i];
    } */



    /* fetch(`https://api.genderize.io?name=${nameInput}`) */
    /* fetch(`https://api.genderize.io/?name=${myArr}`)
.then(result => result.json())
.then(data => { */
        /* namesDiv += document.querySelector('h2').innerText = data.count
        namesDiv += document.getElementById('gender').innerText = data.gender
        namesDiv += document.getElementById('name').innerText = data.name
        namesDiv += document.getElementById('probability').innerText = data.probability */

    /* console.log(data);

})
.catch(err => {console.log(`error ${err}`)}) */

/* let namesDiv = document.getElementsByClassName('drinks'); */
    
    /* if (nameInput.trim() === "") {
        runApi()
    }else {
        arrayOfnameInput.push(nameInput);
        arrayOfnameInput.join(' - ');
    } */ 

    /* while (true) {
        
        let nameInput = document.querySelector('input').value;

    //to cancel
        if(nameInput === "" || nameInput === null || nameInput === NaN || !isFinite(nameInput)) { 
            break;
        } else {
        numbers.push(+nameInput)
     }
    }*/

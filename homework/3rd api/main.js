
document.querySelector('button').addEventListener('click', runApi)

    
        let myArr = []
        

    function runApi() {
        let nameInput = document.querySelector('input').value;
        let myArr = nameInput.split(', ')
        
        
        
        for (i = 0; i < myArr.length; i++) {
            fetch(`https://api.genderize.io/?name=${myArr[i]}`)
            .then(result => result.json())
            .then(data => {
                const genderize = document.getElementById('genderize');
                const createDiv = document.createElement('div')
                /* createDiv.classList.add("mb-3") */
                createDiv.innerHTML = `
                    <div>
                        <h2> Name = ${data.name} </h2>
                        <p> Count = ${data.count} </p>  
                        <p> Gender = ${data.gender} </p>    
                        <p> Probability = ${data.probability} </p>  
                    </div>
                `
                genderize.appendChild(createDiv)
                console.log(genderize);
                console.log(data);
            })
            .catch(err => {console.log(`error ${err}`)})
        }
    }

    
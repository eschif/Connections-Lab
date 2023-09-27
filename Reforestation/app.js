window.addEventListener('load', function (){
    console.log("page is loading");

        fetch("https://tree-nation.com/api/projects?status=active")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let reforArray = data.name;
            //let names = data.results.name;
            let randomNumber = Math.floor(Math.random()*data.length);
            console.log(data[0]);
            
            let nameElement = document.getElementById('name');
            nameElement.innerHTML = data[randomNumber].name;

            let locElement = document.getElementById('loc');
            locElement.innerHTML = data[randomNumber].location;

            let descElement = document.getElementById('desc');
            descElement.innerHTML = data[randomNumber].description;
        

            // for(let i=0; i<data.length; i++) {
            // let elem = document.createElement('p');
            // elem.innerHTML = reforArray[i].name;
            // nameElement.appendChild(elem);
            
            // }
        })
        .catch(err => {
            console.log("Error is: " + err)})

})
window.addEventListener('load', function (){
    console.log("page is loading");
    // document.getElementById('p5-area').style.display = none;

        let toggle = document.querySelector('.toggle-input');

        toggle.addEventListener('click', () => {

        let onOff = toggle.parentNode.querySelector('.toggle-label');


        if (onOff.textContent == toggle.checked) {
            fetch("https://tree-nation.com/api/projects?status=active")
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let reforArray = data.name;
                let randomNumber = Math.floor(Math.random()*data.length);
                console.log(data[0]);
                
                let nameElement = document.getElementById('name');
                nameElement.innerHTML = data[randomNumber].name;
    
                let locElement = document.getElementById('loc');
                locElement.innerHTML = data[randomNumber].location;
    
                let descElement = document.getElementById('desc');
                descElement.innerHTML = data[randomNumber].description;

                //refill container slots
                let Proj = document.getElementById('refor-proj-name');
                Proj.innerHTML = "Reforestation Project Name:   ";

                let Location = document.getElementById('location');
                Location.innerHTML = "Location:   ";

                let Description = document.getElementById('description');
                Description.innerHTML = "Description: ";

                let titleElement = document.getElementById('h1-tree');
                titleElement.innerHTML = "Reforestation Mode";
                // document.getElementById('h1-tree').style.font-family='Rubik Iso', cursive;
                // titleElement.addEventListener("change", function(){
                document.getElementById('h1-tree').style.fontFamily = 'Rubik Beastly';

                document.getElementById('p5-area').style.display = none;

                reforestData = data;
        })
    }
    else {
        let titleElement = document.getElementById('h1-tree');
        titleElement.innerHTML = "Deforestation Mode";

        // empty the content slots
        let ghostName = document.getElementById('name');
        ghostName.innerHTML = "";

        let ghostLoc = document.getElementById('loc');
        ghostLoc.innerHTML = "";

        let ghostdesc = document.getElementById('desc');
        ghostdesc.innerHTML = "";

        //empty the content container slots
        let ghostProj = document.getElementById('refor-proj-name');
        ghostProj.innerHTML = "";

        let ghostLocation = document.getElementById('location');
        ghostLocation.innerHTML = "";

        let ghostDescription = document.getElementById('description');
        ghostDescription.innerHTML = "";

        document.getElementById('h1-tree').style.fontFamily = 'Rubik Iso';

        //document.getElementById('p5-area').style.display = block;
        // document.getElementById('defaultCanvas0').style.display = block;
        

    }
    })
})











                    // fetch("https://www.arcgis.com/apps/mapviewer/index.html?panel=gallery&layers=7254c77048444a45a5d41cf43445572b")
                
                    // let mapElement = document.getElementById('map');
                    // mapElement.innerHTML = data;

                    // for(let i=0; i<data.length; i++) {
                    // let elem = document.createElement('p');
                    // elem.innerHTML = reforArray[i].name;
                    // nameElement.appendChild(elem);
                    
                    // }

                // })
                // .catch(err => {
                //     console.log("Error is: " + err)})

        // }
        // )
        // }


                /*------- p5 Code -------*/

        // let reforestData;
        // let deforestMap;

        // function preload() {
        //     deforestMap = loadImage('media/deforestmap.png');
        // }

        // function setup() {
        //     // console.log("set up!!");
        //     createCanvas(400, 400);
        //     // image(deforestMap, 0, 0);
        //     // noStroke();
        // }


        // function draw () {
        //     background (220);

            // for (let x = 0; x < width; x += 20) {
            //     for (let y = 0; y < height; y += 20) {
            //       let d = dist(x, y, mouseX, mouseY);
            //       fill(255, 2);
            //       circle(x, y, d / 8);
            //     }
            // }
            // for (let x=0; x<= width; x++) {
            //     for (let y=0; y<= height; y++) {
            //         fill (30, 40, 70);
            //         ellipse(x, y, 20);
            //     }
            // }
            // if (reforestData) {
            //             for (let i=0; i <reforestData.length; i++){
            //                 fill(67, 105, 78);
            //                 ellipse(100 + i*50, 300, 30);
            //             }
            //         }
            //         else {
            //             console.log("Not ready yet");
            //         }


            // }

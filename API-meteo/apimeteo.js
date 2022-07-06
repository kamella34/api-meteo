let input = document.querySelector(".input-ville");
let btn = document.querySelector(".btn");
let ville = document.querySelector(".ville");
let etatTemps = document.querySelector(".etat-temps");
let iconeTemp = document.querySelector(".icone-temps");
let temperature = document.querySelector(".temperature");
let info = document.querySelector(".info");




    

    
    
    
    btn.addEventListener("click", function () { 

        let apiWeather =`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=f8033567ab66d447d581840e900815e7&units=metric&lang=fr`;
        
        // if (input.value == "") {
        //     info.textContent = "Veuillez rentrer le nom d'une ville !";
        //     iconeTemp.setAttribute("src","");
        // } else {
            fetch(apiWeather)
                .then(function (reponse) {
                    return reponse.json()
    
                }).then(function (data) {

                    console.log(data);
                    console.log(input.value);
                    ville.textContent = data.name;
                    etatTemps.textContent = data.weather[0].description;
                    info.textContent ="";
                    iconeTemp.classList.remove("disable")
                    iconeTemp.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
                    console.log(data.weather[0].icon);
                    temperature.textContent = data.main.temp + " C°";
                    
                }).catch(function(error){
                    info.textContent = "Veuillez rentrer le nom d'une ville valide !";
                    etatTemps.textContent = "";
                    iconeTemp.classList.add("disable")
                    temperature.textContent = "";
            })
        
    })




// 1.Solving problems using array functions on rest countries data.

//b.Get all the countries with a population of less than 2 lakhs using Filter function

//setting up a http request
var xhr = new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();
//set up a listener
xhr.onload = function() {
    if(xhr.status>=200 && xhr.status<300)
    {
//covert raw data into json format
    var data = JSON.parse(xhr.response);
//using filter function to get required data.
    console.log("countries with population less than 200000:");
    var countries = data.filter(function(nation){
            if (nation.population < 200000)
             {console.log (nation.name)}
        })
    }
    
}

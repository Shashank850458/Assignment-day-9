// 1.Solving problems using array functions on rest countries data.

//d.Print the total population of countries using reduce function

var xhr = new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();
//set up a listener
xhr.onload = function() {
    if(xhr.status>=200 && xhr.status<300)
    {
        //covert raw data into json format
        var data = JSON.parse(xhr.response);
//using reduce function
     let totalpoupulation =data.reduce((acc,curr)=>{
         return acc+curr.population; ;
     },0);
     console.log("Total population of the world is:",totalpoupulation);
    }
}

// 1.Solving problems using array functions on rest countries data.

//c.Print the following details name, capital, flag using forEach function


var request=new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json ','true');
request.send();
request.onload=function ()
{
var countryData=JSON.parse(this.response);
countryData.forEach((element)=>
{
    console.log(element.name,element.capital,element.flag);
})
}

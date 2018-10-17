let userSearch = 'sunset';

fetch(`https://api.unsplash.com/photos/Cbh93NpfWeg?client_id=1b4430d53513bd836aae9081bc5ca45860ea77e0e70ec5215c2979fa908fd5f0`)
.then(r => r.json())
.then(x => plotPoint(x.location));

let listofObj = [];
locations = [];

const map = document.querySelector('[data-map]');

function getResults(obj){
    let listofObj= obj.results;
    console.log(listofObj);
    return listofObj;
}

function plotPoint(location){
    let long = location.position.longitude;
    let lat = location.position.latitude;
    console.log(long);
    console.log(lat);
    map.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDX7NHyx9RpNMLF1Hbd6vwuXy_ESzR9oSE
    &q=${lat}${long}`
}


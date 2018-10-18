let userSearch = 'sunset';
urlArray = [`https://api.unsplash.com/photos/Cbh93NpfWeg?client_id=${USKey}`,
`https://api.unsplash.com/photos/pFS8jgu8-ag?client_id=${USKey}`,
`https://api.unsplash.com/photos/dBaz0xhCkPY?client_id=${USKey}`,
`https://api.unsplash.com/photos/wLLrbu9qqX8?client_id=${USKey}`,
`https://api.unsplash.com/photos/x8RTvVS8DUc?client_id=${USKey}`,
`https://api.unsplash.com/photos/i3k4BZcHa7c?client_id=${USKey}`,
`https://api.unsplash.com/photos/HgaAmMhpsfg?client_id=${USKey}`,
`https://api.unsplash.com/photos/wLLrbu9qqX8?client_id=${USKey}`,
`https://api.unsplash.com/photos/viiHGcf7_yw?client_id=${USKey}`,
`https://api.unsplash.com/photos/J-0k2rxxirg?client_id=${USKey}`
]

function main(){
    fetch(urlArray[9])
    .then(r => r.json())
    .then(x => plotPoint(x.location));
}
let listofObj = [];
locations = [];

const map = document.querySelector('[data-map]');

function getResults(obj){
    let listofObj= obj.results;
    console.log(listofObj);
    return listofObj;
}

// function getLocation()

function plotPoint(location){
    let long = location.position.longitude;
    let lat = location.position.latitude;
    console.log(long);
    console.log(lat);
    map.src = `https://www.google.com/maps/embed/v1/place?key=${GoKey}&q=${lat}${long}`;
}

main();
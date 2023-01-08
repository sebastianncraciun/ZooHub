window.onload = function() {
let meow = new Audio("./meow.mp3")
let audio = new Audio("./sound.mp3")
meow.play()
let btns = document.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    audio.play();
  });
}
console.log("test")
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d');
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.arc(200,200,198,0,Math.PI*2); 
ctx.moveTo(340,200);
ctx.arc(200,200,140,0,Math.PI);   
ctx.stroke();

ctx.beginPath();
ctx.moveTo(120, 130);
ctx.arc(120,130,24,0,Math.PI*2);  
ctx.fill();

ctx.beginPath();
ctx.moveTo(280,130);
ctx.arc(280,130,24,0,Math.PI*2);  
ctx.fill();

navigator.geolocation.getCurrentPosition((position)=>{
  console.log(position);
  onLocationAcquired(position);
})

function onLocationAcquired(position) 
{
  let currentPos=[position.coords.latitude,position.coords.longitude];
  let map=L.map('map').setView(currentPos,10);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  L.marker(currentPos).addTo(map);
  L.circle(currentPos,{
      color:"green",
      fillColor:"green",
      fillOpacity: 0.4,
      radius:position.coords.accuracy
  }).addTo(map);


      let distanceIcon=L.icon({
        iconUrl:`./img/cat.png`,
        iconSize:[40,40],
        iconAnchor: [20,20],
        popupAnchor:[0,-20]
    });
      L.marker([44.468972, 26.1456872],{icon:distanceIcon})
      .bindPopup(`Here is a center for animals`)
      .addTo(map);

      L.marker([44.368972, 26.1456872],{icon:distanceIcon})
      .bindPopup(`Here is a center for animals`)
      .addTo(map);
  
      L.marker([44.468972, 26.0456872],{icon:distanceIcon})
      .bindPopup(`Here is a center for animals`)
      .addTo(map);
}

}
const express = require("express")
const axios = require("axios")
const googleTrends = require('google-trends-api')
const app = express()
// var map = new mapboxgl.Map({
//     container: 'map',
//     center: [-122.420679, 37.772537],
//     zoom: 13,
//     style: style_object,
//     hash: true,
//     transformRequest: (url, resourceType)=> {
//     if(resourceType === 'Source' && url.startsWith('http://myHost')) {
//     return {
//     url: url.replace('http', 'https'),
//     headers: { 'my-custom-header': true},
//     credentials: 'include'  // Include cookies for cross-origin requests
//     }
//     }
//     }
//     });

// var markerHeight = 50, markerRadius = 10, linearOffset = 25;
// var popupOffsets = {
// 'top': [0, 0],
// 'top-left': [0,0],
// 'top-right': [0,0],
// 'bottom': [0, -markerHeight],
// 'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
// 'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
// 'left': [markerRadius, (markerHeight - markerRadius) * -1],
// 'right': [-markerRadius, (markerHeight - markerRadius) * -1]
// };

var lat = 19.02829933166504
var lon = 72.86979675292969



var popup = new mapboxgl.Popup()
.setHTML(`Your location  is ${lat}, ${lon}`)
.setMaxWidth("300px");

    var marker = new mapboxgl.Marker({
        color: "red",
        draggable: false
        }).setLngLat([lon,lat ])
        .setPopup(popup)
        .addTo(map);

    // new mapboxgl.Marker({
    //     color: 'Red'
    // })
    // .setLngLat([-118.26486206054688,34.05284881591797])
    // .addTo(map);

    // MY_FUNCTION (
    //     {
    //     //   "ip": "134.201.250.155",
    //     //   "type": "ipv4",
    //     //   "continent_code": "NA",
    //     //   "continent_name": "North America",
    //     //   "country_code": "US",
    //     //   "country_name": "United States",
    //     //   "region_code": "CA",
    //     }
    //   )

    
app.listen(3000,() => {
    console.log("Server up");
})

app.get("/",(req,res) => {
    
})
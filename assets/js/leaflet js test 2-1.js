const map = L.map('mapid').setView([31.2564, -91.9613], 7);
    
    //tile location specification

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
        minZoom: 7,
        maxZoom: 18,
        attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>', 
    }).addTo(map);







//icon definitions
var FountainebleauRuinsIcon5min = L.icon({
    iconUrl: 'FountainebleauBrickFactoryRuins5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});

var AlligatorMarshIcon5min = L.icon({
    iconUrl: 'AlligatorMarsh5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});

var BayouLibertyRuinsIcon5min = L.icon({
    iconUrl: 'BayouLibertyRuins5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});

var BigBranchNWRIcon5min = L.icon({
    iconUrl: 'BigBranchNWRIcon5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});

var FirstStCharlesIcon5min = L.icon({
    iconUrl: 'FirstAndStCharles5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});

var MulattoBendCemeteryIcon5min = L.icon({
    iconUrl: 'MulattoBendCemetery5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});

var AlmaCemeteryIcon5min = L.icon({
    iconUrl: 'AlmaCemetery5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});

var BucktownBirdNestIcon5min = L.icon({
    iconUrl: 'BucktownBirdNest5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});

var CityParkAirfieldIcon5min = L.icon({
    iconUrl: 'CityParkAirfield5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});
       
var CouturieForestTrailIcon5min = L.icon({
    iconUrl: 'CouturieForestTrail5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});
        
var PumpingStation1Icon5min = L.icon({
    iconUrl: 'PumpingStation1_5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});    

var ChalmetteWetlandIcon5min = L.icon({
    iconUrl: 'ChalmetteWetland5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});  

var JacksonSquareIcon5min = L.icon({
    iconUrl: 'JacksonSquare5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});  

var BrassBandIcon5min = L.icon({
    iconUrl: 'BrassBand5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});  

var BourbonStAnneIcon5min = L.icon({
    iconUrl: 'BourbonStAnne5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});  

var BourbonToulouseIcon5min = L.icon({
    iconUrl: 'BourbonToulouse5min.png',

    iconSize:     [100, 100], // size of the icon
    popupAnchor:     [0, -50], // origin of popup
});  



//marker definitions
L.marker([30.337159, -90.038018],{icon:FountainebleauRuinsIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Marigny/Fountainebleau Sugar Mill Ruins')
    .openPopup();

L.marker([30.333147, -90.039685],{icon:AlligatorMarshIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Alligator Marsh Boardwalk')
    .openPopup();

L.marker([30.292726, -89.826879],{icon:BayouLibertyRuinsIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Bayou Liberty Ruins')
    .openPopup();

L.marker([30.268734, -89.955868],{icon:BigBranchNWRIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Big Branch NWR Boat Launch')
    .openPopup();

L.marker([29.932598, -90.082792],{icon:FirstStCharlesIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('First Street and St. Charles Ave Streetcar Stop')
    .openPopup();

L.marker([30.503109, -91.228009],{icon:MulattoBendCemeteryIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Mulatto Bend Cemetery')
    .openPopup();

L.marker([30.597367, -91.383419],{icon:AlmaCemeteryIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Alma Cemetery')
    .openPopup();

L.marker([30.021323, -90.126837],{icon:BucktownBirdNestIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Bucktown Bird Nest')
    .openPopup();

L.marker([30.004078,-90.092503],{icon:CityParkAirfieldIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('City Park Model Airfield')
    .openPopup();

L.marker([30.007084,-90.091961],{icon:CouturieForestTrailIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Couturie Forest Trail')
    .openPopup();

L.marker([29.965956, -89.975911],{icon:PumpingStation1Icon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('St. Bernard Parish Drainage Pumping Station')
    .openPopup();

L.marker([29.965956, -89.975911],{icon:ChalmetteWetlandIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Chalmette Wetland')
    .openPopup();

L.marker([29.957158, -90.063308],{icon:JacksonSquareIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Jackson Square')
    .openPopup();

L.marker([29.957958, -90.064905],{icon:BrassBandIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Brass Band at the Corner of Royal Street and St. Peter Street')
    .openPopup();

L.marker([29.959421, -90.064883],{icon:BourbonStAnneIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Bourbon Street and St. Anne Street')
    .openPopup();

L.marker([29.958274, -90.065975],{icon:BourbonToulouseIcon5min, opacity: 0.53, riseOnHover: 1}).addTo(map)
    .bindPopup('Bourbon Street')
    .openPopup();

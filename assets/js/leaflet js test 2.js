const map = L.map('mapid').setView([31.2564, -91.9613], 7);
    
    //tile location specification

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
        minZoom: 7,
        maxZoom: 18,
        attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>', 
    }).addTo(map);

//icon definitions

    var FirstStCharlesIcon5min = L.icon({
    iconUrl: 'FirstAndStCharles.png',

    iconSize:     [100, 100], // size of the icon
    });

    var FountainebleauRuinsIcon5min = L.icon({
        iconUrl: 'FountainebleauBrickFactoryRuins.png',
    
        iconSize:     [100, 100], // size of the icon
    });
        
    var AlligatorMarshIcon5min = L.icon({
        iconUrl: 'AlligatorMarsh.png',
    
        iconSize:     [100, 100], // size of the icon
    });
        






//marker definitions
L.marker([30.337159, -90.038018],{icon:FountainebleauRuinsIcon5min}).addTo(map)
    .bindPopup('Marigny/Fountainebleau Sugar Mill Ruins')
    .openPopup();

L.marker([30.333147, -90.039685],{icon:AlligatorMarshIcon5min}).addTo(map)
    .bindPopup('Alligator Marsh Boardwalk')
    .openPopup();

L.marker([30.292726, -89.826879]).addTo(map)
    .bindPopup('Bayou Liberty Ruins')
    .openPopup();

L.marker([30.268734, -89.955868]).addTo(map)
    .bindPopup('Big Branch NWR Boat Launch')
    .openPopup();

L.marker([29.932598, -90.082792],{icon:FirstStCharlesIcon5min}).addTo(map)
    .bindPopup('First Street and St. Charles Ave Streetcar Stop')
    .openPopup();

L.marker([30.503109, -91.228009]).addTo(map)
    .bindPopup('Mulatto Bend Cemetery')
    .openPopup();

L.marker([30.597367, -91.383419]).addTo(map)
    .bindPopup('Alma Cemetery')
    .openPopup();

L.marker([30.021323, -90.126837]).addTo(map)
    .bindPopup('Bucktown Bird Nest')
    .openPopup();

L.marker([30.004078,-90.092503]).addTo(map)
    .bindPopup('City Park Model Airfield')
    .openPopup();

L.marker([30.007084,-90.091961]).addTo(map)
    .bindPopup('City Park Lake Isthmus')
    .openPopup();

L.marker([29.965956, -89.975911]).addTo(map)
    .bindPopup('St. Bernard Parish Drainage Pumping Station')
    .openPopup();

L.marker([29.965956, -89.975911]).addTo(map)
    .bindPopup('Chalmette Wetland')
    .openPopup();

L.marker([29.957158, -90.063308]).addTo(map)
    .bindPopup('Jackson Square')
    .openPopup();

L.marker([29.957958, -90.064905]).addTo(map)
    .bindPopup('Brass Band at the Corner of Royal Street and St. Peter Street')
    .openPopup();

L.marker([29.959421, -90.064883]).addTo(map)
    .bindPopup('Bourbon Street and St. Anne Street')
    .openPopup();

L.marker([29.958274, -90.065975]).addTo(map)
    .bindPopup('Bourbon Street')
    .openPopup();

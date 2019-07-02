var polygon_data ;
var co2_year = "co2_"+2010;
var myMap;
final_dat = [];
var streetmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.dark",
  accessToken: API_KEY
});

// Create our map, giving it the streetmap and earthquakes layers to display on load
 myMap = L.map("map", {
  center: [
    0,0
  ],
  zoom: 1,
  layers: [darkmap]
});


function myFunction() {
   switch(document.getElementById("yearRange").value) {
    case "1":
    document.getElementById("mapYear").innerHTML  = "1990";
    co2_year = "co2_"+ "1990";
    break;
    case "2":
    document.getElementById("mapYear").innerHTML  = "2000";
    co2_year = "co2_"+ "2000";
    break;
    case "3":
    document.getElementById("mapYear").innerHTML  = "2009";
    co2_year = "co2_"+ "2009";
    break;
    case "4":
    document.getElementById("mapYear").innerHTML  = "2010";
    co2_year = "co2_"+ "2010";
    break;
    case "5":
    document.getElementById("mapYear").innerHTML  = "2011";
    co2_year = "co2_"+ "2011";
    break;
    case "6":
    document.getElementById("mapYear").innerHTML  = "2012";
    co2_year = "co2_"+ "2012";
    break;
    case "7":
    document.getElementById("mapYear").innerHTML  = "2013";
    co2_year = "co2_"+ "2013";
    break;
    case "8":
    document.getElementById("mapYear").innerHTML  = "2014";
    co2_year = "co2_"+ "2014";
    break;
    default:
      document.getElementById("mapYear").innerHTML  = "2010";
      co2_year = "co2_"+ "2010";
  }

 myMap.remove();

  
// Create our map, giving it the streetmap and earthquakes layers to display on load
 myMap = L.map("map", {
  center: [
    0,0
  ],
  zoom: 1,
  layers: [darkmap]
});
   createFeatures(final_dat,co2_year);


  //get_map(co2_year);
}


function get_map(co2_year){

// Link to GeoJSON
var geojson;
var url = "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson";
d3.json(url , function(data){
 polygon_data = data;
var co2_data ;
d3.csv("../static/js/co2.csv", function(csv_data){
co2_data= csv_data.map(function(x){
if ( x["2014"].length > 0){
 return x;
}
});
var geo_row ;
var final_data = [];
for ( x=0 ; x< co2_data.length ; x++ ){
 //polygon_data.filter(  )
geo_row={};
var geo_tab = polygon_data.features.filter(a=>a.properties.ISO_A3 == co2_data[x]["Country Code"] );  //Naga : Problem in the condition. it should be "==" instead "="
if(geo_tab){
geo_row = geo_tab[0];
};
let n = +co2_data[x]["2014"];
geo_row.properties.co2_2014 = co2_data[x]["2014"]=n.toFixed(2);
n=0;
n = +co2_data[x]["2013"];
geo_row.properties.co2_2013 = co2_data[x]["2013"]=n.toFixed(2);
n=0;
n = +co2_data[x]["2012"];
geo_row.properties.co2_2012 = co2_data[x]["2012"]=n.toFixed(2);
n=0;
n = +co2_data[x]["2011"];
geo_row.properties.co2_2011 = co2_data[x]["2011"]=n.toFixed(2);
n=0;
n = +co2_data[x]["2010"];
geo_row.properties.co2_2010 = co2_data[x]["2010"]=n.toFixed(2);
n=0;
n = +co2_data[x]["2009"];
geo_row.properties.co2_2009 = co2_data[x]["2009"]=n.toFixed(2);
n=0;
n = +co2_data[x]["2000"];
geo_row.properties.co2_2000 = co2_data[x]["2000"]=n.toFixed(2);
n=0;
n = +co2_data[x]["1990"];
geo_row.properties.co2_1990 = co2_data[x]["1990"]=n.toFixed(2);
final_data.push(geo_row);
}
createFeatures(final_data,co2_year);

setTimeout(function(){
  final_dat = Object.assign(final_data);
},10000);
});
 
});
console.log(final_dat);
};


var percentColors = [
  { pct: 0.0, color: { r: 0xff, g: 0x00, b: 0 } },
  { pct: 0.6, color: { r: 0xff, g: 0xff, b: 0 } },
  { pct: 1.0, color: { r: 0x00, g: 0xff, b: 0 } } ];

var getColor = function(pct) {
  for (var i = 1; i < percentColors.length - 1; i++) {
      if (pct < percentColors[i].pct) {
          break;
      }
  }
  var lower = percentColors[i - 1];
  var upper = percentColors[i];
  var range = upper.pct - lower.pct;
  var rangePct = (pct - lower.pct) / range;
  var pctLower = 1 - rangePct;
  var pctUpper = rangePct;
  var color = {
      r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
      g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
      b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
  };
  return 'rgb(' + [color.r, color.g, color.b].join(',') + ')';
  // or output as hex if preferred
} ;



function createFeatures(earthquakeData,co2_year) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.ADMIN + "-" +feature.properties[co2_year]+ "</h4>" );
  };

 



  var geojsonMarkerOptions = {
//radius: 15,
    weight: 1,
    opacity: 0.1,
    fillOpacity: 0.5
};

  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  var earthquakes = L.geoJSON(earthquakeData, {

    onEachFeature: onEachFeature,
    style : function (feature, latlng) {
      geojsonMarkerOptions.fillColor = getColor(1-(feature.properties[co2_year]/22));
      geojsonMarkerOptions.color = getColor(1-(feature.properties[co2_year]/22)); //"#ff7800",
     return  geojsonMarkerOptions;
 }
  });

  // Sending our earthquakes layer to the createMap function
 
  createMap(earthquakes,co2_year);
}

function createMap(earthquakes,co2_year) {

  d3.select("#mapSpin").remove();
  
  // Define streetmap and darkmap layers
 
   myMap.invalidateSize();
   earthquakes.addTo(myMap);
  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function (map) {
  
      var div = L.DomUtil.create('div', 'info legend'),
          grades = [0, 0.1, .2, .5,.6, .8, .9, 1],
          grades2 = [0, 15, 20, 25,30, 35, 40, 45],
          labels = [];
         div.innerHTML += '<p>Metric Tons/Capita</p>' ;
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            
            '<i style="background:' + getColor(1-grades[i]) + '"></i> ' +
            grades2[i] + (grades2[i + 1] ? '&ndash;' + grades2[i + 1]   + '<br>' : '+');
    }
  
      return div;
  };
  
  legend.addTo(myMap);



}


get_map(co2_year);



Highcharts.chart('pie', {
  chart: {
      plotBackgroundColor: 'rgba(255, 255, 255, 0.0)',
      backgroundColor:'rgba(255, 255, 255, 0.0)',
      margin:0,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Greenhouse Gasses',
      style:{color:"white"}
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style:{color:"white"}
              
          }
      }
  },
  series: [{
      name: 'Gas',
      colorByPoint: true,
      data: [  {
          name: 'Methane(CH4)',
          y: 8
      }, 
      {
          name: 'Nitrous Oxide(N2O)',
          y: 4
      },
      {
        name: ' Fluorinated gases (F-gases)',
        y: 2
    },{
      name: 'Carbon dioxide(Co2)',
      y: 34,
      sliced: true,
      selected: true
  }
     
    ]
  }]
});
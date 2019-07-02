var trace1 = {
  x: ["China",	"United States",	"India",	"Russia",	"Japan",	"Germany",	"South Korea",	"Iran",	"Canada",	"Saudi Arabia",	"Brazil",	"Mexico",	"Indonesia",	"South Africa",	"United Kingdom",	"Australia",	"Italy",	"Turkey",	"France",	"Poland"], 
  y: [9040.74,	4997.5,	2066.01,	1468.99,	1141.58,	729.77,	585.99,	552.4,	549.23,	531.46,	450.79,	442.31,	441.91,	427.57,	389.75,	380.93,	330.75,	317.22,	290.49,	282.4  ], 
  name: "Total(Million MetricTons)", 
  marker: {
    color: '#3285bf',
    opacity: 0.5},
  type: "bar"
};

var trace2 = {
  x: ["China",	"United States",	"India",	"Russia",	"Japan",	"Germany",	"South Korea",	"Iran",	"Canada",	"Saudi Arabia",	"Brazil",	"Mexico",	"Indonesia",	"South Africa",	"United Kingdom",	"Australia",	"Italy",	"Turkey",	"France",	"Poland"], 
  y: [6.59,	15.53,	1.58,	10.19,	8.99,	8.93,	11.58,	6.98,	15.32,	16.85,	2.17,	3.66,	1.72,	7.77,	5.99,	15.83,	5.45,	4.1,	4.37,	7.34  ],
  name: "Per Capita(MetricTons)", 
  marker: {
    color: '#73736f',
    opacity: 0.4},
  yaxis: 'y2',
  type: "bar"
};

var data = [trace1, trace2];
var layout = {
  barmode: 'group',
  showlegend: false, 
  paper_bgcolor:'rgba(0,0,0,0)',
  plot_bgcolor:'rgba(0,0,0,0)',
  title:{ text: "2015 - Top 20 Countries by Total CO2 Emissions", font:{color :"white"}},
  xaxis: {
    gridcolor: 'gray', 
    tickfont: {color: '#edf0f2' },
    showline: true, 
    showgrid:false,
    showticklabels: true, 
    zeroline: false
  }, 
  yaxis: {
    title:{ text: "Total Emission(Million MetricTons)", font:{color :'#3285bf'}},
    tickfont: {color: '#3285bf' },
    showgrid:false,
    showline: true, 
    showticklabels: true, 
    zeroline: false
  },
  yaxis2: {
    title:{ text: "PerCapita(MetricTons)", font:{color :'#73736f'}},
    tickfont: { color: '#73736f'},
    overlaying: 'y',
    showgrid:false,
    side: 'right'
  }
};
Plotly.plot('gases', data, layout);

// var data = [{
//   type: 'bar',
//   y: ["Hydroelectric",	"Ocean Energy",	"Wind",	"Nuclear",	"Biomass",	"Solar thermal",	"Geothermal",	"Solar PV",	"Natural gas",	"Coal"],
//   x: [ 4,	8,	12,	16,	18,	22,	45,	46,	469,	1001],
//   text:["reservoir",	"wave and tidal",	"onshore",	"various generation II reactor types",	"various",	"parabolic trough",	"hot dry rock",	"Polycrystalline silicon",	"various combined cycle turbines without scrubbing",	"various generator types without scrubbing"],
//   orientation: 'h'
// }];

// Plotly.plot('sources', data);
var causes = {
  type: 'bar',
  y: ["Hydroelectric",	"Ocean Energy",	"Wind",	"Nuclear",	"Biomass",	"Solar thermal",	"Geothermal",	"Solar PV",	"Natural gas",	"Coal"],
  x: [ 4,	8,	12,	16,	18,	22,	45,	46,	469,	1001],
  text:["reservoir",	"wave and tidal",	"onshore",	"various generation II reactor types",	"various",	"parabolic trough",	"hot dry rock",	"Polycrystalline silicon",	"various combined cycle turbines without scrubbing",	"various generator types without scrubbing"],
  orientation: 'h', 
  marker: {
    color: '#3285bf',
    opacity: 0.5}
};

var layout_c = {
  showlegend: false, 
  paper_bgcolor:'rgba(0,0,0,0)',
  plot_bgcolor:'rgba(0,0,0,0)',
  title:{ text: "Greenhouse-gas emissions of energy sourcess", font:{color :"white"}},

  xaxis: {
    gridcolor: 'gray', 
    tickfont: {color: '#edf0f2' },
    showline: true, 
    showgrid:false,
    showticklabels: true, 
    zeroline: false
  }, 
  yaxis: {
    title:{ text: "Total Emission(Million MetricTons)", font:{color :'#3285bf'}},
    tickfont: {color: '#3285bf' },
    showgrid:false,
    showline: true, 
    showticklabels: true, 
    zeroline: false
  }
};

  var cause_data = [causes];
  Plotly.plot('sources', cause_data, layout_c);



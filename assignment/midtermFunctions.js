/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

/* =====================
Set up map
===================== */

var map = L.map('map', {
  center: [40.000, -75.1090],
  zoom: 11
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

// Get data
var data = "http://data-phl.opendata.arcgis.com/datasets/0707c1f31e2446e881d680b0a5ee54bc_0.geojson";
var featureGroup;

/* =====================
Some useful functions
===================== */
// Parse Geojson file to array
var parseData= function(data){return JSON.parse(data);};

// Make markers for each farmers market
var makeMarkers = function(data) {
  return _.map(data, function(item){return L.marker([item[lat], item[lon]]);});
};

// Plot markers on the map
var plotMarkers = function(markers) {
  return _.map(markers, function(item){return item.addTo(map);});
};

// Assign different colors to specific styles
var style = function(feature){
  switch(feature.properties.NEIGHBORHOOD) {
    case 'Center City': return {fillcolor: "red"};
  }
};

/* =====================
Functions from week 7 lab may be helpful
===================== */
// show result
var showResults = function() {
  $('#intro').hide();
  $('#results').show();
};

// hide result
var hideResults = function() {
  $('#intro').show();
  $('#results').hide();
};

var eachFeatureFunction = function(layer) {
  layer.on('click', function (event) {
    switch (layer.feature.properties.NEIGHBORHOOD) {
      case 'MON': $(".neighborhood").text("Center City");
      break;
      case 'TUE': $(".neighborhood").text("North");
      break;
    }
    console.log(layer.feature.properties.NEIGHBORHOOD);
    showResults();
  });
};

var filter = function(feature) {
  if (){
    return true;
  }else{
    return false;
  }
};

$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = parseData(data);
    featureGroup = L.geoJson(parsedData, {
      style: style,
      filter: filter
    }).addTo(map);

    // quite similar to _.each
    featureGroup.eachLayer(eachFeatureFunction);
  });
});

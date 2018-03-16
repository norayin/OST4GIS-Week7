/* ================================
Week 6 Assignment: Slide Model
================================ */

// Task 1: Prepare geographic data: farmers market (need modification before used through geojson.io)
var dataset = "http://data-phl.opendata.arcgis.com/datasets/0707c1f31e2446e881d680b0a5ee54bc_0.geojson";

// Task 2: Think about slide data
/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */

// Show farmers market name and address and the bus that takes you there
var slide1 = {
  slideNumber: 1,
  title: "All farmers market locations in Philly",
  filter: function(geojsonFeature) { return true; }
};

// Show farmers market open months
var slide2 = {
  slideNumber: 2,
  title: "Farmers market open hours",
  filter: function(geojsonFeature) { return true; }
};

// Show farmers market open day and hours
var slide3 = {
  slideNumber: 2,
  title: "Farmers market open hours",
  filter: function(geojsonFeature) { return true; }
};

// Show farmers market open on weekdends
var slide4 = {
  slideNumber: 3,
  title: "Open Saturday and Sunday",
  filter: function(geojsonFeature) { if(WEEKEND === "Y") {
    return true;
  }else{
  return false;
    }
  }
};

// Show markers market by neighborhood
var slide5 = {
  slideNumber: 4,
  title: "Farmers market by neighborhood",
  filter: function(geojsonFeature) { return true; }
};

// Need another geojson file (neighborhood polygons)
var slide6 = {
  slideNumber: 5,
  title: "Number of farmers markets by neighborhood",
  filter: function(geojsonFeature) { return true; }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slide1, slide2, slide3, slide4, slide5, slide6];

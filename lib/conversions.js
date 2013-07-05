module.exports = function(string) {
  // Search available parsers until one likes what it sees
  var matchedParser = parsers.filter(function(parser){ return parser.testPattern.test(string); })[0];

  if(matchedParser){
    // All parsers convert the supplied value to L/100km, which is what
    // the Measure class expects as input.
    var vStr = matchedParser.valuePattern.exec(string);
    var vNum = conversions[matchedParser.label.replace('/','per') + "_Lper100km"](vStr);
    return new Measure(vNum);
  } else {
    throw "Could not determine the format of the string (mpg, L/100km, etc)";
  }
};

var Measure = function(v){
  this.v = v;
};

Measure.prototype = {
  // Return this measure's value in some given unit
  // Assumes that the unit is correctly spelled and capitalized
  to: function(unit){
    return conversions["Lper100km_" + unit.trim().replace('/','per')](this.v);
  }
};

var parsers = [
  {
    label: "mpg",
    testPattern: /\d*.?\d+\s*mpg/,
    valuePattern: /\d*.?\d+/
  },
  {
    label: "L/100km",
    testPattern: /\d*.?\d+\s*L\/100km/,
    valuePattern: /\d*.?\d+/
  },
  {
    label: "km/L",
    testPattern: /\d*.?\d+\s*km\/L/,
    valuePattern: /\d*.?\d+/
  }
];

var conversions = {

  Lper100km_Lper100km: function(v) {
    return v;
  },
    
  Lper100km_mpg: function(v) {
    return 235.2 / v;
  },

  Lper100km_kmperL: function(v) {
    return 100 / v;
  },

  mpg_Lper100km: function(v) {
    return 235.2 / v;
  },

  kmperL_Lper100km: function(v) {
    return 100 / v;
  },

  km_miles: function(v) {
    return v / 1.609344;
  },

  miles_km: function(v) {
    return v * 1.609344;
  }
};

var consumption = {

  mpg: function(milesTravelled, gallonsConsumed){
    return milesTravelled / gallonsConsumed;
  },

  Lper100km: function(kmTravelled, Lconsumed) {
    return (Lconsumed / kmTravelled) * 100;
  }

};

var range = {

  miles: function(mpg, gallonsRemaining){
    return gallonsRemaining * mpg;
  },

  km: function(Lper100km, litersRemaining){
    return conversions.Lper100km_kmperL(Lper100km) * litersRemaining;
  }

};
module.exports = {

  conversions: {
    
    mpg_Lper100km: function(v) {
      return 235.2 / v;
    },

    Lper100km_mpg: function(v) {
      return 235.2 / v;
    },

    Lper100km_kmperL: function(v) {
      return 100 / v;
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
  },

  consumption: {

    mpg: function(milesTravelled, gallonsConsumed){
      return milesTravelled / gallonsConsumed;
    },

    Lper100km: function(kmTravelled, Lconsumed) {
      return (Lconsumed / kmTravelled) * 100;
    }

  },

  range: {

    miles: function(mpg, gallonsRemaining){
      return gallonsRemaining * mpg;
    },

    km: function(Lper100km, litersRemaining){
      return conversions.Lper100km_kmperL(Lper100km) * litersRemaining;
    }
  }

};
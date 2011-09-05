var scenario = require('gerbil');
var PhoneTap = require('../lib/phonetap.js').PhoneTap;

scenario("PhoneTap - Camera", {
  "setup": function(){
    navigator = new PhoneTap();
  },
  "should get a base64 image from the camera": function(){
    navigator.camera.getPicture(function(image_data){
      assert_equal(image_data.length, 608);
    });
  },
  "should get a message when failing": function(){
    navigator.camera.getPictureFail(function(){}, function(error){
      assert(error);
    });
  }
});

scenario("PhoneTap - Geolocation", {
  "setup": function(){
    var navigator = new PhoneTap();
  },
  "should get a geolocation": function(){
    navigator.geolocation.getCurrentPosition(function(position){
      assert(position.coords.latitude);
      assert(position.coords.longitude);
      assert(position.coords.altitude);
      assert(position.coords.accuracy);
      assert(position.coords.altitudeAccuracy);
      assert(position.coords.heading);
      assert(position.coords.speed);
      assert(new Date(position.timestamp));
    });
  }
});

var scenario = require('gerbil');
var phonetap = require('../lib/phonetap.js');
var PhoneTap = phonetap.PhoneTap;
var Camera = phonetap.Camera;
var navigator = PhoneTap;

scenario("PhoneTap - Camera", {
  "should get a base64 image from the camera": function(){
    navigator.camera.getPicture(function(image_data){
      assert_equal(image_data.length, 608);
    });
  },

  "should get an image path as png": function(){
    var success = function(image_path){
      assert_equal(image_path, "file://localhost/var/mobile/Applications/CF34ES17-032H-G24F-51C7DH34AQWE/tmp/photo_004.png");
    }
    navigator.camera.getPicture(success, function(){}, {
      "encodingType": Camera.EncodingType.PNG,
      "destinationType": Camera.DestinationType.FILE_URI
    });
  },

  "should get a message when failing": function(){
    navigator.camera.getPictureFail(function(){}, function(error){
      assert(error);
    });
  }
});

scenario("PhoneTap - Accelerometer", {
  "should get the current acceleration": function(){
    navigator.accelerometer.getCurrentAcceleration(function(acceleration){
      assert(typeof acceleration.x == 'number');
      assert(typeof acceleration.y == 'number');
      assert(typeof acceleration.z == 'number');
      assert(typeof acceleration.timestamp == 'number');
    });
  },

  "should catch a phantom error": function(){
    navigator.accelerometer.getCurrentAccelerationFail(function(){}, function(){
      assert(true);
    });
  },

  "should get an id for the watch interval and clear it": function(){
    var watch_id = navigator.accelerometer.watchAcceleration(function(acceleration){});
    assert(watch_id);
    navigator.accelerometer.clearWatch(watch_id);
  },
});

scenario("PhoneTap - Geolocation", {
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
  },

  "should get an error object when fails": function(){
    navigator.geolocation.getCurrentPositionFail(function(){}, function(error){
      assert(error.code);
      assert(error.message);
    });
  },
});

scenario("PhoneTap - Splashscreen", {
  "should hide the splashscreen": function(){
    navigator.splashscreen.hide();
    assert(true);
  },
});

(function() {
  var Camera;
  Camera = {
    DestinationType: {
      DATA_URL: 0,
      FILE_URI: 1
    },
    EncodingType: {
      JPEG: 0,
      PNG: 1
    },
    PictureSourceType: {
      PHOTOLIBRARY: 0,
      CAMERA: 1,
      SAVEDPHOTOALBUM: 2
    }
  };
  this.PhoneTap = {
    accelerometer: {
      getCurrentAcceleration: function(success, fail, options) {
        return success({
          x: 0,
          y: 1,
          z: 2,
          timestamp: new Date().getTime()
        });
      },
      getCurrentAccelerationFail: function(success, fail, options) {
        return fail();
      },
      watchAcceleration: function(success, fail, options) {
        var miliseconds;
        if (options == null) {
          options = {};
        }
        miliseconds = options["frequency"] || 1000;
        return setInterval(this.getCurrentAcceleration, miliseconds, success, fail);
      },
      clearWatch: function(watch_id) {
        return clearInterval(watch_id);
      }
    },
    camera: {
      jpeg_data_url: "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHCAgICAgICAgICD/2wBDAQcHBw0MDRgQEBgaFREVGiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAFKABsDAREAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECBAMI/8QAFxABAQEBAAAAAAAAAAAAAAAAABESE//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6pAAAAAAABAAAASgUCgUEAAABAAAASgUCgUAAAAGQAAAKBQKBQQAAAEAAABAAAASgUCgUEAAABAAAASgUCgUEAAABAAAAQAAAEoFAoFBAAAAQAAAEoFAoFAAAABkAAACgUCgUEAAABAAAAQAAAEoFAoFBAAAAQAAAEoFAoFBAAAAQAAAEAAAB47A2BsDYOboB0A6AdAc3QDoB0A6A5tgbA2BsGQAAAf/Z",
      png_data_url: "iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAGElEQVQIW2P4DwcMDAxAfBvMAhEQMYgcACEHG8ELxtbPAAAAAElFTkSuQmCC",
      jpeg_image_path: "file://localhost/var/mobile/Applications/CF34ES17-032H-G24F-51C7DH34AQWE/tmp/photo_004.jpg",
      png_image_path: "file://localhost/var/mobile/Applications/CF34ES17-032H-G24F-51C7DH34AQWE/tmp/photo_004.png",
      getPicture: function(success, fail, options) {
        var image;
        if (options == null) {
          options = {};
        }
        image = options["destinationType"] === Camera.DestinationType.FILE_URI ? options["encodingType"] === Camera.EncodingType.PNG ? this.png_image_path : this.jpeg_image_path : options["encodingType"] === Camera.EncodingType.PNG ? this.png_data_url : this.jpeg_data_url;
        return success(image);
      },
      getPictureFail: function(success, fail, options) {
        var message;
        if (options == null) {
          options = {};
        }
        message = "Image not selected";
        return fail(message);
      }
    },
    geolocation: {
      getCurrentPosition: function(success, fail, options) {
        return success({
          coords: {
            latitude: "-34.912528",
            longitude: "-56.161405",
            altitude: "0",
            accuracy: "1414",
            altitudeAccuracy: "-1",
            heading: "-1",
            speed: "-1"
          },
          timestamp: new Date().getTime()
        });
      },
      getCurrentPositionFail: function(success, fail, options) {
        return fail({
          code: 3,
          message: "Geolocation Error: Timeout."
        });
      }
    },
    splashscreen: {
      hide: function() {}
    }
  };
  if (typeof module !== "undefined" && module !== null) {
    module.exports.Camera = Camera;
  }
}).call(this);

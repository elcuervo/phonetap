(function() {
  this.Camera = (function() {
    function Camera() {}
    Camera.prototype.DestinationType = {
      DATA_URL: 0,
      FILE_URI: 1
    };
    Camera.prototype.EncodingType = {
      JPEG: 0,
      PNG: 1
    };
    Camera.prototype.PictureSourceType = {
      PHOTOLIBRARY: 0,
      CAMERA: 1,
      SAVEDPHOTOALBUM: 2
    };
    return Camera;
  })();
  this.PhoneTap = (function() {
    function PhoneTap() {}
    PhoneTap.prototype.camera = {
      jpeg_data_url: "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHCAgICAgICAgICD/2wBDAQcHBw0MDRgQEBgaFREVGiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAFKABsDAREAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECBAMI/8QAFxABAQEBAAAAAAAAAAAAAAAAABESE//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6pAAAAAAABAAAASgUCgUEAAABAAAASgUCgUAAAAGQAAAKBQKBQQAAAEAAABAAAASgUCgUEAAABAAAASgUCgUEAAABAAAAQAAAEoFAoFBAAAAQAAAEoFAoFAAAABkAAACgUCgUEAAABAAAAQAAAEoFAoFBAAAAQAAAEoFAoFBAAAAQAAAEAAAB47A2BsDYOboB0A6AdAc3QDoB0A6A5tgbA2BsGQAAAf/Z",
      getPicture: function(success, fail, options) {
        return success(this.jpeg_data_url);
      },
      getPictureFail: function(success, fail, options) {
        return fail();
      }
    };
    return PhoneTap;
  })();
}).call(this);

class @Camera
  DestinationType: {
    DATA_URL: 0
    FILE_URI: 1
  }
  EncodingType: {
    JPEG: 0
    PNG:  1
  }
  PictureSourceType: {
    PHOTOLIBRARY: 0
    CAMERA: 1
    SAVEDPHOTOALBUM: 2
  }

class @PhoneTap
  accelerometer: {
    getCurrentAcceleration: (success, fail, options) ->
      success({
        x: 0
        y: 1
        z: 2
        timestamp: new Date().getTime()
      })
  }

  camera: {
    jpeg_data_url: "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHCAgICAgICAgICD/2wBDAQcHBw0MDRgQEBgaFREVGiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAFKABsDAREAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECBAMI/8QAFxABAQEBAAAAAAAAAAAAAAAAABESE//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6pAAAAAAABAAAASgUCgUEAAABAAAASgUCgUAAAAGQAAAKBQKBQQAAAEAAABAAAASgUCgUEAAABAAAASgUCgUEAAABAAAAQAAAEoFAoFBAAAAQAAAEoFAoFAAAABkAAACgUCgUEAAABAAAAQAAAEoFAoFBAAAAQAAAEoFAoFBAAAAQAAAEAAAB47A2BsDYOboB0A6AdAc3QDoB0A6A5tgbA2BsGQAAAf/Z"

    getPicture: (success, fail, options) ->
      success(this.jpeg_data_url)

    getPictureFail: (success, fail, options) ->
      message = "Image not selected"
      fail(message)
  }

  geolocation: {
    getCurrentPosition: (success, fail, options) ->
      success({
        coords: {
          latitude: "-34.912528"
          longitude: "-56.161405"
          altitude: "0"
          accuracy: "1414"
          altitudeAccuracy: "-1"
          heading: "-1"
          speed: "-1"
        }
        timestamp: new Date().getTime()
      })

    getCurrentPositionFail: (success, fail, options) ->
      fail(code: 3, message: "Geolocation Error: Timeout.")
  }

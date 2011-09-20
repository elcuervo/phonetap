Camera =
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

@PhoneTap =
  accelerometer: {
    getCurrentAcceleration: (success, fail, options) ->
      success({
        x: 0
        y: 1
        z: 2
        timestamp: new Date().getTime()
      })

    getCurrentAccelerationFail: (success, fail, options) ->
      fail()

    watchAcceleration: (success, fail, options = {}) ->
      miliseconds = options["frequency"] || 1000
      setInterval(this.getCurrentAcceleration, miliseconds, success, fail)

    clearWatch: (watch_id) ->
      clearInterval(watch_id)
  }

  camera: {
    jpeg_data_url: "/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHCAgICAgICAgICD/2wBDAQcHBw0MDRgQEBgaFREVGiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD/wAARCAFKABsDAREAAhEBAxEB/8QAGQABAQEBAQEAAAAAAAAAAAAAAAECBAMI/8QAFxABAQEBAAAAAAAAAAAAAAAAABESE//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6pAAAAAAABAAAASgUCgUEAAABAAAASgUCgUAAAAGQAAAKBQKBQQAAAEAAABAAAASgUCgUEAAABAAAASgUCgUEAAABAAAAQAAAEoFAoFBAAAAQAAAEoFAoFAAAABkAAACgUCgUEAAABAAAAQAAAEoFAoFBAAAAQAAAEoFAoFBAAAAQAAAEAAAB47A2BsDYOboB0A6AdAc3QDoB0A6A5tgbA2BsGQAAAf/Z"

    png_data_url: "iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAAGElEQVQIW2P4DwcMDAxAfBvMAhEQMYgcACEHG8ELxtbPAAAAAElFTkSuQmCC"

    jpeg_image_path: "file://localhost/var/mobile/Applications/CF34ES17-032H-G24F-51C7DH34AQWE/tmp/photo_004.jpg"

    png_image_path: "file://localhost/var/mobile/Applications/CF34ES17-032H-G24F-51C7DH34AQWE/tmp/photo_004.png"

    getPicture: (success, fail, options = {}) ->
      image =
        if options["destinationType"] is Camera.DestinationType.FILE_URI
          if options["encodingType"] is Camera.EncodingType.PNG
            this.png_image_path
          else
            this.jpeg_image_path
        else
          if options["encodingType"] is Camera.EncodingType.PNG
            this.png_data_url
          else
            this.jpeg_data_url

      success(image)

    getPictureFail: (success, fail, options = {}) ->
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

  splashscreen:
    hide: ->


if module?
  module.exports.Camera = Camera

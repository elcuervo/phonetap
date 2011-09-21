# PhoneTap

![PhoneTap](http://forevernokia.com/wp-content/uploads/2010/12/phone-tap.jpg)

PhoneTap attemps to mock all the PhoneGap behaviour to be able to develop
applications without testing anything in the simulator

## What is this?

A way of developing lib or tools for PhoneGap without to include it or run a simulator.
All the methods (including the non-simulator friendly like 'camera') are included.

## Install?

You can include the javascript if you develop with a browser

```html
<script type="text/javascript" src="https://raw.github.com/elcuervo/phonetap/master/lib/phonetap.js"></script>
```

Or you can use the npm package

```bash
$ npm install phonetap
```

## Usage within Nodejs

```javascript
var phonetap = require('phonetap');
var Camera = phonetap.Camera;
var navigator = phonetap.PhoneTap;
```

## Usage in a browser

Just substitute or route the phonegap.js file with phonetap.js and that's it! now you can use all the fancy tools from PhoneGap

```javascript
navigator.geolocation.getCurrentPosition(function(position){
  alert(position.coords.longitude);
});
```

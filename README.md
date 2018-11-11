# Mapbox | How to use it in a simple front-end project?

## Demo

[Demo link](https://ironhack-berlin-2018-october-ft.github.io/mapbox-intro/)

## Get an API key

To get a key, no need for credit card. You just need to signup in 20 seconds and you will have your key on your account page.

If you are too lazy to create a token, you can use mine (but it might not work in the future): 
`pk.eyJ1IjoibWMxMDBzIiwiYSI6ImNqb2E2ZTF3ODBxa3czd2xldHp1Z2FxbGYifQ.U4oatm5RsTXXHQLz5w66dQ`


## Create a map

You can find all the steps here: https://www.mapbox.com/install/js/

Or you can just copy/paste these `index.html` and `index.js` files.

`index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Mapbox Example</title>

  <!-- The Mapbox JS file to include -->
  <script src="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.js"></script>

  <!-- The Mapbox CSS file to include -->
  <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
</head>
<body>
  <!-- The div to inject the map -->
  <div id="map" style="height: 400px"></div>

  <!-- Our own JS file -->
  <script src="index.js"></script>
</body>
</html>
```


`index.js`
```js
// Add your own token
mapboxgl.accessToken = 'pk.eyJ1IjoibWMxMDBzIiwiYSI6ImNqb2E2ZTF3ODBxa3czd2xldHp1Z2FxbGYifQ.U4oatm5RsTXXHQLz5w66dQ'


let map = new mapboxgl.Map({
  container: 'map', // Select the div with the id 'map'
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [14, 49], // starting position [longitude,latitude]
  zoom: 3, // starting zoom
})

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl())
```

![image](https://user-images.githubusercontent.com/5306791/48318170-9b033c80-e5fc-11e8-8a9f-ae01b2956d23.png)



## Create markers

To create markers, you can refer on [the official documentation about Marker](https://www.mapbox.com/mapbox-gl-js/api/#marker).

Basically, the syntax is 
```js
new mapboxgl.Marker(options)
  .setLngLat([longitude,latitude])
  .addTo(map)
```

`index.js`
```js
// Add your own token
mapboxgl.accessToken = 'pk.eyJ1IjoibWMxMDBzIiwiYSI6ImNqb2E2ZTF3ODBxa3czd2xldHp1Z2FxbGYifQ.U4oatm5RsTXXHQLz5w66dQ'


let map = new mapboxgl.Map({
  container: 'map', // Select the div with the id 'map'
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [14, 49], // starting position [longitude,latitude]
  zoom: 3, // starting zoom
})

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl())

// Add markers in Berlin, Paris, Madrid and Barcelona
let marker1 = new mapboxgl.Marker({
  color: '#222222' // Black
})
  .setLngLat([13.3711224, 52.5063688])
  .addTo(map)

let marker2 = new mapboxgl.Marker({
  color: '#1E4EC5' // Blue
})
  .setLngLat([2.3088019,48.871679])
  .addTo(map)

let marker3 = new mapboxgl.Marker({
  color: '#E83B3B' // Red
})
  .setLngLat([-3.7004556,40.3925362])
  .addTo(map)

let marker4 = new mapboxgl.Marker({
  color: '#E83B3B' // Red
})
  .setLngLat([2.1881113,41.3977391])
  .addTo(map)
```

This is the result you should have

![image](https://user-images.githubusercontent.com/5306791/48318122-0f89ab80-e5fc-11e8-9492-33ec85f75078.png)

## Direction

You can find an example here [here](https://www.mapbox.com/mapbox-gl-js/example/mapbox-gl-directions/).

What you need to do is to add 2 api links in your `<head>` tag.

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- ... -->

  <!-- Direction Service JS file to include -->
  <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v3.1.3/mapbox-gl-directions.js"></script>
  <!-- Direction Service CSS file to include -->
  <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v3.1.3/mapbox-gl-directions.css" type="text/css" />
</head>
```

And you need to add the following code in the end of your `index.js` file.

```js
// Add Direction controls to the map
map.addControl(new MapboxDirections({
  accessToken: mapboxgl.accessToken
}), 'top-left');
```
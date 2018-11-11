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


// Add Direction controls to the map
map.addControl(new MapboxDirections({
  accessToken: mapboxgl.accessToken
}), 'top-left');
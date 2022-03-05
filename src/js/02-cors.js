fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then(r => r.json())
  .then(console.log);

fetch('https://api.darksky.net/forecast/0123456789abcdef9876543210fedcba/40.3601,-71.0589')
  .then(r => r.json())
  .then(console.log);

fetch('https://lpj-weather-service.herokuapp.com/weather?lat=39.916668&lon=116.383331')
  .then(r => r.json())
  .then(console.log);

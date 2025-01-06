// async task
const promises = fetch(
  'http://api.weatherapi.com/v1/current.json?key=eaddda2268c047898bd174251250501&q=London&aqi=yes'
);

// console.log(promises);
// // Promise { <pending> }

// setTimeout(() => {
//   console.log(promises);
// }, 2000);

/*
Promise {
  Response {
    status: 200,
    statusText: 'OK',
    headers: Headers {
      date: 'Sun, 05 Jan 2025 18:00:51 GMT',
      'content-type': 'application/json',
      'transfer-encoding': 'chunked',
      connection: 'keep-alive',
      vary: 'Accept-Encoding',
      server: 'BunnyCDN-SG1-1180',
      'cdn-pullzone': '93447',
      'cdn-uid': '8fa3a04a-75d9-4707-8056-b7b33c8ac7fe',
      'cdn-requestcountrycode': 'IN',
      'cache-control': 'public, max-age=180',
      'content-encoding': 'gzip',
      'x-weatherapi-qpm-left': '5000000',
      'cdn-proxyver': '1.06',
      'cdn-requestpullsuccess': 'True',
      'cdn-requestpullcode': '200',
      'cdn-cachedat': '01/05/2025 18:00:51',
      'cdn-edgestorageid': '782',
      'cdn-status': '200',
      'cdn-requesttime': '0',
      'cdn-requestid': 'd7925cadc6342a253224fd99a41b0d9d',
      'cdn-cache': 'EXPIRED'
    },
    body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
    bodyUsed: false,
    ok: true,
    redirected: false,
    type: 'basic',
    url: 'http://api.weatherapi.com/v1/current.json?key=eaddda2268c047898bd174251250501&q=London&aqi=yes'
  }
}
*/

// promises.then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.log(error);
// })

/*
Response {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    date: 'Sun, 05 Jan 2025 18:03:11 GMT',
    'content-type': 'application/json',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    vary: 'Accept-Encoding',
    server: 'BunnyCDN-SG1-1180',
    'cdn-pullzone': '93447',
    'cdn-uid': '8fa3a04a-75d9-4707-8056-b7b33c8ac7fe',
    'cdn-requestcountrycode': 'IN',
    'cache-control': 'public, max-age=180',
    'content-encoding': 'gzip',
    'x-weatherapi-qpm-left': '5000000',
    'cdn-proxyver': '1.06',
    'cdn-requestpullsuccess': 'True',
    'cdn-requestpullcode': '200',
    'cdn-cachedat': '01/05/2025 18:00:51',
    'cdn-edgestorageid': '782',
    'cdn-status': '200',
    'cdn-requesttime': '0',
    'cdn-requestid': '04c73bf77ae193389a732edd28391981',
    'cdn-cache': 'HIT'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'http://api.weatherapi.com/v1/current.json?key=eaddda2268c047898bd174251250501&q=London&aqi=yes'
}
*/

// promises.then((response) => {
//   // console.log(response.json());
//   // // Promise { <pending> }
//   const promise2 = response.json();
//   promise2.then((data) => {
//     console.log(data);
//   });
// });

/*
{
  location: {
    name: 'London',
    region: 'City of London, Greater London',
    country: 'United Kingdom',
    lat: 51.5171,
    lon: -0.1062,
    tz_id: 'Europe/London',
    localtime_epoch: 1736103673,
    localtime: '2025-01-05 19:01'
  },
  current: {
    last_updated_epoch: 1736103600,
    last_updated: '2025-01-05 19:00',
    temp_c: 10.9,
    temp_f: 51.7,
    is_day: 0,
    condition: {
      text: 'Patchy rain nearby',
      icon: '//cdn.weatherapi.com/weather/64x64/night/176.png',
      code: 1063
    },
    wind_mph: 17,
    wind_kph: 27.4,
    wind_degree: 210,
    wind_dir: 'SSW',
    pressure_mb: 984,
    pressure_in: 29.06,
    precip_mm: 0.13,
    precip_in: 0,
    humidity: 95,
    cloud: 100,
    feelslike_c: 8,
    feelslike_f: 46.3,
    windchill_c: 8,
    windchill_f: 46.3,
    heatindex_c: 10.9,
    heatindex_f: 51.7,
    dewpoint_c: 10.1,
    dewpoint_f: 50.3,
    vis_km: 10,
    vis_miles: 6,
    uv: 0,
    gust_mph: 27.6,
    gust_kph: 44.4,
    air_quality: {
      co: 255.3,
      no2: 24.235,
      o3: 58,
      so2: 3.145,
      pm2_5: 6.845,
      pm10: 10.73,
      'us-epa-index': 1,
      'gb-defra-index': 1
    }
  }
}
*/

// // Alternatively:
// const pro2 = promises.then((response) => {
//   return response.json();
// });

// pro2.then((data) => {
//   console.log(data);
// });

// // Alternatively:
// promises
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// // Alternatively:
// promises.then((response) => response.json()).then((data) => console.log(data));

// // Alternatively:
fetch(
  'http://api.weatherapi.com/v1/current.json?key=eaddda2268c047898bd174251250501&q=London&aqi=yes'
)
  .then((response) => response.json())
  .then((data) => console.log(data.current.temp_f))
  .catch((error) => console.log(error));

// 3 States of Promise Object : pending, resolve, reject

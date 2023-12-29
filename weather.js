function s() {
  let search = document.getElementById("search").value;
  let city = `https://api.openweathermap.org/data/2.5/weather?q=${search.toLowerCase()}&appid=dc06e29bfda4daadf804b9ae6c555659`;

  async function weathers() {
    try {
      let weather1 = await fetch(city);
      weather1 = await weather1.json();
      let {
        weather: [ab],
        main: { temp, pressure, humidity },
        wind: { speed },
        clouds: { all },
        name,
        sys: { country },
      } = weather1;

      let { main } = ab;

      let info = document.getElementById("info");
      info.innerHTML = `   <h1>City :<span>${name}</span></h1><h1>Country :<span>${country}</span></h1>
      <h1>weather :<span>${main}</span></h1>
      <h2>Temperature :<span>${temp}</span></h2>
      <h2>Pressure :<span>${pressure}</span></h2>
      <h2>Humidity :<span>${humidity}</span></h2>
      <h2>Wind :<span>${speed}</span></h2>
      <h2>Clouds :<span>${all}</span></h2>`;
    } catch (err) {
      info.innerHTML = `<h1>No City of That name</h1>`;
    }
  }
  weathers();
}

async function IP() {
  try {
   const Request = await fetch("https://api.ipify.org/?format=json");
    const { ip } = await Request.json();
    const locationRequest = await fetch(`http://ip-api.com/json/${ip}`);
    const location = await locationRequest.json();
    display(location);
  } catch (error) {
    console.error(error);
  }
}

function display(location) {
  const container = document.getElementById("container");
  container.innerHTML = `
  <p>Continent - ${location.continent}<p>
  <p>Country - ${location.country}</p>
  <p>Region - ${location.regionName}</p>
  <p>City - ${location.city}</p>
  <p>District - ${location.district}</p>
  `;
}

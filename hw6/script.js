async function IP() {
  const apiKey = "b22b7525f748431641086486d300a36d";
  try {
    const ipResponse = await fetch("https://api.ipify.org/?format=json");
    const { ip } = await ipResponse.json();
    const locationResponse = await fetch(`http://api.ipstack.com/${ip}?access_key=${apiKey}`);
    const location = await locationResponse.json();
    display(location);
  } catch (error) {
    console.error(error);
  }
}

function display(location) {
  const container = document.getElementById("container");
  container.innerHTML = `
    <p>Continent - ${location.continent_name}<p>
    <p>Country - ${location.country_name}</p>
    <p>Region - ${location.region_name}</p>
    <p>City - ${location.city}</p>
    <p>District - ${location.district || "Not available"}</p>
  `;
}

IP();

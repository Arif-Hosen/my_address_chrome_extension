let ip;
// get public ip address of client
fetch('https://jsonip.com/')
    .then(res => res.json())
    .then(async function ipCall(data) {
        ip = await data.ip;
        ipInfo(ip);
    })
// get client's public ip information
function ipInfo(ip) {
    const url = `https://ipapi.co/${ip}/json/`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log('hello', data)

            // create element
            let country = document.createElement("li");
            let city = document.createElement("li");
            let postal = document.createElement("li");
            let region = document.createElement("li");
            let countryCode = document.createElement("li");
            let countryCallingCode = document.createElement("li");
            let img = document.createElement("img");


            //  assign content
            country.innerText = "Country: " + data.country_name;
            city.innerText = "City: " + data.city;
            postal.innerText = "Postal Code: " + data.postal;
            region.innerText = "Region: " + data.region;
            countryCode.innerText = "Country Code: " + data.country_code;
            countryCallingCode.innerText = "Country Calling Code: " + data.country_calling_code;
            img.src = `https://ipapi.co/static/images/flags/${(data.country_code).toLowerCase()}.png`;

            //   append list to container
            let flag = document.getElementById("flag");
            flag.appendChild(img);
            let listContainer = document.getElementById("details-list-container");
            listContainer.appendChild(country);
            listContainer.appendChild(city);
            listContainer.appendChild(postal);
            listContainer.appendChild(region);
            listContainer.appendChild(countryCode);
            listContainer.appendChild(countryCallingCode);

            let loader = document.getElementById("loader");
            loader.style.display = "none";
        })
}
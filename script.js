const fetch = require("node-fetch");

const URL = "https://worldpopulationreview.com/state-rankings/oil-production-by-state";

fetch( URL, {
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin':'*'
    }
})

.then(response => response.text())
.then(data => console.log(data.substring(data.indexOf("Oil"))))


var div = document.getElementById("plot");

var data = {x: [1, 2, 3],
            y: [4, 5, 6]}

Plotly.plot(div, [data], {margin: {t:0}})
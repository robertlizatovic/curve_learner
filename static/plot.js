var div = document.getElementById("plot");

var data_test = {x: [1, 2, 3], y: [4, 5, 6]};

// an empty object holding the data to plot
var plot_data = {};

// get data from python via AJAX/JQuery
$.getJSON("data", function (data) {
    console.log("data obtained!");
    $.each(data, function (k,v) {
        plot_data[k] = v;
    })
    Plotly.plot(div, [plot_data], {margin: {t:0}})
})

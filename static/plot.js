// get the tag for inserting the plot
var div = document.getElementById("plot");

// an empty object holding the data to plot
//var plot_data = {};

// get data from python via AJAX/JQuery
function get_data() {
    $.getJSON("data", function (data) {
        console.log("data obtained!");
        // reset the plot_data object
        var plot_data = {};
        $.each(data, function (k, v) {
            plot_data[k] = v;
        })
        // plot the data
        Plotly.react(div, [plot_data], {margin: {t: 0}})
    })
}

// register callback on generate button
$("#generate").on("click", get_data);
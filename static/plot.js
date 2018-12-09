// get the tag for inserting the plot
var plotDiv = document.getElementById("plot");

// get data from server via AJAX/jQuery
function get_data() {
    $.getJSON("data", function (data) {
        console.log("data obtained!");
        // reset the plot_data object
        var plot_data = {};
        $.each(data, function (k, v) {
            plot_data[k] = v;
        })
        // plot the data
        Plotly.react(plotDiv, [plot_data], {margin: {t: 0}})
    })
}

// push data to server via AJAX/jQuery
function push_data(){
    console.log(plotDiv.data);
    $.post("data", JSON.stringify(plotDiv.data));
}

// register callback functions
$("#generate").on("click", get_data);
$("#save").on("click", push_data);
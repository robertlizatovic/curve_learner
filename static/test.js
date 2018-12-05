var text = $("#par");

console.log(text.html());

function changeText() {
    if (text.html() === "rob") {
        text.html("bob");
    } else {
        text.html("rob");
    }
}

text.on("click", changeText);

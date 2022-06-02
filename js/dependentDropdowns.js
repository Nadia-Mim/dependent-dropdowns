let jsonr = fetch('./resources/renata.json')
    .then(response => response.json())
    .then(jsonr => searchInfo(jsonr))
    .catch(error => console.log(error));
window.onload = searchInfo = (jsonobj) => {

    var lang = document.getElementById("lng");
    var top = document.getElementById("tpc");
    var lern = document.getElementById("lrn");
    const jsonarr = Object.values(Object.values(jsonobj));
    for (var x of jsonarr) {
        console.log(x)
        lang.options[lang.options.length] = new Option(x["Language"], x["Language"]);
    }
    lang.onchange = function () {
        lern.length = 1;
        top.length = 1;
        for (var y of jsonarr) {
            console.log(y)
            top.options[top.options.length] = new Option(y["Topic"], y["Topic"]);
        }
    }
    top.onchange = function () {
        lern.length = 1;
        for (var z of jsonarr) {
            lern.options[lern.options.length] = new Option(z["Learn"], z["Learn"]);
        }
    }

}
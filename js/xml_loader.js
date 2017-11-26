var solutions = [];
var final_result;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "../xml/krizovka.xml", true);
xhttp.send();

function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var result = xmlDoc.getElementsByTagName("tajnicka")[0].childNodes[0].nodeValue;
    console.log(result);
    var help = xmlDoc.getElementsByTagName("napoveda")[0].childNodes[0].nodeValue;
    console.log(help);
    var solution = xmlDoc.getElementsByTagName("riesenie")[0].childNodes[0].nodeValue;
    console.log(solution);
    for(var i=0; i<result.length; i++ ) {
        var demoHTML = document.getElementById("crossword");
        /*document.getElementById("demo").innerHTML += xmlDoc.getElementsByTagName("napoveda")[i].childNodes[0].nodeValue+'<br>'+
            xmlDoc.getElementsByTagName("riesenie")[i].childNodes[0].nodeValue+'<br>';*/
        var sol1 = xmlDoc.getElementsByTagName("riesenie")[i].childNodes[0].nodeValue;
        var found_match = 0;
        demoHTML.innerHTML += '<div class = "outer_div"></div>';
        solutions.push(sol1);
        final_result = result;
        for(var j=0; j<sol1.length; j++){
            if(result[i]==sol1[j] && found_match!=1) {
                console.log(result[i]);
                found_match = 1;
                demoHTML.innerHTML += '<div class = "crossword_box" id = "actual_crossword" ondrop="drop(event)"' +
                    ' ondragover="allowDrop(event)"></div>';
            }
            else{
                demoHTML.innerHTML += '<div class = "crossword_box"ondrop="drop(event)" ondragover="allowDrop(event)"></div>';
            }
            if(j==sol1.length-1){
                demoHTML.innerHTML +=xmlDoc.getElementsByTagName("napoveda")[i].childNodes[0].nodeValue;
            }
        }
        found_match = 0;
    }

}
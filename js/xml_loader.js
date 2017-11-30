var solutions = [];
var final_result;
var current_level=0;
var arrayOfLetters = [];
var points = 0;
var cookieVar="";
var xmlDoc;
var crosswordSolution;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        xml=this;
        xmlDoc = xml.responseXML;
        myFunction(0);              // 0 - chcek local storage
    }
};
xhttp.open("GET", "../xml/krizovka.xml", true);
xhttp.send();

function myFunction(control) {
    if (control == 0) {
        var chceck = checkLocalStorage();
        if(chceck != null){
            console.log("AAAA");
            states = [];
            document.getElementById("body").innerHTML = chceck;
        }
        else{
            control= 1;
        }
    }
    if (control == 1) {
        localStorage.clear();
        console.log("AAABBB");
        states = [];
        document.getElementById("points_div").innerHTML = 'Points: ';
        arrayOfLetters = [];
        document.getElementById("letters_div").innerHTML = '';
        sol1 = '';
        solutions = [];
        var crossword = xmlDoc.getElementsByTagName("krizovka");
        //console.log(crossword[current_level]);
        var curent_crosswrord = crossword[current_level];
        var result = curent_crosswrord.getElementsByTagName("tajnicka")[0].childNodes[0].nodeValue;
        //console.log(result);
        crosswordSolution = result;
        //console.log(result);
        var help = curent_crosswrord.getElementsByTagName("napoveda")[0].childNodes[0].nodeValue;
        //console.log(help);
        var solution = curent_crosswrord.getElementsByTagName("riesenie")[0].childNodes[0].nodeValue;
        //console.log(solution);
        for (var i = 0; i < result.length; i++) {
            var demoHTML = document.getElementById("crossword");
            /*document.getElementById("demo").innerHTML += xmlDoc.getElementsByTagName("napoveda")[i].childNodes[0].nodeValue+'<br>'+
                xmlDoc.getElementsByTagName("riesenie")[i].childNodes[0].nodeValue+'<br>';*/
            var sol1 = curent_crosswrord.getElementsByTagName("riesenie")[i].childNodes[0].nodeValue;
            var found_match = 0;
            demoHTML.innerHTML += '<div class = "outer_div"></div>';
            solutions.push(sol1);

            final_result = result;
            for (var j = 0; j < sol1.length; j++) {
                //console.log(sol1[j]);
                addToArray(sol1[j]);
                if (result[i] == sol1[j] && found_match != 1) {
                    //console.log(result[i]);
                    found_match = 1;
                    demoHTML.innerHTML += '<div class = "crossword_box" id = "actual_crossword" ' +
                        'ondrop="drop(event)"' +
                        ' ondragover="allowDrop(event)"></div>';
                    //'><div>';
                }
                else {
                    demoHTML.innerHTML += '<div class = "crossword_box"' +
                        'ondrop="drop(event)"' +
                        ' ondragover="allowDrop(event)"></div>';
                    //'></div>';
                }
                if (j == sol1.length - 1) {
                    demoHTML.innerHTML += curent_crosswrord.getElementsByTagName("napoveda")[i].childNodes[0].nodeValue;
                }
            }
            found_match = 0;
        }
        // console.log(arrayOfLetters);
        arrayOfLetters = arrayOfLetters.sort();
        //console.log(arrayOfLetters);
        for (var k = 0; k < arrayOfLetters.length; k++) {

            drawLetters(arrayOfLetters[k], k);
        }
        document.getElementById("points_div").innerHTML += points
    }
}
function addToArray(a) {
    //console.log(a);
    arrayOfLetters.push(a);

}

function drawLetters(a, i) {
    document.getElementById("letters_div").innerHTML+='<div id="'+a+i+'" title="'+a+'" class="letters_cls" ' +
        'draggable="true" ondragstart="drag(event)">'+a+'</div>';
        // '>'+a+'</div>';

}



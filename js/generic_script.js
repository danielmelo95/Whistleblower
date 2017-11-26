var current_div;
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
    current_div= ev.target;

}
function drop(ev) {
    /*var current_string = nodeToString(current_div);
    //console.log(current_string);
    var letter_div = document.getElementById("recycled_letters");
    var control=0;

    for(var i=0; i<letter_div.childElementCount; i++){
        //console.log(letter_div.childNodes[i]);
        if(letter_div.childNodes[i].isEqualNode(current_div)){
            //console.log("ANO SME ROVNAKE");
            control = 1;
        }
    }
    if(control!=1){
        letter_div.innerHTML += current_string;
    }*/

   /*ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));*/
    var hlp_var = null;
    if(ev.target.className != "crossword_box"){
        console.log("A");
        hlp_var = ev.target.parentNode;
        ev.target.parentNode.removeChild(ev.target);
    }
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");

    if(hlp_var!=null){
        hlp_var.appendChild(document.getElementById(data).cloneNode(true));
    }
    else{
        ev.target.appendChild(document.getElementById(data).cloneNode(true));
    }

    hlp_var= null;
}

function nodeToString ( node ) {
    var tmpNode = document.createElement( "div" );
    tmpNode.appendChild( node.cloneNode( true ) );
    var str = tmpNode.innerHTML;
    tmpNode = node = null; // prevent memory leaks in IE
    return str;
}

function validate_crossword(){
    //create array of strings from crossword

    //console.log("aaaa");
    //compare array of strings from xml with array of strings from crossword
    for(var i=0; i<final_result.length; i++){

    }
}

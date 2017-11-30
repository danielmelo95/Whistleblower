var current_div;
var currentState;
var states=[];
//drag and drop source: https://www.w3schools.com/html/html5_draganddrop.asp
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("Text",ev.target.id);
    current_div= ev.target;

}
function drop(ev) {
    console.log('1');
    saveState();

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
        //console.log("A");
        hlp_var = ev.target.parentNode;
        //console.log(ev.target);
        document.getElementById("letters_div").innerHTML+= nodeToString(ev.target);
        ev.target.parentNode.removeChild(ev.target);
    }
/*
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
*/


    //hlp_var= null;
    //hlp_var= null;
    //console.log(ev);
    //ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    //ev.target.appendChild(document.getElementById(data));
    if(hlp_var!=null){
        //hlp_var.appendChild(document.getElementById(data).cloneNode(true));
        hlp_var.appendChild(document.getElementById(data));
        //console.log(document.getElementById(data));
    }
    else{
        //ev.target.appendChild(document.getElementById(data).cloneNode(true));
        ev.target.appendChild(document.getElementById(data));
        //console.log(document.getElementById(data));

    }
    saveToLocalStorage(document.getElementById("body"));

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
    //console.log("AAA");
    var childNodes = 1;
    var crossword_div= document.getElementById("crossword");
    //console.log(crossword_div);
    var crossword_childs = crossword_div.childNodes;
    //console.log(crossword_childs);
    var str='';
    var noaccStr;
    var checkvar= 0;
    var filledCrossword = [];


    /*for(var i=0; i<solutions.length; i++){
        //console.log(solutions[i]);
        var current_sol = solutions[i];


//      console.log(crossword_childs[8]);
        */
    for(var j=0; j<crossword_childs.length; j++) {

        if (!crossword_childs[j].hasChildNodes()) {
            alert("Fill out all spaces");
            return;
        }
    }
            /*str+=''+crossword_childs[childNodes].firstChild.title;
            childNodes++;*/
            //console.log(childNodes);
//     }*/
    for(var j=0; j<crossword_childs.length; j++){
        //console.log(crossword_childs[j].id + "aaa");

        if(crossword_childs[j].id=="actual_crossword"){
            filledCrossword.push(crossword_childs[j].childNodes[0].title);
            //console.log(filledCrossword= crossword_childs[j].childNodes[0].title);
        }
    }
    //console.log(filledCrossword);

    for(var i=0; i<crosswordSolution; i++){
        if(crosswordSolution[i]!=filledCrossword[i]){
            checkvar = 1;
        }
        else {
            checkvar=0;
        }
    }
        childNodes+=2;
        //console.log(childNodes);

       /* if(current_sol == str){
            checkvar = 0;
        }
        else{
            checkvar = 1;
        }*/



    if(checkvar == 0){
        alert("Well done, crossword done...");

        current_level++;
        document.getElementById("crossword").innerHTML = '';
        myFunction(1);    // 1- reset was pressed, do not chceck local storage
   }
    else if(checkvar == 1){
        alert("Something is wrong with your crossword, consider conrrection...");
    }

}

function resetGame() {
    document.getElementById("points_div").innerHTML='Points: '+'';
    document.getElementById("crossword").innerHTML = '';
    document.getElementById("letters_div").innerHTML = '';
    localStorage.clear();
    myFunction(1);
}

function saveState() {
   // createCookie(nodeToString(document.getElementById("body")));
    /*var d = new Date();
    d.setTime(d.getTime() + (365*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();

    document.cookie = "body=" + nodeToString(document.getElementById("body")) + ";" + expires + ";path=/";
    //document.cookie = "body=" + nodeToString(document.getElementById("body"));
    //console.log(document.cookie + "AA");*/
    states.push(nodeToString(document.getElementById("body")));
   // console.log(states[states.length-1]);
    if(states.length>3){
        states.shift();
        //console.log(states);
        //states.length=3;
    }
    // console.log(document.getElementById("body").childNodes);
}

function goBackOneStep() {
    if(states.length==0){
        alert("You can not go further back, sorry");
        return;
    }

    document.getElementById("body").innerHTML='';
   // console.log(states[states.length-1]);
   document.getElementById("body").innerHTML += states[states.length-1];
    states.pop();
    saveToLocalStorage(document.getElementById("body"));

}

function showDate(){
    n =  new Date();
    y = n.getFullYear();
    m = n.getMonth() + 1;
    d = n.getDate();
    //console.log(m + "/" + d + "/" + y);
    document.getElementById("date").innerHTML = d + "/" + m + "/" + y;
    //enableTouchmovement();


}

function enableTouchmovement(){
    $('.letters_cls').draggable();
    $('.letters_cls').sortable();
    $('.letters_cls').disableSelection();
    $( ".crossword_box" ).droppable({
        drop: function( event, ui ) {
            $( this )
                .addClass( "ui-state-highlight" )
                .find( "div" )
            //    .html( "Dropped!" );
        }
    });

}

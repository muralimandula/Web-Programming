var data = '{"questions": [{"question": "Is java a pure object oriented language?", "hint": "java has primitive data types","options": ["Yes", "No"],"answer": "No"}, {"question": "Can you use a HTML file in CSS?", "hint": "we can use css file in html", "options": ["Yes", "No" ],"answer": "No"}, {"question": "JSON stands for JavaScript Object Notation?","hint": "No hint provided","options": ["Yes", "No"],"answer": "Yes"}]}';

var obj = JSON.parse(data);


var i = 0;

while(i < 3) {

    loader(i);

    i++;

 }



function correct(i) {

   if(obj.questions[i].answer == "Yes") {
       document.getElementById(i + "correct").style.visibility = "visible";
   } else {
       document.getElementById(i + "wrong").style.visibility = "visible";
   }
}



function wrong(i) {

   if(obj.questions[i].answer == "No") {

       document.getElementById(i + "correct").style.visibility = "visible";
   } else {
       document.getElementById(i + "wrong").style.visibility = "visible";

   }

}


function loader(i) {
    document.getElementById("demo").innerHTML += 
    
    '<div class = "row" style = "padding-left: 75px; font-size: 25px">' +
        
        '<div>'
             + obj.questions[i].question + 
        '</div>' + '</br>'
        +
        '<div>' + 
        '<button  data-toggle="collapse" data-target="#'+ i +'hint" style="background-color:blanchedalmond">Hint</button>'+   //hint function calling to hide or visible

            '<div id = "'+ i +'hint" class="collapse hintstyle">' +                                    //initially hidden as toogel button
                    obj.questions[i].hint +
            '</div>' +
        '</div>' + '</br>'
        +


        '<input type = "radio" name = '+ i + '"ques" value = "Yes" onclick = correct(' + i +')>&nbsp &nbsp' + obj.questions[i].options[0] +  '<br>' +
        '<input type = "radio" name = '+ i + '"ques" value = "No" onclick = wrong('+ i +')>&nbsp &nbsp' + obj.questions[i].options[1] + '<br>' +


        '<div id = "' + i + 'correct" style = "visibility: hidden; width: 80%">' +
            '<div class = "question alert alert-success alert-dismissable">' +'correct answer'+
                '</div>' +
        '</div>' +


        '<div id = "' + i + 'wrong" style = "visibility: hidden; width: 80%">' +
            '<div class = "question alert alert-danger alert-dismissable">' +'wrong answer'+
            '</div>' + 
    '</div>';
}
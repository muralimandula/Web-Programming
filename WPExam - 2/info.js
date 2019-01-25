var passwordsasstring = "1234-abc-msit-cihl";

var comments = [["Name","Comment"]];


function load() {

    var i = comments.length - 1;
    while (i > 0) {
        loadcomments(i);
        i--;
    }
}

function loadcomments(i) {

    document.getElementById("loadcomments").innerHTML += 
        '<div class="commentdisplay">  <h4> ' + comments[i][1] + '</h4> '+ '</div><div><h6> ' + comments[i][0]  + '</h6></div>';
}

function validate(inputpassword, username, commenttext) {

    if(username == "") {
        document.getElementById("namestatus").style.visibility= 'visible';
    
    }else if(commenttext == "") {
        document.getElementById("namestatus").style.visibility= 'hidden';
        document.getElementById("commentstatus").style.visibility= 'visible';
    
    }else if(inputpassword == "") {
        document.getElementById("commentstatus").style.visibility= 'hidden';
        document.getElementById("passwordblank").style.visibility= 'visible';

    }else if(passwordsasstring.includes(inputpassword)) {
        document.getElementById("loadcomments").innerHTML = "";
        comments.push([username, commenttext]);

        load();
        document.getElementById('username').value = "";
        document.getElementById('commenttext').value = "";
        document.getElementById('inputpassword').value = "";
    }else{
        document.getElementById("passwordstatus").style.visibility="visible";

    }    
}

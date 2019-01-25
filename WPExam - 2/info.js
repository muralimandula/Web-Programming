var info = "1234-abc-msit-cihl";

// var passwords = JSON.parse(info);

var comments = [["1","two"], ["2","three"]];

function load() {
    var i = 0;
    while (i < comments.length-1 ) {
        loadcomments(i);
        i++;
}

}

function loadcomments(i) {

    document.getElementById("loadcomments").innerHTML += 
    '<div>' +
        comments[i][0] + ': ' + comments[i][1]+
    '</div> </br>'


}

function validate(name, commenttext) {

    if(info.includes("abc")) {
        comments.push([name, commenttext]);
        load();

        // document.getElementById("loadcomments").innerHTML = commenttext;

    }

    if(name== "") {
        document.getElementById("namestatus").innerHTML= "cannot be blank";
    }

    if(commenttext == "") {
        document.getElementById("commentstatus").innerHTML= "cannot be blank";

    }
    
}

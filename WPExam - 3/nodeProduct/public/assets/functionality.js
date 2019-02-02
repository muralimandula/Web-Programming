function abort(i) {
    // console.log();
    console.log("checck");
    document.getElementById("editdiv" + i).innerHTML = "";
}

function update(i) {
    
}

function editfield(i) {
    console.log("checking again");
    document.getElementById("editdiv" + i).innerHTML = 
    '<div class="divposition>' +

    '<div class="form-group">' +
        '<label for="title">Change Title:</label>' +
        '<textarea class="form-control" rows="1" id="titlename"></textarea>' +
    '</div>' +

    '<div class="form-group">' +
        '<label for="description">Change Description:</label>' +
        '<textarea class="form-control" rows="2" id="description"></textarea>'+
    '</div>'+

    '<button class="buttonstyle" onclick="update('+i+')">Update</button>' +
    '<button class="buttonstyle" onclick="abort('+i+')">Close</button>' +
    
    '</div>';

}
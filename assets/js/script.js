$(document).ready(function(){
    var noteCount = 0;
    var activeNote = null;
    // colour
    // save
    $('#btn-save').click(function(){
        var title = $('#title-field').val();
        var body = $('#body-field').val();
        var created = new Date();
        var id = noteCount + 1;
        console.log("title = " + title + "body = " + body + "date = " + created.toLocaleString("en-US") + "id = " + id);
    });
    // delete
    // display
});
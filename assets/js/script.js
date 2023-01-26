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
        console.log($('<div id="note' + id + '"><div class="list-title">' + title + '</div> <div class="list-date">' + created.toLocaleString("en-US") + '</div> <div class="list-text">' + body + '</div> </div>'));
    });
    // delete
    // display
});
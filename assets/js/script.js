$(document).ready(function(){
    var noteCount = 0;
    var activeNote = null;
    // colour
    // save button
    $('#btn-save').click(function(){
        // captures note form values
        var title = $('#title-field').val();
        var body = $('#body-field').val();
        // validation
        if (title === '' && body === '') {
          alert ('Please add a title or body to your note.');
          return;
        }
        // new date object
        var created = new Date();
        // retrieves notepad's colour
        var color = $('#notepad').css('background-color');
        // sets the note's id
        var id = noteCount + 1;
        // activeNote tracks whether the note is new or not
        // a note is new if activeNote is null (aka the note does not have an id yet)
        // if the note has an id, activeNote is true
        if (activeNote) {
          // retrieves and updates the child elements of a specific saved note by referencing its id number which is saved as an attribute
          $('#' + activeNote)[0].children[0].innerHTML = title;
          $('#' + activeNote)[0].children[1].innerHTML = created.toLocaleString("en-US");
          $('#' + activeNote)[0].children[2].innerHTML = body;
          $('#' + activeNote)[0].style.backgroundColor = color;
          // sets active note back to null, because the note has been saved
          activeNote = null;
          // hides the "edit mode" subtitle in the headings
          $('#edit-mode').removeClass('display').addClass('no-display');
        } else {
          // if active note is null (aka the note does not have an id yet)
          // create a new date object
          var created = new Date();
          // create a new element and append to the listed div
          // the element is a div with the id number, inline styling with background title
          // the div contains three nested divs each containing the title, date converted to US time formatting, and note body, respectively
          $('#listed').append('<div id="note' + id + '" style="background-color: ' + color + '"><div class="list-title">' + title + '</div> <div class="list-date">' + created.toLocaleString("en-US") + '</div> <div class="list-text">' + body + '</div> </div>');
          // increase the note count id
          noteCount++;
        };
        // reset the note form in both cases
        $('#title-field').val('');
        $('#body-field').val('');
        $('#notepad').css('background-color', 'white');
        $('#title-field').css('background-color', 'white');
        $('#body-field').css('background-color', 'white');
      });
    // delete
    // display
    $('#listed').click(function(e){
        // the div contains three nested divs that actually have elements, so retrieve the id and colour of the parent div (previously saved activeNote)
        var id = e.target.parentElement.id;
        var color = e.target.parentElement.style.backgroundColor;
        activeNote = id;
        // show the edit mode subtitle
        $('#edit-mode').removeClass('no-display').addClass('display');
        // retrieve the values of each child element in the saved note and sets them as the value of the draft note
        var titleSel = $('#' + id)[0].children[0].innerHTML;
        var bodySel = $('#' + id)[0].children[2].innerHTML;
        $('#title-field').val(titleSel);
        $('#body-field').val(bodySel);
        // set the background colour of each of the elements
        $('#notepad').css('background-color', color);
        $('#title-field').css('background-color', color);
        $('#body-field').css('background-color', color);
      })
});
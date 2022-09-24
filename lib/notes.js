const fs = require ('fs');
const path = require ('path');
//creates new note
function createNewNote (body, notesArray){
    const note =body;
    notesArray.push(note);

    //writes file to db.json as a string
    fs.writeFileSync (path.join(__dirname, './db/db.json'), JSON.stringify({ notesArray}));
    return note;
}
//delete note
function deleteNote(id, notes){

    //filter note by element id
    let notesArray =notes.filter(el => {
        if(el.id ==id){
            return false
        }else { return true}
    })
}
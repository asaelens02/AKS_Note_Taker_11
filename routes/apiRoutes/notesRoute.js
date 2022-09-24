const router = require ('express').Router();

// creates route to retrieve new notes and delet notes
const {createNewNote,deleteNote} = require ('../../lib/notes');
//identifies the db.json file as source of notesArray
let {notesArray} = require('../../Develop/db/db.json');


//Gets results from notesArray
router.get('/db', (req, res)=> {
    let results = notesArray;
    res.json(results);
});
//posts new notes to noteArray
router.post( '/db', (req,res)=> {
    if (notesArray){
        req.body.id =notesArray.length.toString();
    }else{ req.body.id =0}
    res.json (createNewNote(req.body, notesArray));

    //id = next index of array
})


//retrieves and deletes note based on id (array index)
router.delete('/db/:id',async (req, res)=>

{const {id} =req.params
notesArray=await deleteNote(id, notesArray);
res.json(notesArray);
});

module.exports =router; 
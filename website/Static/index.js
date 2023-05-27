function deleteNote(noteId){
    fetch("/delete-note", {
        method: 'POST',
        body: JSON.stringift({ noteId: noteId})
    }).then((_res) =>{
        window.location.href ="/";
});
}
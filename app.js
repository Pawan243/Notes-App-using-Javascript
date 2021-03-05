console.log('welcome to notes app')
showNotes();
// if user adds a note, add it to the local storage

let addbtn = document.getElementById('addBtn');
addbtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes")

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);

    showNotes();
})
// function to show elements from local storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1} </h5>
            <p class="card-text">${element} </p>
            <button id = "${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;

    }
    else {
        notesElm.innerHTML = `Nothing to show! use "Add a Note" section above to Add note.`
    }
}

// function to delete a note
function deleteNote(index) {
    console.log("I am deleting", index)
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
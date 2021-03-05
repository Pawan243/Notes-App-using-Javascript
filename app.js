console.log('welcome to notes app')

// if user adds a note, add it to the local storage

let addbtn = document.getElementById('addBtn');
addbtn.addEventListener("click", function(e){
    let addTxt = document.getElementById("addTxt");
    let notes= localStorage.getItem("notes")

    if(notes == null){
        notesObj = [];
    }
    else{
        noteObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);

    showNotes();
})

function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html +=`
        <div id="notes" class="row container-fluid">
            <div class="card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1} </h5>
                    <p class="card-text">${element} </p>
                    <button href="#" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        </div>
        `
    });
    let notesElm = document.getElementById('notes');
    if (notes.length != 0){
        notesElm.innerHTML = html;

    }
}
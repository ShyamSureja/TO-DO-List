console.log("Welcome0");

showNotes();

//If user adds a notes ,add to local storage
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  //text area clear

 // console.log(notesObj);

  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = " ";

  notesObj.forEach(function (element, index) {
    html += `
        <div class=" note Card my-2  mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text"> ${element}</p>
          <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
        `});

        let notesElm=document.getElementById('notes');
        if (notesObj.length != 0) {
         notesElm.innerHTML=html;   
        }
        else{
            notesElm.innerHTML = `Nothing to show! Use "Add a Note" Section above to notes.`;
        }
}

//delete note

function deleteNode(index) {
    console.log("delete",index);

    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
notesObj.splice(index,1);
localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


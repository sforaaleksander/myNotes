let noteId = checkLocalStorageForNoteId();

function checkLocalStorageForNoteId() {
    if (localStorage.getItem("noteId")) {
        let noteNum = parseInt(localStorage.getItem("noteId"));
        // loadNotes(noteNum);
        return noteNum;
    } return 0;
}

// function loadNotes(noteNum) {
//     for (let i=0; i<noteNum; i++) {
//
//     }
//
// }

function createDivBox() {
    const divBox = document.createElement("div");
    divBox.setAttribute("id", "div-box " + noteId.toString());
    divBox.setAttribute("class", "div-box");
    return divBox;
}

function createTitleBox() {
    const titleBox = document.createElement("div");
    titleBox.setAttribute("class", "title-box");
    return titleBox;
}

function createHeader() {
    const header = document.createElement("textarea");
    header.setAttribute("class", "note-header");
    header.setAttribute("contenteditable", "true");
    header.setAttribute("id", "header " + noteId);
    header.innerHTML = "Edit your note's title!";
    header.addEventListener('keypress', saveNote)
    return header;
}

function createDeleteButton() {
    const button = document.createElement("button");
    button.setAttribute("class", "delete-button");
    button.innerHTML = '<img src= ../img/exit-cross.png alt="exit-icon">';
    button.addEventListener('click', deleteNote);
    return button;
}

function createText() {
    const text = document.createElement("textarea");
    text.setAttribute("class", "text");
    text.setAttribute("id", "text " + noteId);
    text.innerHTML = "Write your note!";
    text.addEventListener('keypress', saveNote)
    return text;
}

function createNote() {
    const divBox = createDivBox();
    const titleBox = createTitleBox();
    const header = createHeader();
    const deleteButton = createDeleteButton();
    const text = createText();

    titleBox.appendChild(header);
    titleBox.appendChild(deleteButton);
    divBox.appendChild(titleBox);
    divBox.appendChild(text);

    const container = document.getElementById("container");

    container.appendChild(divBox);
    noteId++;
    console.log("note added");
    localStorage.setItem("noteId", noteId.toString());
}

function saveNote() {
    let object;
    const note = this.value;
    console.log(note);
    const num = this.id.replace("header ", "").replace("text ", "");
    const values = this.id.split(" ");
    if (localStorage.getItem(num) === null) {
         object = {
            "id": num,
        }
    } else {
        object = JSON.parse(localStorage.getItem(num));
    }
    object[values[0]] = note;
    localStorage.removeItem(num);
    localStorage.setItem(num, JSON.stringify(object));
}

function deleteNote() {
    const note = this.parentNode.parentNode;
    note.remove();
}

function main(){
    document.getElementById("add-note-btn").addEventListener('click', createNote);
}

main();
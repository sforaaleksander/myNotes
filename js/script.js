let noteId = 0;

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
    header.innerHTML = "Edit your note's title!";
    return header;
}

function createDeleteButton() {
    const button = document.createElement("button");
    // button.setAttribute("img", )
    button.setAttribute("class", "delete-button");
    button.innerHTML = '<img src= ../img/exit-cross.png alt="exit-icon">';
    // button.style.width = "10%";
    return button;
}

function createText() {
    const text = document.createElement("textarea");
    text.setAttribute("class", "text");
    text.innerHTML = "Write your note!";
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
}

function main(){
    document.getElementById("new-note-btn").addEventListener('click', createNote);
}

main();
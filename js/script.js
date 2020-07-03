let noteId = 0;

function createDivBox() {
    const divBox = document.createElement("div");
    divBox.setAttribute("id", "divBox " + noteId.toString());
    divBox.setAttribute("class", "divBox");
    return divBox;
}

function createTitleBox() {
    const titleBox = document.createElement("div");
    titleBox.setAttribute("class", "titleBox");
    return titleBox;
}

function createHeader() {
    const header = document.createElement("textarea");
    header.setAttribute("class", "noteHeader");
    header.setAttribute("contenteditable", "true");
    header.innerHTML = "Edit your note's title!";
    return header;
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
    const text = createText();

    titleBox.appendChild(header);
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
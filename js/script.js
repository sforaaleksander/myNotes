let noteId = 0;

function createNote() {
    const divBox = document.createElement("div");
    divBox.setAttribute("id", "divBox " + noteId.toString());
    divBox.setAttribute("class", "divBox");

    const titleBox = document.createElement("div");
    titleBox.setAttribute("class", "titleBox");
    const header = document.createElement("textarea");
    header.setAttribute("class", "noteHeader");
    header.setAttribute("contenteditable", "true");

    header.innerHTML = "Edit your note's title!";
    const text = document.createElement("textarea");
    text.setAttribute("class", "text");
    text.innerHTML = "Write your note!";

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
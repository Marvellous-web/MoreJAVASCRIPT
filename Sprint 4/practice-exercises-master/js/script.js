let noteList = [];

let view = "grid"; //default view is grid-view

function saveNote() {
    var tit=document.getElementById("txt").value;
    var cnt=document.getElementById("content").value;
    var obj={
        "title":tit,
        "content":cnt
    };
    noteList.push(obj);
    console.log("hello")
    console.log(noteList);
    createNoteCard(noteList);
   
}

function deleteNote(btn) {
    for (var i = 0; i < noteList.length; i++) 
    {
      btn[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }

}

function clearFields() {
    
}

function fetchNotes() {
    
}

function loadNoteData() {
    
}

function updateNoteData(noteList) {
   
}

function createNoteCard(noteList) {
    var d1=document.getElementById("note-container");
    d1.innerHTML=" ";
    var btn=[];
    for(var i=0;i<noteList.length;i++){
        var d2=document.createElement("div");
        d1.appendChild(d2);
        d2.style.backgroundColor='seagreen';
        d2.style.display='block'
        var titleText=document.createTextNode(noteList[i].title);
        var conText=document.createTextNode(noteList[i].content);

        //creating button for deleting node in notelist array 
        btn[i]=document.createElement("button");
        btn[i].style.width='4%';
        btn[i].style.marginRight='4%'
        btn[i].style.height='15px'
        d2.append(btn[i]);
        d2.appendChild(titleText);
        d2.appendChild(conText);
        // d2.style.width='60%';
        // d2.style.marginLeft='20%'
    }
    deleteNote(btn);
    
   
}

function toggleView() {
    var toggle=document.getElementsByTagName("li")[1];
    toggle.style.display='block'
    
}

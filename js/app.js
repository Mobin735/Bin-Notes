console.log("hello world!");
shownote();

let addbtn = document.getElementById('add_btn');
addbtn.addEventListener("click", function (e) {
    let addtitle = document.getElementById("add_Title");
    let addtext = document.getElementById("add_Txt");
    if (addtext.value == "") {
        alert("Atleast add note!");
        return;
    }
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notes_arr = [];
    } else {
        notes_arr = JSON.parse(notes);
    }
    let myobj = {
        title: addtitle.value,
        text: addtext.value
    }
    notes_arr.push(myobj);
    localStorage.setItem("notes", JSON.stringify(notes_arr));
    addtitle.value = "";
    addtext.value = "";
    shownote();
}
);

function shownote() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        myobj = [];
    } else {
        myobj = JSON.parse(notes);
    }
    let html = "";
    myobj.forEach(function (element) {
        html += `<div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text">${element.text}</p>
                        <a href="#" class="btn btn-primary">Delete</a>
                    </div>
                </div>`;
    });
    let noteshow=document.getElementById("notes");
    if (notes != null) {
        noteshow.innerHTML = html;
    } else {
        noteshow.innerHTML = `<p>Atleast add a note!</p>`;
    }
}    

document.getElementById("reset").addEventListener("click", function(e) {
    localStorage.clear();
    shownote();
});
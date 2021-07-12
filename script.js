console.log("Library")


//contractor
function Book(name, author, type){
    this.name = name;
    this.author = type;
    this.type = type;
}

//Display Books
function Display(){

}

//Add method to display prototype
Display.prototype.add = function(){

}


Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();

}

//Submit Content from form
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    
    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("author").value;

    let motivational = document.getElementById('motivational');
    let programming = document.getElementById('programming');
    let classBook = document.getElementById('classBook');
    let others = document.getElementById('others');
     let type;
    if(motivational.checked){
       type = motivational.value;
    }
    else if(classBook.checked){
        type = classBook.value;

    }
    else if(programming.checked){
        type = programming.value;

    }
    
    else if(others.checked){
        type = others.value;
    }
    
    
   let book = new Book(bookName, authorName, type);

   let display = new Display();

   display.add(book);
   display.clear();
    e.preventDefault();

    
}

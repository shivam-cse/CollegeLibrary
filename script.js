console.log("Library")


//contractor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display Books
function Display(){

}

let count = 1;
//Add method to display prototype
Display.prototype.add = function(book){
    let tableBody = document.getElementById('tableBody');
     
    let uiString = `
                    <tr>
                        <th scope="row">${count}</th>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>
                   ` 
    tableBody.innerHTML += uiString;
    count++;
}


Display.prototype.clear = function(){
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();

}

 
Display.prototype.show = function(type, message){
       let msg = document.getElementById('msg');
       msg.innerHTML = `
                <div class="alert alert-${type} alert-dismissible fade show" role="alert">
                    <strong>Message!</strong>${message}
                </div>
       ` 
       setTimeout(function(){
           msg.innerHTML = "";
       }, 3000);
}


Display.prototype.validate = function(book){
        if(book.name.length < 2 || book.author.length < 2){
            return false;
        }

        else
        return true;

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
 
   if(display.validate(book)){
    display.add(book);
    display.clear();
    display.show('success', ' Your book successfully has been added.');
   }
   else{
       display.show('danger', ' Sorry You can not add it');
   }
    e.preventDefault();

    
}

const todo_input = document.querySelector('.todo_input');
const todo_btn = document.querySelector('.todo_btn');
const filter_opt = document.querySelector('.filter_todo');
const todo_list = document.querySelector('.todo_list');

todo_btn.addEventListener('click', addTodo);
filter_opt.addEventListener('change', filterWork);
todo_list.addEventListener('click', deleteCheck);
function addTodo(event) {
    event.preventDefault();

    if(todo_input.value === "") {
        return null;
    } else {
        //Creating new ToDo elements:
        let todo_div = document.createElement("div");
        let todo_li = document.createElement("li");
        todo_li.innerText = todo_input.value;
        
        let complete_btn = document.createElement("button");
        complete_btn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
        
        let delete_btn = document.createElement("button");
        delete_btn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';

        //Appending new ToDo elements:
        todo_div.appendChild(todo_li);
        todo_list.appendChild(todo_div);
        todo_div.appendChild(complete_btn);
        todo_div.appendChild(delete_btn);

        //Adding class to ToDo elements:
        todo_div.classList.add("todo");
        complete_btn.classList.add("complete_btn");
        delete_btn.classList.add("delete_btn");

        //Clearing todo input value
        todo_input.value = "";
        }
    }
    

//Marking each work as completed or removing it from the list:

function deleteCheck(e) {
    // Checking which button has been clicked, if delete or complete.
    let button = e.target;
    let work = button.parentNode;
    // If the user clicks the delete button:
    if (button.classList[0] == 'delete_btn') {
        work.classList.add("fall");
        work.addEventListener('transitionend', function() {
            work.remove();
        });
    // If the user clicks the complete button:
    } else if (button.classList[0] == 'complete_btn') {
        work.classList.toggle('completedItem');
    };
}
 

function filterWork(e) {
// Defining a variable that grabs the filter selected.
    let filter = e.target.value;

// Defining an array that grabs all the works added to the list (node list);
    let filteredWork = todo_list.childNodes;

for (let i=0; i<filteredWork.length; i++) {
    if (filteredWork[i].contains("completedItem")) {
        console.log(filteredWork[i]); 
    } else {
        console.log('none'); 
    }
}
/*switch(filter){
    case 'completed':
        if (element.classList.contains("completedItem")) {
            element.style.display = "flex";
        } else {
            element.style.display = "none";
        }
        break;
    case 'uncompleted':
        if (element.classList.contains("completedItem")) {
            element.style.display = "none";
        } else {
            element.style.display = "flex";
        }
        break;    
    case 'all':
            element.style.display = "flex";
            break;     
    default:
        element.style.display = "flex";
}
})
*/
}
//Problem: User interaction doesn't provide desired results.
//Solution: Add interactivity so the user can manage daily tasks.

var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0] // first button
var incompleteTaskHolder = document.getElementById("incomplete-tasks"); //incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //completed-tasks


//New task list item
var createNewTaskElement = function(taskString){
  //Create List item
  var listem = document.createElement("li");

  //Input checkbox
var checkBox = document.createElement("input"); //checkBox
  //label
  var label = document.createElement("label");
  //input (text)
  var editInput = document.createElement("input");
  //button.Edit
    var editButton = document.createElement("button");
  //button.Delete
    var deleteButton = document.createElement("button");


  //each elements, needs modifying
  checkbox.type = "checkbox";
  editInput.type = "text";

  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete"
  deleteButton.className = "delete"

  label.innerText = taskString;

  //each element needs appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

//Add a new task
var addTask = function(){
  //ACreate new liste item witht he text from #new-task
  var listItem = createNewTaskElement(taskInput.value);
 //Append listItem to incompleteTasksHolder
 incompleteTasksHolder.appendChild(listItem);
 bindTaskEvents(listItem, taskCompleted);
 taskInput.value = "";
    }

//Edit an exisiting task
var editTask = function {
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");

      var containsClass = listItem.classList.contains("editMode");
    //If the class of the parent is .editmode

    if(containsClass) {
      //Switch from .editmode
      //label text become the inputs value
      label.innerText = editInput.value;
  } else {}
      //Switch to .editmode
      //Input value become the label's text
      editInput.value = label.innerText;
    }
      //Toggle .editmode on the list item
      listItem.classList.toggle("editMode");
      }

var deleteTask - function(){
//Delete an exisiting task
   var listItem = this.parentNode;
   var ul = listItem.parentNode;
   ul.removeChild(listItem);
}

//Mark a task as complete
var taskCompleted = function(){
    //Append the task item to the #completed-tasks
    var listItem = this.parentNode;
    completedTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
  }

//Mark task as incomplete
var taskIncomplete = function(){
    //Append the task list item to the #completed-tasks
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler){
  //Selects tasklists items children
  var checkBox = taskListItem.querySelector("input[type=checkBox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");

  //bind editTask to edit button
  editButton.onclick = editTask;

  //bind deleteTask to delete button
  deleteButton.onlick = deleteTask;
  //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
  }
  var ajaxRequest = function(){
console.log("AJAX Request");
  }
//Set the click handler to the addTask function.
addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);


//Cycle over incompleteTaskHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++){
    //bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
  }
    //Cycle over completedTaskHolder ul list items
    for(var i = 0; i < completedTasksHolder.children.length; i++){
        //bind events to list item's children (taskIncomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
      }

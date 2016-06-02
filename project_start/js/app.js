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

  //each element needs appending
  return listItem;
}

//Add a new task
var addTask = function(){
  //ACreate new liste item witht he text from #new-task
  var listItem = createNewTaskElement("some new task");


 //Append listItem to incompleteTasksHolder
    }

//Edit an exisiting task
var editTask = function {


  //When the edit button is pressed
    //If the class of the parent is .editmode
      //Switch from .editmode
      //label text become the inputs value
    //else
      //Switch to .editmode
      //Input value become the label's text

      //Toggle .editmode on the parent
      }

var deleteTask - function(){

//Delete an exisiting task
  //When the delete button is pressed
   //Remove the parent list item from the ul
}

//Mark a task as complete
var taskCompleted = function(){

  //When the Checkbox is checked
    //Append the task item to the #completed-tasks

  }

//Mark task as incomplete
var taskIncomplete = function(){

  //When the checkbox is unchecked
    //Append the task list item to the #completed-tasks
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
//Set the click handler to the addTask function.
addButton.onclick = addTask;

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

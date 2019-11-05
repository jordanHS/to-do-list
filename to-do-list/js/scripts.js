
//Business Logic for Chores
function listBook() {
  this.tasks = [],
  this.currentId = 0
}

listBook.prototype.addtask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

listBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

listBook.prototype.findTask = function(id) {
  for (var i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  };
  return false;
}

listBook.prototype.deleteTask = function(id) {
  for (var i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}

// Business Logic for Chores---------
function toDo (chore) {
  this.chore = chore
}
toDo.prototype.fullList = function() {
  return this.chore;
}
// user interface logic
var ListBook = new listBook();

$(document).ready(function() {
  // attachListListeners();
  console.log("This part is working");
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var inputtedTask = $("input#newList").val();
    console.log(inputtedTask);
    console.log("hellllo");
    var testChore = new chore(inputtedTask);
    listBook.addContact(newTask);
  });
});

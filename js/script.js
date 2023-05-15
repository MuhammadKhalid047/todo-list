  function toggleFunction() {
    var x = document.getElementById("nav-bar");
    x.classList.toggle("nav-toggle");
    var y = document.getElementsByClassName("detail")[0];
    y.classList.toggle("detail-display");
    var z = document.getElementsByTagName("body")[0];
    z.classList.toggle("body-margin");
  }


  function toggleRight(){
    var x = document.getElementsByClassName("right-slider")[0];
    x.classList.toggle("right-slider-toggle");
    var z = document.getElementsByTagName("body")[0];
    z.classList.toggle("body-right-slider");
  }

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  document.getElementById("today").innerHTML = today ;

  window.onload = function() {
    loadTasks();
  };
  
  function colorChange(){
    var listcol = document.getElementById("list");
    var value = listcol.value;
    if (value === "personal") {
      categorySpan.innerHTML = '<span class="green"></span>Personal';
    } else if(value === "Work"){
      categorySpan.innerHTML = '<span class="red"></span>Work';
    }else{
      categorySpan.innerHTML = '<span class="blue"></span>Friends';
    }
  }
  function newTask() {
    var inputTitle = document.getElementById("inputTitle");
    var descriptionInput = document.getElementById('inputDescription');
    var listInput = document.getElementById('list');
    var dueDateInput = document.getElementById('due-date');
    var subtaskList = document.getElementById("subtaskList");
    
    
    var inputTitleValue = inputTitle.value;
    var descriptionInputValue = descriptionInput.value;
    var listInputValue = listInput.value;
    var dueDateInputValue = dueDateInput.value;
    var subtaskListValue = subtaskList.value;
    
    if (inputTitleValue.trim() === "" || descriptionInputValue.trim() === "") {
      alert("Please enter a Title.");
      return;
    }
  
    var tasks = getTasks();
    tasks.push({
      title: inputTitleValue,
      description: descriptionInputValue,
      list: listInputValue,
      dueDate: dueDateInputValue,
      subTask :subtaskListValue
    });
  
    localStorage.setItem("tasks", JSON.stringify(tasks));
    inputTitle.value = "";
    descriptionInput.value = "";
    listInput.value = "";
    dueDateInput.value = "";
    subtaskList.value = "";
    displayTasks();
  }
  
  function editTask(index) {
    var tasks = getTasks();
    var task = tasks[index];
    
    var inputTitle = document.getElementById("inputTitle");
    var descriptionInput = document.getElementById('inputDescription');
    var listInput = document.getElementById('list');
    var dueDateInput = document.getElementById('due-date');
    
    inputTitle.value = task.title;
    descriptionInput.value = task.description;
    listInput.value = task.list;
    dueDateInput.value = task.dueDate;
    
    tasks.splice(index, 1);
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
  

  function removeTask(index) {
    var tasks = getTasks();
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
  
  function getTasks() {
    var tasks = localStorage.getItem("tasks");
    if (tasks) {
      return JSON.parse(tasks);
    }
    return [];
  }
 

  function displayTasks() {
    var todoList = document.getElementById("toboCheck");
    todoList.innerHTML = "";
  
    var tasks = getTasks();
    for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
      var title = task.title;
      var description = task.description;
      var list = task.list;
      var dueDate = task.dueDate;
      var subTask = task.subTask;
  
      var newItem = document.createElement('li');
      newItem.className = 'd-flex align-items-center justify-content-space-between toboCheckli';
      var listClass = '';
        if (list === 'Work') {
          listClass = 'red';
        } else if (list === 'Friends') {
          listClass = 'blue';
        }else{
          listClass = 'green';
        }
        
      newItem.innerHTML = `
      <div class="">
        <div class="p-1 d-flex gap-2 todo-li">
          <input type="checkbox" name="task" id="taskCheck" value="task">
          <label for="task">${title}</label>
        </div>
        <div class="todo-li-date d-flex align-items-center gap-2">
          <span class="d-flex gap-1 align-items-center font-12 p-1"><img src="img/calendar.png" alt="" width="15px">${dueDate}</span>
          <span class="d-flex gap-1 align-items-center font-12 p-1"><span class="subtaskCount">0</span>Subtasks</span>
          <span class="d-flex gap-1 align-items-center font-12 p-1"><span class="${listClass}"></span>${list}</span>                        
          <a href="detail.html" class="font-12 p-1 font-bold transition-3 moreHover pointer" onclick="dropdown()">More</a>
        </div>
        <div class="dropdown-content d-noe mt-2" id="dropdown">
          <h4>Description</h4>
          <p class="font-14 mt-2">${description}</p>
          <h4 class="mt-2">Subtasks</h4>
          <ol class="subtaskAdd font-14 d-flex-col gap-1 mt-2 listStyle-decimal">
            ${subTask}
          </ol>
        </div>
      </div>
      
      `;
      var deleteLink = document.createElement('a');
      deleteLink.href = "#";
      deleteLink.className = "position-relative hover-drop";

      var deleteImage = document.createElement('img');
      deleteImage.src = "img/ellipsis.png";
      deleteImage.alt = "Bar";
      deleteImage.width = "17px";

      var dropdownItems = document.createElement('div');
      dropdownItems.className = "d-flex-col dropdownItems position-absolute";

      var editSpan = document.createElement('span');
      editSpan.textContent = "Edit";
      editSpan.onclick=(function(index) {
        return function() {
          editTask(index);
        };
      })(i);

      var deleteSpan = document.createElement('span');
      deleteSpan.textContent = "Delete";
      deleteSpan.onclick = (function(index) {
        return function() {
          removeTask(index);
        };
      })(i);

      dropdownItems.appendChild(editSpan);
      dropdownItems.appendChild(deleteSpan);

      deleteLink.appendChild(deleteImage);
      deleteLink.appendChild(dropdownItems);

      var deleteContainer = document.createElement('div');
      deleteContainer.appendChild(deleteLink);
      newItem.appendChild(deleteContainer);

      todoList.appendChild(newItem);

    }
  }

  function loadTasks() {
     getTasks();
    displayTasks();
  }


  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("subtaskInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("subtaskList").appendChild(li);
    }
    document.getElementById("subtaskInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
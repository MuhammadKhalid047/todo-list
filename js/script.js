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
  function dropdown(){
    var x = document.getElementById("dropdown");
    x.classList.toggle("d-none");
  }
  function newTask() {
    var li = document.createElement("li");
    li.classList.add("d-flex","toboCheckli", "align-items-center", "justify-content-space-between");
    var liLength = document.getElementsByClassName("toboCheckli").length;
    document.getElementsByClassName("todoCount")[0].innerHTML = liLength;
    document.getElementsByClassName("todayTask")[0].innerHTML = liLength;
    
    var inputTitle = document.getElementById("inputTitle").value;
    var inputDescription = document.getElementById("inputDescription").value;
    var dueDate = document.getElementById("due-date").value;
    var subtaskList = document.getElementById("subtaskList").value;
    var a = document.createTextNode(inputTitle);
    var b = document.createTextNode(inputDescription);
    var d = document.createTextNode(dueDate);
    var e = document.createTextNode(subtaskList);
    var div1 = document.createElement("div");

    var innerDiv = document.createElement("div");
    innerDiv.classList.add("p-1", "d-flex", "gap-2", "todo-li");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "task";
    checkbox.id = "task";
    checkbox.value = "task";

    var label = document.createElement("label");
    label.htmlFor = "task";
    label.appendChild(a);

    innerDiv.appendChild(checkbox);
    innerDiv.appendChild(label);

    var dateDiv = document.createElement("div");
    dateDiv.classList.add("todo-li-date", "d-flex", "gap-2");

    var dateSpan = document.createElement("span");
    dateSpan.classList.add("d-flex", "gap-1", "align-items-center", "font-12", "p-1");
    dateSpan.innerHTML = '<img src="img/calendar.png" alt="" width="15px">';
    dateSpan.appendChild(d);

    var subtaskSpan = document.createElement("span");
    subtaskSpan.classList.add("d-flex", "gap-1", "align-items-center", "font-12", "p-1");
    subtaskSpan.innerHTML = '<span class="subtaskCount">'+ document.getElementById("subtaskList").getElementsByTagName("li").length+'</span>Subtasks';

    var categorySpan = document.createElement("span");
    categorySpan.classList.add("d-flex", "gap-1", "align-items-center", "font-12", "p-1");
    var listcol = document.getElementById("list");
    var value = listcol.value;
    if (value === "personal") {
      categorySpan.innerHTML = '<span class="green"></span>Personal';
    } else if(value === "Work"){
      categorySpan.innerHTML = '<span class="red"></span>Work';
    }else{
      categorySpan.innerHTML = '<span class="blue"></span>Friends';
    }

    var descriptionSub = document.createElement("p");
    descriptionSub.classList.add("font-12","moreHover","font-bold", "p-1" ,"pointer");
    descriptionSub.onclick = dropdown;
    descriptionSub.innerHTML ="More"

    var descriptionSubtask = document.createElement("div");
    descriptionSubtask.classList.add("dropdown-content","d-none","mt-2")
    var descriptiontag =document.createElement("h4");
    descriptiontag.innerHTML = "Description"
    var descriptionPara = document.createElement("p");
    descriptionPara.classList.add("font-14","mt-2");
    descriptionPara.appendChild(b);
    var subtasktag =document.createElement("h4");
    subtasktag.classList.add("mt-2");
    subtasktag.innerHTML ="Subtasks";
    var olSubtaskAdd = document.createElement("ol");
    olSubtaskAdd.classList.add("subtaskAdd","font-14","d-flex-col","gap-1","mt-2","listStyle-decimal")
    var liSubtaskAdd = document.createElement("li");
    liSubtaskAdd.classList.add("listStyle-decimal");
    liSubtaskAdd.appendChild(e);
    olSubtaskAdd.appendChild(liSubtaskAdd);
    dateDiv.appendChild(dateSpan);
    dateDiv.appendChild(subtaskSpan);
    dateDiv.appendChild(categorySpan);
    dateDiv.appendChild(descriptionSub);
    descriptionSubtask.appendChild(descriptiontag);
    descriptionSubtask.appendChild(descriptionPara);
    descriptionSubtask.appendChild(subtasktag);
    descriptionSubtask.appendChild(olSubtaskAdd);
    div1.appendChild(innerDiv);
    div1.appendChild(dateDiv);
    div1.appendChild(descriptionSubtask);

    var div2 = document.createElement("div");

    var link = document.createElement("a");
    link.href = "#";
    link.onclick = toggleRight;
    link.innerHTML = '<img src="img/more-than.png" alt="" width="20px">'

    // var img = document.createElement("img");
    // img.src = "img/more-than.png";
    // img.alt = "Arrow";
    // img.width = "20px";

    // link.appendChild(img);

    div2.appendChild(link);
    
    li.appendChild(div1);
    li.appendChild(div2);

    // li.appendChild(a);
    // li.appendChild(b);
    // li.appendChild(d);
    // li.appendChild(e);
    if (inputTitle === "" || inputDescription === "" || dueDate === ""|| subtaskList === "") {
      alert("Fill the todo");
    } else {
      document.getElementById("toboCheck").appendChild(li) = html;
    }
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputDescription").value ="";
    document.getElementById("due-date").value = "";
    document.getElementById("subtaskList").value ="";
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

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("today").innerHTML = today ;
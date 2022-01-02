var btn = document.querySelector("#btn");
var container = document.querySelector("#container");
btn.style.display = "none";

container.addEventListener("click", getClickPosition, false);
function getClickPosition(e) {
if(btn.style.display == "block"){
    btn.style.display = "none";
}
else{
    
        var xPosition = e.clientX - 50;
        var yPosition = e.clientY - 140;
    
        var translate3dValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    
        btn.style.transform = translate3dValue;
        btn.style.display = "block";
}
    
}


   /* function show_alert() {
        var promptShow = prompt("Enter file name");
        var newButton = document.getElementById("new-btns");
        newButton.innerHTML = `<button class="btn-style">${promptShow}</button>
        <ul>
        <li>Rename</li>
        <li>Delete</li>
        </ul>
        
        `;
       
    }*/


/* const newButtons = document.getElementById("new-btns");

btn.addEventListener("click", AddNew);

function AddNew() {
  var promptShow = prompt("Enter file name");
  const newButton = document.createElement("button");
  if(promptShow != 0){
    newButton.innerText = promptShow;
    newButton.classList.add("btn-style");
    newButtons.appendChild(newButton);
  }
  else{
      alert('Enter file Name');
  }
} */

showFile();
btn.addEventListener("click", AddNew);

function AddNew() {
  var promptShow = prompt("Enter file name");
  //const newButton = document.createElement("button");
  if(promptShow.trim() != 0){
    let webFile = localStorage.getItem("localfile");
    if (webFile == null){
      fileObj = [];
    }
    else{
      fileObj = JSON.parse(webFile);
    }
    fileObj.push({'file_name': promptShow});
    localStorage.setItem("localfile", JSON.stringify(fileObj));
  }
  else{
      alert('Enter file Name');
  }
  showFile();
}

function showFile(){
  let webFile = localStorage.getItem("localfile");
  if(webFile == null){
    fileObj = [];
  }
  else{
    fileObj = JSON.parse(webFile);
  }
  let html = '';
  let addFileList = document.getElementById("new-btns");
  fileObj.forEach((item1, index) => {
    html += `<div class="dropdown">
    <button class="dropbtn btn-style">${item1.file_name}</button>
    <div class="dropdown-content">
      <button class="btn-style" onclick="renameFile(${index})">Rename</button></br>
      <button class="btn-style" onclick="deleteitem(${index})">Delete</button>
    </div>
  </div>`
  
  })
  addFileList.innerHTML = html;
}

function renameFile(index) {

  var promptindex = prompt('Edit file name:');

  let webFile = localStorage.getItem("localfile");
  let fileObj = JSON.parse(webFile);

  console.log(index);

  if(promptindex!=null){
    fileObj[index].file_name = promptindex;
  localStorage.setItem("localfile", JSON.stringify(fileObj));
  location.reload();
  }


}


function deleteitem(index){
  let webFile = localStorage.getItem("localfile");
  let fileObj = JSON.parse(webFile);
  fileObj.splice(index, 1);
  localStorage.setItem("localfile", JSON.stringify(fileObj));
  showFile();
}



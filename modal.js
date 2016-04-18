window.onload = function(){
  var hideFolder = document.getElementById("hide-folder");
  var folderDiv = document.getElementById("folder-div");
  var mainDiv = document.getElementById("main-div");
  var tableMargin = document.getElementById("table");
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // hides the folder protion
  hideFolder.onclick = function() {
    if (folderDiv.style.display=="" || folderDiv.style.display=="block"){
      folderDiv.style.display = "none";
      mainDiv.style.width = "100%";
      tableMargin.style.marginLeft = "25%";
    }
    else{
      folderDiv.style.display = "block";
      mainDiv.style.width = "74%";
      tableMargin.style.marginLeft = "20%";
    }
  }

  // When the user clicks the button, open the modal
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
};

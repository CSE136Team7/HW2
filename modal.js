// When the user clicks the button, open the modal
var showModal;
var closeModal;
var saveModal;

var showModal_folder;
var closeModal_folder;
var saveModal_folder;

window.onload = function(){
	  var tableMargin = document.getElementById("table");
  var hideFolder = document.getElementById("hide-folder");
  var folderDiv = document.getElementById("folder-div");
  var mainDiv = document.getElementById("main-div");

  // Get the modal
  var modal = document.getElementById('myModal');
  var modal_folder = document.getElementById('myModal-folder');

  // Get the button that opens the modal
  //var btn = document.getElementsById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // hides the folder protion
  hideFolder.onclick = function() {
    if (folderDiv.className==="three columns on-folder"){
    	folderDiv.className = "three columns off-folder";
      //folderDiv.style.display = "none";
      mainDiv.className = "nine columns off-main";
    	//mainDiv.style.width = "100%";
      tableMargin.className = "u-max-full-width off-table";
      //tableMargin.style.marginLeft = "25%";
    }
    else{
    	folderDiv.className = "three columns on-folder";
      //folderDiv.style.display = "block";
    	mainDiv.className = "nine columns on-main";
      //mainDiv.style.width = "74%";
    	tableMargin.className = "u-max-full-width on-table";
      //tableMargin.style.marginLeft = "0%";
    }
  }

  showModal = function() {
      modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeModal = function() {
      modal.style.display = "none";
  }

  saveModal = function() {
    closeModal();
  }

  showModal_folder = function() {
    console.log("Print test (anonymous function showModal_folder)");
      modal_folder.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  closeModal_folder = function() {
      modal_folder.style.display = "none";
  }

  saveModal_folder = function() {
    closeModal();
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal ||event.target == modal_folder ) {
          closeModal();
          closeModal_folder();

      }
  }
};

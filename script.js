function myFunction(img) {
    document.getElementById("Img").src = img.src;

    var fullScreenContainer = document.querySelector(".full-screen");
    fullScreenContainer.style.display = "block";

    function closeFullScreen() {
      fullScreenContainer.style.display = "none";

      fullScreenContainer.removeEventListener("click", closeFullScreen);
    }
  
    var closeButton = document.querySelector(".btn");
    closeButton.addEventListener("click", function (event) {

      event.stopPropagation();
      fullScreenContainer.style.display = "none";
    });
  }
  
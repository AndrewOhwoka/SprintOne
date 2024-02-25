
// Thus, Implemented javascript using DOM manipulation that handle the toggle button
// The DOM manipulation  uses the element method such as getElement
// It shows or hides additional information with id "additionalInfo. 
// So when the element with the id "toggleInfo" is clicked text content of the "toggleInfo" element is also 
// Changed to show the  additional information.

document.addEventListener("DOMContentLoaded", function() {
  // This select the button

  const toggleButton = document.getElementById("toggleInfo");
  // Then select the additional information 

  const additionalInfo = document.getElementById("additionalInfo");

  // Event listener is added to the button
  toggleButton.addEventListener("click", function() {

      // Then toggle the display method of additionalInfo
      if (additionalInfo.style.display === "none") {
          additionalInfo.style.display = "block";
          toggleButton.textContent = "Hide More Information";
      } else {
          additionalInfo.style.display = "none";
          toggleButton.textContent = "Show More Information";
      }
  });
});

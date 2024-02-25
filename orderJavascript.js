// Thus, Implemented javascript using DOM manipulation that handle the submit of order form after user clicks on submit
// The form is submitted only if the user has selected at least one item and entered a quantity greater than 0.
// The DOM manipulation  uses the element method such as getElementById, querySelector, addEventListener, preventDefault, checked, value, innerHTML, textContent, and alert.
// The submit line of code at the end is commented out as it is not used in this program, hence the use of console.log.

let form = document.querySelector("#orderForm");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // prevent form submission
  let name = document.querySelector("#name").value;
  console.log(`Name: ${name}`); // log the value of name);
  let address = document.querySelector("#address").value;
  console.log(`Address: ${address}`);
  let card = document.querySelector("#card").value;
  console.log(`Card: ${card}`);

  // get the values from the input fields only if the corresponding checkbox is checked
  let bigGrayQuantity = document.getElementById("bigGray").checked
    ? parseInt(document.getElementById("bigGrayQuantity").value) || 0
    : 0;
  let tasterQuantity = document.getElementById("taster").checked
    ? parseInt(document.getElementById("tasterQuantity").value) || 0
    : 0;
  let soupQuantity = document.getElementById("soup").checked
    ? parseInt(document.getElementById("soupQuantity").value) || 0
    : 0;
  let poutineQuantity = document.getElementById("poutine").checked
    ? parseInt(document.getElementById("poutineQuantity").value) || 0
    : 0;
  let bucketQuantity = document.getElementById("bucket").checked
    ? parseInt(document.getElementById("bucketQuantity").value) || 0
    : 0;
  let saladQuantity = document.getElementById("salad").checked
    ? parseInt(document.getElementById("saladQuantity").value) || 0
    : 0;

  // check if any checkbox is checked and the quantity is greater than 0
  let selectedItems = [];
  if (document.getElementById("bigGray").checked && bigGrayQuantity > 0)
    selectedItems.push({ item: "Big Gray", quantity: bigGrayQuantity });
  if (document.getElementById("taster").checked && tasterQuantity > 0)
    selectedItems.push({ item: "Taster", quantity: tasterQuantity });
  if (document.getElementById("soup").checked && soupQuantity > 0)
    selectedItems.push({ item: "Soup", quantity: soupQuantity });
  if (document.getElementById("poutine").checked && poutineQuantity > 0)
    selectedItems.push({ item: "Poutine", quantity: poutineQuantity });
  if (document.getElementById("bucket").checked && bucketQuantity > 0)
    selectedItems.push({ item: "Bucket o' Chicken", quantity: bucketQuantity });
  if (document.getElementById("salad").checked && saladQuantity > 0)
    selectedItems.push({ item: "Salad", quantity: saladQuantity });

  if (selectedItems.length > 0) {
    // add the quantities
    let totalQuantity =
      bigGrayQuantity +
      tasterQuantity +
      soupQuantity +
      poutineQuantity +
      bucketQuantity +
      saladQuantity;

    // log each selected item and its quantity
    selectedItems.forEach(function (item) {
      console.log(item.item + ": " + item.quantity);
    });
    // log the total quantity
      console.log("Total Quantity: " + totalQuantity);
  } else {
    // show an alert if no checkbox is checked and the quantity is 0
    alert(
      "Please select at least one item and enter a quantity greater than 0."
    );
  }
  //   document.querySelector('#orderForm').submit();
}

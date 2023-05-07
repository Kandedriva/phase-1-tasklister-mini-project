// //
//
//
document.addEventListener("DOMContentLoaded", () => {
  const formId = document.querySelector("form");
  formId.addEventListener("submit", function(e){
  e.preventDefault();
  const inputContent = document.querySelector("#new-task-description");

  let listItem = document.createElement("li");
  const btn = document.createElement("button");
  btn.textContent = "X"
  btn.addEventListener("click", deleteId);
  listItem.textContent = `${inputContent.value}`;

  const unOrderedList = document.querySelector("ul");
    unOrderedList.appendChild(listItem);
    unOrderedList.appendChild(btn);
      formId.reset();

});



});
function deleteId(e){
  e.target.parentNode.remove();
}

const btnShowElement = document.querySelector(".showPost");
const btnhideEl = document.querySelector(".hidePost");
const MyPost = document.getElementById("postblog");

btnShowElement.addEventListener('click', (event) =>{
$('#postblog').show();

});
btnhideEl.addEventListener("click", (event) => {
  $("#postblog").hide();
});


setTimeout(() => {
    $('#postblog').fadeIn(1000);
},5000)


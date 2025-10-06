// $(".info-item .btn").click(function(){
//   $(".container").toggleClass("log-in");
// });
// $(".container-form .btn").click(function(){
//   $(".container").addClass("active");
// });

// When clicking on .info-item .btn → toggle 'log-in' class on .container
document.querySelectorAll(".info-item .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("log-in");
  });
});

// When clicking on .container-form .btn → add 'active' class on .container
document.querySelectorAll(".container-form .btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".container").classList.add("active");
  });
});

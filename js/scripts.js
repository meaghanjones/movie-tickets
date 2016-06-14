function Customer(movie, age, time){
  this.movie = movie;
  this.age = age;
  this.time = time;
}


$(document).ready(function() {
 $("#submit").click(function(event) {
   $("#result").show();
   $("#price").empty();
   var movie = parseInt($("#movie").val());
   var age = parseInt($("#age").val());
   var time = parseInt($("#time").val());
   var customer = new Customer(movie, age, time);
   $("#price").text(movie + age + time);
 });
});

console.log("loaded");

document.addEventListener( "DOMContentLoaded", function(){

  console.log("Hello");
  var squares = document.getElementsByClassName("td")

  squares.addEventListener("click", function(event){
      console.log( "was clicked");
    });




  //   for (var i = 0; i < squares.length; i++) {
  //     var square = squares[i]
  //     square.addEventListener("click", function(event){
  //     console.log(this.innerHTML + " was clicked");
  //   });
  //   }
  // });


  // var div1= document.getElementById("div1")
  // var div2= document.getElementById("div2")
  // var div3= document.getElementById("div3")
  //
  // div1.addEventListener("click", function(event){
  //   console.log("div1 was clicked");
  // });
  // div2.addEventListener("click", function(event){
  //   console.log("div2 was clicked");
  //   event.stopPropagation()
  // });
  // div3.addEventListener("click", function(event){
  //   console.log("div3 was clicked");
  // });
});

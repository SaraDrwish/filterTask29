

var listimg = [];

var filterbotton = document.getElementById("filterbotton");
var flower = document.getElementsByClassName("flower");
var tree = document.getElementsByClassName("tree");
var wood = document.getElementsByClassName("wood");

filterbotton.onclick = function() {

   
    
    var opject = {
        flowers : flower ,
        trees : tree ,
        woods : wood ,
    }
    listimg.push(opject);

    flowers();
} 



function flowers(){

// var bottom_imgs = document.getElementsByClassName("bottom_imgs") ;


// for(var i = 0 ; i< listimg.length ; i++){
// alert(i)

  document.getElementsByClassName("tree").splice("tree" , 1);
  document.getElementsByClassName("wood").style.display="none";

// }



// function appear(){

//     var f = document.getElementsByClassName("");

// }

}

function trees(){

var tree = document.getElementsByClassName("tree");

}
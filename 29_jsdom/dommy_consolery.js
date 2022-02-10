// Shriya Anand, Shyne Choi
// SoftDev pd1
// K29 -- DOMfoolery++, More DOM w/buttons
// 2022-02-09
// time spent: 30
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-J in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function(x) {
  var j=30; //comment out this and it's just 20 + x due to j being declared earlier
  //get rid of var in front of j, it still works because j was declared earlier
  return j+x;
};


//instantiate an object
var o = { 'name' : 'Thluffy', //like json wow
          age : 15,
          items : [10, 20, 30, 40],
          morestuff : {a : 1, b : 'ayo'},
          func : function(x) { //function in dictionary! wow
            return x+30; //how do you use this function?
          }
        }; //different types in one dictionary


var addItem = function(text) { //add item to list on the html file?
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function(n) { //remove list
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove(); //n has to be in bound with the range of the list
};


var red = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function() {
  var items = document.getElementsByTagName("li");
  for(var i = 0; i < items.length; i++) {
    if (i%2==0){
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

//insert your implementations here for...
// FIB
var fib = function(n) {
  if (n < 1) {
    return 0;
  }
  if(n == 1) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}; //semicolons at the end of function definitions!

var fibDisplay = function() {
  document.getElementById("fibresult").innerHTML = fib(4);
}

var fibShow = document.getElementById("fibButton")
fibShow.addEventListener('click', fibDisplay)


// FAC
var fact = function(n) {
  if (n <= 1) {
    return 1;
  }
  return n * fact(n - 1);
};

var factDisplay = function() {
  document.getElementById("factresult").innerHTML = fact(8);
}

var factShow = document.getElementById("factButton")
factShow.addEventListener('click', factDisplay)


// GCD
var gcd = function(a, b) {
  if (a > b) {
    var t = a; a = b; b = t;
  }
  var x = 1
  var i = 2
  while (i <= a) {
    if ((a % i == 0) && (b % i == 0)) {
      x = i
    }
    i++;
  }
  return x;
};

var gcdDisplay = function() {
  document.getElementById("gcdresult").innerHTML = gcd(60, 30);
}

var gcdShow = document.getElementById("gcdButton")
gcdShow.addEventListener('click', gcdDisplay)

var answer1 = document.getElementById('answer1');
var answer2 = document.getElementById('answer2');
var answer3 = document.getElementById('answer3');
var answer4 = document.getElementById('answer4');
var answer5 = document.getElementById('answer5');
var answer6 = document.getElementById('answer6');

// QUESTION 1
var average = function(items){
  var prices = items.map(function(item){
    return item.price;
  })

  var sum = prices.reduce(function(total, val){
    return total + val;
  })

  var result1 = sum / items.length;
  answer1.innerHTML = result1;
};
average(items);

// // QUESTION 2
var priceRange = items.filter(function(item){
  return (item.price > 14 && item.price < 18);
}).map(function(name){
  return "<li>" + name.title + "</li>";
});

answer2.innerHTML = "<ul>" + priceRange + "</ul>";

// QUESTION 3
var gdp = items.filter(function(item){
  return(item.currency_code === "GBP");
}).map(function(name){
  return name.title + " costs " + name.price;
});

answer3.innerHTML = gdp;

// QUESTION 4

var wood = items.filter(function(item){
  return item.materials.indexOf('wood') !=-1;
}).map(function(item){
  return '<li>' + item.title + " is made of wood." + '</li>';
}).reduce(function(html, item){
  return html + item;
});

answer4.innerHTML = wood;

// QUESTION 5
var eight = items.filter(function(item){
  return (item.materials.length >=8);
}).map(function(item){
  return item.title + " has " + item.materials.length + " materials:" + '<li>' + item.materials + '</li>';
});

answer5.innerHTML = eight;

// QUESTION 6

var iMade = items.filter(function(item){
  return(item.who_made === "i_did");
});

answer6.innerHTML = iMade.length + " items are made by their sellers.";
// items.map(function(i){
//   console.log(i.price);
//   console.log(i['price']);
// });

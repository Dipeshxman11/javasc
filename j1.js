var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor="green";

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display="none";


var secondItem = document.querySelectorAll("#items li")[1];
secondItem.style.color = "green";


var listItems = document.querySelectorAll("#items li");

for (var i = 0; i < listItems.length; i++) {
  if (i % 2 !== 0) {
    listItems[i].style.backgroundColor = "green";
  }
}
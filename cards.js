const card=document.querySelector("div");
card.innerHTML=`<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_UqbbQgfNMWWdx4d1CEnDwAUsVDxDLS52KA&s" width="200px" height="300px"/>
<p>Biryani</p>
<button>ExploreMOre</button>`
card.style.border="2px solid black";
card.style.backgroundColor="lightgrey";
card.style.display="inline-block";
card.style.textAlign="center";


const card1=document.getElementById("two");
card1.innerHTML=`<img src="https://cdn.britannica.com/35/225835-050-A5CC289A/Indian-one-pot-meal-for-party.jpg" width="200px" height="300px"/>'
 <p>Biryani</p>
<button>ExploreMOre</button>` 
 card1.style.border="2px solid black";
 card1.style.backgroundColor="lightgrey";
 card1.style.display="inline-block";
 card1.style.textAlign="center";
 



var newcard=document.createElement("div")
newcard.innerHTML=`<img src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg" width="200px" height="300px"/>
<p>Burgur</p>
<button>ExploreMore</button>`
newcard.style.border="2px solid black";
newcard.style.backgroundColor="lightgrey";
newcard.style.display="inline-block";
newcard.style.textAlign="center";
console.log(newcard)
document.body.appendChild(newcard)


var newcard1=document.createElement("div")
newcard1.innerHTML=`<img src="https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg" width="200px" height="300px"/>
<p>Burgur</p>
<button>ExploreMore</button>`
newcard1.style.border="2px solid black";
newcard1.style.backgroundColor="lightgrey";
newcard1.style.display="inline-block";
newcard1.style.textAlign="center";
console.log(newcard1)
document.body.appendChild(newcard1)

document.body.style.display="flex"
document.body.style.gap="20px"


const topChoices = basho.map( poem => poem.split("/")[0] );
const midChoices = basho.map( poem => poem.split("/")[1] );
const botChoices = basho.map( poem => poem.split("/")[2] );

const tops = document.getElementById("topLines");
const mids = document.getElementById("midLines");
const bots = document.getElementById("botLines");

const possibleLines = basho.length;
const sumHolder = document.getElementById("sum");
sumHolder.innerText = Math.pow(possibleLines, 3);

topChoices.forEach( t => {
  let line = document.createElement("span");
  let text = document.createTextNode(t);
  line.classList.add("line");
  line.appendChild(text);
  tops.appendChild(line);
});
midChoices.forEach( m => {
  let line = document.createElement("span");
  let text = document.createTextNode(m);
  line.classList.add("line");
  line.appendChild(text);
  mids.appendChild(line);
});
botChoices.forEach( b => {
  let line = document.createElement("span");
  let text = document.createTextNode(b);
  line.classList.add("line");
  line.appendChild(text);
  bots.appendChild(line);
});

[tops,mids,bots].forEach( row => {
  row.insertAdjacentHTML("beforebegin", 
    `<img id="${row.id + "Left"}" class="disable" src="imgs/cheveron-left.svg" width="40" height="40">`);
  row.insertAdjacentHTML("afterend", 
    `<img id="${row.id + "Right"}" src="imgs/cheveron-right.svg" width="40" height="40">`);
});

const lefties = document.querySelectorAll("[id$=Left]");
lefties.forEach(l => l.addEventListener("click", () => {
  const sib = l.nextElementSibling;
  const righty = sib.nextElementSibling;
  if ( sib.scrollLeft === sib.clientWidth ) l.classList.add("disable");
  sib.scrollBy({ top: 0, left: -sib.clientWidth, behavior: 'smooth' });
  righty.classList.remove("disable");
}));
const righties = document.querySelectorAll("[id$=Right]");
righties.forEach(r => r.addEventListener("click", () => {
  const sib = r.previousElementSibling;
  const lefty = sib.previousElementSibling;
  if ( sib.scrollLeft === (sib.scrollWidth - (sib.clientWidth * 2)) ) r.classList.add("disable");
  sib.scrollBy({ top: 0, left: sib.clientWidth, behavior: 'smooth' });
  lefty.classList.remove("disable");
}));







const topChildren = tops.children;
const midChildren = mids.children;
const botChildren = bots.children;
// console.log(topChildren);
// console.log(midChildren);
// console.log(botChildren);

localStorage.setItem("basheau", "1-2-3");












// const boundary = document.querySelector("#poem");
// const lines = document.querySelectorAll(".line");

// console.log(boundary);
// console.dir(boundary);

// const topX = boundary.offsetTop;
// const rightX = boundary.offsetWidth;
// const bottomX = boundary.offsetHeight + topX;
// const leftX = boundary.offsetLeft;
// console.log(topX);
// console.log(rightX);
// console.log(bottomX);
// console.log(leftX);

// lines.forEach(l => {
//   console.log(l);

//   let topInRange = (l.offsetTop + topX) > boundary.offsetTop;
//   let rightInRange = l.offsetWidth < boundary.offsetWidth;
//   let bottomInRange = l.offsetHeight < boundary.offsetHeight;
//   let leftInRange = (l.offsetLeft + leftX) > boundary.offsetLeft;

//   console.log((l.offsetTop + topX), boundary.offsetTop, topInRange);
//   console.log((l.offsetLeft + leftX), boundary.offsetLeft, leftInRange);
//   console.log(l.offsetWidth, boundary.offsetWidth, rightInRange);
//   console.log(l.offsetHeight + l.offsetTop, boundary.offsetHeight, bottomInRange);

//   if (leftInRange && rightInRange && topInRange && bottomInRange) {
//     // valuesArray.push(parseInt(l.innerText));
//     console.log(l.innerHTML);
//   }

// })




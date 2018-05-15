
/* Load in Animations Using Masonry Grid*/

let grid = document.querySelector('.grid');

//gridItem[i].style.display = "block"
let msnry = new Masonry(grid, {
  // options
  itemSelector: '.item', // query selector of the individual items within the grid
  columnWidth: 180 // adjust width of each column which tries to fit in the masonry grid
});                // default is 200




// for loop to iterate animation over every grid item in masonry grid
let gridItem = grid.getElementsByTagName("DIV");

for (let i=0; i<gridItem.length; i++) {
    setTimeout(() => {
      gridItem[i].classList.add("is-visible");
    }, 200*i); // show each div grid item one by one by extending the delay period

}

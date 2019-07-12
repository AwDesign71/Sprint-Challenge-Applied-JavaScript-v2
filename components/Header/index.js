// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
const headerContainer = document.querySelector('.header-container');
function Header() {
    //Creating the HTML elements
    const header = document.createElement('div');
    const date = document.createElement('span');
    const lambdaTime = document.createElement('h1');
    const temp = document.createElement('span');
    //Apend elements
    header.appendChild(date);
    header.appendChild(lambdaTime);
    header.appendChild(temp);
    //Creating the classList
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');
    //Adding content
    lambdaTime.textContent = 'Lambda Time';
    date.textContent = 'March 28, 2019';
    temp.textContent = '98°';
    return header;
}
headerContainer.appendChild(Header());

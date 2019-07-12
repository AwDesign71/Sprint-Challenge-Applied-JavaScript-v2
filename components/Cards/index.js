// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container');
axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(articleData=> {
    const news = articleData.data.articles;
    const news1 = articleData.data.articles.javascript;
    const news2 = articleData.data.articles.bootstrap;
    const news3 = articleData.data.articles.technology;
    const news4 = articleData.data.articles.jquery;
    const news5 = articleData.data.articles.node;

   for(let i=0; i < news1.length; i++) {
       cardContainer.appendChild(newsCards(news1[i]));
     }

   for(let i=0; i < news2.length; i++) {
    cardContainer.appendChild(newsCards(news2[i]));
   }
   for(let i=0; i < news3.length; i++) {
    cardContainer.appendChild(newsCards(news3[i]));
   }
   for(let i=0; i < news4.length; i++) {
    cardContainer.appendChild(newsCards(news4[i]));
   }
   for(let i=0; i < news5.length; i++) {
    cardContainer.appendChild(newsCards(news5[i]));
   }
})
 .catch((error)=> {
    cardContainer.textContent = 'Image(s) are not loading correctly, please try again'
    console.log(error);
 })
// My cards
const newCards = [{
    headline: 'AJAX stands for Asynchronous JavaScript and XML. AJAX is a new technique for creating better, faster, and more interactive web applications',
    authorPhoto: './assets/ajax.jpg',
    authorName: 'Ajax Tutorial'
    },
     {
        headline: 'XML is a software- and hardware-independent tool for storing and transporting data.',
        authorPhoto: './assets/xml.png',
       authorName: 'Ajax Tutorial'
     }];
     
    newCards.forEach(newData => {
        cardContainer.appendChild(newsCards(newData));
     });
function newsCards(heading) {
    //Creating the elements
   const card = document.createElement('div');
   const headline = document.createElement('div');
   const author = document.createElement('div');
   const imgContainer = document.createElement('div');
   const image = document.createElement('img');
   const authorNames = document.createElement('span');
   //Appending the elements
   cardContainer.appendChild(card);
   card.appendChild(headline);
   card.appendChild(author);
   author.appendChild(imgContainer);
   imgContainer.appendChild(image);
   card.appendChild(authorNames);
   //Adding Classes
   card.classList.add('card');
   headline.classList.add('headline');
   author.classList.add('author');
   imgContainer.classList.add('img-container');
  //Displaying the content
  headline.textContent = heading.headline;
  authorNames.textContent = heading.authorName;
  image.src = heading.authorPhoto;

   return card;
}
//console.log(newsCards())









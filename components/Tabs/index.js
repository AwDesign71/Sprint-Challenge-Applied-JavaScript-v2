// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics  https://lambda-times-backend.herokuapp.com/articles
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

//Getting data from API


axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(getData=> {
    const pullData = getData.data;
    topics.appendChild(Tabs(pullData))
    console.log(pullData)
})

const topics = document.querySelector('.topics');
function Tabs(links) {
  const tab = document.createElement('div');
 
  topics.appendChild(tab);
  
  tab.classList.add('tab');
  tab.textContent = links;
  return tab;
}
console.log(Tabs())
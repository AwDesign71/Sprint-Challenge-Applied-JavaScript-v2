// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics  https://lambda-times-backend.herokuapp.com/articles
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
/* <div class="topics">

      <div class="tab active-tab">ALL</div>
      <div class="tab">JAVASCRIPT</div>
      <div class="tab">TECHNOLOGY</div>
      <div class="tab">NODE.JS</div>
      <div class="tab">jQUERY</div>
      <div class="tab">BOOTSTRAP</div>
      <!-- My Artricles -->
      <div data-tab="ajax" class="tab">Ajax</div>
      <div data-tab="xml" class="tab">XML</div>
    </div> */
//Getting data from API
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(getData =>{
    const pullData = getData.data;
    console.log(pullData);
    topics.appendChild(Tabs(getData));
});


const topics = document.querySelector('.topics');
function Tabs() {
  const tab = document.createElement('div');
 
  topics.appendChild(tab);
  
  tab.classList.add('tab');
  tab.textContent = 'All';
  return tab;
}
console.log(Tabs())
let count = 1;
// assign a variable to button
const button = document.getElementById("add");

button.addEventListener("click", ()=> {
    count = count + 1
    participantTemplate(count)
});

function participantTemplate(count) {

    // creates a new section with a new participant count
    const newSection = 
    `<section class="participant${count}">
    <p>Participant ${count}</p>
            <div class="item">
              <label for="fname"> First Name<span>*</span></label>
              <input id="fname" type="text" name="fname" value="" required />
            </div>
            <div class="item activities">
              <label for="activity">Activity #<span>*</span></label>
              <input id="activity" type="text" name="activity" />
            </div>
            <div class="item">
              <label for="fee">Fee ($)<span>*</span></label>
              <input class="fee" type="number" name="fee" />
            </div>
            <div class="item">
              <label for="date">Desired Date <span>*</span></label>
              <input id="date" type="date" name="date" />
            </div>
            <div class="item">
              <p>Grade</p>
              <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
              </select>
            </div>
          </section>`

    // adds the new section above the button
    button.insertAdjacentHTML("beforebegin", newSection)
}


//event listener for submit button
document.getElementById("form").addEventListener("submit", (event)=> {
    // prevents the page from refreshing
    event.preventDefault();
        
    //gets the fees and adds them together
    const feeElements = document.querySelectorAll(".fee");
    //feeElements = [...feeElements];

    let feeCost = 0;
    feeElements.forEach(feeElements => {
        feeCost += parseFloat(feeElements.value) || 0; //added by chatgpt
    });
    
    //get adult name
    const adultName = document.getElementById("adult_name").value;

    //removes the form and prints a thank you messege
    const form = document.getElementById("form");
    form.style.display = "none";

    const orderSummary = document.getElementById("summary")
    orderSummary.innerHTML = `
    <p>Thank you ${adultName} for registering. You have registered ${count} participants and owe $${feeCost} in Fees.</p>`

    orderSummary.style.display = "block";
});

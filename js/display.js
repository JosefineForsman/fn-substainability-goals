import { getGoals, getTarget } from "./api.js"; // Getting API- information
import { addClick } from "./myscript.js";
const backBtn= document.querySelector('aside');
const slider = document.querySelector(".slider"); // Info page about the targets


// This function toggle the slider to show and hide.
function toggleSlider() {
    slider.classList.toggle("show");
    hideMain();
}
// Function that toggle back my slider to main.
backBtn.addEventListener('click', () => {
    toggleSlider();
})

// Function that hides my main container when the targets is showing. 
function hideMain(){
    document.querySelector('.container').style.display= "none";
}

// Displays all the info from the 17 main goals.
function displayInfo(goals){
    const main = document.querySelector('.container');
    goals.forEach((goal)=> {
        const goalElem= `
        <article class="card">
        <h1 class="code">${goal.code}. ${goal.title}<p class="goal">${goal.description}</p></h1>
        <button>Read more</button>
        </article>
        `
        main.insertAdjacentHTML('beforeend', goalElem);
        
    })
}
getTarget();

// Displays all the info to the targets.
function displayTargets(targets){
    const subTargets = targets[0].targets;
    const section = document.querySelector('section');
    subTargets.forEach((target)=> {
        const targetElem=`
        <section>
        <h1>${target.code}.</h1>
        <p><li>${target.description}</li></p><br>
        </section>
        `
        section.insertAdjacentHTML('beforeend', targetElem);
         }
    )}
    
// Function that gives me all my API-information to re-use in other functions.
// And runs it, so it shows on the display.
async function run(){
    let goals = await getGoals()
    console.log(goals);
    displayInfo(goals);
    addClick();
}
export { displayInfo, run, displayTargets, toggleSlider, hideMain };
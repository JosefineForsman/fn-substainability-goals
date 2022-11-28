
import { getTarget } from "./api.js";
import { displayTargets, run, toggleSlider} from "./display.js";
run();

// Click function to display all information about the targets.
async function addClick(){
    const btns = document.querySelectorAll('button');

    for ( let i = 0; i<btns.length; i++){
        btns[i].addEventListener('click', async () => {
            const target = await getTarget(i)
            toggleSlider();
            console.log(getTarget(i));
            displayTargets(target);  
        })   
    }
}
export { addClick }


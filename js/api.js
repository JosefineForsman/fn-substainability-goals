async function getGoals() {
    try{
        const BASE_URL = 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List';
        const response = await fetch(`${BASE_URL}` , { method: 'GET'});
        const data = await response.json();
        console.log(data[0].title)
        return data;
        
    } catch (error){
        console.log(error);
    }
    
} 
// The i is helping me to reach ALL targets title and information. 
async function getTarget(i){  
    try{
        const URL_TARGET = `https://unstats.un.org/SDGAPI/v1/sdg/Goal/${1 + i}/Target/List?includechildren=true`;
        const response = await fetch(`${URL_TARGET}`, { method: 'GET'});
        const data = await response.json();
        console.log(data);
        
        return data;
        
    } catch(error) {
        console.log(error);
    }  
}
export { getGoals, getTarget }
let display=document.getElementById("display")
function appendToDisplay(input){
    display.value += input;
}
function ClearDisplay(){
display.value= ''

}
function calculate(){
    try{
    display.value =eval(display.value)
    }
    catch(error){

    }

    
}
function appendToearase(){
display.value = display.value.slice(0,-1)
}
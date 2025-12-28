const button = document.getElementById('btn');
const isSubscribe = false;

function changeText(){

    if(!isSubscribe){
        button.textContent = "subscribed";
        isSubscribe = true;
    }
    else{
        button.textContent = "subscribe";
        isSubscribe= false;
    }
}
console.log(`abra cadabra`);

const increaseBtn = document.getElementById("plusViens");
const decreaseBtn = document.getElementById("minusViens");
const nulle = document.getElementById("nulle");
const izvade = document.getElementById("skaitsP");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    izvade.textContent = count; 
}

function anulet(){
    count=0;
    izvade.textContent = count; 

}

//arrow Function const functionName = (parameters)
const minusViens = () => {
    count--;
    izvade.textContent = count; 
};

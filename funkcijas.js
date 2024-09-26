console.log(`abra cadabra`);

const increaseBtn = document.getElementById("plusViens");
const decreaseBtn = document.getElementById("minusViens");
const nulle = document.getElementById("nulle");
let count = 0;

increaseBtn.onclick = function(){
    count++;
    skaits.textContent = count; 
}

function anulet(){
    count=0;
    skaits.textContent = count; 

}

//arrow Function const functionName = (parameters)
const minusViens = () => {
    count--;
    skaits.textContent = count; 
};

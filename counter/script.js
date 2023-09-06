const incrementBut = document.getElementById('incriment');
const decremetBut = document.getElementById('decriment');
const countElement = document.getElementById('count');

let count = 0;

function updatecolor(){
      document.querySelector('i').style.color = "green";
      document.querySelector('i').style.textShadow = "0px 0px 55px green";
      document.querySelector('h1').style.color = "green";
      document.querySelector('h1').style.textShadow = "0px 0px 55px green";
      document.getElementById('icon2').style.color = "";
      document.getElementById('icon2').style.textShadow = "";
      
      

}
function updatecolor1(){
    document.getElementById('icon2').style.color = "red"
    document.getElementById('icon2').style.textShadow = "0px 0px 55px red"
    document.querySelector('h1').style.color = "red"
    document.querySelector('h1').style.textShadow = "0px 0px 55px red";
    document.querySelector('i').style.color = "";
    document.querySelector('i').style.textShadow = "";
}


function updatecount(){
  countElement.textContent = count;
}

function ref(){
    document.getElementById('count').innerHTML = "0";
    document.querySelector('i').style.color = "";
    document.getElementById('icon2').style.color = "";
    document.querySelector('i').style.textShadow = "";
    document.getElementById('icon2').style.textShadow = "";
    document.querySelector('h1').style.color = "black"
    document.querySelector('h1').style.textShadow = "0px 0px 0px ";
    
  }


incrementBut.addEventListener('click', () => {
   
    count++;
    updatecount()

});

decremetBut.addEventListener('click', ()=>{
    count--;
    updatecount()
});
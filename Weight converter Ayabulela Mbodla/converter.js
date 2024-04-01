
document.getElementById('output').style.visibility = 'hidden';

function myFunction(e){
    document.getElementById('output').style.visibility = 'visible'; 
   let  eventInput = document.getElementById('eventInput').value;
   document.getElementById('poundsOutput').innerHTML = (eventInput*2.20472).toFixed(2);
   document.getElementById('OuncesOutput').innerHTML = (eventInput*35.274).toFixed(2);
   document.getElementById('gramsOutput').innerHTML = (eventInput*1000);
   

};
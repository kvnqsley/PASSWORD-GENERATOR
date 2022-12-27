//Get the alphanumerics for the password and store them
var storedKeys={
    uppercase:'ABCDEFGHIJKLMNOPQRSTUWXYZ',
    lowercase:'abcdefghijklmnopqrstuvwxyz',
    number:'0123456789',
    symbols:'!@#$%^*()^_+\`|}{[]:;?><,./-='
}

//Generating random values
setInterval(() => {
    randomUpper=Math.floor(Math.random()*storedKeys.uppercase.length)
 function genUpper() {
        return(storedKeys.uppercase[randomUpper])
       
 }

 randomLower=Math.floor(Math.random()*storedKeys.lowercase.length)
 function genLower() {
        return(storedKeys.lowercase[randomLower])
    
    
 }
 randomNumber=Math.floor(Math.random()*storedKeys.number.length)
 function genNumber() {
     return(storedKeys.number[randomNumber])
 }

 randomSymbol=Math.floor(Math.random()*storedKeys.symbols.length)
 function genSymbols() {
     return(storedKeys.symbols[randomSymbol])
 }



arr=[genNumber(),genLower(),genSymbols(),genUpper()]
}, 700);
 

 //Select all checkboxes
 const upper=document.getElementById('uppercase');
 const lower=document.getElementById('lowercase');
 const symbol=document.getElementById('symbol');
 const number=document.getElementById('number');
 
//Concatenating the alphanumerics
;
function selectPwd() {
    

  if (length.value<6|| length.value>12) {
        alert('Enter the correct number')
    
     
}


}   
  
//storing all checked checkboxes in an array
checkboxArr=[
    upper,
    lower,
    number,
    symbol
]

//inputs
length= document.getElementById('length');
//Make the numbers unrepeatable

 //clicking the generate button
 var generatePwd=document.querySelector('.generate')
 generatePwd.addEventListener('click',()=>{
if (upper.checked ==0&&
    number.checked ==0&&
    lower.checked==0&&
    symbol.checked==0) {
        alert('Tick a box please')
    console.log('error');
};
pwd ='';

i=0
while (i<length.value) {
    const getKeys =arr[ Math.floor(Math.random()*arr.length)];
    pwd+=getKeys;i++;
  
    textArea.value=pwd
  }
  //Displaying on screen
console.log(pwd); 
screenvalue.value='' 
screenvalue.value+=pwd
   
      
    
    
selectPwd()

})



   //The copy button
textArea=document.createElement('textarea');
document.body.appendChild(textArea)
btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{
    textArea.select();
    document.execCommand('copy');

})
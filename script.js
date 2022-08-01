// 1. get user input on as its being typed
// 2. get value of click tip percent btn 
// 3. get input of number of people
// 4. update totals as numbers are typed in 

const userInputsWrap = document.querySelector('.userInputs');


const billAmountInput = document.querySelector('#billAmount');
const numPeopleInput = document.querySelector('#numPeople');

const tipBtnGrid = document.querySelector('.tipBtnGrid');
const tipBtns = document.querySelectorAll('.tipValue');

const tipPerPersonDisplay = document.querySelector('#tipPerPerson')
const totalPerPersonDisplay = document.querySelector('#totalPerPerson')
const tipTotalDisplay = document.querySelector('#tipTotal')
const totalDisplay = document.querySelector('#total')



let billValue = 0;
let numPeopleValue = 1;
let tipValue = 0;

billAmountInput.addEventListener('input', function() {
   billValue = parseFloat(this.value);
   total.innerText = billValue;
   // calculatePerPerson(billValue, numPeopleValue);
   calculate()

})

numPeopleInput.addEventListener('input', function(){
   numPeopleValue = parseFloat(this.value);

   // calculate(billValue, numPeopleValue);

      calculate()


})

tipBtnGrid.addEventListener('click', function(e){

   const selectedTipBtn = e.target.closest('.tipValue');

   if(!selectedTipBtn) return

   tipValue = parseFloat(selectedTipBtn.value / 100) ;

   calculate()

})

function calculate() {
   

   const tipPerPersonResult = (billValue * tipValue) / numPeopleValue;

      tipPerPersonDisplay.innerText =  tipPerPersonResult.toFixed(2);
      totalPerPersonDisplay.innerText = ((billValue / numPeopleValue) + tipPerPersonResult).toFixed(2);

   
   tipTotalDisplay.innerText = (billValue * tipValue).toFixed(2);
   totalDisplay.innerText = (billValue + (billValue * tipValue)).toFixed(2)

   
   displayElsArr.forEach(item => {
      
      if(item.innerText === 'NaN' || item.innerText === 'Infinity') {
         item.innerText = 0;
      }
   })
   // totalPerPersonDisplay.innerText = result;
}
   

const resetButton = document.querySelector('#resetButton');
const displayElsArr = [tipPerPersonDisplay, totalPerPersonDisplay, tipTotalDisplay, totalDisplay];


resetButton.addEventListener('click', function() {
   displayElsArr.forEach(item => {
      item.innerText = 0;
   })

   billValue = 0;
   numPeopleValue = 0;
   tipValue = 0;

   billAmountInput.value = '';
   numPeopleInput.value = '';
})






   






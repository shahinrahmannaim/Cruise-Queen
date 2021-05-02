//  first class button function plus
document.getElementById('increaseFirstClass').addEventListener('click',function(){

   const firstClassInput = document.getElementById('first-Class');
   const  classInputCount =parseInt(firstClassInput.value);

   const inputCountPlus=classInputCount+1;
   firstClassInput.value =inputCountPlus;
   const firstClassSubtotal =inputCountPlus*150;
 document.getElementById('subTotal').innerHTML="$"+firstClassSubtotal;
  const vatPercentage =firstClassSubtotal*0.1;
  document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;
  const totalPrice =firstClassSubtotal+vatPercentage;
  document.getElementById('totalPrice').innerHTML="$"+totalPrice;
})

//  first class button function minus
document.getElementById('decreaseFirstClass').addEventListener('click',function(){

    const firstClassInput = document.getElementById('first-Class');

    const  classInputCount =parseInt(firstClassInput.value);
    const inputCountPlus=classInputCount-1;
    firstClassInput.value =inputCountPlus;
    const firstClassSubtotal =inputCountPlus*150;
  document.getElementById('subTotal').innerHTML="$"+firstClassSubtotal;
   const vatPercentage =firstClassSubtotal*0.1;
   document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;
   const totalPrice =firstClassSubtotal+vatPercentage;
   document.getElementById('totalPrice').innerHTML="$"+totalPrice;
 })


//  economy class button function plus
 document.getElementById('increaseEconomyClass').addEventListener('click',function(){

    const firstClassInput = document.getElementById('economy-Class');
    const  classInputCount =parseInt(firstClassInput.value);
    const inputCountPlus=classInputCount+1;
    firstClassInput.value =inputCountPlus;
    const firstClassSubtotal =inputCountPlus*100;
  document.getElementById('subTotal').innerHTML="$"+firstClassSubtotal;
   const vatPercentage =firstClassSubtotal*0.1;
   document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;
   const totalPrice =firstClassSubtotal+vatPercentage;
   document.getElementById('totalPrice').innerHTML="$"+totalPrice;
 })


 //  economy class button function minus
  document.getElementById('decreaseEconomyClass').addEventListener('click',function(){

    const firstClassInput = document.getElementById('economy-Class');
    const  classInputCount =parseInt(firstClassInput.value);
    const inputCountPlus=classInputCount-1;
    firstClassInput.value =inputCountPlus;
    const firstClassSubtotal =inputCountPlus*100;
  document.getElementById('subTotal').innerHTML="$"+firstClassSubtotal;
   const vatPercentage =firstClassSubtotal*0.1;
   document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;
   const totalPrice =firstClassSubtotal+vatPercentage;
   document.getElementById('totalPrice').innerHTML="$"+totalPrice;
 })
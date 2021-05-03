//  first class button function plus
document.getElementById('increaseFirstClass').addEventListener('click',function(){
       firstClass(true);
//    const firstClassInput = document.getElementById('first-Class');
//    const  classInputCount =parseInt(firstClassInput.value);
//   const inputCountPlus=classInputCount+1;
//    firstClassInput.value =inputCountPlus;
//    const firstClassSubtotal =inputCountPlus*150;
//  document.getElementById('subTotal').innerHTML="$"+firstClassSubtotal;
//   const vatPercentage =firstClassSubtotal*0.1;
//   document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;
//   const totalPrice =firstClassSubtotal+vatPercentage;
//   document.getElementById('totalPrice').innerHTML="$"+totalPrice;
});

//  first class button function minus
  document.getElementById('decreaseFirstClass').addEventListener('click',function(){
    firstClass(false);
//   const firstClassInput = document.getElementById('first-Class');
//   const  classInputCount =parseInt(firstClassInput.value);

//   const inputCountPlus=classInputCount-1;
//   firstClassInput.value =inputCountPlus;
//   const firstClassSubtotal =inputCountPlus*150;
//   document.getElementById('subTotal').innerHTML="$"+firstClassSubtotal;
//  const vatPercentage =firstClassSubtotal*0.1;
//  document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;
//  const totalPrice =firstClassSubtotal+vatPercentage;
//  document.getElementById('totalPrice').innerHTML="$"+totalPrice;
});

// function for first class button

function firstClass(isIncrease){
  const classInput = document.getElementById('first-Class');
     const  classInputCount =parseInt(classInput.value);
    let inputCountPlus=classInputCount;
   if(isIncrease==true){
     inputCountPlus= classInputCount + 1;
   }if(isIncrease == false && classInputCount>0){
    inputCountPlus=classInputCount-1;
   }
     classInput.value =inputCountPlus;
  const firstClassSubtotal =inputCountPlus*150;
  document.getElementById('subTotal').innerHTML="$"+firstClassSubtotal;
 const vatPercentage =firstClassSubtotal*0.1;
 document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;
 const totalPrice =firstClassSubtotal+vatPercentage;
 document.getElementById('totalPrice').innerHTML="$"+totalPrice;
            globalPrice();
}



// economy class button function plus
document.getElementById('increaseEconomyClass').addEventListener('click',function(){
     economyClass(true);
//   const economyClassInput = document.getElementById('economy-Class');
//   const  classInputCount =parseInt(economyClassInput.value);
//   const inputCountPlus=classInputCount+1;
//   economyClassInput.value =inputCountPlus;
//   const economyClassSubtotal =inputCountPlus*100;
// document.getElementById('subTotal').innerHTML="$"+economyClassSubtotal;
//  const vatPercentage =economyClassSubtotal*0.1;
//  document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;
//  const totalPrice =economyClassSubtotal+vatPercentage;
//  document.getElementById('totalPrice').innerHTML="$"+totalPrice;
});

// // economy class button function minus
document.getElementById('decreaseEconomyClass').addEventListener('click',function(){
     economyClass(false);
//   const economyClassInput = document.getElementById('economy-Class');
//   const  classInputCount =parseInt(economyClassInput.value);
//   const inputCountPlus=classInputCount-1;
//   economyClassInput.value =inputCountPlus;
//   const economyClassSubtotal =inputCountPlus*100;
// document.getElementById('subTotal').innerHTML="$"+economyClassSubtotal;
//  const vatPercentage =economyClassSubtotal*0.1;
//  document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;
//  const totalPrice =economyClassSubtotal+vatPercentage;
//  document.getElementById('totalPrice').innerHTML="$"+totalPrice;
});

function economyClass(isIncrease){
  const classInput = document.getElementById('economy-Class');
     const  classInputCount =parseInt(classInput.value);
    let inputCountPlus=classInputCount;
   if(isIncrease==true){
     inputCountPlus= classInputCount + 1;
   }if(isIncrease == false && classInputCount>0 ){
    inputCountPlus=classInputCount-1;
   }
     classInput.value =inputCountPlus;
  const economyClassSubtotal =inputCountPlus*100;
  document.getElementById('subTotal').innerHTML="$"+economyClassSubtotal;
 const vatPercentage =economyClassSubtotal*0.1;
 document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;
 const totalPrice =economyClassSubtotal+vatPercentage;
 document.getElementById('totalPrice').innerHTML="$"+totalPrice;
  globalPrice();
}


// one function for all buttons and prices  

// function globalClass(reserve, isIncrease){
//   const classInput = document.getElementById(reserve+'-Class');
//      const  classInputCount =parseInt(classInput.value);
//     let inputCountPlus=classInputCount;
//               if(isIncrease==true){
//                 inputCountPlus= classInputCount + 1;
//               }if(isIncrease == false){
//                 inputCountPlus=classInputCount-1;
//               }
//      classInput.value =inputCountPlus;
//     let  classSubTotal=0 ;
//            if(reserve=='first-Class'){
//             classSubTotal = inputCountPlus*150;
//            }if(reserve=='economy-Class'){
//             classSubTotal = inputCountPlus*100;
//            }

//         document.getElementById('subTotal').innerHTML="$"+ classSubTotal;
//         const vatPercentage =classSubTotal*0.1;
//         document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;
//         const totalPrice =classSubTotal+vatPercentage;
//         document.getElementById('totalPrice').innerHTML="$"+totalPrice;
// }

// my global function is not working and i have tyred a lot to solve it but i am taking to log so i decided to leave it like this
// when you correct the assignment  please send me back the correction  assignment to see what was the solution thanks!!!

function globalPrice(){

  const firstClass=  document.getElementById('fist-Class');
  const firstClassInput = parseInt(firstClass.value);

  const economyClass=  document.getElementById('economy-Class');
  const economyClassInput = parseInt(economyClass.value);

  const globalSubtotalPrice = firstClassInput*150 + economyClassInput*100;
  document.getElementById("subTotal").innerHTML="$"+globalSubtotalPrice;

  const vatPercentage = globalSubtotalPrice * .1;
  document.getElementById('vatPercentage').innerHTML="$"+vatPercentage;

  const globalTotalPrice =globalSubtotalPrice + vatPercentage;
  document.getElementById('totalPrice').innerHTML="$"+globalTotalPrice;
 

}
// Regex variables
const masterCardPin = /^5[1-6][0-8]{14}$/;
const visaCardPin = /^4[0-9]{15}$/;

// random pin varaiables
  const visaNumber = '4134564534567738';
  const masterNumber = '5123345033456358';
  const invalidNumber = "12342456624314";

  //Function that validates credit card  Numbers.
 const validateCreditCardNo = (pin) => {
     
     if(masterCardPin.test(pin)){
       return "MasterCard";
     } else if (visaCardPin.test(pin)) {
       return "VisaCard";
     } else { 
      return "Invalid Pin";
     }
 }

 
 console.log(validateCreditCardNo(visaNumber));
 console.log(validateCreditCardNo(masterNumber));
 console.log(validateCreditCardNo(invalidNumber));
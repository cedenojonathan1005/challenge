 const services = (basePrice, countAmount)=>{
    if (countAmount > 4) {
      const calculateAmount = basePrice * 0.02;
      const amountAcc = countAmount - 4 * 0.25;
      return (calculateAmount + amountAcc) * -1;
    }
    return 0;
  }

  module.exports = {
    services
}


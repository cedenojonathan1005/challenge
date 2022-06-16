const { response, request } = require('express');
const data = require('../data/1payloadTest.json');
const {services} = require('../helpers/challengedCalculate')

const challengeGet = async(req = request, res = response) => {
    const result = Object.values(data).flat();

    const dates = req.query;

    const basePrice = result.reduce((acc, el)=> parseFloat(acc) + parseFloat(el.amount),0 );

    const IVA = basePrice * 0.12;

    const commissions = basePrice > 100 ? (basePrice * 0.01) : 0;

    const insurance =  basePrice > 100 ? parseFloat((basePrice * 0.05 * -1).toFixed(2)) : 0;

    const service = services(basePrice, result.length);

    const total  = parseFloat((basePrice + IVA + commissions + insurance + service).toFixed(2));
    
    res.json({
      dates,
      basePrice,
      IVA, 
      commissions,
      insurance,
      service,
      total
    }) 
      
    ;
}

module.exports = {
    challengeGet,
}
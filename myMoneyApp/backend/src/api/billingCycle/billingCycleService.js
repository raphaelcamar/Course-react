const BillingCycle = require('./billingCycle');
const errorHandler = require('../common/errorHandler');

BillingCycle.methods(['get', 'post', 'put', 'delete']);
BillingCycle.updateOptions({new : true, runValidators : true});
BillingCycle.after('post', errorHandler).after('put', errorHandler)


// BillingCycle.route('get', (req, res, next) => {

//     BillingCycle.find({}, (err, docs) => {

//         if(!err) {
//             res.json(docs)
//         } else {
//             res.status(500).json({errors: [error]})
//         }
//     });
// });

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error){
            res.status(500).json({errors : [error]})
        }else{
            res.json({value})
        }
    });
});

BillingCycle.route('summary', (req, res, next) => {

    //Vários parametros, cada parametro é um objeto
    BillingCycle.aggregate([{
        //pega todos os valores, e soma eles, através do $sum
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debits.value"}} 
    }, { 
        //cria a resposta, com o retorno que foi colocado
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        //0 - false, 1 - true
        $project: {_id: 0, credit: 1, debt: 1}
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    });
});


module.exports = BillingCycle
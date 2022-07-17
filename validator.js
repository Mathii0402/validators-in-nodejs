//validator is to validate emails url etc

const moment = require('moment')
const val =require('validator')

console.log(val.isEmail('mathi@gmail.com'))



//isAfer is to check the date is after another date
var dat=moment('2010-10-20').isAfter('2010-10-10')


//using arrow function

data=(date1,date2)=>{
    return moment(date1).isAfter(date2)
}
console.log(data('2010-10-20','2010-10-10'))
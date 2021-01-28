const _ = {clamp : (number , lower , upper ) => {
 let  m  = Math.max(number,lower)
 let n = Math.min(m ,upper)
 return n ; 
}} ; 


// Do not write or modify code below this line.
module.exports = _;
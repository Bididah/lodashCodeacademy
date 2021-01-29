const _ = {
clamp : (number , lower , upper ) => {
 let  m  = Math.max(number,lower)
 let n = Math.min(m ,upper)
 return n ; 
}, 
inRange : (number , StartValue , endValue ) => {
    let  n = StartValue ; 
    let  m = endValue ;
    if (endValue === undefined){
        m = n  ; 
        n = 0 ; 
    }
    if( n > m ) {
        m = StartValue;
        n = endValue ; 
    }
   if( number < n || number >= m ) {
       console.log(m)
       return false ; 
   } else {
       console.log(m)
       return true ; 
   }
}
} ;

console.log(_.inRange( 6 , 10 ) ) 

// Do not write or modify code below this line.
module.exports = _;
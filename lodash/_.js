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
},
words : (string) => {
    const array = string.split(" ")
    return array ; 
}, 
pad : (string , length) => {   
   let n = string.length
   if(length <= n){
       return string 
   }else {
       let totalPadding = length - n 
       if (totalPadding%2 == 0 ){
        for( let i = 0 ; i <(totalPadding/2) ; i++) {
            string = " "+string
            string = string+" "
         }
         return string ;
       }else{
        for( let i = 0 ; i <Math.floor(totalPadding/2) ; i++) {
            string = " "+string
         } 
         for( let i = 0 ; i < Math.ceil((totalPadding/2))  ; i++) {
            string = string+" "
         }
         return string ; 
       }  }
}
}


// Do not write or modify code below this line.
module.exports = _;
//1 
const all = (array , funtion)=>{
    // We Can Use ForEach Also
    for(let i = 0 ; i<array.length ; i++){
        if(funtion(array[i])){
        }else {
            return false
        }
    }
    return true
}

var allAreLessThanSeven = all([1,2,6] , function(num){return num<7})

//2 

var nestedObject = {

    data: {

        info: {

            stuff: {

                thing: {

                    omar: 88 ,

                    moreStuff: {

                        magicNumber: 44,

                        something: 'foo2'

                    }

                }

            }

        }

    }

}




const contains =(object , value)=>{
    var arr = Object.values(object);
    for(let i = 0 ; i<arr.length ; i++){
        if(typeof(arr[i])=='object'){
            [arr[i]] = [Object.values(arr[i]).flat()]
            arr = [...arr.flat()]
            i=-1  
        }
    }
    return arr.includes(value)
}
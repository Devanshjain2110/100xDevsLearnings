
function mySetTimeout(count){
    setTimeout(() => {
        console.log(count)
        mySetTimeout(count+1)
    },1000)
}

mySetTimeout(0)
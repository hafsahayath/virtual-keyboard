const keys = document.querySelectorAll('.keys')

for(let i=0; i<keys.length; i++){
    keys[i].addEventListener('click', ()=>{
        if(keys[i].childElementCount===1){
            const ref = keys[i].querySelector("span:not([class])")
            if(ref){
                console.log(ref.innerHTML)
            }
        } 
    })   
}
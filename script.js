const keys = document.querySelectorAll('.keys')
let inputField = ''
let caps = false;
let shift = false;
for(let i=0; i<keys.length; i++){
    keys[i].addEventListener('click', ()=>{
        keys[i].classList.add('keypress');
        if(keys[i].children.length === 1 && keys[i].querySelector('span').innerText !== 'shift' && keys[i].querySelector('span').innerText !== 'caps lock' && keys[i].querySelector('span').innerText !== 'delete' && keys[i].querySelector('span').innerText !== 'tab' && keys[i].querySelector('span').innerText != 'space'){
            !caps? inputField += keys[i].querySelector('span').innerText.toLowerCase() : inputField += keys[i].querySelector('span').innerText;
        } else if (keys[i].querySelector('span').innerText === 'shift'){
            shift = !shift;
        } else if (keys[i].querySelector('span').innerText === 'caps lock'){
            caps = !caps;
        } else if (keys[i].querySelector('span').innerText === 'delete'){
            inputField = inputField.slice(0, -1);
        } else if (keys[i].querySelector('span').innerText === 'tab'){
            inputField = inputField + '   '
        } else if(keys[i].querySelector('span').innerText === 'space'){
            inputField = inputField + ' '
        } else {
            !shift? inputField += keys[i].querySelector('span:last-child').innerText : inputField += keys[i].querySelector('span:first-child').innerText;
        }
        setTimeout(()=>{
            keys[i].classList.remove('keypress')
        },300)
        console.log(inputField)
    })
}
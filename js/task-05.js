const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
const copyInput = () => {
    if(nameOutput.textContent = nameInput.value === ''){
        return nameOutput.textContent = 'Anonumous'
    } else{
        return nameOutput.textContent = nameInput.value
    }
}

nameInput.addEventListener('input', copyInput)
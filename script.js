const input1 = document.querySelector('.input1')
const input2 = document.querySelector('.input2')
const btAdd = document.querySelector('.add')
const btRemove = document.querySelector('.remove')

const p = document.createElement('p')
let arr = []

btAdd.addEventListener('click',(e) => {
    e.preventDefault()
    arr.length === 2 ? input2.disabled = true : null;
    const val = parseInt(input2.value)
    if (!isNaN(val)){
    arr.push(val)
    console.log(arr);
    input1.value += `${val}, `
    input2.value = ''
    }
})

btRemove.addEventListener('click', (e) => {
    const val = parseInt(input2.value)
    arr=arr.filter((ele) => ele !== val)
    input1.value = ''
    arr.map((val) => input1.value += `${val}, `)
})




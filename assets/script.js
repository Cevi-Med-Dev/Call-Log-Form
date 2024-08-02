console.log("script running",document.querySelector('#formContainer form'))
document.querySelector('.btn').addEventListener("click",()=>{
    console.log("submitted")
// setTimeout(window.location.reload("https://cevi-med-dev.github.io/Call-Log-Form/"), 2000);
})

let form = document.querySelector('#formContainer form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const fn = new FormData(form);
    let staObject = Object.fromEntries(fn)
    console.log("this is the data retreived",fn )
    // for(item of fn){
    //     console.log(item)
    // }
})
var dataObject = {}
let form = document.querySelector('#formContainer form')
let postDataa = async (url, data) => {
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      mode: 'no-cors',
      headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: data, // body data type must match "Content-Type" header
    });

    return response; // parses JSON response into native JavaScript objects
}


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const dataObject = new FormData(form);
    // dataObject = Object.fromEntries(fn)
    console.log("this is the data retreived", dataObject)
    postDataa("https://hooks.airtable.com/workflows/v1/genericWebhook/appi0FYLXUm0K6RqJ/wflJeWOC1frY12aRs/wtrw525FyOiBa1ZBZ",  dataObject).then((dataa) => {
        console.log(dataa)
    });
 
})


//send data to Airtable


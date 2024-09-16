var call_form_ = document.querySelector("#formContainer form");
var call_formData = new FormData(call_form_);
var call_params = "";
emailObject = {
  "Assigned to Solutions" : "solutions@cevimed.com",
  "Assigned to Stephanie" : "care@cevimed.com",
  "Assigned to Gio" : "gio@cevimed.com",
  "Assigned to Robert": "robert@cevimed.com",
  "Assigned to Natally": "natalia@cevimed.com",
  "Assigned to Simon": "sales@cevimed.com",
  "Assigned to James": "tech@cevimed.com",
  "Assigned to Lina": "purchasing@cevimed.com",
  "Assigned to Angela F.": "angela@cevimed.com",
  "Assigned to Ángela P.": "orders@cevimed.com",
  "Assigned to Natally": "natalia@cevimed.com",
}

let call_trigger = async (url, data) => {
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: data, // body data type must match "Content-Type" header
  });

  return response; // parses JSON response into native JavaScript objects
};

document.querySelectorAll("input[type=checkbox]").forEach((checkBox) => {
  console.log(checkBox, checkBox.value, checkBox.name);
  checkBox.checked && call_formData.append(`${checkBox.name}`, `${checkBox.value}`);
});

document.querySelector(".assigneeChkBx").addEventListener("click",({target})=>{
  document.getElementById("assigneeContainer").classList.toggle("hide")
  document.querySelector("#assigneeContainer select").addEventListener("change",()=>{
      call_params += `assigneeEmail=${emailObject[document.querySelector("#assigneeContainer select").value]}&`
  })
})
call_form_.addEventListener("submit", (e) => {
  e.preventDefault();
  for (var [key, value] of call_formData.entries()) {
    console.log(key, " = ", value)
    if(key === "assignee"){
      call_params += `${key}=${document.querySelector("#assigneeContainer select").value}&`
    }
    call_params += `${key}=${document.querySelector("*[name=" + key + "] ").value}&`;
  }
  console.log("this is the data retreived", call_params);
  call_trigger(
    "https://hooks.airtable.com/workflows/v1/genericWebhook/appi0FYLXUm0K6RqJ/wflJeWOC1frY12aRs/wtrw525FyOiBa1ZBZ",
    call_params
  ).then((data) => {
    alert("You have successfully registered this call")
    console.log(data);
  });
  call_form_.reset();
});
document.getElementById("wrapUpCall").addEventListener("click", ()=>{
  setTimeout(() => {
    call_form_.reset();
    location.reload()
  }, 5000);
 
  })

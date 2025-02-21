var call_form_ = document.querySelector("#formContainer form");
var call_formData = new FormData(call_form_);
var call_params = "",
  emailObject = {
    "Assigned to Stephanie": "customercare@cevimed.com",
    "Assigned to Robert": "robert@cevimed.com",
    "Assigned to Natally": "natalia@cevimed.com",
    "Assigned to Simon": "sales@cevimed.com",
    "Assigned to James": "tech@cevimed.com",
    "Assigned to Lina": "purchasing@cevimed.com",
    "Assigned to Adriana": "order@cevimed.com",
    "Assigned to Angela": "angela@cevimed.com",
    "Assigned to Carina": "accounting@cevimed.com",
  },
  templateObject = {
    warranty: "customercare@cevimed.com",
    seller: "robert@cevimed.com",
    buyer: {
      
    },
    robert: {
      followUp: [
        "I hope you're having a great start to your day! 😊",
        `Best regards
    🎧**Robert Arundel** 
    📞 **833-238-4633 Ext 102** 
    📩 **Robert@cevimed.com** 
    🌐 [www.cevimed.com](http://www.cevimed.com)`,
      ],
    },
    James: {
      followUp: [
        "I hope you're having a great start to your day! 😊",
        `Best regards
🎧**James Chaves** 
📞 **833-238-4633 Ext 107** 
📩 **Tech@cevimed.com** 
🌐 [www.cevimed.com](http://www.cevimed.com)`,
      ],
    },
  };

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-bottom-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "5700",
  hideDuration: "3000",
  timeOut: "5700",
  extendedTimeOut: "3000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "slideUp",
  closeMethod: "slideUp",
};

toastr.info("Please excuse interface changes :)");
toastr.success(
  `Thank you for calling CeviMed this is ---------, May I Please have your name? `
);

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

document.getElementById("CSA").addEventListener("change", ({ target }) => {
  toastr.success(
    `Thank you for calling CeviMed this is ${document
      .querySelector("#CSA")
      .value.toUpperCase()}</b> , May I Please have your name? `
  );
});

// document.getElementById("Type").addEventListener("change", ({ target }) => {
//   toastr.info(`pick a protocol from the List of emails`);
//   document.querySelector("#templateHider").classList.remove("hide");
// });

// document.getElementById("Type").addEventListener("change", ({ target }) => {
//   toastr.info(
//     `Thank you for calling CeviMed this is ${document
//       .querySelector("#CSA")
//       .value.toUpperCase()}</b> , May I Please have your name? `
//   );
// });

document.getElementById("cName").addEventListener("focusout", (e) => {
  toastr.success(
    `Suggestion : Say "Hi ${e.target.value.toUpperCase()}, How Can I Assist You Today?`
  );
});

document.querySelectorAll("input[type=checkbox]").forEach((checkBox) => {
  console.log(checkBox, checkBox.value, checkBox.name);
  checkBox.checked &&
    call_formData.append(`${checkBox.name}`, `${checkBox.value}`);
});

document
  .querySelector(".assigneeChkBx")
  .addEventListener("click", ({ target }) => {
    document.getElementById("assigneeContainer").classList.toggle("hide");
    document
      .querySelector("#assigneeContainer select")
      .addEventListener("change", () => {
        toastr.info(
          `${document.querySelector("#assigneeContainer select").value}`
        );
        call_params += `assigneeEmail=${
          emailObject[document.querySelector("#assigneeContainer select").value]
        }&`;
      });
  });

document.querySelector(".template").addEventListener("click", ({ target }) => {
  document.getElementById("templateContainer").classList.toggle("hide");
  document
    .querySelector("#templateContainer select")
    .addEventListener("change", () => {
      call_params += `template=${
        emailObject[document.querySelector("#templateContainer select").value]
      }&`;
    });
});

call_form_.addEventListener("submit", (e) => {
  e.preventDefault();
  for (var [key, value] of call_formData.entries()) {
    console.log(key, " = ", value);
    if (key === "assignee") {
      call_params += `${key}=${
        document.querySelector("#assigneeContainer select").value
      }&`;
    }
    call_params += `${key}=${
      document.querySelector("*[name=" + key + "] ").value
    }&`;
  }

  call_trigger(
    "https://hooks.airtable.com/workflows/v1/genericWebhook/app7xwRPHHOaWI4pJ/wflyLNHGL2T8dEnQs/wtrlCTYJiBKLmDcAZ",
    call_params
  ).then((data) => {
    toastr.success("You have successfully registered this call");
  });
});

document.getElementById("wrapUpCall").addEventListener("click", () => {
  setTimeout(() => {
    window.location.reload();
  }, 2000);
});

// Example usage: Display a success message

//  // Example usage: Display an error message
//  toastr.error("This is an error message!");

// Example usage: Display an info message

//  // Example usage: Display a warning message
//  toastr.warning("This is a warning message!");

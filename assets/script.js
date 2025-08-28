var call_form_ = document.querySelector("#formContainer form"),
  call_formData = new FormData(call_form_),
  call_params = "",
  currentTemplate,
  templateChosen,
  emailObject = {
    "Assigned to Bryan": "customercare@cevimed.com",
    "Assigned to Diana": "design@cevimed.com",
    "Assigned to Robert": "robert@cevimed.com",
    "Assigned to Natally": "natalia@cevimed.com",
    "Assigned to Simon": "sales@cevimed.com",
    "Assigned to James": "tech@cevimed.com",
    "Assigned to Lina": "purchasing@cevimed.com",
    "Assigned to Adriana": "order@cevimed.com",
    "Assigned to Angela": "angela@cevimed.com",
    "Assigned to Carina": "accounting@cevimed.com",
    "Assigned to Jacob": "jacob@cevimed.com",
    "Assigned to Mateo": "mateo@cevimed.com"
  },
  templateObject = {
    //done
    "🛡️ warranty": [
      {
        "information Request": `In order for us to start a warranty case we need the following information
        🖊️ Customers Name: 
        📜 Invoice #: 
        💭 Brief Description of the problem: 
        📷 Clear Pictures: 
        🎥 Video to have a visual of the problem and determine the solution: if the video is too big, please attach a google drive link, youtube link, wetransfer etc. 
        📞 Best call back phone number to FaceTime: It can be android or iPhone:`,
      },
      {
        "Out Of Warranty": `We are sorry to inform you that you are out of warranty
        However this does not mean we won't help you, 
        we need the following information in order help you find solutions

        🖊️ Customers Name: 
        📜 Invoice #: 
        💭 Brief Description of the problem: 
        📷 Clear Pictures: 
        🎥 Video to have a visual of the problem and determine the solution: if the video is too big, please attach a google drive link, youtube link, wetransfer etc. 
        📞 Best call back phone number to FaceTime: It can be android or iPhone:`,
      },
    ],
    "💸 Sales Purchase": [
      {
        "Request Offer Details": `In order to make sure we get the equipment you want to sell 💸 in front of the right eyes 👀
          Please provide us with the follwoing information :

          🖋️ Seller Name :
          💸 List of Equipment you Want to Sell (include asking price) :
          📋 Inlude a Description of Conditions, Use and Antiguity :
          📷 Images of Equipment :
          🎥 Videos of Equipment :
          `,
      },
      {
        "Send W9":
          "wants good quote on product and shipping, give us address and CM numbers",
      },
    ],
    "🔍 suspicious": [
      {
        "Request for Identification":
          "A request regarding suspicious activities, potentially fraudulent or unusual orders that need verification.",
      },
      {
        "Follow Up After Clearing Order":
          "A query about orders that seem irregular or potentially deceptive.",
      },
    ],

    //dynamic
    "🚚 delivery": [
      {
        "Written Confirmation Date,Time & Address of Delivery":
          "An inquiry related to the status or issues regarding the delivery of products or services.",
      },
    ],
      "📝 Online Purchase": [
        {
          "Resend Back Order Email":
            "Information or issues concerning online purchases made through a website or platform.",
        },
    //list of vendors
        {
          "Contact vendor on behalf of customer":
            "Request information on behalf of customer from vendor such as ETA / TKN / Status etc.",
        },
      ],
    "🧾 quoteRequest": [
      {
        "Quote Request / Business": `
        
        Thanks for reaching out! ✨🛍️

        We’d love to assist with your new order request 🛒. 
        To provide the most accurate pricing and options, We would like to collect a few details : 
          
          🔹 Best Call Back number
          🔹 Product(s) or service needed
          🔹 Quantity
          🔹 Any special requirements or customizations
          🔹 Delivery Address(residential or business)
        
        We’re looping in Robert to ensure you get the best options available. Looking forward to your reply so we can get started! 
        
        `,
      },
      {
        "Quote Request / Resident":
          `Thanks for reaching out!✨🛍️
          We’re happy to assist with your order request 🛒.
          To provide the best pricing and availability, could you share a few details :

      🔹 Best Call Back number
      🔹 Item(s) and Quantity
      🔹 Shipping/location Address and Delivery instructions
      🔹 Pictures on Entrance 

      We’re tagging in Robert to assist and get you the best options available!😊`,
      },
    ],
    //done
    "😭 grievance": [
      {
        "General Grievance Response": `On Behalf of CeviMed we Extend a heartfelt apology 🥺💖
          
          We’re really sorry to hear about your recent inconviniences😔. 
          Your experience matters to us ✨, and we want to help mitigate and resolve this issue ASAP.
          Could you please share a few more details? (Invoice #,What happened? When? Any specifics?) 

          This will help us get the right team on it 👀 as well as ensure it dosen't happen again ✋🏻
          
          Thank you for your time and patience`,
      },
      {
        "Case Escalated / Extended Apology Email": `On behalf of CeviMed, we extend a sincere apology for this situation 🥺💔. 
           We take this very seriously and want to act fast to help resolve it ASAP.
           This is case is being escalated and we would like to collect all the details in writting
           Please share with us : (Invoice #, What happened? When? Any specifics?)

           Our team is already looking into this matter, and we’ll do everything possible to assist you 💪
           
           Your patience means the world to us 💕. 
           
           We’re here to help, and we won’t stop until this is resolved!`,
      },
    ],
    "🔄 Order Update": [
      {
        "Update Re cap":
          "",
      },
    ],
    "❓ General Questions": [
      {
        "Answer in Writting":
          "General inquiries not related to a specific category, often seeking clarifications or additional information.",
      },
      {
        "Gathering More information for Answer":
          "General inquiries not related to a specific category, often seeking clarifications or additional information.",
      },
    ],
  };

//dependendies
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
toastr.success(
  `Thank you for calling CeviMed this is --------, May I Please have your name? `
);

//functions
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

//Events
document.getElementById("CSA").addEventListener("change", ({ target }) => {
  toastr.success(
    `Thank you for calling CeviMed this is ${document
      .querySelector("#CSA")
      .value.toUpperCase()}</b> , May I Please have your name? `
  );
});

document.getElementById("Type").addEventListener("change", ({ target }) => {
  document.getElementById("template").innerHTML = "";
  if (templateObject[`${target.value}`] !== undefined) {
    toastr.info(`Protocol Email Templates Available for ${target.value}`);    
    currentTemplate = templateObject[`${target.value}`];    
    document.querySelector("#templateHider").classList.remove("hide");    
    document.getElementById("template").innerHTML = '<option value="">Choose an Email Template</option>';    

    const regex = new RegExp(["🔄 ", "❓"].join("|"), "gi");
      const matches = target.value.match(regex);
      if (matches) {
        console.log("Found words:", matches); // Output: ["questions or orders"]
      } else {
        // Output: ["category is not dynamic"]
        console.log("No matches found");
      }

    templateObject[`${target.value}`].forEach((template) => { 
      console.log(templateObject[`${target.value}`], target.value),
      (document.getElementById("template").innerHTML += `<option value="${Object.keys(template)[0]}">${Object.keys(template)[0]} ${target.value.split(" ")[0]}</option>`);
      // if(target.value.includes("")) {
      //   document.getElementById("template").innerHTML += `<option value="${Object.keys(template)[0]}">${Object.keys(template)[0]} ${target.value.split(" ")[0]}</option>`;
      // }
    });
  } else {
    toastr.warning(`No Protocols for the ${target.value} Category`);
    document.querySelector("#templateHider").classList.add("hide");
    return;
  }
});

document.getElementById("template").addEventListener("change", ({ target }) => {
  templateChosen = Object.values(currentTemplate).filter(
    (temp) => Object.keys(temp)[0] === target.value
  );
  call_formData.append(`template`, `${Object.values(templateChosen[0])[0]}`);
  console.log(call_formData);
});

document.getElementById("cName").addEventListener("focusout", (e) => {
  toastr.success(
    `Suggestion : Say "Hi ${e.target.value.toUpperCase()}, How Can I Assist You Today?`
  );
});

document.querySelectorAll("input[type=checkbox]").forEach((checkBox) => {
  checkBox.checked &&
    call_formData.append(`${checkBox.name}`, `${checkBox.value}`);
});

//assignee emails
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

//Shows/Hides Email Elements
document.querySelector(".template").addEventListener("click", ({ target }) => {
  document.getElementById("templateContainer").classList.toggle("hide");
});

//submit event handler
call_form_.addEventListener("submit", (e) => {
  e.preventDefault();
  for (var [key, value] of call_formData.entries()) {
    if (key === "assignee") {
      call_params += `${key}=${
        document.querySelector("#assigneeContainer select").value
      }&`;
    }
    if (key === "template") {
      call_params += `${key}=${Object.values(templateChosen[0])[0]}&`;
    }
    call_params += `${key}=${
      document.querySelector("*[name=" + key + "] ").value
    }&`;
    console.log(key, " = ", value);
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

var call_form_ = document.querySelector("#formContainer form"),
  call_formData = new FormData(call_form_),
  call_params = "",
  currentTemplate,
  templateChosen,
  emailObject = {
    "Assigned to Bryan": "customercare@cevimed.com",
    "Assigned to Hector": "Hector@cevimed.com",
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
    "Assigned to Mateo": "mateo@cevimed.com",
    "Assigned to Nicky": "warehouse@cevimed.com",
  },
  templateObject = {
    "🛡️ Warranty": [
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
    "💸 Sales": [
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
    "🔍 Suspicious Order Verification": [
      {
        "Re-Send Request for Identification":
          `Thank you for shopping at Cevimed. Your order was successfully received
We are in contact with you, because we need a picture of your license, medical card and office address, in order to process the shipment of your order.
If you have any questions or need to make any changes to your order, please let us know.
You can contact me directly at order@cevimed.com or you can call our customer service by phone at (833) 238-4633.
Thank you very much`,
      },
    ],
    "🚚 Delivery": [
      {
        "Written Confirmation Date,Time & Address of Delivery":
          `Following up on our recent phone conversation, we would like to confirm the details we discussed for your reference:

            📅 Date: 
            ⏰ Time: 

            This email serves as a written confirmation of our conversation, ensuring everything is clear and aligned.

            We appreciate your trust in CeviMed and look forward to serving you.`,
      }
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

  },
  fillerObject = {
    "🔍 Suspicious Order Verification": ["", "Manual verification required", "Customer must respond to email and this number is give for clarifty", `Copy of email : "Thank you for shopping at Cevimed. Your order No. 27590 was successfully received

          We are in contact with you, because we need a picture of your license, medical card and office address, in order to process the shipment of your order.

If you have any questions or need to make any changes to your order, please let us know.

You can contact me directly at order@cevimed.com or you can call our customer service by phone at (833) 238-4633.

Thank you very much,

Cevi Med" `],
    "🚚 Delivery": ["", "Delivery Inquiry", "", ""],
    "🏥 Insurance Coverage Inquiry": ["", "Insurance Payment?", "Unfortunately we are not currently set up to recieve insurance payment for a presciption a customer may have", "Best way to guaranteed prescribed durable medical equipment aka DME is covered is to call the insurancxe directly and request a list of in network providers of DME"],
    "🐛 Scammers": ["Scammer Name : ", "Scamming / Spamming", "Scam Call", "Block and Report"],
    "🏷️ Solicitors": ["Solicitor / Company name : ", "Soliciting a Service", "Calling to Solicit", "Instruct to Send Email instead",],
    "💸 Sales": ["", "Sales", "", ""],
    "🛡️ Warranty": ["", "Warranty", "", ""],
    "📝 Online Purchase": ["", "Online order", "", ""],
    "🧾 quoteRequest": ["", "Needs Quote", `Product :
Qty:
Amount :
Location / Address :`, "Log for Robert"],
    "💰 Phone Purchase": ["", "Purchasing via phone", `Product :
  Qty:
  Amount :
  Order Confirmation # :`, "Take Payment"],
    "😭 grievance": ["", "Grievance / Complaint", "", "Extend apology and log details"],
    "🔄 Order Update": ["", "", "", "Give customer updates"],
    "❌ Error / Silent Call": ["No Name", "Silent Call / Bad Connection", "Error durng call", "logged for reference"],
    "❓ General Questions": ["", "Asking Questions", "Question :", "Answer : "],
    "🏦 Accouting / Carina": ["", "", "", "Log For Kary in Accounting"],
  }
  //https://n8n.cevispace.com/webhook/d8b9bced-6334-4911-92b3-176f7cc7072d
    const WEBHOOK_URL = 'https://hooks.airtable.com/workflows/v1/genericWebhook/app7xwRPHHOaWI4pJ/wflHraW1RQjayg1Fb/wtrNXfOtmQN8cwtgb';
    const form = document.getElementById('dataForm');
    const loading = document.getElementById('loading');
    const results = document.getElementById('results');
    const error = document.getElementById('error');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const invoiceNumber = document.getElementById('invoiceNumber').value.trim();

      // Reset UI
      error.classList.remove('active');
      results.classList.remove('active');
      loading.classList.add('active');
      submitBtn.disabled = true;

      try {
        // Make POST request to n8n webhook
        const response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            invoice: invoiceNumber
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();



        // Display the data
        displayData(data);

      } catch (err) {
        console.error('Error:', err);
        error.textContent = `Error: ${err.message}. Please check the webhook URL and try again.`;
        error.classList.add('active');
      } finally {
        loading.classList.remove('active');
        submitBtn.disabled = false;
      }
    });

    function displayData(data) {
      //Order : invoice , trips, calls
      let dataArray = Object.values(data[0])
      let fullArray = Object.entries(data[0]).map(l => [Object.keys(l), Object.values(l)].flat())


      fullArray.forEach(l => {
        console.log(l)

        displaySection(Object.values(l[3]), `${l[2]}Content`, `${l[2]}Badge`, `No ${l[2]} Registered yet`, `${l[3]["records"].length}`, `${l[2]}`)
      })
      // Show results
      results.classList.add('active');
    }

    function displaySection(items, contentId, badgeId, emptyMessage, totalItems, type) {
      const content = document.getElementById(contentId);
      const badge = document.getElementById(badgeId);
      // Update badge
      badge.textContent = totalItems;
      badge.classList.toggle('empty', items.length === 0);

      // Display items
      if (items.length === 0) {
        content.innerHTML = `<div class="no-data">${emptyMessage}</div>`;
        return;
      }

      content.innerHTML = items.map((item, index) => {
        console.log(Object.entries(item))
        const formatDate = s => {
  // Extract MM/DD/YYYY safely
  const [m, dNum, y] = s.split("/").map(Number);

  // FIX: create date without timezone shift
  const d = new Date(y, m - 1, dNum);

  const day = d.getDate();
  const suf = (n =>
    (n % 10 == 1 && n != 11 ? "st" :
     n % 10 == 2 && n != 12 ? "nd" :
     n % 10 == 3 && n != 13 ? "rd" : "th")
  )(day);

  return d
    .toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    })
    .replace(",", "")
    .replace(day, day + suf);
};

        const renderOrderCard = (order, i) => `
<div class="orderCard-container">
  <div class="orderCard-card">

    <h2 class="orderCard-title">Order #${order["Order #"] || order.Name}</h2>

    <div class="orderCard-section">
      <h3>Customer Info</h3>
      <div class="orderCard-grid">
        <div><strong>Name:</strong> ${order.Customer}</div>
        <div><strong>Email:</strong> ${order.Email}</div>
        <div><strong>Phone:</strong> ${order.Phone}</div>
      </div>
    </div>

    <div class="orderCard-section">
      <h3>Order Details</h3>
      <div class="orderCard-grid">
        <div><strong>Item:</strong> ${order.Item?.split("Choose Color")[0]}</div>
        <div><strong>Color:</strong> ${order.Item?.match(/Choose Color:(.*)/)?.[1] || "—"}</div>
        <div><strong>Qty:</strong> ${order.QTY}</div>
        <div><strong>EA Price:</strong> $${order["EA Price"]}</div>
        <div><strong>Shipping:</strong> $${order.Shipping}</div>
        <div><strong>Total Amount:</strong> $${order["Total Amount"]}</div>
        <div><strong>Profit:</strong> $${order.Profit}</div>
        <div><strong>Category:</strong> ${order.Category?.join(", ")}</div>
        <div><strong>Type:</strong> ${order["Type of Product"]}</div>
      </div>

      <p class="orderCard-multiline"><strong>Item Notes:</strong><br>
        ${order.Item?.replace(/\n/g, "<br>")}
      </p>
    </div>

    <div class="orderCard-section">
      <h3>Shipping Address</h3>
      <p class="orderCard-multiline">
        ${order["Address "]?.replace(/\n/g, "<br>")}
      </p>
    </div>

    ${order.Attachment?.length
            ? `
        <div class="orderCard-section">
          <h3>Attachments</h3>
          <div class="orderCard-images">
            ${order.Attachment.map(a => `
              <img src="${a.url}" alt="${a.filename}" />
            `).join("")}
          </div>
        </div>
      `
            : ""}

    ${order.POD?.length
            ? `
        <div class="orderCard-section">
          <h3>POD Images</h3>
          <div class="orderCard-images">
            ${order.POD.map(a => `
              <img src="${a.url}" alt="${a.filename}" />
            `).join("")}
          </div>
        </div>
      `
            : ""}

  </div>
</div>
`;
        const renderTripsCard = (trip) => `
<div class="orderCard-container">
  <div class="orderCard-card">

    <h2 class="orderCard-title">Trip – ${trip.Trips || trip.Name}</h2>

    <!-- CUSTOMER / CONTACT INFO -->
    <div class="orderCard-section">
      <h3>Customer Info</h3>
      <div class="orderCard-grid">
        <div><strong>Name:</strong> ${trip.Name}</div>
        <div><strong>Email:</strong> ${trip.email}</div>
        <div><strong>Phone:</strong> ${trip.Phone}</div>
        <div><strong>Address:</strong> ${trip.Address}</div>
        <div><strong>State:</strong> ${trip.State}</div>
      </div>
    </div>

    <!-- TRIP DETAILS -->
    <div class="orderCard-section">
      <h3>Trip Details</h3>
      <div class="orderCard-grid">
        <div><strong>Route:</strong> ${trip.Route}</div>
        <div><strong>Driver:</strong> ${trip["Driver Name"]?.join(", ")}</div>
        <div><strong>Position #:</strong> ${trip["Position #"]}</div>
        <div><strong>Position Truck:</strong> ${trip["Position Truck"]?.join(", ")}</div>
        <div><strong>Stops:</strong> ${trip["Stop actual"]} / ${trip["Total of stops"]}</div>
        <div><strong>Date of Trip:</strong> ${trip["Date of Trip"]}</div>
        <div><strong>Invoice Date:</strong> ${trip["Invoice Date"]}</div>
        <div><strong>Invoice Lookup:</strong> ${trip["Invoice Lookup"]}</div>
        <div><strong>Days Since Invoice:</strong> ${trip["Days of Invoice"]}</div>
        <div><strong>Status:</strong> ${trip.Status}</div>
        <div><strong>Payment Status:</strong> ${trip["Payment Status"]?.join(", ")}</div>
        <div><strong>Category:</strong> ${trip.Category?.join(", ")}</div>
        <div><strong>Type of Product:</strong> ${trip["Type of Product"]}</div>
      </div>

      <p class="orderCard-multiline">
        <strong>Description:</strong><br>
        ${trip.Description?.replace(/\n/g, "<br>")}
      </p>
    </div>

    <!-- SAMSARA LINKS -->
    <div class="orderCard-section">
      <h3>Samsara</h3>
      <div class="orderCard-grid">
        <div><strong>Samsara Link:</strong> 
          <a href="${trip["Samsara Link"]}" target="_blank">Open Link</a>
        </div>
      </div>
    </div>

    <!-- MAPPING -->
    ${trip["Samsura Map"]?.length ? `
      <div class="orderCard-section">
        <h3>Samsara Map</h3>
        <div class="orderCard-images">
          ${trip["Samsura Map"].map(m => `
            <img src="${m.url}" alt="${m.filename}" />
          `).join("")}
        </div>
      </div>
    ` : ""}

    <!-- ATTACHMENTS -->
    ${trip.Attachments?.length ? `
      <div class="orderCard-section">
        <h3>Attachments</h3>
        <div class="orderCard-images">
          ${trip.Attachments.map(a => `
            <img src="${a.url}" alt="${a.filename}" />
          `).join("")}
        </div>
      </div>
    ` : ""}

  </div>
</div>
`;
        function renderCallCard(call) {
          console.log(type)
          const priorityColor = {
            "low 💁‍♂️": 'rgba(245, 251, 85, 0.2)',        // transparent yellow
            "medium 🤙": 'rgba(255, 159, 41,0.2)',       // transparent orange
            "high❗": 'rgba(255, 95, 32,0.2)',           // transparent red
            "urgent ⚠️❗": 'rgba(230, 39, 39,0.25)'          // darker red
          };

          const bgColor = priorityColor[call.priority?.toLowerCase()] || 'rgba(0,0,0,0.05)';
          console.log(call.priority.toLowerCase(), bgColor)
          return `
          <div class="orderCard-container">
            <div style="background:${bgColor};" class="orderCard-card">

              <h2 class="orderCard-title">Call by ${call["Caller Name"]} on  ${formatDate(new Date(call.createdTime).toLocaleString().split(",")[0])}</h2>

              <!-- CUSTOMER / CALL INFO -->
              <div class="orderCard-section">
                <h3>Call Info</h3>
                <div class="orderCard-grid">
                  <div><strong>CS Agent:</strong> ${call["CS Agent"]}</div>
                  <div><strong>Call Direction:</strong> ${call["Call Direction"]}</div>
                  <div><strong>Caller Name:</strong> ${call["Caller Name"]}</div>
                  <div><strong>Phone #:</strong> ${call["Phone #"]}</div>
                  <div><strong>Type of Call:</strong> ${call["Type of Call "]}</div>
                  <div><strong>Priority:</strong> ${call.priority}</div>
                  <div><strong>Timestamp:</strong> ${call["time stamp"]}</div>
                </div>
              </div>

              <!-- INVOICE INFO -->
              <div class="orderCard-section">
                <h3>Invoice Details</h3>
                <div class="orderCard-grid">
                  <div><strong>Invoice Lookup:</strong> ${call["Invoice Lookup "]}</div>
                  <div><strong>Invoices:</strong> ${call.Invoices?.join(", ")}</div>
                  <div><strong>Name (from Invoices):</strong> ${call["Name (from Invoices)"]?.join(", ")}</div>
                  <div><strong>Invoice #:</strong> ${call["invoice #"]}</div>
                </div>
              </div>

              <!-- ISSUE -->
              <div class="orderCard-section">
                <h3>Issue Reported</h3>
                <p class="orderCard-multiline">
                  <strong>Issue:</strong><br>
                  ${call.Issue}
                </p>
              </div>

            </div>
          </div>

  `;
        } const executeCard = (type) => {

          switch (type) {
            case "calls":
              return rows.map(item => renderCallCard(item, index))
              break;

            case "trips":
              return rows.map(item => renderTripsCard(item, index))
              break;

            case "invoices":
              return rows.map(item => renderOrderCard(item, index))
              break;

            default:
              console.warn("Unknown type:", type);
          }
        }
        const rows = Object.values(item)


        return `
                    <div class="data-item">
                        ${executeCard(type)}
                    </div>
                `;
      }).join('');
    }

    function formatFieldName(name) {
      // Convert camelCase or snake_case to Title Case
      return name
        .replace(/([A-Z])/g, ' $1')
        .replace(/_/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase())
        .trim();
    }

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
  console.log(target.value)
  document.querySelector('[name="cName"]').value += `${fillerObject[`${target.value}`][0]}`
  document.querySelector('[name="reason"]').value += `${fillerObject[`${target.value}`][1]}`
  document.querySelector('[name="issue"]').value += `    /...${fillerObject[`${target.value}`][2]}`
  document.querySelector('[name="resolution"]').value += `   /...${fillerObject[`${target.value}`][3]}`
  if (templateObject[`${target.value}`] !== undefined) {
    toastr.info(`Protocol Email Templates Available for ${target.value}`);
    currentTemplate = templateObject[`${target.value}`];
    document.querySelector("#templateHider").classList.remove("hide");
    document.getElementById("template").innerHTML = '<option value="">Choose an Email Template</option>';
    const regex = new RegExp(["🔄 ", "❓"].join("|"), "gi");
    const matches = target.value.match(regex);
    if (matches) {
      categ
      console.log("Found words:", matches); // Output: ["questions or orders"]
    } else {
      // Output: ["category is not dynamic"]
      console.log("No matches found");
    }

    templateObject[`${target.value}`].forEach((template) => {
      console.log(templateObject[`${target.value}`], target.value),
        (document.getElementById("template").innerHTML += `<option value="${Object.keys(template)[0]}">${Object.keys(template)[0]} ${target.value.split(" ")[0]}</option>`);
      //  if (target.value.includes("")) {
      //     document.getElementById("template").innerHTML += `<option value="${Object.keys(template)[0]}">${Object.keys(template)[0]} ${target.value.split(" ")[0]}</option>`;
      //    }
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
document.addEventListener("click", e => {
  document.querySelectorAll(".section-header").forEach(header => {
    header.addEventListener("click", ({ target }) => {
      // console.log("target", target, "parent", target.parentNode.parentNode, "data to hide : ", Array.from(target.parentNode.parentNode.querySelectorAll(".orderCard-container")))
      Array.from(target.parentNode.parentNode.querySelectorAll(".orderCard-container")).forEach(el => {
        el.classList.toggle("open")
        console.log("attemoted to hide")
      })
    })
  })
});
document.querySelector('[name="invoice"]').addEventListener("focusout", ({ target }) => {
  console.log(target.value, document.getElementById("invoiceNumber"))
  document.getElementById("invoiceNumber").value = target.value
  toastr.success("Click the Retrieve Data Button!");
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
        call_params += `assigneeEmail=${emailObject[document.querySelector("#assigneeContainer select").value]
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
      call_params += `${key}=${document.querySelector("#assigneeContainer select").value
        }&`;
    }
    if (key === "template") {
      call_params += `${key}=${Object.values(templateChosen[0])[0]}&`;
    }
    call_params += `${key}=${document.querySelector("*[name=" + key + "] ").value
      }&`;
    console.log(key, " = ", value);
  }

  call_trigger(
    "https://hooks.airtable.com/workflows/v1/genericWebhook/app7xwRPHHOaWI4pJ/wflHraW1RQjayg1Fb/wtrNXfOtmQN8cwtgb",
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

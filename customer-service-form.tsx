import React, { useEffect } from "react";

// NOTE: This file is a direct TypeScript/React (TSX) port of the provided plain JS.
// It attaches the existing DOM-based behaviour on mount (inside useEffect) so you can
// drop this file into a React app that still renders the same HTML structure the
// original script expected. It intentionally uses defensive checks (guards) so it
// won't throw if elements are missing. Adjust element IDs/classes in your JSX if
// you migrate the DOM into React-managed markup.

declare const toastr: any; // toastr is assumed to be loaded globally on the page

type TemplateMap = Record<string, Array<Record<string, string>>>;
type FillerMap = Record<string, string[]>;

export default function CallFormManager(): JSX.Element {
  useEffect(() => {
    // ---------- constants & typed objects ----------
    const emailObject: Record<string, string> = {
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
    };

    const templateObject: TemplateMap = {
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
          "Send W9": "wants good quote on product and shipping, give us address and CM numbers",
        },
      ],
      "🔍 Suspicious Order Verification": [
        {
          "Re-Send Request for Identification": `Thank you for shopping at Cevimed. Your order was successfully received
We are in contact with you, because we need a picture of your license, medical card and office address, in order to process the shipment of your order.
If you have any questions or need to make any changes to your order, please let us know.
You can contact me directly at order@cevimed.com or you can call our customer service by phone at (833) 238-4633.
Thank you very much`,
        },
      ],
      "🚚 Delivery": [
        {
          "Written Confirmation Date,Time & Address of Delivery": `Following up on our recent phone conversation, we would like to confirm the details we discussed for your reference:

            📅 Date: 
            ⏰ Time: 

            This email serves as a written confirmation of our conversation, ensuring everything is clear and aligned.

            We appreciate your trust in CeviMed and look forward to serving you.`,
        },
      ],
      "📝 Online Purchase": [
        {
          "Resend Back Order Email": "Information or issues concerning online purchases made through a website or platform.",
        },
        {
          "Contact vendor on behalf of customer": "Request information on behalf of customer from vendor such as ETA / TKN / Status etc.",
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
          "Quote Request / Resident": `Thanks for reaching out!✨🛍️
          We’re happy to assist with your order request 🛒.
          To provide the best pricing and availability, could you share a few details :

      🔹 Best Call Back number
      🔹 Item(s) and Quantity
      🔹 Shipping/location Address and Delivery instructions
      🔹 Pictures on Entrance 

      We’re tagging in Robert to assist and get you the best options available!😊`,
        },
      ],
      "😭 grievance": [
        {
          "General Grievance Response": `On Behalf of CeviMed we Extend a heartfelt apology 🥺💖
          
          We’re really sorry to hear about your recent inconvinences😔. 
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
          "Update Re cap": "",
        },
      ],
      "❓ General Questions": [
        {
          "Answer in Writting": "General inquiries not related to a specific category, often seeking clarifications or additional information.",
        },
        {
          "Gathering More information for Answer": "General inquiries not related to a specific category, often seeking clarifications or additional information.",
        },
      ],
    };

    const fillerObject: FillerMap = {
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
      "🧾 quoteRequest": ["", "Needs Quote", `Product :\nQty:\nAmount :\nLocation / Address :`, "Log for Robert"],
      "💰 Phone Purchase": ["", "Purchasing via phone", `Product :\n  Qty:\n  Amount :\n  Order Confirmation # :`, "Take Payment"],
      "😭 grievance": ["", "Grievance / Complaint", "", "Extend apology and log details"],
      "🔄 Order Update": ["", "", "", "Give customer updates"],
      "❌ Error / Silent Call": ["No Name", "Silent Call / Bad Connection", "Error durng call", "logged for reference"],
      "❓ General Questions": ["", "Asking Questions", "Question :", "Answer : "],
      "🏦 Accouting / Carina": ["", "", "", "Log For Kary in Accounting"],
    };

    const WEBHOOK_URL = "https://n8n.cevispace.com/webhook/d8b9bced-6334-4911-92b3-176f7cc7072d";

    // ---------- DOM elements (guarded) ----------
    const form = document.getElementById("dataForm") as HTMLFormElement | null;
    const loading = document.getElementById("loading");
    const results = document.getElementById("results");
    const error = document.getElementById("error");
    const submitBtn = document.getElementById("submitBtn") as HTMLButtonElement | null;

    // small helpers
    const safeText = (s: unknown) => (s === undefined || s === null ? "" : String(s));

    // ---------- utilities ----------
    const call_trigger = async (url: string, data: string) => {
      const response = await fetch(url, {
        method: "POST",
        cache: "no-cache",
        // keep original behavior but mode: "no-cors" will make response opaque; preserve but note it
        mode: "no-cors" as RequestMode,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
      });

      return response;
    };

    // formatDate: converts MM/DD/YYYY or Date string to friendly string with suffix
    const formatDate = (s: string) => {
      // try to detect MM/DD/YYYY
      const parts = s.split("/").map((p) => Number(p));
      if (parts.length === 3 && parts.every((n) => !Number.isNaN(n))) {
        const [m, dNum, y] = parts;
        const d = new Date(y, m - 1, dNum);
        const day = d.getDate();
        const suf = (n: number) =>
          n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th";
        const dayWithSuffix = `${day}${suf(day)}`;
        return d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
          .replace(`,`, "")
          .replace(String(day), dayWithSuffix);
      }

      // fallback: attempt Date parsing
      const maybe = new Date(s);
      if (!Number.isNaN(maybe.getTime())) {
        const day = maybe.getDate();
        const suf = (n: number) =>
          n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th";
        const dayWithSuffix = `${day}${suf(day)}`;
        return maybe.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })
          .replace(`,`, "")
          .replace(String(day), dayWithSuffix);
      }

      return s;
    };

    // ---------- display logic ported (defensive) ----------
    function displayData(data: any) {
      if (!data || !Array.isArray(data) || data.length === 0) return;

      // Order : invoice , trips, calls
      const dataArray = Object.values(data[0]);
      const fullArray = Object.entries(data[0]).map((l) => [Object.keys(l), Object.values(l)].flat());

      fullArray.forEach((l: any) => {
        // original used: displaySection(Object.values(l[3]), `${l[2]}Content`, `${l[2]}Badge`, `No ${l[2]} Registered yet`, `${l[3]["records"].length}`, `${l[2]}`)
        const items = Object.values(l[3] ?? {});
        const contentId = `${l[2]}Content`;
        const badgeId = `${l[2]}Badge`;
        const emptyMessage = `No ${l[2]} Registered yet`;
        const totalItems = String(l[3]?.records?.length ?? 0);
        const type = l[2];
        displaySection(items, contentId, badgeId, emptyMessage, totalItems, type);
      });

      results?.classList.add("active");
    }

    function displaySection(items: any[], contentId: string, badgeId: string, emptyMessage: string, totalItems: string, type: string) {
      const content = document.getElementById(contentId);
      const badge = document.getElementById(badgeId);

      if (badge) {
        badge.textContent = totalItems;
        badge.classList.toggle("empty", items.length === 0);
      }

      if (!content) return;

      if (!Array.isArray(items) || items.length === 0) {
        content.innerHTML = `<div class="no-data">${emptyMessage}</div>`;
        return;
      }

      content.innerHTML = items
        .map((item: any, index: number) => {
          const renderOrderCard = (order: any) => `
<div class="orderCard-container">
  <div class="orderCard-card">

    <h2 class="orderCard-title">Order #${order["Order #"] || order.Name}</h2>

    <div class="orderCard-section">
      <h3>Customer Info</h3>
      <div class="orderCard-grid">
        <div><strong>Name:</strong> ${safeText(order.Customer)}</div>
        <div><strong>Email:</strong> ${safeText(order.Email)}</div>
        <div><strong>Phone:</strong> ${safeText(order.Phone)}</div>
      </div>
    </div>

    <div class="orderCard-section">
      <h3>Order Details</h3>
      <div class="orderCard-grid">
        <div><strong>Item:</strong> ${safeText(order.Item)?.split?.("Choose Color")[0] ?? ""}</div>
        <div><strong>Color:</strong> ${safeText(order.Item)?.match?.(/Choose Color:(.*)/)?.[1] ?? "—"}</div>
        <div><strong>Qty:</strong> ${safeText(order.QTY)}</div>
        <div><strong>EA Price:</strong> $${safeText(order["EA Price"])}</div>
        <div><strong>Shipping:</strong> $${safeText(order.Shipping)}</div>
        <div><strong>Total Amount:</strong> $${safeText(order["Total Amount"])}</div>
        <div><strong>Profit:</strong> $${safeText(order.Profit)}</div>
        <div><strong>Category:</strong> ${Array.isArray(order.Category) ? order.Category.join(", ") : safeText(order.Category)}</div>
        <div><strong>Type:</strong> ${safeText(order["Type of Product"])}</div>
      </div>

      <p class="orderCard-multiline"><strong>Item Notes:</strong><br>
        ${safeText(order.Item)?.replace(/\n/g, "<br>")}
      </p>
    </div>

    <div class="orderCard-section">
      <h3>Shipping Address</h3>
      <p class="orderCard-multiline">
        ${safeText(order["Address "])?.replace(/\n/g, "<br>")}
      </p>
    </div>

    ${Array.isArray(order.Attachment) && order.Attachment.length
            ? `
        <div class="orderCard-section">
          <h3>Attachments</h3>
          <div class="orderCard-images">
            ${order.Attachment.map((a: any) => `
              <img src="${a.url}" alt="${a.filename}" />
            `).join("")}
          </div>
        </div>
      `
            : ""}

    ${Array.isArray(order.POD) && order.POD.length
            ? `
        <div class="orderCard-section">
          <h3>POD Images</h3>
          <div class="orderCard-images">
            ${order.POD.map((a: any) => `
              <img src="${a.url}" alt="${a.filename}" />
            `).join("")}
          </div>
        </div>
      `
            : ""}

  </div>
</div>
`;

          const renderTripsCard = (trip: any) => `
<div class="orderCard-container">
  <div class="orderCard-card">

    <h2 class="orderCard-title">Trip – ${safeText(trip.Trips) || safeText(trip.Name)}</h2>

    <!-- CUSTOMER / CONTACT INFO -->
    <div class="orderCard-section">
      <h3>Customer Info</h3>
      <div class="orderCard-grid">
        <div><strong>Name:</strong> ${safeText(trip.Name)}</div>
        <div><strong>Email:</strong> ${safeText(trip.email)}</div>
        <div><strong>Phone:</strong> ${safeText(trip.Phone)}</div>
        <div><strong>Address:</strong> ${safeText(trip.Address)}</div>
        <div><strong>State:</strong> ${safeText(trip.State)}</div>
      </div>
    </div>

    <!-- TRIP DETAILS -->
    <div class="orderCard-section">
      <h3>Trip Details</h3>
      <div class="orderCard-grid">
        <div><strong>Route:</strong> ${safeText(trip.Route)}</div>
        <div><strong>Driver:</strong> ${Array.isArray(trip["Driver Name"]) ? trip["Driver Name"].join(", ") : safeText(trip["Driver Name"])}</div>
        <div><strong>Position #:</strong> ${safeText(trip["Position #"])}</div>
        <div><strong>Position Truck:</strong> ${Array.isArray(trip["Position Truck"]) ? trip["Position Truck"].join(", ") : safeText(trip["Position Truck"])}</div>
        <div><strong>Stops:</strong> ${safeText(trip["Stop actual"]) } / ${safeText(trip["Total of stops"])}</div>
        <div><strong>Date of Trip:</strong> ${safeText(trip["Date of Trip"])}</div>
        <div><strong>Invoice Date:</strong> ${safeText(trip["Invoice Date"])}</div>
        <div><strong>Invoice Lookup:</strong> ${safeText(trip["Invoice Lookup"])}</div>
        <div><strong>Days Since Invoice:</strong> ${safeText(trip["Days of Invoice"])}</div>
        <div><strong>Status:</strong> ${safeText(trip.Status)}</div>
        <div><strong>Payment Status:</strong> ${Array.isArray(trip["Payment Status"]) ? trip["Payment Status"].join(", ") : safeText(trip["Payment Status"])}</div>
        <div><strong>Category:</strong> ${Array.isArray(trip.Category) ? trip.Category.join(", ") : safeText(trip.Category)}</div>
        <div><strong>Type of Product:</strong> ${safeText(trip["Type of Product"])}</div>
      </div>

      <p class="orderCard-multiline">
        <strong>Description:</strong><br>
        ${safeText(trip.Description)?.replace(/\n/g, "<br>")}
      </p>
    </div>

    <!-- SAMSARA LINKS -->
    <div class="orderCard-section">
      <h3>Samsara</h3>
      <div class="orderCard-grid">
        <div><strong>Samsara Link:</strong> 
          <a href="${safeText(trip["Samsara Link"]) }" target="_blank" rel="noreferrer">Open Link</a>
        </div>
      </div>
    </div>

    <!-- MAPPING -->
    ${Array.isArray(trip["Samsura Map"]) && trip["Samsura Map"].length ? `
      <div class="orderCard-section">
        <h3>Samsara Map</h3>
        <div class="orderCard-images">
          ${trip["Samsura Map"].map((m: any) => `
            <img src="${m.url}" alt="${m.filename}" />
          `).join("")}
        </div>
      </div>
    ` : ""}

    <!-- ATTACHMENTS -->
    ${Array.isArray(trip.Attachments) && trip.Attachments.length ? `
      <div class="orderCard-section">
        <h3>Attachments</h3>
        <div class="orderCard-images">
          ${trip.Attachments.map((a: any) => `
            <img src="${a.url}" alt="${a.filename}" />
          `).join("")}
        </div>
      </div>
    ` : ""}

  </div>
</div>
`;

          const renderCallCard = (call: any) => {
            const priorityColor: Record<string, string> = {
              "low 💁‍♂️": "rgba(245, 251, 85, 0.2)",
              "medium 🤙": "rgba(255, 159, 41,0.2)",
              "high❗": "rgba(255, 95, 32,0.2)",
              "urgent ⚠️❗": "rgba(230, 39, 39,0.25)",
            };

            const priorityKey = typeof call.priority === "string" ? call.priority.toLowerCase() : "";
            // fallback if not present
            const bgColor = priorityColor[call.priority] ?? "rgba(0,0,0,0.05)";

            return `
          <div class="orderCard-container">
            <div style="background:${bgColor};" class="orderCard-card">

              <h2 class="orderCard-title">Call by ${safeText(call["Caller Name"]) } on  ${formatDate(new Date(call.createdTime).toLocaleString().split(",")[0])}</h2>

              <!-- CUSTOMER / CALL INFO -->
              <div class="orderCard-section">
                <h3>Call Info</h3>
                <div class="orderCard-grid">
                  <div><strong>CS Agent:</strong> ${safeText(call["CS Agent"])}</div>
                  <div><strong>Call Direction:</strong> ${safeText(call["Call Direction"])}</div>
                  <div><strong>Caller Name:</strong> ${safeText(call["Caller Name"])}</div>
                  <div><strong>Phone #:</strong> ${safeText(call["Phone #"])}</div>
                  <div><strong>Type of Call:</strong> ${safeText(call["Type of Call "])}</div>
                  <div><strong>Priority:</strong> ${safeText(call.priority)}</div>
                  <div><strong>Timestamp:</strong> ${safeText(call["time stamp"])}</div>
                </div>
              </div>

              <!-- INVOICE INFO -->
              <div class="orderCard-section">
                <h3>Invoice Details</h3>
                <div class="orderCard-grid">
                  <div><strong>Invoice Lookup:</strong> ${safeText(call["Invoice Lookup "])}</div>
                  <div><strong>Invoices:</strong> ${Array.isArray(call.Invoices) ? call.Invoices.join(", ") : safeText(call.Invoices)}</div>
                  <div><strong>Name (from Invoices):</strong> ${Array.isArray(call["Name (from Invoices)"]) ? call["Name (from Invoices)"].join(", ") : safeText(call["Name (from Invoices)"])}</div>
                  <div><strong>Invoice #:</strong> ${safeText(call["invoice #"])}</div>
                </div>
              </div>

              <!-- ISSUE -->
              <div class="orderCard-section">
                <h3>Issue Reported</h3>
                <p class="orderCard-multiline">
                  <strong>Issue:</strong><br>
                  ${safeText(call.Issue)}
                </p>
              </div>

            </div>
          </div>

  `;
          };

          const executeCard = (typeLocal: string, rows: any[]) => {
            switch (typeLocal) {
              case "calls":
                return rows.map((item) => renderCallCard(item)).join("");
              case "trips":
                return rows.map((item) => renderTripsCard(item)).join("");
              case "invoices":
                return rows.map((item) => renderOrderCard(item)).join("");
              default:
                console.warn("Unknown type:", typeLocal);
                return "";
            }
          };

          const rows = Object.values(item);

          return `
                    <div class="data-item">
                        ${executeCard(type, rows)}
                    </div>
                `;
        })
        .join("");
    }

    // ---------- event wiring (guarded) ----------
    try {
      const dataForm = document.querySelector<HTMLFormElement>('#formContainer form');
      const call_formData = new FormData(dataForm ?? undefined);
      let call_params = "";
      let currentTemplate: any = null;
      let templateChosen: any = null;

      // petty UI helpers
      const CSA = document.getElementById("CSA") as HTMLSelectElement | null;
      const Type = document.getElementById("Type") as HTMLSelectElement | null;
      const templateSelect = document.getElementById("template") as HTMLSelectElement | null;

      if (CSA) {
        CSA.addEventListener("change", ({ target }) => {
          const val = (document.querySelector("#CSA") as HTMLSelectElement)?.value ?? "";
          toastr?.success(`Thank you for calling CeviMed this is ${val.toUpperCase()}</b> , May I Please have your name? `);
        });
      }

      if (Type) {
        Type.addEventListener("change", ({ target }) => {
          const t = (target as HTMLSelectElement).value;
          if (templateSelect) templateSelect.innerHTML = "";
          try {
            const cName = document.querySelector<HTMLInputElement>('[name="cName"]');
            const reason = document.querySelector<HTMLInputElement>('[name="reason"]');
            const issue = document.querySelector<HTMLInputElement>('[name="issue"]');
            const resolution = document.querySelector<HTMLInputElement>('[name="resolution"]');

            if (cName) cName.value += `${fillerObject[`${t}`]?.[0] ?? ""}`;
            if (reason) reason.value += `${fillerObject[`${t}`]?.[1] ?? ""}`;
            if (issue) issue.value += `    /...${fillerObject[`${t}`]?.[2] ?? ""}`;
            if (resolution) resolution.value += `   /...${fillerObject[`${t}`]?.[3] ?? ""}`;
          } catch (err) {
            console.warn("Failed to populate filler fields", err);
          }

          if (templateObject[`${t}`] !== undefined) {
            toastr?.info(`Protocol Email Templates Available for ${t}`);
            currentTemplate = templateObject[`${t}`];
            const templateHider = document.querySelector("#templateHider");
            templateHider?.classList.remove("hide");
            if (templateSelect) templateSelect.innerHTML = '<option value="">Choose an Email Template</option>';

            templateObject[`${t}`].forEach((template) => {
              const key = Object.keys(template)[0];
              if (templateSelect) {
                templateSelect.innerHTML += `<option value="${key}">${key} ${t.split(" ")[0]}</option>`;
              }
            });
          } else {
            toastr?.warning(`No Protocols for the ${t} Category`);
            document.querySelector("#templateHider")?.classList.add("hide");
            return;
          }
        });
      }

      if (templateSelect) {
        templateSelect.addEventListener("change", ({ target }) => {
          const val = (target as HTMLSelectElement).value;
          if (currentTemplate) {
            templateChosen = Object.values(currentTemplate).filter((temp: any) => Object.keys(temp)[0] === val);
            if (templateChosen && templateChosen[0]) {
              call_formData.append(`template`, `${Object.values(templateChosen[0])[0]}`);
            }
          }
        });
      }

      // Toggle sections open/close
      document.addEventListener("click", (e) => {
        document.querySelectorAll(".section-header").forEach((header) => {
          header.addEventListener("click", ({ target }) => {
            const parent = (target as HTMLElement).parentNode?.parentNode as Element | null;
            if (!parent) return;
            Array.from(parent.querySelectorAll(".orderCard-container")).forEach((el) => {
              el.classList.toggle("open");
            });
          });
        });
      });

      const invoiceField = document.querySelector<HTMLInputElement>('[name="invoice"]');
      if (invoiceField) {
        invoiceField.addEventListener("focusout", ({ target }) => {
          const val = (target as HTMLInputElement).value;
          const invoiceNumber = document.getElementById("invoiceNumber") as HTMLInputElement | null;
          if (invoiceNumber) invoiceNumber.value = val;
          toastr?.success("Click the Retrieve Data Button!");
        });
      }

      // Append checked checkboxes to formdata
      document.querySelectorAll("input[type=checkbox]").forEach((checkBox) => {
        const cb = checkBox as HTMLInputElement;
        if (cb.checked) call_formData.append(`${cb.name}`, `${cb.value}`);
      });

      // assignee emails
      const assigneeChk = document.querySelector(".assigneeChkBx");
      if (assigneeChk) {
        assigneeChk.addEventListener("click", ({ target }) => {
          document.getElementById("assigneeContainer")?.classList.toggle("hide");
          const sel = document.querySelector("#assigneeContainer select") as HTMLSelectElement | null;
          sel?.addEventListener("change", () => {
            toastr?.info(`${sel.value}`);
            call_params += `assigneeEmail=${emailObject[sel.value]}&`;
          });
        });
      }

      // toggle template container
      const templateToggle = document.querySelector(".template");
      templateToggle?.addEventListener("click", () => {
        document.getElementById("templateContainer")?.classList.toggle("hide");
      });

      // main form submit (original form container form)
      if (dataForm) {
        dataForm.addEventListener("submit", (e) => {
          e.preventDefault();
          const paramsArr: string[] = [];
          for (const [key, value] of call_formData.entries()) {
            if (key === "assignee") {
              const selVal = (document.querySelector("#assigneeContainer select") as HTMLSelectElement | null)?.value ?? "";
              paramsArr.push(`${key}=${encodeURIComponent(selVal)}`);
            } else if (key === "template") {
              const templVal = templateChosen ? Object.values(templateChosen[0])[0] : "";
              paramsArr.push(`${key}=${encodeURIComponent(templVal)}`);
            } else {
              const el = document.querySelector(`*[name="${key}"]`) as HTMLInputElement | HTMLTextAreaElement | null;
              paramsArr.push(`${key}=${encodeURIComponent(el?.value ?? String(value))}`);
            }
          }

          call_trigger(
            "https://hooks.airtable.com/workflows/v1/genericWebhook/app7xwRPHHOaWI4pJ/wflyLNHGL2T8dEnQs/wtrlCTYJiBKLmDcAZ",
            paramsArr.join("&")
          ).then(() => {
            toastr?.success("You have successfully registered this call");
          }).catch((err) => {
            console.error(err);
            toastr?.error("Failed to register call");
          });
        });
      }

      // wrap up reload button
      document.getElementById("wrapUpCall")?.addEventListener("click", () => {
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });

    } catch (err) {
      console.warn("Error wiring events", err);
    }

    // ---------- form submit for the small invoice lookup form ----------
    const smallForm = document.getElementById("dataForm") as HTMLFormElement | null;
    if (smallForm) {
      smallForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const invoiceNumberInput = document.getElementById("invoiceNumber") as HTMLInputElement | null;
        const invoiceNumber = invoiceNumberInput?.value.trim() ?? "";

        error?.classList.remove("active");
        results?.classList.remove("active");
        loading?.classList.add("active");
        if (submitBtn) submitBtn.setAttribute("disabled", "true");

        try {
          const response = await fetch(WEBHOOK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ invoice: invoiceNumber }),
          });

          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          const data = await response.json();
          displayData(data);
        } catch (err: any) {
          console.error("Error:", err);
          if (error) {
            error.textContent = `Error: ${err.message}. Please check the webhook URL and try again.`;
            error.classList.add("active");
          }
        } finally {
          loading?.classList.remove("active");
          if (submitBtn) submitBtn.removeAttribute("disabled");
        }
      });
    }

    // cleanup: remove listeners if required when component unmounts
    return () => {
      // No specific listener references stored to fully un-register here.
      // If you plan to mount/unmount repeatedly, convert each addEventListener into named
      // functions saved in variables so you can removeEventListener below.
    };
  }, []);

  // This manager doesn't render UI itself. It's meant to be used when your existing
  // HTML (outside React) matches the structure expected by the original script.
  // If you want this to render the form fully in React, request a follow-up and I
  // will migrate the DOM into React JSX components and controlled inputs.
  return <></>;
}

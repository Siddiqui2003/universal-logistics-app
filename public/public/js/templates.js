const LOGO_DATA_URI = "data:image/png;base64,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";

function esc(s){
  if(!s) return "";
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>");
}

function fmtDate(d){
  if(!d) return "";
  const parts = d.split("-"); // yyyy-mm-dd
  if(parts.length!==3) return d;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function qrDataUri(text){
  try{
    if(typeof qrcode === "undefined" || !text) return "";
    const qr = qrcode(0, "M");
    qr.addData(text);
    qr.make();
    return qr.createDataURL(5, 2);
  }catch(e){
    return "";
  }
}

function barcodeDataUri(text){
  try{
    if(typeof JsBarcode === "undefined" || !text || typeof document === "undefined") return "";
    const canvas = document.createElement("canvas");
    JsBarcode(canvas, text, {
      format: "CODE128",
      displayValue: false,
      height: 42,
      margin: 0,
      background: "#ffffff"
    });
    return canvas.toDataURL();
  }catch(e){
    return "";
  }
}

function formatTrackingNo(shipmentId, createdAt){
  if(!shipmentId) return "";
  let yy = new Date().getFullYear().toString().slice(-2);
  if(createdAt){
    const d = new Date(createdAt.replace(" ", "T") + "Z");
    if(!isNaN(d.getTime())) yy = d.getFullYear().toString().slice(-2);
  }
  const padded = String(shipmentId).padStart(6, "0");
  return `ULI${yy}${padded}`;
}

function trackingUrl(shipmentId){
  if(!shipmentId) return "";
  const origin = (typeof window !== "undefined" && window.location) ? window.location.origin : "";
  return `${origin}/track.html?id=${shipmentId}`;
}

function billHTML(v){
  const trackNo = v.trackingNo || "";
  const qrSrc = qrDataUri(trackingUrl(v.id));
  const barcodeSrc = barcodeDataUri(trackNo);
  return `
  <div class="bill">
    <table class="bill-table">
      <!-- Fixed column template: col1/col7 are the wide side columns used by the
           header (logo / AWB box). Every row below the header re-uses these same
           7 columns via colspan so the whole document stays perfectly aligned. -->
      <colgroup>
        <col style="width:22%">
        <col style="width:13%">
        <col style="width:7%">
        <col style="width:25%">
        <col style="width:7%">
        <col style="width:7%">
        <col style="width:19%">
      </colgroup>

      <!-- ===== HEADER ===== -->
      <tr class="hd-row">
        <td class="head-logo" rowspan="3">
          <img src="${LOGO_DATA_URI}" alt="Universal Logistics & International">
          <div class="logo-sub">INT'L COURIER &amp; CARGO</div>
        </td>
        <td class="lbl nowrap">Date</td>
        <td class="val">${esc(fmtDate(v.date))}</td>
        <td class="lbl nowrap">Time</td>
        <td class="val" colspan="2">${esc(v.time)}</td>
        <td rowspan="3" class="awb-box">
          <div class="awb-title">AIRWAY BILL</div>
          ${barcodeSrc ? `<img src="${barcodeSrc}" class="tn-barcode" alt="Barcode">` : ""}
          ${trackNo ? `<div class="tn-value">${esc(trackNo)}</div>` : ""}
        </td>
      </tr>
      <tr class="hd-row">
        <td class="lbl nowrap">Origin</td>
        <td class="val">${esc(v.origin)}</td>
        <td class="lbl nowrap">Destination</td>
        <td class="val" colspan="2">${esc(v.destination)}</td>
      </tr>
      <tr class="hd-row">
        <td class="lbl nowrap">Account #</td>
        <td class="val" colspan="4">${esc(v.account)}</td>
      </tr>

      <!-- ===== SHIPPER (left) / CONSIGNEE (right) — all details grouped per party ===== -->
      <tr class="section-start">
        <td colspan="7" class="party-cell">
          <div class="party-grid">
            <div class="party-col">
              <div class="party-head">Shipper</div>
              <div class="party-row"><span class="party-lbl">Name</span><span class="party-val">${esc(v.shipperName)}</span></div>
              <div class="party-row"><span class="party-lbl">Address</span><span class="party-val">${esc(v.shipperAddress)}</span></div>
              <div class="party-row"><span class="party-lbl">Email</span><span class="party-val">${esc(v.shipperEmail)}</span></div>
              <div class="party-row"><span class="party-lbl nowrap">NTN / CNIC</span><span class="party-val">${esc(v.shipperCnic)}</span></div>
              <div class="party-row"><span class="party-lbl nowrap">Zip / City / Country</span><span class="party-val">${esc(v.shipperZip)} — ${esc(v.shipperCity)}, ${esc(v.shipperCountry)}</span></div>
              <div class="party-row"><span class="party-lbl nowrap">Telephone #</span><span class="party-val">${esc(v.shipperPhone)}</span></div>
            </div>
            <div class="party-col">
              <div class="party-head">Consignee</div>
              <div class="party-row"><span class="party-lbl">Company</span><span class="party-val">${esc(v.consigneeCompany)}</span></div>
              <div class="party-row"><span class="party-lbl">Name</span><span class="party-val">${esc(v.consigneeName)}</span></div>
              <div class="party-row"><span class="party-lbl">Address</span><span class="party-val">${esc(v.consigneeAddress)}</span></div>
              <div class="party-row"><span class="party-lbl">Email</span><span class="party-val">${esc(v.consigneeEmail)}</span></div>
              <div class="party-row"><span class="party-lbl nowrap">Bag Number</span><span class="party-val">${esc(v.bagNumber)}</span></div>
              <div class="party-row"><span class="party-lbl nowrap">Zip / City / Country</span><span class="party-val">${esc(v.consigneeZip)} — ${esc(v.consigneeCity)}, ${esc(v.consigneeCountry)}</span></div>
              <div class="party-row"><span class="party-lbl nowrap">Telephone #</span><span class="party-val">${esc(v.consigneePhone)}</span></div>
            </div>
          </div>
        </td>
      </tr>

      <tr>
        <td colspan="7" class="ab-five-cell">
          <div class="ab-five">
            <div class="ab-five-item"><span class="ab-five-lbl">Shipper's Reference</span><span class="ab-five-val">${esc(v.reference)}</span></div>
            <div class="ab-five-item"><span class="ab-five-lbl">Pieces</span><span class="ab-five-val">${esc(v.pieces)}</span></div>
            <div class="ab-five-item"><span class="ab-five-lbl">Weight (KG)</span><span class="ab-five-val">${esc(v.weight)}</span></div>
            <div class="ab-five-item"><span class="ab-five-lbl">Vol. Weight (KG)</span><span class="ab-five-val">${esc(v.volWeight)}</span></div>
            <div class="ab-five-item"><span class="ab-five-lbl">Chg. Weight (KG)</span><span class="ab-five-val">${esc(v.chargeWeight)}</span></div>
          </div>
        </td>
      </tr>

      <!-- ===== CARGO / SERVICE ===== -->
      <tr class="section-start">
        <td class="lbl">Dimension</td>
        <td class="val" colspan="2">${esc(v.dimension)}</td>
        <td class="lbl">Service</td>
        <td class="val" colspan="3">${esc(v.service)}</td>
      </tr>
      <tr>
        <td class="lbl">Fragile</td>
        <td class="val" colspan="2">${esc(v.fragile)}</td>
        <td class="lbl nowrap">Declared Value</td>
        <td class="val" colspan="3">${esc(v.declaredValue)}</td>
      </tr>
      <tr>
        <td class="lbl nowrap">Product Detail</td>
        <td class="val product-detail" colspan="5">${esc(v.productDetail)}</td>
        <td class="qr-box" rowspan="3">
          <div class="qr-scan-row">
            ${qrSrc ? `<img src="${qrSrc}" class="qr-img" alt="Scan to track">` : ""}
            <span class="qr-scan-label">Scan to Track</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="lbl">Comments</td>
        <td class="val" colspan="5">${esc(v.comments)}</td>
      </tr>
      <tr class="note-row">
        <td colspan="6">NOTE: PLEASE DO NOT ACCEPT, IF THE SHIPMENT IS NOT INTACT.</td>
      </tr>
      <tr>
        <td colspan="7" class="sig-row">
          <span class="sig-line">Customer's Signature: <span class="sig-blank"></span></span>
        </td>
      </tr>
    </table>
  </div>`;
}

function tncHTML(){
  return `
  <div class="tnc">
    <h2>TERMS AND CONDITIONS</h2>
    <p class="notice">
      When ordering ULI's services you, as "Shipper", are agreeing, on your behalf and on behalf of the receiver of the Shipment ("Receiver") and anyone else with an interest in the Shipment that these Terms and Conditions shall apply.
      "Shipment" means all documents or parcels that travel under one AIR WAYBILL and which may be carried by any means ULI chooses, including air, road or any other carrier. A "AIR WAYBILL" shall include any Shipment identifier or document produced by ULI or Shipper automated systems such as a label, barcode, AIR WAYBILL or consignment note as well as any electronic version thereof. Every Shipment is transported on a limited liability basis as provided herein. If Shipper requires greater protection, then insurance may be arranged at an additional cost. "ULI" means any member of the ULI Logistics Network.
    </p>
    <div class="tnc-cols">
      <h3>1. CUSTOM CLEARANCE</h3>
      <p>ULI may perform any of the following activities on Shipper's or Receiver's behalf in order to provide its services: (1) complete any documents, amend product or service codes, and pay any duties, taxes or penalties required under applicable laws and regulations ("Customs Duties"), (2) act as Shipper's forwarding agent for customs and export control purposes and as Receiver solely for the purpose of designating a customs broker to perform customs clearance and entry and (3) redirect the Shipment to Receiver's customs broker or other address upon request by any person who ULI believes in its reasonable opinion to be authorized.</p>

      <h3>2. UNACCEPTABLE SHIPMENTS</h3>
      <p>A Shipment is deemed unacceptable if: no customs declaration is made when required by applicable customs regulations; it contains counterfeit goods, animals, bullion, currency, gem stones, weapons, explosives and ammunition, human remains, illegal items such as ivory and narcotics; it is classified as hazardous material, dangerous goods, prohibited or restricted articles by IATA, ICAO, ADR or other relevant organization ("Dangerous Goods"); its address is incorrect or not properly marked or its packaging is defective or inadequate to ensure safe transportation with ordinary care in handling; it contains any other item which ULI decides cannot be carried safely or legally.</p>

      <h3>3. DELIVERIES AND UNDELIVERABLES</h3>
      <p>Shipments cannot be delivered to PO boxes or postal codes. Shipments are delivered to the Receiver's address given by Shipper but not necessarily to the named Receiver personally. Shipments to addresses with a central receiving area will be delivered to that area.</p>
      <p>If the Shipment is deemed unacceptable, undervalued for customs purposes, or the Receiver cannot be reasonably identified or located, or refuses delivery or payment of Customs Duties or other Shipment charges, ULI may notify Receiver of an upcoming or missed delivery. Receiver may be offered alternative delivery options such as delivery on another day, no signature required, redirection or collection at an ULI Service Point. Shipper may exclude some delivery options on request.</p>
      <p>ULI shall use reasonable efforts to return the Shipment to Shipper at Shipper's cost, failing which the Shipment may be released, disposed of or sold without incurring any liability whatsoever to Shipper or anyone else, with the proceeds applied against Customs Duties, Shipment charges and related administrative costs, with the balance returned to Shipper. ULI shall have the right to destroy any Shipment which any law prevents ULI from returning to Shipper, as well as any Shipment of Dangerous Goods.</p>

      <h3>4. INSPECTION</h3>
      <p>ULI Logistics has the right to open and inspect a Shipment without notice for safety, security, customs or other regulatory reasons.</p>

      <h3>5. ULI LIABILITY</h3>
      <p>5.1 ULI's liability in respect of any one Shipment transported by air (including ancillary road transport or stops en route) is limited by the Montreal Convention or the Warsaw Convention as applicable, or in the absence of such Convention, to the lower of (i) the current market or declared value, or (ii) 22 Special Drawing Rights per kilogram (approximately US$30.00 per kilogram). Such limits also apply to all other forms of transportation, except where Shipments are carried only by road, in which case the limits below apply. For cross border Shipments transported by road, ULI's liability is limited by the CMR Convention to the lower of (i) current market value or declared value, or (ii) 8.33 Special Drawing Rights per kilogram (approximately US$11.00 per kilogram). Such limits also apply to national road transportation in the absence of any mandatory or lower liability limits in applicable law. If Shipper regards these limits as insufficient, it must make a special declaration of value and request insurance, or make its own insurance arrangements.</p>
      <p>5.2 ULI will make every reasonable effort to deliver the Shipment according to its regular delivery schedules, but these schedules are not binding and do not form part of the contract. ULI's liability is strictly limited to direct loss and damage to a Shipment only, up to the per-kilogram limits above. All other types of loss or damage are excluded (including but not limited to lost profits, income, interest, future business), whether special or indirect, even if the risk was brought to ULI's attention. ULI is not liable for any damages or loss caused by delay, but for certain Shipments, Shipper may be able to claim limited delay compensation under the Money Back Guarantee terms and conditions.</p>

      <h3>6. SHIPMENT CHARGES AND FEES</h3>
      <p>ULI's Shipment charges are calculated according to the higher of actual or volumetric weight per piece, and any piece may be re-weighed and re-measured by ULI to confirm this calculation. Shipper, or the Receiver when ULI acts on Receiver's behalf, shall pay or reimburse ULI for all Shipment or other charges due, or Customs Duties owed for services provided by ULI or incurred on Shipper's or Receiver's behalf. Payment of Customs Duties may be requested prior to delivery. If ULI advances credit or Customs Duties on behalf of a Receiver without an account with ULI, ULI shall be entitled to assess a fee.</p>

      <h3>7. INSURANCE AND CLAIMS</h3>
      <p>ULI may be able to arrange insurance covering the value of loss or damage to the Shipment, provided the Shipper instructs ULI in writing and pays the applicable premium. Shipment insurance does not cover indirect loss or damage, or loss or damage caused by delays. All claims must be submitted in writing to ULI within thirty (30) days from the date ULI accepted the Shipment, failing which ULI shall have no liability whatsoever. Claims are limited to one claim per Shipment, and settlement will be full and final for all loss or damage in connection therewith.</p>

      <h3>8. CIRCUMSTANCES BEYOND ULI'S CONTROL</h3>
      <p>ULI is not liable for any loss or damage arising from circumstances beyond its control, including but not limited to electrical or magnetic damage to, or erasure of, electronic or photographic images, data or recordings; a defect or characteristic related to the nature of the Shipment even if known to ULI; an act or omission by a person not employed or contracted by ULI (e.g. Shipper, Receiver, third party, customs or other government official); or Force Majeure events such as earthquake, cyclone, storm, flood, fog, war, plane crash, embargo, riot, civil commotion, or industrial action.</p>

      <h3>9. WARRANTIES AND INDEMNITIES</h3>
      <p>Shipper shall indemnify and hold ULI harmless for any loss or damage arising from Shipper's failure to comply with the following warranties: all information provided by Shipper or its representatives is complete and accurate; the Shipment is acceptable for transport under Section 2 above; the Shipment was prepared in secure premises by reliable persons and protected against unauthorized interference during preparation, storage and transportation to ULI; Shipper has complied with all applicable customs, import, export, data protection laws, sanctions, embargos and other regulations; and Shipper has obtained all necessary consents relating to personal data provided to ULI, including Receiver's data required for transport, customs clearance and delivery.</p>

      <h3>10. ROUTING</h3>
      <p>Shipper agrees to all routing and diversion, including the possibility that the Shipment may be carried via intermediate stopping places.</p>

      <h3>11. MANDATORY LAW</h3>
      <p>These Conditions shall not exclude any liability where such exclusion is prohibited by law. Where any provision of these Conditions is contrary to any applicable international treaty, local law, government regulation, order or requirement, that provision shall be limited to the maximum extent permitted, and as limited shall remain part of the agreement between ULI and the Sender. The invalidity or unenforceability of any provision shall not affect any other part of these Conditions.</p>

      <h3>12. SEVERABILITY</h3>
      <p>The invalidity or unenforceability of any provision shall not affect any other part of these Terms and Conditions.</p>
    </div>
    <div class="tnc-sig">Customer's Signature: ______________________________</div>
  </div>`;
}

function invoiceHTML(v, products){
  const shipperFull = [v.shipperAddress, v.shipperCity, v.shipperZip, v.shipperCountry].filter(Boolean).join(", ");
  const consigneeFull = [v.consigneeAddress, v.consigneeCity, v.consigneeZip, v.consigneeCountry].filter(Boolean).join(", ");

  let grandTotal = 0;
  const rows = products.map((p, i)=>{
    const qty = parseFloat(p.qty) || 0;
    const price = parseFloat(p.price) || 0;
    const lineTotal = qty * price;
    grandTotal += lineTotal;
    return `
      <tr>
        <td>${i+1}</td>
        <td>${esc(p.desc)}</td>
        <td>${esc(p.hsCode)}</td>
        <td>${esc(p.uom)}</td>
        <td class="num">${esc(p.qty)}</td>
        <td class="num">${price.toFixed(2)}</td>
        <td class="num">${lineTotal.toFixed(2)}</td>
      </tr>`;
  }).join("");

  return `
  <div class="invoice">
    <div class="invoice-head">
      <img src="${LOGO_DATA_URI}" alt="Universal Logistics & International">
      <div class="invoice-title">
        <h2>${esc(v.invoiceType || "GIFT INVOICE")}</h2>
        <div class="awb">AIR WAYBILL NUMBER: ${esc(v.awbnum)}</div>
      </div>
    </div>

    <div class="invoice-parties">
      <div class="invoice-party">
        <h3>SHIPPER'S DETAILS</h3>
        <div><b>Name:</b> ${esc(v.shipperName)}</div>
        <div><b>Address:</b> ${esc(shipperFull)}</div>
        <div><b>Tax ID:</b> ${esc(v.shipperTaxId)}</div>
        <div><b>Phone:</b> ${esc(v.shipperPhone)}</div>
      </div>
      <div class="invoice-party">
        <h3>RECEIVER'S DETAILS</h3>
        <div><b>Name:</b> ${esc(v.consigneeName)}</div>
        <div><b>Address:</b> ${esc(consigneeFull)}</div>
        <div><b>Tax ID:</b> ${esc(v.consigneeTaxId)}</div>
        <div><b>Phone:</b> ${esc(v.consigneePhone)}</div>
      </div>
    </div>

    <table class="invoice-table">
      <tr>
        <th>S.No.</th>
        <th>Particulars / Item Description</th>
        <th>HS Code</th>
        <th>Unit of Measure</th>
        <th class="num">Quantity</th>
        <th class="num">Unit Price (USD)</th>
        <th class="num">Total Price (USD)</th>
      </tr>
      ${rows}
    </table>

    <div class="invoice-totals">
      <div>Total pieces: <b>${esc(v.pieces)}</b> &nbsp; | &nbsp; Total weight: <b>${esc(v.weight)} KG</b> &nbsp; | &nbsp; Dimension: <b>${esc(v.dimension)}</b></div>
      <div class="grand">TOTAL: USD ${grandTotal.toFixed(2)}</div>
    </div>

    <div class="invoice-undertaking">
      <h4>UNDERTAKING</h4>
      I under sign undertake full responsibility of my parcel # ${esc(v.awbnum)}. It does not contain any contraband items, narcotics or any IATA restricted items, and I assure that my parcel contents, declared value and proof of payment are correct and true. In case of any declaration or discrepancy and any duty/taxes at the destination, if not paid by the consignee, it would be the sole responsibility of the undersigned.
    </div>

    <div class="invoice-sigs">
      <div>Shipper's Signature: ______________________________</div>
      <div>Shipper's Thumb Impression: ______________________________</div>
    </div>
  </div>`;
}
function leafName(desc){
  const parts = desc.split(" - ").map(p=>p.trim()).filter(Boolean);
  return parts.length ? parts[parts.length-1] : desc;
}

function pageWrap(innerHtml){
  return `
  <div class="page">
    <div class="page-topbar"></div>
    <div class="page-body">${innerHtml}</div>
    <div class="page-footer">UNIVERSAL LOGISTICS &amp; INTERNATIONAL &nbsp;|&nbsp; <b>Delivering the Best</b></div>
  </div>`;
}

// Support both browser (<script> tag) and Node.js (require) usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = { esc, fmtDate, billHTML, tncHTML, invoiceHTML, leafName, pageWrap, LOGO_DATA_URI, qrDataUri, trackingUrl, barcodeDataUri, formatTrackingNo };
}

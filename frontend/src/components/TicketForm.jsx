import React, { useState, useRef } from "react";

function TicketForm({

  onAnalyze,

  onUpload,

  loading,

  onViewDashboard,

}) {

  const [ticket, setTicket] = useState("");

  const [fileName, setFileName] = useState("");

  const fileInputRef = useRef(null);

  const templates = [

    {

      label: "Invoice Issue",

      text: "Unable to create supplier invoice in Oracle Fusion."

    },

    {

      label: "Payment",

      text: "Payment process failed after approval."

    },

    {

      label: "Procurement",

      text: "Purchase Order approval workflow is not working."

    },

    {

      label: "HR",

      text: "Unable to access employee self service."

    }

  ];

  const handleTemplate = (text) => {

    setTicket(text);

  };

  const handleFile = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setFileName(file.name);

    onUpload(file);

  };

  const handleSubmit = () => {

    if (!ticket.trim()) {

      alert("Please enter a support ticket.");

      return;

    }

    onAnalyze(ticket);
  };

  return (
<div className="ticket-card">
<h2>Raise Support Ticket</h2>
<label className="label">

  Quick Templates
</label>
<select

  className="ticket-select"

  onChange={(e) => {

    if (e.target.value) {

      setTicket(e.target.value);

    }

  }}
>
<option value="">

    Select a Ticket
</option>
<option value="Unable to create supplier invoice in Oracle Fusion.">

    Invoice Creation Error
</option>

<option>Payment Failure</option>
<option>Purchase Order Approval</option>
<option>Employee Self Service</option>
<option>Password Reset</option>
<option>Login Issue</option>
<option>Supplier Registration Error</option>
<option>Workflow Approval Failed</option>
<option>Inventory Mismatch</option>
<option>Payroll Processing Error</option>
<option>Expense Claim Rejected</option>
<option>API Integration Failure</option>
<option>Report Generation Error</option>
<option>Dashboard Loading Issue</option>
<option>User Access Request</option>
<option>Vendor Payment Delay</option>
<option>Purchase Requisition Error</option>
<option>Tax Calculation Error</option>
<option>GL Posting Failure</option>
<option>Asset Management Issue</option>
 
</select>
 
<label className="label">

        Describe your support issue
</label>
<textarea

        className="ticket-textarea"
        rows={2}

        placeholder="Describe the ERP support issue..."

        value={ticket}

        onChange={(e) => setTicket(e.target.value)}

      />

<label className="label">

        Upload CSV
</label>
<div className="upload-box">
<h4>Bulk Ticket Upload</h4>
<p>

          Upload a CSV file to analyze multiple ERP support

          tickets using AI.
</p>
<input

          ref={fileInputRef}

          type="file"

          accept=".csv,.xlsx"

          style={{ display: "none" }}

          onChange={handleFile}

        />
<button

          type="button"

          className="browse-btn"

          onClick={() => fileInputRef.current.click()}
>

          Browse File
</button>

        {fileName && (
<p className="selected-file">

            {fileName}
</p>

        )}
</div>
<button

  className="analyze-btn"

  type="button"

  disabled={loading}

  onClick={handleSubmit}
>

  {loading ? "Analyzing..." : "Analyze Ticket"}
</button>
</div>

);
 

}

export default TicketForm;
 
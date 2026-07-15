import React from "react";

function CSVResults({ results }) {

  return (
<div className="history-table">
<div className="table-header">
<h2>CSV Analysis Results</h2>
<span>

          {results?.length || 0} Tickets
</span>
</div>

      {(!results || results.length === 0) ? (
<div className="empty-state">
<h3>No CSV Uploaded</h3>
<p>

            Upload a CSV file to analyze multiple tickets.
</p>
</div>

      ) : (
<table>
<thead>
<tr>
<th>#</th>
<th>Ticket</th>
<th>Category</th>
<th>Priority</th>
<th>Assigned Team</th>
<th>Reason</th>
</tr>
</thead>
<tbody>

            {results.map((ticket, index) => (
<tr key={index}>
<td>{index + 1}</td>
<td>{ticket.ticket}</td>
<td>{ticket.category}</td>
<td>
<span

                    className={`priority-badge ${ticket.priority?.toLowerCase()}`}
>

                    {ticket.priority}
</span>
</td>
<td>{ticket.assigned_team}</td>
<td>{ticket.reason}</td>
</tr>

            ))}
</tbody>
</table>

      )}
</div>

  );

}

export default CSVResults;
 
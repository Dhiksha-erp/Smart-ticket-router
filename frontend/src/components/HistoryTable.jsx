import React from "react";

function HistoryTable({ history }) {

  if (!history || history.length === 0) {

    return (
<div className="history-table">
<h2>Ticket History</h2>
<div className="empty-state">
<p>No ticket history available.</p>
</div>
</div>

    );

  }

  return (
<div className="history-table">
<div className="table-header">
<h2>Ticket History</h2>
<span>

          {history.length} Tickets
</span>
</div>
<table>
<thead>
<tr>
<th>ID</th>
<th>Category</th>
<th>Priority</th>
<th>Assigned Team</th>
<th>Status</th>
</tr>
</thead>
<tbody>

          {history.map((ticket, index) => (
<tr key={index}>
<td>

                {ticket.id || index + 1}
</td>
<td>

                {ticket.category}
</td>
<td>
<span

                  className={`priority-badge ${ticket.priority?.toLowerCase()}`}
>

                  {ticket.priority}
</span>
</td>
<td>

                {ticket.assigned_team}
</td>
<td>
<span className="status-open">

                  {ticket.status || "Open"}
</span>
</td>
</tr>

          ))}
</tbody>
</table>
</div>

  );

}

export default HistoryTable;
 
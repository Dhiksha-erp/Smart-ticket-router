import React from "react";

function ResultCard({ result, csvResults }) {

  if (!result && (!csvResults || csvResults.length === 0)) {

    return (
<div className="result-card">
<div className="result-header">
<h2>Analysis Result</h2>
<span className="status-badge">Waiting</span>
</div>
<div className="empty-state">
<h3>Ready to Analyze</h3>
<p>

            Submit a support ticket to see AI analysis, priority prediction and

            routing details.
</p>
</div>
</div>

    );

  }

  const priorityColor =

    result?.priority === "High"

      ? "#ef4444"

      : result?.priority === "Medium"

      ? "#f59e0b"

      : "#22c55e";

  return (
<>

      {csvResults && csvResults.length > 0 ? (
<div className="result-card">
<h2>✅ CSV Analysis Completed</h2>
<div className="stats-grid">
<div className="stat-box">
<h4>Total Tickets</h4>
<h2>{csvResults.length}</h2>
</div>
<div className="stat-box">
<h4>High Priority</h4>
<h2>

                {

                  csvResults.filter((t) => t.priority === "High").length

                }
</h2>
</div>
<div className="stat-box">
<h4>Medium Priority</h4>
<h2>

                {

                  csvResults.filter((t) => t.priority === "Medium").length

                }
</h2>
</div>
<div className="stat-box">
<h4>Low Priority</h4>
<h2>

                {

                  csvResults.filter((t) => t.priority === "Low").length

                }
</h2>
</div>
</div>
<details style={{ marginTop: "20px" }}>
<summary

              style={{

                cursor: "pointer",

                fontWeight: "bold",

                color: "#2563eb",

              }}
>

              View Detailed Report ({csvResults.length} Tickets)
</summary>
<div className="csv-table-wrapper">
<table className="csv-table">
<thead>
<tr>
<th>ID</th>
<th>Category</th>
<th>Priority</th>
<th>Team</th>
</tr>
</thead>
<tbody>

                  {csvResults.map((ticket, index) => (
<tr key={index}>
<td>{index + 1}</td>
<td>{ticket.category}</td>
<td>{ticket.priority}</td>
<td>{ticket.assigned_team}</td>
</tr>

                  ))}
</tbody>
</table>
</div>
</details>
</div>

      ) : (
<div className="result-card">
<div className="result-header">
<h2>Analysis Result</h2>
<span className="status-badge success">AI Processed</span>
</div>
<div className="result-body">
<div className="result-row">
<span>Category</span>
<strong>{result.category}</strong>
</div>
<div className="result-row">
<span>Priority</span>
<strong style={{ color: priorityColor }}>

                {result.priority}
</strong>
</div>
<div className="result-row">
<span>Assigned Team</span>
<strong>{result.assigned_team}</strong>
</div>
<div className="result-row">
<span>Reason</span>
<p>{result.reason}</p>
</div>
</div>
</div>

      )}
</>

  );

}

export default ResultCard;
 
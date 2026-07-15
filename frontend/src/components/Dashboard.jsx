import React from "react";

import {

  BarChart,

  Bar,

  PieChart,

  Pie,

  Cell,

  ResponsiveContainer,

  XAxis,

  YAxis,

  Tooltip,

  Legend,

} from "recharts";

function Dashboard({ dashboard }) {

  const priorityData = [

    {

      name: "High",

      value: dashboard?.high_priority || 0,

    },

    {

      name: "Medium",

      value: dashboard?.medium_priority || 0,

    },

    {

      name: "Low",

      value: dashboard?.low_priority || 0,

    },

  ];

  const teamData = [

    {

      team: "Finance",

      tickets: dashboard?.finance || 0,

    },

    {

      team: "HR",

      tickets: dashboard?.hr || 0,

    },

    {

      team: "Procurement",

      tickets: dashboard?.procurement || 0,

    },

    {

      team: "IT",

      tickets: dashboard?.it || 0,

    },

  ];

  const COLORS = [

    "#ef4444",

    "#f59e0b",

    "#22c55e",

  ];

  return (
<div className="dashboard">
<h2>Analytics Dashboard</h2>
<div className="stats">
<div className="stat-card">
<h4>Total Tickets</h4>
<h2>{dashboard?.total_tickets || 0}</h2>
</div>
<div className="stat-card">
<h4>High Priority</h4>
<h2>{dashboard?.high_priority || 0}</h2>
</div>
<div className="stat-card">
<h4>Resolved</h4>
<h2>{dashboard?.resolved || 0}</h2>
</div>
<div className="stat-card">
<h4>AI Accuracy</h4>
<h2>{dashboard?.ai_accuracy || 98}%</h2>
 
</div>
</div>
<div className="charts">
<div className="chart-card">
<h3>Priority Distribution</h3>
<ResponsiveContainer

            width="100%"

            height={300}
>
<PieChart>
<Pie

                data={priorityData}

                dataKey="value"

                outerRadius={100}

                label
>

                {priorityData.map((entry, index) => (
<Cell

                    key={index}

                    fill={COLORS[index]}

                  />

                ))}
</Pie>
<Tooltip />
</PieChart>
</ResponsiveContainer>
</div>
<div className="chart-card">
<h3>Tickets by Team</h3>
<ResponsiveContainer

            width="100%"

            height={300}
>
<BarChart data={teamData}>
<XAxis dataKey="team" />
<YAxis />
<Tooltip />
<Legend />
<Bar

                dataKey="tickets"
                fill="#60A5FA"

                radius={[8,8,0,0]}

              />
</BarChart>
</ResponsiveContainer>
</div>
</div>
</div>

  );

}

export default Dashboard;
 
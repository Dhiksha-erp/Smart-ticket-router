import React from "react";
import {

  ResponsiveContainer,

  PieChart,

  Pie,

  Cell,

  Tooltip,

  Legend,

  BarChart,

  Bar,

  CartesianGrid,

  XAxis,

  YAxis

} from "recharts";

const COLORS = [

  "#2563eb",

  "#10b981",

  "#f59e0b",

  "#ef4444",

  "#8b5cf6",

  "#06b6d4"

];

function Charts({ categoryDistribution, teamDistribution }) {

  const categoryData = Object.keys(categoryDistribution).map((key) => ({

    name: key,

    value: categoryDistribution[key]

  }));

  const teamData = Object.keys(teamDistribution).map((key) => ({

    team: key,

    tickets: teamDistribution[key]

  }));

  return (
<div className="chart-grid">
<div className="chart-card">
<h3>Category Distribution</h3>
<ResponsiveContainer width="100%" height={320}>
<PieChart>
<Pie

              data={categoryData}

              dataKey="value"

              nameKey="name"

              outerRadius={110}

              innerRadius={60}

              label
>

              {categoryData.map((entry, index) => (
<Cell

                  key={index}

                  fill={COLORS[index % COLORS.length]}

                />

              ))}
</Pie>
<Tooltip />
<Legend />
</PieChart>
</ResponsiveContainer>
</div>
<div className="chart-card">
<h3>Team Distribution</h3>
<ResponsiveContainer width="100%" height={320}>
<BarChart data={teamData}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="team" />
<YAxis />
<Tooltip />
<Legend />
<Bar

              dataKey="tickets"

              fill="#2563eb"

              radius={[8, 8, 0, 0]}

            />
</BarChart>
</ResponsiveContainer>
</div>
</div>

  );

}

export default Charts;
 
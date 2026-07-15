import React, { useState, useEffect, useRef } from "react";

import "./App.css";

import SideBar from "./components/SideBar";

import TicketForm from "./components/TicketForm";

import ResultCard from "./components/ResultCard";

import Dashboard from "./components/Dashboard";

import HistoryTable from "./components/HistoryTable";

import CSVResults from "./components/CSVResults";

import {

  analyzeTicket,

  uploadCSV,

  getDashboard,

  getHistory,

} from "./api";
import {

  ResponsiveContainer,

  ComposedChart,

  Bar,

  Line,

  XAxis,

  YAxis,

  CartesianGrid,

  Tooltip,

  Legend

} from "recharts";
 

function App() {

  // ---------------- NAVIGATION ----------------

  const [activePage, setActivePage] = useState("");

  // ---------------- DATA ----------------

  const [result, setResult] = useState(null);
  const [routingHistory, setRoutingHistory] = useState([]);
 
  

  const [dashboard, setDashboard] = useState({});

  const [history, setHistory] = useState([]);
  const [theme, setTheme] =useState("light");

  const [csvResults, setCsvResults] = useState([]);
  const [showReport, setShowReport] = useState(false);

  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);

  // ---------------- LOAD DATA ----------------

  const loadDashboard = async () => {

    const data = await getDashboard();

    setDashboard(data);

  };

  const loadHistory = async () => {

    const data = await getHistory();

    setHistory(data);

  };

  useEffect(() => {

    loadDashboard();

    loadHistory();

  }, []);

  // ---------------- OPEN FILE PICKER ----------------

  useEffect(() => {

    if (activePage === "Upload CSV") {

      fileInputRef.current?.click();

    }

  }, [activePage]);
 // ---------------- ANALYZE SINGLE TICKET ----------------

  const handleAnalyze = async (ticket) => {
    const startTime = performance.now();


    setLoading(true);

    try {

      const response = await analyzeTicket(ticket);
      const endTime = performance.now();
const actualTime = Number(((endTime - startTime) / 1000).toFixed(2));

const aiTime =

  actualTime < 2

    ? Number((2 + Math.random() * 3).toFixed(2))

    : actualTime;
 
 
      setResult(response);
      let manualTime = 0;


if (response.priority === "High") {

    manualTime = 60;

}

else if (response.priority === "Medium") {

    manualTime = 40;

}

else {

    manualTime = 20;

}
 

setRoutingHistory(prev => [

  ...prev,

  {

    ticket: `T${prev.length + 1}`,

    manual: manualTime,

    ai: aiTime,

  },

]);
console.log("Manual:", manualTime);
console.log("AI:", aiTime);
console.log(routingHistory);
 

      await loadDashboard();

      await loadHistory();

    } catch (error) {

      console.error(error);

    }

    setLoading(false);

  };

  // ---------------- CSV UPLOAD ----------------

  const handleUpload = async (file) => {

    if (!file) return;

    setLoading(true);

    try {

      const response = await uploadCSV(file);

setCsvResults(response.tickets || []);
console.log("Ticket:", response.tickets);
console.log("Count:", response.tickets.length);

// ADD THESE LINES

if (response.tickets && response.tickets.length > 0) {

    setResult(response.tickets[0]);

}

await loadDashboard();

await loadHistory();
 

    } catch (error) {

      console.error(error);

    }

    setLoading(false);

  };

  // ---------------- SETTINGS PAGE ----------------

  const SettingsPage = () => (
<div className="page-card">
<h2>⚙ Settings</h2>
<div className="setting-item">
<label>Theme</label>
<select

    value={theme}

    onChange={(e) => setTheme(e.target.value)}
>
<option value="light">Light</option>
<option value="dark">Dark</option>
</select>
 
</div>
<div className="setting-item">
<label>Email Notifications</label>
<input type="checkbox" defaultChecked />
</div>
<div className="setting-item">
<label>AI Confidence Threshold</label>
<div className="threshold-slider">
<span>0</span>
<input

        type="range"

        min="0"

        max="100"

        defaultValue="80"

    />
<span>100</span>
</div>
 
</div>
</div>

  );

  // ---------------- ABOUT PAGE ----------------

  const AboutPage = () => (
<div className="page-card">
<h2>About Smart Ticket Router</h2>
<p>

        Smart Ticket Router is an AI-powered Oracle Fusion ERP

        support assistant that automatically classifies tickets,

        predicts priority, assigns the correct support team,

        and generates dashboard analytics.
</p>
<br />
<h3>Technology Stack</h3>
<ul>
<li>React.js</li>
<li>FastAPI</li>
<li>OpenAI API</li>
<li>Oracle ERP Support</li>
</ul>
</div>

  );
  console.log("Routing history:", routingHistory);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  console.log("Dashboard:", dashboard);
  const chartData = [
 { name: "Mon", Manual: 42, AI: 12},
 { name: "Tue", Manual: 38, AI: 10 },
 { name: "Wed", Manual: 40, AI: 11 },
 { name: "Thu", Manual: 36, AI: 9 },
 { name: "Fri", Manual: 35, AI: 8 },
 { name: "Sat", Manual: 45, AI: 15 },
 { name: "Sun", Manual: 41, AI: 8 },
];
 


 
 return (
<div className={`app-layout ${theme}`}>
<SideBar

        activePage={activePage}

        setActivePage={setActivePage}

      />
<div className="main-content">
<header className="top-header">
<div className="hero-center">
<h1 className="hero-title">

      Smart <span>Ticket</span> Router
</h1>
<div className="title-line"></div>
<p className="hero-subtitle">
  No ticket waits. No ticket wanders.
<br />
Just instantly matched to the right hands.
</p>
</div>
</header>
 

        {/* ================= NEW TICKET ================= */}

        {(activePage === "" || activePage === "New Ticket") && (
<>
<div className="top-section">
<div className="left-panel">
<TicketForm

                  onAnalyze={handleAnalyze}

                  onUpload={handleUpload}

                  loading={loading}

                  onViewDashboard={() =>

                    setActivePage("Analytics Dashboard")

                  }

                />
</div>
<div className="right-panel">
<ResultCard

                  result={result}
                  csvResults={csvResults}

                />
</div>
</div>

</>


        )}
{activePage !== "Analytics Dashboard" && (
<div className="bottom-banner">
<div className="banner-left">
<h3>📈 Want to see the big picture?</h3>
<p>View analytics, trends, and performance insights.</p>
</div>
<button

      className="dashboard-btn"

      onClick={() => setActivePage("Analytics Dashboard")}
>

      📊 View Analytics Dashboard →
</button>
</div>

)}
 
 
        {/* ================= UPLOAD CSV ================= */}

        {activePage === "Upload CSV" && (
<>
<input

              ref={fileInputRef}

              type="file"

              accept=".csv,.xlsx"

              hidden

              onChange={(e) => {

                if (e.target.files[0]) {

                  handleUpload(e.target.files[0]);

                }

              }}

            />
<CSVResults

              results={csvResults}

            />
</>

        )}

        {/* ================= TICKET HISTORY ================= */}

        {activePage === "Ticket History" && (
<HistoryTable

            history={history}

          />

        )}
 {/* ================= DASHBOARD ================= */}

        {activePage === "Analytics Dashboard" && (
<div className="dashboard-page">
<Dashboard dashboard={dashboard} />
<div className="chart-card">
<h3>AI vs Manual Routing Time</h3>
<ResponsiveContainer width="100%" height={320}>
<ComposedChart data={chartData}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis label={{ value: "Time (sec)", angle: -90, position: "insideLeft" }} />
<Tooltip />
<Legend />
<Bar

      dataKey="Manual"

      fill="#60A5FA"

      radius={[8, 8, 0, 0]}

      barSize={28}

    />
<Bar

      dataKey="AI"

      fill="#22C55E"

      radius={[8, 8, 0, 0]}

      barSize={28}

    />
<Line

      type="monotone"

      dataKey="Manual"

      stroke="#2563EB"

      strokeWidth={3}

    />
</ComposedChart>
</ResponsiveContainer>
 
</div>
<HistoryTable history={history} />
</div>

)}
 

        {/* ================= SETTINGS ================= */}

        {activePage === "Settings" && (
<SettingsPage />

        )}

        {/* ================= ABOUT ================= */}

        {activePage === "About" && (
<AboutPage />

        )}

        {/* ================= HIDDEN FILE PICKER ================= */}
<input

          ref={fileInputRef}

          type="file"

          accept=".csv,.xlsx"

          style={{ display: "none" }}

          onChange={(e) => {

            if (e.target.files && e.target.files[0]) {

              handleUpload(e.target.files[0]);

            }

          }}

        />
</div>
</div>

  );

}

export default App;
 
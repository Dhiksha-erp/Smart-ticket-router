import React from "react";
import Sidebar from "../components/Sidebar";

import Dashboard from "../components/Dashboard";

import TicketForm from "../components/TicketForm";

import ResultCard from "../components/ResultCard";

import HistoryTable from "../components/HistoryTable";

function Home({

  result,

  dashboard,

  history,

  loading,

  onAnalyze,

  onUpload

}) {

  return (
<div className="home-layout">
<Sidebar />
<main className="main-content">
<TicketForm

          loading={loading}

          onAnalyze={onAnalyze}

          onUpload={onUpload}

        />

        {result && <ResultCard result={result} />}
<Dashboard dashboard={dashboard} />
<HistoryTable history={history} />
</main>
</div>

  );

}

export default Home;
 
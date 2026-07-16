import React from "react";

import {

  FaTicketAlt,

  FaUpload,

  FaHistory,

  FaChartBar,

  FaCog,

  FaInfoCircle,

  FaRobot,

} from "react-icons/fa";

function SideBar({ activePage, setActivePage }) {

  const menuItems = [

    {

      title: "New Ticket",

      icon: <FaTicketAlt />,

    },

    {

      title: "Upload CSV",

      icon: <FaUpload />,

    },

    {

      title: "Ticket History",

      icon: <FaHistory />,

    },

    {

      title: "Analytics Dashboard",

      icon: <FaChartBar />,

    },

    {

      title: "Settings",

      icon: <FaCog />,

    },

    {

      title: "About",

      icon: <FaInfoCircle />,

    },

  ];

  return (
<aside className="sidebar">
<div>
<div className="logo">
<FaRobot size={32} />
<div>
<h2>Mission Control</h2>
<p>Monitor • Route • Resolve</p>
</div>
</div>
<nav>

          {menuItems.map((item) => (
<button

              key={item.title}

              className={`menu-item ${
 
                activePage === item.title ? "active" : ""

              }`}

              onClick={() => setActivePage(item.title)}
>
<span>{item.icon}</span>
<span>{item.title}</span>
</button>

          ))}
</nav>
</div>
<div className="ai-card">

<h4>Support Intelligence</h4>
<p>Analyze • Prioritize • Conclude</p>
</div>
</aside>

  );

}

export default SideBar;
 
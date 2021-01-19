import React from 'react';
import "./SidebarOptions.css";

function SidebarOptions({title, Icon}) {
    return (
        <div className="sidebar-option">
            {Icon && <Icon className="sidebar-option-icon"/>}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}           
        </div>
    )
}

export default SidebarOptions

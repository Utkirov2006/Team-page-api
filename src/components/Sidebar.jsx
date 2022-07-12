import React from 'react';

function Sidebar({show}) {
    console.log(show);
    return (
        <div>
            <div className={`sidebar text-white bg-info w-25 ${show ? "":"close"}`}>


            </div>
        </div>
    );
}

export default Sidebar;
import React from 'react';

function Navbar({ Toggle }) {
    console.log(Toggle);
    return (
        <div className='navbar bg-info p-4 text-white'>

            <button onClick={Toggle} className="btn btn-warning" style={{ "fontSize": "24px" }}><i class="bi bi-text-center"></i></button>



        </div>
    );
}

export default Navbar;

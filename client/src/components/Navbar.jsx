import React from 'react';
import useNavigate from 'react-router-dom';
import './styles/Navbar.css'; // Assuming you have a CSS file for styling
const Navbar =()=>{



    return (
    <div className="navbar">

     <div className="logo">
        Himanshu Upadhyay..
     </div>

     <div className='lists'>
     <a>Home</a>
     <a>Skills</a>
     <a>Projects</a>
     <a>Contact</a>
     </div>

    </div>
);
}
export default Navbar;
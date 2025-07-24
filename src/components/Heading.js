import {logo_url} from '../../utils/constants';
import {useState} from 'react';
import {Link} from 'react-router-dom';
const Heading = ()=>{
    const [btnlog,setbtnlog] =  useState("Login");
    return(
        <div className='header'>
            <div className='logocontainer'> 
                <img className='logo' src={logo_url} alt='logo'>
                </img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <button className='loginbtn' onClick={()=>{
                        btnlog === "Login" ? setbtnlog("Logout") : setbtnlog("Login");
                    }}>{btnlog}</button>
                </ul>
            </div>
        </div>
    )
}
export default Heading;
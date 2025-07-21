import {logo_url} from '../../utils/constants';
const Heading = ()=>{
    return(
        <div className='header'>
            <div className='logocontainer'> 
                <img className='logo' src={logo_url} alt='logo'>
                </img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}
export default Heading;
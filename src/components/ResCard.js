import {res_logo_url} from '../../utils/constants';
const ResCard = (props)=>{
    console.log(props);
    const {resData} = props;
    const {name, cuisines, avgRating, deliveryTime, cloudinaryImageId, costForTwo} = resData.info;
    return(
        <div className='res-card'>
            <img className='res-logo' src={`${res_logo_url}${cloudinaryImageId}`} alt='restaurant-logo'/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}
export default ResCard;
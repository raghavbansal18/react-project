import ResCard from './ResCard';
import {resObj} from '../../utils/constants';
import {useState , useEffect} from "react";
import Shimmer from './Shimmer';

const SWIGGY_REST_API_PATH = `data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants`;

const Body = ()=>{
    const [listofRes, setlistofRes] = useState([]); // original data
    const [filteredRes, setFilteredRes] = useState([]); // for display
    const [searchText,setsearchText] = useState("");
    useEffect( () => {
        fetchData();
    }, [] );
    const fetchData = async() => {
        const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9046136&lng=77.614948&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await Data.json();
        console.log(json);
        const restaurants = eval("json?." + SWIGGY_REST_API_PATH) || [];

        setlistofRes(restaurants);
        setFilteredRes(restaurants); // Initialize filtered list with all restaurants
      
       
    } 
    if(listofRes.length === 0){
        return <Shimmer/>
    }           
    return(
        <div className='body'>
            <div className='filter'>
                <div className='search'>
                    <input type='text' className='filter-btn' value={searchText} 
                    onChange={(e) => setsearchText(e.target.value)}
                    />
                    <button className='filter-btn' onClick= {
                        ()=>{
                            //filter the res and get update teh UI
                            console.log(searchText);
                            const filteredRes = listofRes.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRes(filteredRes);
                        }
                    } >search</button>
                </div>
                <button className='filter-btn'
                onClick={()=>{
                    const filteredlist = resObj.filter((res)=>res.info.avgRating >4.4);
                    setFilteredRes(filteredlist);
                }}
                >Top Rated Restaurants
                </button>
            </div>
            <div className='res-container'>
                {filteredRes.map(res => (
                     <ResCard key={res.info.id} resData={res}/>
                ))}
            </div>
        </div>
    )
}
export default Body;
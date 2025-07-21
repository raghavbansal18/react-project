import ResCard from './Rescard';
import {resObj} from '../../utils/constants';
import {useState} from "react";

const Body = ()=>{
    const [listofRes, setlistofRes] = useState(resObj);
    return(
        <div className='body'>
            <div className='filter'>
                <button className='filter-btn'
                onClick={()=>{
                    const filteredlist = resObj.filter((res)=>res.info.avgRating>4.4);
                    setlistofRes(filteredlist);
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className='res-container'>
                {/* <ResCard resData={resObj[0]}/>
                <ResCard resData={resObj[1]}/>
                <ResCard resData={resObj[2]}/>
                <ResCard resData={resObj[3]}/>
                <ResCard resData={resObj[4]}/>
                <ResCard resData={resObj[5]}/> */}
                {listofRes.map(res => (
                     <ResCard key={res.info.id} resData={res}/>
                ))}
            </div>
        </div>
    )
}
export default Body;
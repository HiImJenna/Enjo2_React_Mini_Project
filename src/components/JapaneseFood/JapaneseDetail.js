import { useParams } from "react-router-dom";
import Data from './data';

function Detail() {
   let { id } = useParams();  // HOOK

    console.log(Data);

    return(
        <>
        <div className='container'>
            <div className='col-md-6'>
                <h4>{Data[id].title}</h4>
                <img width="100%" height="400px" src={Data[id].img}/> 
                <p>주소 : {Data[id].address}</p>
                <p>전화번호 : {Data[id].tel}</p>
                <p>전화번호 : {Data[id].rank}</p>

            </div>
        </div>
        </>
    )

}

export default Detail;
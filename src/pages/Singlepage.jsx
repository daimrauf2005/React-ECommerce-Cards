import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Singlepage() {

    const [singleUser,setSingleUser] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${id}`)
        .then((res)=>{
            console.log(res.data);
            setSingleUser(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    function backPurchase(){
        window.history.back()
    }
    return (
        <div>
    <div>
        {singleUser ? (
            <>
                <figure>
                    <img
                        src={singleUser.image}
                        alt={singleUser.title}
                    />
                </figure>
                <div>
                    <h2>{singleUser.title}</h2>
                    <p>{singleUser.description}</p>
                    <div>
                    <button onClick={backPurchase}>Back to purchase
                </button>
                    </div>
                </div>
            </>
        ) : (
            <h1>Loading...</h1>
        )}
    </div>
</div>
    )
}

export default Singlepage
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"


function Home() {
  const [products, setProducts] = useState(null)

  const navigate = useNavigate()

  useEffect(()=>{
    axios('https://fakestoreapi.com/products')
    .then((res)=>{
      console.log(res.data);
      setProducts(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  },[])

  function buyNow(item){
    console.log(item);
    navigate(`Singlepage/${item.id}`)
  }

  return (
    <>
      <div>
        {products ? products.map((item) => (
          <div key={item.id}>
            <figure>
              <img
                src={item.image}
                alt={item.title}
              />
            </figure>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div>
                <button onClick={()=>buyNow(item)}>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )) : <h1>Loading...</h1>}
        </div>
        </>
  )
};

export default Home
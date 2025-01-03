import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"

function Home() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(import.meta.env.VITE_PLATZI_API_URL + '/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)
    return(
        <Layout>
            <div className="grid grid-cols-4 gap-10 w-full max-w-screen-lg">
                {
                    products?.filter(product => product.id < 80).map(product => (
                        <Card key={ product.id } data = { product }/> 
                    ))  
                }
            </div>
        </Layout>
    )
}

export {Home}
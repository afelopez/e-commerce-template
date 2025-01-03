import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card"

function Home() {
    return(
        <Layout children={ 
            <>  
                <Card 
                    title={"Card Title"}
                    price={100} 
                    tag={"description"}
                    srcImage={"https://images.pexels.com/photos/29986994/pexels-photo-29986994/free-photo-of-intricate-blue-abstract-pattern-on-green-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                />
            </>
        } />
    )
}

export {Home}
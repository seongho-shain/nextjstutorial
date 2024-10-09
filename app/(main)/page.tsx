import Navigation from "../../components/navigation"
import Link from "next/link"
import Image from "next/image"
import Logo from '/public/Andong.png'
const URL = 'https://dummyjson.com/products/'

async function getItems(){
    // console.log("im fetching")
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    const response = await fetch(URL);
    const json = await response.json();
    return json.products;
}
export default async function Test() {
    const items = await getItems();
    return (
        <div>
            <Image src={Logo} alt="로고"/>
            <Navigation />
            {
            items.map( (item) => 
                <li key={item.id}>
                    <Link href={`/items/${item.id}`}> {item.title} </Link>
                </li>)
            }  
        </div>
    )
}
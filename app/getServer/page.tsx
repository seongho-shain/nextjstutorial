import Link from "next/link"
export const metadata = {
    title: "Home",
};
const URL = 'https://dummyjson.com/products/'

async function getItems(){
    // console.log("im fetching")
    // await new Promise((resolve) => setTimeout(resolve, 5000))
    const response = await fetch(URL);
    const json = await response.json();
    return json.products;
}

export default async function HomePage() {
    const items = await getItems()
    return (
      <div>
        {
            items.map( (item) => 
                <li key={item.id}>
                    <Link href={`/items/${item.id}`}> {item.title} </Link>
                </li>)
        }  
      </div>
    )
  }
async function getItems(id : string){
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    return response.json()
}

async function getNextItems(id : string){
    const num: number = parseInt(id, 10) + 1
    const response = await fetch(`https://dummyjson.com/products/${num.toString()}`)
    return response.json()
}

interface IParams {
    params: {id:string}
}

export async function generateMetadata({ params: {id} }:IParams){
    const item = await getItems(id)
    return {
        title: item.title
    }
}




export default async function Page({ params: {id} }: IParams
) {
    //const item = await getItems(params.id)
    //const NextItem = await getNextItems(params.id)
    const [item, NextItem] = await Promise.all([getItems(id), getNextItems(id)])
    return (
    <div>
        <div>Product ID: {item.id}</div>
        <div>Product Title: {item.title}</div>
        <div>Next Product Title: {NextItem.title}</div>
    </div>
    );
  }
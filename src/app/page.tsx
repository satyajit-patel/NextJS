import Link from "next/link";
import CardSpotlightDemo from "../components/spot-light/CardSpotlightDemo"

const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const content = await response.json();
  return content;
}

interface Product {
  id: string;
  title: string;
  price: string;
  description: string
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex flex-col bg-fuchsia-300 gap-4 p-4">
      <div className="bg-amber-500 p-4">
        <h1>Hi Next js</h1>
        <Link href="/team">
          click me to go to team page
        </Link>
      </div>
      <div>
        <CardSpotlightDemo />
      </div>
      <div>
        {
        products.map((product: Product) => {
          return (
            <div key={product.id} className="rounded-md bg-amber-200 p-4">
              {product.title}
              <br />
              {product.price}
              <br />
              {product.description}
              <hr />
            </div>
          )
        })
        }
      </div>
    </div>
  );
}

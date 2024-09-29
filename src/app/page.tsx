import db from "@/db/a";
import Link from "next/link";

async function Home() {
  const res = await db.products.findMany();
  return (
    <article>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-[800px] mx-auto">
        {res?.map(({ id, title, description, image }) => (
          <Link href={`/product/${id}`} key={id}>
            <div className="border-[1px] border-gray-600 rounded-md">
              <div >
                <img src={image} alt={title} className="w-full" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-bold">{title}</h2>
                <p className="text-gray-300 p-2">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}

export default Home;

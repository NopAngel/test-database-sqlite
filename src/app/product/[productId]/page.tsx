import React from 'react'
import db from "@/db/a";

async function ProductId({
  params,
}: {
    params: {
      productId: string;
    };
  }) {
    const res = params.productId;
  const resTwo = res;

  const products = await db.products.findUnique({
    where: {
      id: resTwo,
    },
  });

  const title = products?.title;
  const image = products?.image;
  const description = products?.description;
  return (
    <main className='flex justify-center items-center h-screen gap-5'>
        <section className='w-[500px]'>
            <img src={image} alt={title} />
        </section>
        <section>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <p className='text-gray-300 p-2'>{description}</p>
        </section>
    </main>
  )
}

export default ProductId
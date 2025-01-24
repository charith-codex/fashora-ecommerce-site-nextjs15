import ProductImages from '@/components/shared/product/product-images';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { getProductBySlug } from '@/lib/actions/product.actions';
import { notFound } from 'next/navigation';
import AddToCart from '@/components/shared/product/add-to-cart';

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;

  const product = await getProductBySlug(slug);
  if (!product) {
    notFound();
  }

  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* images column */}
          <div className="col-span-2">
            <ProductImages images={product.images} />
          </div>
          {/* details column */}
          <div className="col-span-2 p-5">
            <div className="flex flex-col gap-6">
              <p>
                {product.brand} {product.category}
              </p>
              <h1 className="h3-bold">{product.name}</h1>
              <p>
                {product.rating} of {product.numReviews} Reviews
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <p className="w-36 text-center rounded-full bg-pink-100 text-pink-700 px-5 py-2 font-semibold">
                  LKR {product.price}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <p className="font-semibold">Description</p>
              <p>{product.description}</p>
            </div>
          </div>
          {/* action column */}
          <Card className="self-start">
            <CardContent className="p-4">
              <div className="mb-3 flex justify-between">
                <div>Price</div>
                <div>
                  <p>LKR {product.price}</p>
                </div>
              </div>
              <div className="mb-2 flex justify-between">
                <div>Status</div>
                {product.stock > 0 ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className="flex-center">
                  <AddToCart
                    item={{
                      productId: product.id,
                      name: product.name,
                      slug: product.slug,
                      price: product.price,
                      qty: 1,
                      image: product.images![0],
                    }}
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;

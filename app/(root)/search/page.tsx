import Pagination from '@/components/shared/pagination';
import ProductCard from '@/components/shared/product/product-card';
import { Button } from '@/components/ui/button';
import {
  getAllCategories,
  getAllProducts,
} from '@/lib/actions/product.actions';
import Link from 'next/link';

const prices = [
  {
    name: 'LKR 1 - 1,000',
    value: '1-1000',
  },
  {
    name: 'LKR 1,001 - 2,500',
    value: '1001-2500',
  },
  {
    name: 'LKR 2,501 - 5,000',
    value: '2501-5000',
  },
  {
    name: 'LKR 5,001 - 10,000',
    value: '5001-10000',
  },
  {
    name: 'LKR 10,001- 50,000',
    value: '10001-50000',
  },
];

const ratings = [4, 3, 2, 1];

const sortOrders = ['newest', 'lowest', 'highest', 'rating'];

export async function generateMetadata(props: {
  searchParams: Promise<{
    q: string;
    category: string;
    price: string;
    rating: string;
  }>;
}) {
  const {
    q = 'all',
    category = 'all',
    price = 'all',
    rating = 'all',
  } = await props.searchParams;

  const isQuerySet = q && q !== 'all' && q.trim() !== '';
  const isCategorySet =
    category && category !== 'all' && category.trim() !== '';
  const isPriceSet = price && price !== 'all' && price.trim() !== '';
  const isRatingSet = rating && rating !== 'all' && rating.trim() !== '';

  if (isQuerySet || isCategorySet || isPriceSet || isRatingSet) {
    return {
      title: `Search ${isQuerySet ? q : ''}
      ${isCategorySet ? `: Category ${category}` : ''}
      ${isPriceSet ? `: Price ${price}` : ''}
      ${isRatingSet ? `: Rating ${rating}` : ''}`,
    };
  } else {
    return {
      title: 'Search Products',
    };
  }
}

const SearchPage = async (props: {
  searchParams: Promise<{
    q?: string;
    category?: string;
    price?: string;
    rating?: string;
    sort?: string;
    page?: string;
  }>;
}) => {
  const {
    q = 'all',
    category = 'all',
    price = 'all',
    rating = 'all',
    sort = 'newest',
    page = '1',
  } = await props.searchParams;

  // Construct filter url
  const getFilterUrl = ({
    c,
    s,
    p,
    r,
    pg,
  }: {
    c?: string;
    s?: string;
    p?: string;
    r?: string;
    pg?: string;
  }) => {
    const params = { q, category, price, rating, sort, page };
    if (c) params.category = c;
    if (p) params.price = p;
    if (s) params.sort = s;
    if (r) params.rating = r;
    if (pg) params.page = pg;
    return `/search?${new URLSearchParams(params).toString()}`;
  };

  // Get products
  const products = await getAllProducts({
    query: q,
    category,
    price,
    rating,
    page: Number(page),
    sort,
  });

  const categories = await getAllCategories();

  return (
    <div className="grid md:grid-cols-5 md:gap-5">
      <div className="filter-links">
        {/* Category Links */}
        <div className="text-lg text-white  bg-slate-800 py-1 px-3 rounded mt-3 mb-2">
          Department
        </div>
        <div className="pl-3">
          <ul className="space-y-1">
            <li>
              <Link
                className={`${
                  ('all' === category || '' === category) && 'font-bold'
                }`}
                href={getFilterUrl({ c: 'all' })}
              >
                Any
              </Link>
            </li>
            {categories.map((x) => (
              <li key={x.category}>
                <Link
                  className={`${category === x.category && 'font-bold'}`}
                  href={getFilterUrl({ c: x.category })}
                >
                  {x.category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Price Links */}
        <div>
          <div className="text-lg text-white  bg-slate-800 py-1 px-3 rounded mt-8 mb-2">
            Price
          </div>
          <ul className="space-y-1  pl-3">
            <li>
              <Link
                className={`pl-1 ${'all' === price && 'font-bold'}`}
                href={getFilterUrl({ p: 'all' })}
              >
                Any
              </Link>
            </li>
            {prices.map((p) => (
              <li key={p.value}>
                <Link
                  href={getFilterUrl({ p: p.value })}
                  className={`${p.value === price && 'font-bold'}`}
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Rating Links */}
        <div>
          <div className="text-lg text-white  bg-slate-800 py-1 px-3 rounded mt-8 mb-2">
            Customer Ratings
          </div>
          <ul className="space-y-1 pl-3">
            <li>
              <Link
                href={getFilterUrl({ r: 'all' })}
                className={`pl-1  ${'all' === rating && 'font-bold'}`}
              >
                Any
              </Link>
            </li>
            {ratings.map((r) => (
              <li key={r}>
                <Link
                  href={getFilterUrl({ r: `${r}` })}
                  className={`${r.toString() === rating && 'font-bold'}`}
                >
                  {`${r} stars & up`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="md:col-span-4 space-y-4">
        <div className="flex-between flex-col md:flex-row my-4">
          <div className="flex items-center">
            {q !== 'all' && q !== '' && 'Query : ' + q}
            {category !== 'all' &&
              category !== '' &&
              '   Category : ' + category}
            {price !== 'all' && '    Price: ' + price}
            {rating !== 'all' && '    Rating: ' + rating + ' & up'}
            &nbsp;
            {(q !== 'all' && q !== '') ||
            (category !== 'all' && category !== '') ||
            rating !== 'all' ||
            price !== 'all' ? (
              <Button variant={'link'} asChild>
                <Link href="/search">Clear</Link>
              </Button>
            ) : null}
          </div>
          <div>
            {/* SORTING  */}
            Sort by{' '}
            {sortOrders.map((s) => (
              <Link
                key={s}
                className={`mx-2   ${sort == s && 'font-bold'} `}
                href={getFilterUrl({ s })}
              >
                {s}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {products!.data.length === 0 && <div>No product found</div>}
          {products!.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {products!.totalPages! > 1 && (
          <Pagination page={page} totalPages={products!.totalPages} />
        )}
      </div>
    </div>
  );
};

export default SearchPage;

import Link from 'next/link';

const ProductsList = ({productId = 10}) => {
         return (
                  <div>
                      <h2>
                          <Link  href="/products/1">
                          <a>Product 1</a>
                          </Link>
                          </h2>     
                      <h2>
                          <Link  href="/products/2">
                          <a>Product 2</a>
                          </Link>
                          </h2>     
                      <h2>
                          <Link  href={`/products/${productId}`}>
                          <a>Product {productId}</a>
                          </Link>
                          </h2>     
                  </div>
         );
};

export default ProductsList;
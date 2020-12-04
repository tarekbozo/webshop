import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Skeleton } from '../components/ui/loading/Skeleton';
import { Message } from '../components/ui/Message';
import { ProductCard } from './../components/products/ProductsCard';

export const ProductsView = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Skeleton /> //TODO
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className='bg-white py-8'>
          <div className='container mx-auto flex items-center flex-wrap pt-4 pb-12'>
            {products?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

import React, { useEffect } from 'react';
import { Rating } from '../components/products/Rating';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import { Message } from './../components/ui/Message';
import { Skeleton } from './../components/ui/loading/Skeleton';

export const ProducatDetailsView = ({ match }) => {
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {};

  return (
    <>
      <Link
        className='bg-black text-white font-bold text-base hover:bg-gray-700 p-2 m-6   rounded-full px-4 py-1'
        to='/'
      >
        Go Back
      </Link>
      {loading ? (
        <Skeleton>Loading..</Skeleton>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <div className='h-screen'>
          <div className='w-full flex flex-wrap'>
            <div className='w-1/2 shadow-2xl'>
              <img
                className='object-cover w-full h-screen hidden md:block'
                src={product.image}
                alt='product details'
              />
            </div>
            <div className='w-full md:w-1/2 flex flex-col'>
              <div className='flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32'>
                <div className='flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32'>
                  <p className='flex flex-col pt-4 text-5xl'>{product.name}</p>
                  <div className='flex flex-col pt-4'>
                    {product.description}
                  </div>
                  <div className='flex flex-col pt-4'>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </div>
                  <div className='flex flex-col pt-4  '>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </div>
                  <div className='flex justify-between pt-4 text-3xl font-semibold'>
                    {`${product.price} SEK`}
                    <button
                      onClick={addToCartHandler}
                      type='button'
                      className={` ${
                        product.countInStock === 0
                          ? 'bg-black text-white font-bold text-base hover:bg-gray-700 p-2  rounded-full px-4 py-1 cursor-not-allowed'
                          : 'bg-black text-white font-bold text-base hover:bg-gray-700 p-2  rounded-full px-4 py-1 '
                      }`}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

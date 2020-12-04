import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  const Background =
    'https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80';
  return (
    <>
      <div
        className="h-full w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-bottom"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start  px-6 tracking-wide">
            <h1 className="text-black text-2xl my-4">
              Stripy Zig Zag Jigsaw Pillow and Duvet Set
            </h1>
            <Link
              className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black"
              to="#"
            >
              products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

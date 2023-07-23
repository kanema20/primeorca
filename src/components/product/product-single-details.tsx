import React, { useState } from 'react';
import Button from '@components/ui/button';
import Counter from '@components/common/counter';
import { useRouter } from 'next/router';
import { useProductQuery } from '@framework/product/get-product';
import { useSingleProdQuery } from '@framework/product/get-single-product';
import { getVariations } from '@framework/utils/get-variations';
import usePrice from '@framework/product/use-price';
import { useCart } from '@contexts/cart/cart.context';
import { generateCartItem } from '@utils/generate-cart-item';
import { ProductAttributes } from './product-attributes';
import isEmpty from 'lodash/isEmpty';
import Link from '@components/ui/link';
import { toast } from 'react-toastify';
import { useWindowSize } from '@utils/use-window-size';
import Carousel from '@components/ui/carousel/carousel';
import { SwiperSlide } from 'swiper/react';
import ProductMetaReview from '@components/product/product-meta-review';
import { useSsrCompatible } from '@utils/use-ssr-compatible';
import { useFetchItemPrice, fetchItemPrice } from '@framework/product/get-product-price';
import { ROUTES } from '@utils/routes';

const productGalleryCarouselResponsive = {
  '768': {
    slidesPerView: 2,
  },
  '0': {
    slidesPerView: 1,
  },
};

interface IndividualProdProps {
  slug: string;
}

// const ProductSingleDetails: React.FC = () => {
const ProductSingleDetails: React.FC<IndividualProdProps> = ({ slug }) => {
  // const { /*slug, */ images, name, description, default_price, metadata } = data;
  // const {
  //   query: { slug },
  // } = useRouter();
  const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });
  // const { data, isLoading } = useProductQuery(slug as string);

  // retrieve product details based on product slug
  const { data, isLoading } = useSingleProdQuery(slug as string);

  const { addItemToCart } = useCart();
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  const [quantity, setQuantity] = useState(1);
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  // console.log('data ', data);
  // console.log('data[0] ', data[0]);
  // console.log('data[0].name ', data[0].name);
  // console.log('data[0].default_price ', data[0]?.default_price);
  // console.log('data[0].images ', data[0]?.images[0]);


  function getProductPrice(prod_price: any) {
    const { data } = useFetchItemPrice(prod_price)
    return data?.unit_amount;
  }


  const { price, basePrice, discount } = usePrice(
    // data && {
    //   // amount: data.sale_price ? data.sale_price : data.price,
    //   amount: getProductPrice(data.default_price)?.unit_amount,
    //   baseAmount: data.price,
    //   currencyCode: 'USD',
    // }
    {
      // amount: data.sale_price ? data.sale_price : data.price,
      // amount: getProductPrice(data[0]?.default_price),
      amount: 10000,
      // baseAmount: data.price,
      baseAmount: 90,
      currencyCode: 'USD',
    }
  );
  if (isLoading) return <p>Loading...</p>;
  // const variations = getVariations(data?.variations);
  const variations =
  {
    "Sizes": [
      {
        "id": 1,
        "value": "7",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 2,
        "value": "7.5",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 3,
        "value": "8",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 4,
        "value": "8.5",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 5,
        "value": "9",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 6,
        "value": "9.5",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 7,
        "value": "10",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 8,
        "value": "10.5",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 9,
        "value": "11",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 10,
        "value": "12",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 11,
        "value": "13",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 12,
        "value": "14",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      }
    ]
  }


  const isSelected = !isEmpty(variations)
    ? !isEmpty(attributes) &&
    Object.keys(variations).every((variation) =>
      attributes.hasOwnProperty(variation)
    )
    : true;

  function addToCart() {
    if (!isSelected) return;
    // to show btn feedback while product carting
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
    }, 600);

    const item = generateCartItem(data[0]!, attributes);
    addItemToCart(item, quantity);
    toast('Added to the bag', {
      progressClassName: 'fancy-progress-bar',
      position: width > 768 ? 'bottom-right' : 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    console.log(item, 'item');
  }

  function handleAttribute(attribute: any) {
    setAttributes((prev) => ({
      ...prev,
      ...attribute,
    }));
  }

  return (
    <div className="block lg:grid grid-cols-9 gap-x-10 xl:gap-x-14 pt-7 pb-10 lg:pb-14 2xl:pb-20 items-start">
      {width < 1025 ? (
        <Carousel
          pagination={{
            clickable: true,
          }}
          breakpoints={productGalleryCarouselResponsive}
          className="product-gallery"
          buttonGroupClassName="hidden"
        >

          <SwiperSlide key={`product-gallery-key`}>
            <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
              <img
                src={
                  data[0]?.images[0] ??
                  '/assets/placeholder/products/product-gallery.svg'
                }
                alt={`${data[0].name}--${1}`}
                className="object-cover w-full"
              />
            </div>
          </SwiperSlide>

          {/* {data?.gallery?.map((item, index: number) => (
            <SwiperSlide key={`product-gallery-key-${index}`}>
              <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
                <img
                  src={
                    item?.original ??
                    '/assets/placeholder/products/product-gallery.svg'
                  }
                  alt={`${data?.name}--${index}`}
                  className="object-cover w-full"
                />
              </div>
            </SwiperSlide>
          ))} */}
        </Carousel>
      ) : (
        <div className="col-span-5 grid"> {/* grid-cols-2 gap-2.5 */}
          {/* {data?.gallery?.map((item, index: number) => ( */}
          <div
            // key={index}
            className="col-span-1 transition duration-150 ease-in hover:opacity-90"
          >
            <img
              src={
                data[0]?.images[0] ??
                '/assets/placeholder/products/product-gallery.svg'
              }
              // alt={`${data[0]?.name}--${index}`}
              alt={`${data[0]?.name}}`}
              className="object-cover w-full"
            />
          </div>
          {/* ))} */}
        </div>
      )}

      <div className="col-span-4 pt-8 lg:pt-0">
        <div className="pb-7 mb-7 border-b border-gray-300">
          <h2 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
            {data[0]?.name}
          </h2>
          <p className="text-body text-sm lg:text-base leading-6 lg:leading-8">
            {data[0]?.description}
          </p>
          <div className="flex items-center mt-5">
            <div className="text-heading font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0">
              {price}
            </div>
            {discount && (
              <span className="line-through font-segoe text-gray-400 text-sm md:text-base lg:text-lg xl:text-xl ltr:pl-2 rtl:pr-2">
                {basePrice}
              </span>
            )}
          </div>
        </div>

        <div className="pb-3 border-b border-gray-300">
          {Object.keys(variations).map((variation) => {
            return (
              <ProductAttributes
                key={variation}
                title={variation}
                attributes={variations[variation]}
                active={attributes[variation]}
                onClick={handleAttribute}
              />
            );
          })}
        </div>
        <div className="flex items-center gap-x-4 ltr:md:pr-32 rtl:md:pl-32 ltr:lg:pr-12 rtl:lg:pl-12 ltr:2xl:pr-32 rtl:2xl:pl-32 ltr:3xl:pr-48 rtl:3xl:pl-48  border-b border-gray-300 py-8">
          <Counter
            quantity={quantity}
            onIncrement={() => setQuantity((prev) => prev + 1)}
            onDecrement={() =>
              setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
            }
            disableDecrement={quantity === 1}
          />
          <Button
            onClick={addToCart}
            variant="slim"
            className={`w-full md:w-6/12 xl:w-full ${!isSelected && 'bg-gray-400 hover:bg-gray-400'
              }`}
            disabled={!isSelected}
            loading={addToCartLoader}
          >
            <span className="py-2 3xl:px-8">Add to cart</span>
          </Button>
        </div>
        <div className="py-6">
          <ul className="text-sm space-y-5 pb-1">
            <li>
              <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                Brand:
              </span>
              {(data[0]?.metadata.brand).toUpperCase()}
            </li>
            <li>
              <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                Collection:
              </span>
              <Link
                href={ROUTES.KOBE5}
                className="transition hover:underline hover:text-heading"
              >
                {data[0]?.metadata.collection}
              </Link>
            </li>
            {data?.tags && Array.isArray(data.tags) && (
              <li className="productTags">
                <span className="font-semibold text-heading inline-block ltr:pr-2 rtl:pl-2">
                  Tags:
                </span>
                {data.tags.map((tag) => (
                  <Link
                    key={tag.id}
                    href={tag.slug}
                    className="inline-block ltr:pr-1.5 rtl:pl-1.5 transition hover:underline hover:text-heading ltr:last:pr-0 rtl:last:pl-0"
                  >
                    {tag.name}
                    <span className="text-heading">,</span>
                  </Link>
                ))}
              </li>
            )}
          </ul>
        </div>

        {/* <ProductMetaReview data={data} /> */}
      </div>
    </div>
  );
};

export default ProductSingleDetails;

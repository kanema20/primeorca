import React, { useState } from 'react';
import { useRouter } from 'next/router';
import isEmpty from 'lodash/isEmpty';
import { ROUTES } from '@utils/routes';
import { useUI } from '@contexts/ui.context';
import Button from '@components/ui/button';
import Counter from '@components/common/counter';
import { useCart } from '@contexts/cart/cart.context';
import { ProductAttributes } from '@components/product/product-attributes';
import { generateCartItem } from '@utils/generate-cart-item';
import usePrice from '@framework/product/use-price';
import { getVariations } from '@framework/utils/get-variations';
import { useTranslation } from 'next-i18next';
import { useFetchFirebaseProductSize } from "@framework/product/_firebase/get-product-sizes";
export default function ProductPopup() {
  const { t } = useTranslation('common');
  const {
    modalData: { data },
    closeModal,
    openCart,
  } = useUI();
  const router = useRouter();
  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [attributes, setAttributes] = useState<{ [key: string]: string }>({});
  const [viewCartBtn, setViewCartBtn] = useState<boolean>(false);
  const [addToCartLoader, setAddToCartLoader] = useState<boolean>(false);
  const [individPageLoader, setIndividPageLoader] = useState<boolean>(false);
  const { _id, url, image, name, description, default_price, metadata } = data;

  const productType = () => {
    if (data.data().metadata_.type == "Sample") {
      return "Sizes (US - Men)";
    } else if (data.data().metadata_.type == "Clothing Sample") {
      return "Sizes (Asia - Men)";
    } else if (data.data().metadata_.type == "Waist Sample") {
      return "Sizes (cm/in)";
    }
    else {
      return "One Size";
    }
  }

  const { data: firebaseProdData } = useFetchFirebaseProductSize(data.data()._id, attributes[productType()]);
  console.log("firebaseProdData: ", firebaseProdData);

  const { price, basePrice, discount } = usePrice({
    amount: data.data().price * 100,
    baseAmount: data.data().price * 100,
    currencyCode: 'USD',
  });
  const variations =
  {
    "Sizes (US - Men)": [
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

  const clothingVariations =
  {
    "Sizes (Asia - Men)": [
      {
        "id": 1,
        "value": "S",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 2,
        "value": "M",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 3,
        "value": "L",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 4,
        "value": "XL",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 5,
        "value": "XXL",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
    ]
  }

  const waistVariations = {
    "Sizes (cm/in)": [
      {
        "id": 1,
        "value": "65/26",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 2,
        "value": "73/28",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 3,
        "value": "80/30",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 4,
        "value": "87/33",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 5,
        "value": "93/35",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 6,
        "value": "100/37",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 7,
        "value": "110/40",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
      {
        "id": 8,
        "value": "120/42",
        "attribute": {
          "id": 1,
          "name": "Size",
          "slug": "size"
        }
      },
    ]
  }

  const noVariations = {"One Size": [
    {
      "id": 1,
      "value": "Std",
      "attribute": {
        "id": 1,
        "name": "Size",
        "slug": "size"
      }
    },
  ]}

  const productAttributes = () => {
    if (data.data().metadata_.type == "Sample") {
      return variations;
    } else if (data.data().metadata_.type == "Clothing Sample") {
      return clothingVariations;
    } else if (data.data().metadata_.type == "Waist Sample") {
      return waistVariations;
    }
    else {
      return noVariations;
    }
  }

  const isSelected = !isEmpty(productAttributes())
    ? !isEmpty(attributes) &&
    Object.keys(productAttributes()).every((variation) =>
      attributes.hasOwnProperty(variation)
    )
    : true;

  function addToCart() {
    if (!isSelected) return;
    if ((attributes['Sizes (US - Men)'] || attributes['Sizes (Asia - Men)'] || attributes['Sizes (cm/in)'] || attributes['One Size']) == undefined) return;
    // to show btn feedback while product carting
    setAddToCartLoader(true);
    setTimeout(() => {
      setAddToCartLoader(false);
      setViewCartBtn(true);
    }, 600);

    const item = generateCartItem(firebaseProdData!.data, firebaseProdData!.id);
    addItemToCart(item, quantity);
  }

  function navigateToProductPage() {
    closeModal();
    router.push(`/products/${data.data().url}`, undefined, {
      locale: router.locale,
    });
  }

  function handleAttribute(attribute: any) {
    setAttributes((prev) => ({
      ...prev,
      ...attribute,
    }));
  }

  function navigateToCartPage() {
    closeModal();
    setTimeout(() => {
      openCart();
    }, 400);
  }

  return (
    <div className="rounded-lg bg-white">
      <div className="flex flex-col lg:flex-row w-full md:w-[650px] lg:w-[960px] mx-auto overflow-hidden">
        <div className="flex-shrink-0 flex items-center justify-center w-full lg:w-430px max-h-430px lg:max-h-full overflow-hidden bg-white"
        >
          <img
            src={
              data.data().image ??
              '/assets/placeholder/products/product-thumbnail.svg'
            }
            alt={name}
            className="lg:object-cover lg:w-full lg:h-full" style={{ height: '55%' }}
          />
        </div>

        <div className="flex flex-col p-5 md:p-8 w-full">
          <div className="pb-5">
            <div
              className="mb-2 md:mb-2.5 block -mt-1.5"
              onClick={navigateToProductPage}
              role="button"
            >
              <h2 className="text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black">
                {data.data().name}
              </h2>
            </div>
            <p className="text-sm leading-6 md:text-body md:leading-7">
              {data.data().description}
            </p>

            <div className="flex items-center mt-3">
              <div className="text-heading font-semibold text-base md:text-xl lg:text-2xl">
                {/* {"$" + (getProductPrice(default_price).unit_amount) / 100 + ".00"} */}
                {price}
              </div>
              {discount && (
                <del className="font-segoe text-gray-400 text-base lg:text-xl ltr:pl-2.5 rtl:pr-2.5 -mt-0.5 md:mt-0">
                  {basePrice}
                </del>
              )}
            </div>
          </div>
            
          {Object.keys(productAttributes()).map((variation) => {
            return (
              <ProductAttributes
                key={`popup-attribute-key${variation}`}
                title={variation}
                attributes={productAttributes()[variation]}
                active={attributes[variation]}
                onClick={handleAttribute}
              />
            );
          })}
          {/* {metadata.sizes} */}

          <div className="pt-2 md:pt-4">
            <div className="flex items-center justify-between mb-4 gap-x-3 sm:gap-x-4">
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
                variant="flat"
                className={`w-full h-11 md:h-12 px-1.5 ${!isSelected && 'bg-gray-400 hover:bg-gray-400'
                  }`}
                disabled={!isSelected}
                loading={addToCartLoader}
              >
                {t('text-add-to-cart')}
              </Button>
            </div>

            {viewCartBtn && (
              <button
                onClick={navigateToCartPage}
                className="w-full mb-4 h-11 md:h-12 rounded bg-gray-100 text-heading focus:outline-none border border-gray-300 transition-colors hover:bg-gray-50 focus:bg-gray-50"
              >
                {t('text-view-cart')}
              </button>
            )}

            {/* <Button
              onClick={navigateToProductPage}
              variant="flat"
              className="w-full h-11 md:h-12"
            >
              {t('text-view-details')}
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

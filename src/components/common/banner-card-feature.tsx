import Link from '@components/ui/link';
import Image from 'next/image';
import { useWindowSize } from '@utils/use-window-size';
import cn from 'classnames';
import { LinkProps } from 'next/link';
import { useSsrCompatible } from '@utils/use-ssr-compatible';
import { useUI } from '@contexts/ui.context';
// import { useFetchFeatureProduct } from '@framework/product/get-single-product';
import { StripeProduct } from "@framework/types";

interface BannerProps {
  banner: any;
  product: StripeProduct;
  variant?: 'rounded' | 'default';
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  href: LinkProps['href'];
  disableBorderRadius?: boolean;
}

function getImage(deviceWidth: number, imgObj: any) {
  return deviceWidth < 480 ? imgObj.mobile : imgObj.desktop;
}

export default function BannerCardFeature({
  banner,
  product,
  className,
  variant = 'rounded',
  effectActive = false,
  classNameInner,
  // href,
  disableBorderRadius = false,
}: BannerProps) {
  const { openModal, setModalView, setModalData } = useUI();

  function handlePopupView() {
    setModalData({ data: product });
    setModalView('PRODUCT_VIEW');
    return openModal();
  }

  const { width } = useSsrCompatible(useWindowSize(), { width: 0, height: 0 });
  const { title, image } = banner;
  const selectedImage = getImage(width, image);
  return (
    <div
      className={cn('mx-auto', className)}
      onClick={handlePopupView}
      role="button"
    >
      <Link
        href={''}
        className={cn(
          'h-full group flex justify-center relative overflow-hidden',
          classNameInner
        )}
      >
        <Image
          src={selectedImage.url}
          width={selectedImage.width}
          height={selectedImage.height}
          alt={title}
          quality={100}
          className={cn('bg-gray-300 object-cover w-full', {
            'rounded-md': variant === 'rounded' && !disableBorderRadius,
          })}
          priority={true}
        />
        {effectActive && (
          <div className="absolute top-0 ltr:-left-[100%] rtl:-right-[100%] h-full w-1/2 z-5 block transform ltr:-skew-x-12 rtl:skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 ltr:group-hover:animate-shine rtl:group-hover:animate-shineRTL" />
        )}
        <div
          className={cn(
            'overflow-hidden absolute top-12 lg:top-5 md:top-2 rtl:left-7 ltr:lg:right-5 ltr:lg:right-5 p-2',
            {
              '!bottom-[-12px] !right-[-12px]': variant === 'trendy',
            }
          )}
        >
          <span className={cn(
            'inline-block text-[30px] md:text-md leading-6 cursor-pointer font-bold text-center rounded-md py-8 lg:py-8 px-2 lg:px-4',
            {
              'bg-heading text-[#fff] hover:bg-white hover:text-heading lg:px-12 lg:py-6':
                variant === 'trendy',
            }
          )}>The Kobe 8 Protro Halo is here.</span>
        </div>
        <div
          className={cn(
            'overflow-hidden absolute bottom-3.5 lg:bottom-3.5 ltr:right-15 rtl:left-15 ltr:lg:right-15 rtl:lg:left-15 p-4',
            {
              '!bottom-[-12px] !right-[-12px]': variant === 'trendy',
            }
          )}
        >
          <span
            className={cn(
              'inline-block text-[15px] md:text-md sm:text-sm leading-4 cursor-pointer transition ease-in-out duration-300 font-semibold text-center rounded-md bg-white text-heading shadow-navigation py-4 lg:py-4 px-4 lg:px-6 hover:bg-heading hover:text-white transform lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0',
              {
                'bg-heading text-[#fff] hover:bg-white hover:text-heading lg:px-6 lg:py-6':
                  variant === 'trendy',
              }
            )}
          >
            {"Buy Now"}
          </span>
        </div>
      </Link>
    </div>
  );
}

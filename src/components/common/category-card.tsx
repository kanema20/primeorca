import Link from "next/link";
import Image from "next/image";
import Text from "@components/ui/text";
import { Category } from "@framework/types";
import { useTranslation } from "next-i18next";
import cn from 'classnames';

interface Props {
	category: Category;
}

const CategoryCard: React.FC<Props> = ({ category }) => {
	const { name, products, slug, id } = category;
	const { t } = useTranslation("common");
	return (
		<div className="flex flex-col border border-gray-300 rounded-lg p-4 lg:p-5 xl:p-7">
			<Text
				variant="heading"
				className="capitalize -mt-0.5 lg:-mt-1 xl:-mt-0 mb-2.5 lg:mb-3.5"
			>
				{name}
			</Text>
			<div className="grid grid-cols-3 gap-2.5 xl:gap-3">
				{products?.slice(0, 3)?.map((product) => (
					<Link href={`${product?.slug}`} key={`image--key${product?.id}`}>
						<a className="flex rounded-md overflow-hidden">
							<Image
								src={
									product?.image?.original ??
									"/assets/placeholder/products/product-cat.svg"
								}
								alt={name || t("text-category-thumbnail")}
								width={165}
								height={165}
								className="bg-gray-300 object-cover rounded-md transition duration-300 ease-in-out transform hover:scale-110"
							/>
						</a>
					</Link>
				))}
			</div>
			<div>
			<Link href={`${slug}`} key={`url--key${id}`}>
          <span className={cn(
              'inline-block text-[13px] md:text-sm sm:text-xs mt-2 leading-4 cursor-pointer transition ease-in-out duration-300 font-semibold text-center rounded-md bg-white text-heading shadow-navigation py-3 lg:py-4 px-4 lg:px-6 hover:bg-heading hover:text-white transform lg:translate-y-2 bg-heading text-[#fff]'
            )}>
            {t('button-view-category')}
          </span>
		  </Link>
        </div>
		</div>
	);
};

export default CategoryCard;

import { NextSeo } from 'next-seo';
import HeaderTwo from '@components/layout/header/header-two';
import Footer from '@components/layout/footer/footer';
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation';
import Search from '@components/common/search';
import CookieBar from '@components/common/cookie-bar';
import { useAcceptCookies } from '@utils/use-accept-cookies';
import Button from '@components/ui/button';
import { useTranslation } from 'next-i18next';

export default function Layout({ children }: React.PropsWithChildren<{}>) {
	const { acceptedCookies, onAcceptCookies } = useAcceptCookies();
	const { t } = useTranslation('common');
	return (
		<div className="flex flex-col min-h-screen">
			<NextSeo
				additionalMetaTags={[
					{
						name: 'viewport',
						content: 'width=device-width, initial-scale=1.0',
					},
				]}
				title="Prime Orca | Rep Your Game"
				description="Stay drippy with Prime Orca. 🌊"
				canonical="https://primeorca.com/"
				openGraph={{
					url: 'https://primeorca.com',
					title: 'Prime Orca | Rep Your Game',
					description: 'Stay drippy with Prime Orca. 🌊',
					images: [
						{
							url: '/assets/images/po-logo.png',
							width: 800,
							height: 600,
							alt: 'Prime Orca 🌊',
						},
						{
							url: '/assets/images/po-logo.png',
							width: 900,
							height: 800,
							alt: 'Prime Orca 🌊',
						},
					],
				}}
			/>
			<HeaderTwo />
			<main
				className="relative flex-grow"
				style={{
					minHeight: '-webkit-fill-available',
					WebkitOverflowScrolling: 'touch',
				}}
			>
				{children}
			</main>
			<Footer />
			<MobileNavigation />
			<Search />
			{/* <CookieBar */}
			{/* // title={t('text-cookies-title')} */}
			{/* // hide={acceptedCookies} */}
			{/* // action={ */}
			{/* // <Button onClick={() => onAcceptCookies()} variant="slim"> */}
			{/* {t('text-accept-cookies')} */}
			{/* </Button> */}
			{/* // } */}
			{/* // /> */}
		</div>
	);
}

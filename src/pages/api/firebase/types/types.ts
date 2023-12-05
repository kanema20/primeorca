import { DocumentData } from 'firebase/firestore';
import { type } from 'os';
import { QueryKey } from 'react-query';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// export interface RootState {
// 	products: {
// 		items: IProduct[];
// 		lastRefKey: DocumentData;
// 		total: number;
// 		searchedProducts: ProductState;
// 	};
// 	basket: IProduct[];
// 	auth: IAuthInfo;
// 	profile: IUser;
// 	filter: IFilter;
// 	checkout: {
// 		shipping: IShippingInfo;
// 		payment: IPaymentInfo;
// 	};
// 	app: {
// 		loading: boolean;
// 		isAuthenticating: boolean;
// 		authStatus: IAuthStatus;
// 		requestStatus: string | null;
// 		theme: string;
// 	};
// }

export type IProduct = {
    id: string;
    name: string;
    description?: string;
    price: number;
    // default_price: string;
    active: boolean;
    images: string;
    statement_descriptor: string;
    url: string;
    metadata: {
        category: string;
        collection: string;
        type?: string;
        brand: string;
        make: string;
        string?: string;
        release_date?: string;
    }
    created_at?: number;
    updated_at?: number;
}

export interface ICustomer {
    id: string;
    email: string;
    name: string;
    created_at: number;
    updated_at: number;
    total_spend: number;
    payment_count: number;
    refunded_volume: number;
}

export interface IPrices {
    id: string;
}

export interface ICheckoutSession {
    id: string;
    line_items: string[];
    success_url: string;
    cancel_url?: string;
    currency: string;
    customer_id?: string;

}

export interface IOrders {
    id: string;
}

export interface IPayments {
    id: string;
    customer_name?: string;
    customer_email?: string;
    addedToAirtable: boolean;
    amount: number;
    fee?: number;
    net_amount?: number;
    lineItem: string[];
    lineItemPrice: number[];
    quantity: number[]; // or lineItemMapping? { lineItem: string, quantity: number}
    shipping_address?: string;
    shipping_address_city?: string;
    shipping_address_state?: string;
    shipping_address_country?: string;
    shipping_address_zip?: string;
    status: string;
    statement_descriptor: string;
    created_date?: string;
}

export interface IInvoices {
    id: string;
}
export interface ISubscriptions {
    id: string;
}

export interface IShippingRates {
    id: string;
    active: boolean;
    amount: number;
    description: string;
    shipping_time: string;
    tax_behavior?: string;
    created_at: number;
    updated_at: number;
}

export interface IDiscounts {
    id: string;
    active: boolean;
    fixed_amount?: number;
    usage: any;
    duration: number;
    created_at: number;
    updated_at: number;
}

//////////////////

// export interface IProduct {
// 	id: string;
// 	name: string;
// 	name_lower?: string;
// 	description?: string;
// 	price: number;
// 	brand: string;
// 	imageUrl: string;
// 	image: string;
// 	isFeatured: boolean;
// 	isRecommended: boolean;
// 	maxQuantity: number;
// 	quantity: number;
// 	dateAdded: number;
// 	availableColors: string[];
// 	imageCollection: IImageFile[];
// 	keywords?: string[];
// }

export interface IUser {
    fullname: string;
    email: string;
    avatar: string;
    banner: string;
    address?: string;
    dateJoined: number;
    basket: IProduct[];
    mobile: IMobileInfo | {};
    role: string;
}

export interface IUserCred {
    fullname: string;
    email: string;
    password: string;
}

export interface IAuthStatus {
    success?: boolean;
    type?: string;
    message?: string;
}

export interface IAuthInfo {
    id: string | null;
    role: string | null;
    provider: string | null;
}

export interface IMisc {
    loading: boolean;
    isAuthenticating: boolean;
    authStatus: IAuthStatus | {};
    requestStatus: string | null;
    theme: string;
}

export interface IMobileInfo {
    value: string;
    data: {
        dialCode: string;
        countryCode: string;
        num: string;
    };
}

// export interface IShippingInfo {
// 	fullname: string;
// 	email: string;
// 	address: string;
// 	mobile: IMobileInfo;
// 	isInternational: boolean;
// 	isDone: boolean;
// }

// export interface IPaymentInfo {
// 	type: string;
// 	data: {
// 		name?: string,
// 		cardnumber?: string,
// 		expiry?: string,
// 		ccv?: string
// 	};
// }

// export interface IFilter {
// 	recent: string[];
// 	keyword: string;
// 	brand: string;
// 	minPrice: number;
// 	maxPrice: number;
// 	sortBy: string;
// }

// export interface IImageFile {
// 	file: File | null;
// 	url: string;
// 	id: string;
// }

// export interface ProductState {
// 	lastRefKey: DocumentData | null;
// 	total: number;
// 	items: IProduct[];
// }
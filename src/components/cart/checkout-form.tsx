import React, { useState } from 'react'
import { fetchPostJSON } from '../utils/api-helpers'
import getStripe from '../utils/get-stripejs'
import { useCart } from '@contexts/cart/cart.context';

const CheckoutForm = () => {
    const { items } = useCart();
    const [loading, setLoading] = useState(false)

}

export default CheckoutForm
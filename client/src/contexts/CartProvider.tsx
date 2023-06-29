import { SetStateAction, createContext } from 'react'
import ProductType from '../types/productType'
import useLocalStorageState from '../hooks/useLocalStorageState'

export const CartContext = createContext<[ProductType[], React.Dispatch<SetStateAction<ProductType[]>>]>([[], () => []])

const CartProvider = ({ children }: { children: React.ReactNode }) => {
	const [cartProducts, setCartProducts] = useLocalStorageState('cartProducts', [])

	return <CartContext.Provider value={[cartProducts, setCartProducts]}>{children}</CartContext.Provider>
}

export default CartProvider

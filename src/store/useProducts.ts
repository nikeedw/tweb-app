import { create } from "zustand";
import { TProduct } from "../models/types";

type TProductsActions = {
	setInitialProducts: (products: TProduct[]) => void
	deleteProductById: (id: number) => void
	fetchProducts: () => void
	getProducts: () => TProduct[]
	getProductById: (id: number) => TProduct | null
}

type TProducts = typeof INITIAL_PRODUCTS_STATE & {}

const INITIAL_PRODUCTS_STATE = {
	products: [] as TProduct[],
	loading: false
}

const useProducts = create<TProducts & TProductsActions>((set, get) => ({
	...INITIAL_PRODUCTS_STATE,

	getProductById: (id) => {
		return get().products.find((product) => product.id === id) || null
	},

	deleteProductById: (id) => {
		set((state) => {
			return {
				...state,
				products: state.products.filter((product) => product.id !== id)
			}
		})
	},

	fetchProducts: async () => {
		try {
			set((state) => ({ ...state, loading: true }))

			const res = await fetch('https://dummyjson.com/products')
				.then(response => response.json())
				.then(data => data.products)
			set((state) => ({ ...state, products: res }))
		} catch (e) {
			console.log(e)
		} finally {
			set((state) => ({ ...state, loading: false }))
		}
	},

	getProducts: () => {
		return get().products
	},

	setInitialProducts: (products) => {
		return set((state) => {
			return {
				...state,
				products
			}
		})
	}
}))

export default useProducts
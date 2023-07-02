import { useState } from 'react'
import { Dialog, List, ListItem, Spinner } from '@material-tailwind/react'
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2'
import ProductType from '../types/productType'

const SearchBar = ({ products, isLoading, isError }: { products: ProductType[]; isLoading: boolean; isError: boolean }) => {
	const [results, setResults] = useState<ProductType[] | null>([])
	const [open, setOpen] = useState(false)

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > 0) {
			const filtered = products.filter((product) => {
				return product.attributes.name.toLowerCase().includes(e.target.value.toLowerCase())
			})
			setResults(filtered)
		} else {
			setResults([])
		}
	}

	const handleImage = (product: ProductType) => {
		return import.meta.env.VITE_IMAGE + product.attributes.image.data.attributes.url
	}

	return (
		<div className="relative mx-4">
			<span className="absolute inset-y-0 left-0 flex items-center pl-3">
				<HiOutlineMagnifyingGlass size={24} color="gray" />
			</span>

			<input
				className="rounded-lg border bg-transparent py-2 pl-[2.7rem] text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 md:w-52 lg:w-full"
				placeholder="Search"
				onClick={() => setOpen(true)}
			/>

			<Dialog
				size="xl"
				open={open}
				handler={() => setOpen(false)}
				animate={{
					mount: { scale: 1, y: 0 },
					unmount: { scale: 0.9, y: -100 }
				}}
			>
				<form>
					<label htmlFor="default-search" className="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Search
					</label>
					<div className="relative">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<HiOutlineMagnifyingGlass size={20} color="gray" />
						</div>
						<input
							autoComplete="off"
							type="search"
							id="default-search"
							className="font-class block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-700 outline-none"
							placeholder="Search products"
							onChange={handleSearch}
							required
						/>
					</div>
				</form>

				{isLoading ? (
					<Spinner className="m-auto flex h-10 w-10 " color="gray" />
				) : isError ? (
					<p className="flex justify-center text-xl font-semibold text-gray-800">Error fetching products</p>
				) : (
					<List className="h-96 overflow-y-auto">
						{results?.map((product: ProductType) => (
							<a href={`/products/${product.id}`} className="text-initial">
								<ListItem className="font-class group rounded px-3 py-1.5 text-sm text-blue-gray-700">
									<img src={handleImage(product)} alt={product.attributes.name} className="mr-2 h-12 w-12 rounded-lg object-cover" />
									<h5>{product.attributes.name}</h5>
								</ListItem>
							</a>
						))}
					</List>
				)}
			</Dialog>
		</div>
	)
}

export default SearchBar

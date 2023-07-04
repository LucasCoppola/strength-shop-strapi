import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'

interface FormValues {
	email: string
	name: string
	cardNumber: string
	expiration: string
	cvc: string
	address: string
	city: string
	state: string
	postalCode: string
}

const CheckoutForm = ({ handleTotal }: { handleTotal: () => string }) => {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const initialValues = {
		email: '',
		name: '',
		cardNumber: '',
		expiration: '',
		cvc: '',
		address: '',
		city: '',
		state: '',
		postalCode: ''
	}
	const validationSchema = Yup.object({
		email: Yup.string().email('Invalid email address').required('Required'),
		name: Yup.string().max(40, 'Must be 40 characters or less').min(2, 'Must be 2 characters or more').required('Required'),
		cardNumber: Yup.string().length(16, 'Must be exactly 16 characters').required('Required'),
		expiration: Yup.string().length(4, 'Must be exactly 4 characters').required('Required'),
		cvc: Yup.string().length(3, 'Must be exactly 3 characters').required('Required'),
		address: Yup.string().max(40, 'Must be 40 characters or less').min(2, 'Must be 2 characters or more').required('Required'),
		city: Yup.string().max(40, 'Must be 40 characters or less').min(2, 'Must be 2 characters or more').required('Required'),
		state: Yup.string().max(40, 'Must be 40 characters or less').min(2, 'Must be 2 characters or more').required('Required'),
		postalCode: Yup.string().length(6, 'Must be exactly 6 digits').required('Required')
	})

	const onSubmit = async (values: FormValues) => {
		setIsSubmitting(true)
		window.open('https://www.paypal.com/us/home', '_blank')
		setTimeout(() => {
			// setIsOpen(true)
			setIsSubmitting(false)
		}, 2000)
	}

	const renderError = (message: string) => <div>{message && <p className="absolute text-xs text-red-400">{message}</p>}</div>
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={async (values, { resetForm }) => {
				await onSubmit(values)
				resetForm()
			}}
		>
			<Form className="w-full border-b px-16 py-8 md:w-2/3 md:border-b-0 md:border-r">
				<button
					disabled={isSubmitting}
					className="my-8 flex w-full justify-center rounded-md bg-[#FFBF00] py-2 text-sm font-semibold hover:bg-[#FFA500]"
				>
					<a href="https://www.paypal.com/us/home" target="_blank" rel="noreferrer">
						<img src="../../assets/paypal.png" alt="paypal logo" className="w-30 h-7 object-cover" />
					</a>
				</button>

				<hr className="my-4" />

				<div className="relative mb-4">
					<label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
						Email Address
					</label>
					<Field
						name="email"
						type="email"
						id="email"
						className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<ErrorMessage name="email" render={renderError} />
				</div>
				<div className="relative mb-4">
					<label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
						Full Name
					</label>
					<Field
						name="name"
						type="text"
						id="name"
						maxLength={40}
						minLength={2}
						className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<ErrorMessage name="name" render={renderError} />
				</div>
				<div className="relative mb-4">
					<label htmlFor="cardNumber" className="mb-1 block text-sm font-medium text-gray-700">
						Card Number
					</label>
					<Field
						name="cardNumber"
						type="number"
						id="cardNumber"
						maxLength={16}
						minLength={16}
						className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<ErrorMessage name="cardNumber" render={renderError} />
				</div>
				<div className="mb-4 flex items-center">
					<div className="mr-2 w-1/2">
						<label htmlFor="expiration" className="mb-1 block text-sm font-medium text-gray-700">
							Expiration Date
						</label>
						<Field
							name="expiration"
							type="number"
							id="expiration"
							className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						<ErrorMessage name="expiration" render={renderError} />
					</div>
					<div className="ml-2 w-1/2">
						<label htmlFor="cvc" className="mb-1 block text-sm font-medium text-gray-700">
							CVC
						</label>
						<Field
							name="cvc"
							type="number"
							id="cvc"
							className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						<ErrorMessage name="cvc" render={renderError} />
					</div>
				</div>
				<div className="relative mb-4">
					<label htmlFor="address" className="mb-1 block text-sm font-medium text-gray-700">
						Address
					</label>
					<Field
						name="address"
						type="text"
						id="address"
						className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
					/>
					<ErrorMessage name="address" render={renderError} />
				</div>
				<div className="mb-4 flex items-center">
					<div className="mr-2 w-1/3">
						<label htmlFor="city" className="mb-1 block text-sm font-medium text-gray-700">
							City
						</label>
						<Field
							name="city"
							type="text"
							id="city"
							className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						<ErrorMessage name="city" render={renderError} />
					</div>
					<div className="mr-2 w-1/3">
						<label htmlFor="state" className="mb-1 block text-sm font-medium text-gray-700">
							State/Province
						</label>
						<Field
							name="state"
							type="text"
							id="state"
							className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						<ErrorMessage name="state" render={renderError} />
					</div>
					<div className="ml-2 w-1/3">
						<label htmlFor="postalCode" className="mb-1 block text-sm font-medium text-gray-700">
							Postal Code
						</label>
						<Field
							name="postalCode"
							type="number"
							id="postalCode"
							className="block w-full rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
						/>
						<ErrorMessage name="postalCode" render={renderError} />
					</div>
				</div>
				<div className="mb-4 flex items-center">
					<Field type="checkbox" id="terms" name="terms" className="mr-2" />
					<label htmlFor="terms" className="text-sm text-gray-700">
						Save this information for next time
					</label>
				</div>
				<button className="w-full rounded-md bg-gray-400 px-4 py-2 text-base font-semibold text-gray-800 hover:bg-gray-500">
					Pay ${handleTotal()}
				</button>
			</Form>
		</Formik>
	)
}

export default CheckoutForm

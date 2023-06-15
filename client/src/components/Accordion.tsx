import { useState } from 'react'
import { Accordion, AccordionHeader, AccordionBody, Checkbox, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react'

const Icon = ({ id, open }: { id: number; open: number }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`${id === open ? 'rotate-180' : ''} mr-2 h-5 w-5 text-gray-600 transition-transform`}
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			strokeWidth={2}
		>
			<path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
		</svg>
	)
}

const AccordionComponent = ({
	header,
	options,
	selectedFilters,
	setSelectedFilters,
	accordionId
}: {
	header: string
	options: string[]
	selectedFilters: (string | null)[]
	setSelectedFilters: React.Dispatch<React.SetStateAction<(string | null)[]>>
	accordionId: number
}) => {
	const [open, setOpen] = useState(0)

	const handleOptionChange = (i: number) => {
		setSelectedFilters((prevFilters) => {
			const newFilters = [...prevFilters]
			newFilters[i] = prevFilters[i] === options[i] ? null : options[i]

			return newFilters
		})
	}

	return (
		<>
			<Accordion open={open === accordionId} icon={<Icon id={accordionId} open={open} />}>
				<AccordionHeader
					className="font-class py-2 text-base font-medium text-gray-600"
					onClick={() => setOpen((prevOpen) => (prevOpen === accordionId ? 0 : accordionId))}
				>
					<div className="flex items-center">
						{header}{' '}
						{selectedFilters.some(Boolean) && (
							<span className="pl-2 text-sm text-blue-300" onClick={() => setSelectedFilters([])}>
								Clear
							</span>
						)}
					</div>
				</AccordionHeader>
				<AccordionBody className="mb-[-1rem]">
					<List className="p-0">
						{options.map((option, i) => (
							<ListItem key={i} className="p-0">
								<label htmlFor={`vertical-list-react-${accordionId}-${i}`} className="flex w-full cursor-pointer items-center py-1 pl-1 pr-3">
									<ListItemPrefix className="mr-3">
										<Checkbox
											id={`vertical-list-react-${accordionId}-${i}`}
											ripple={false}
											className="hover:before:opacity-0"
											containerProps={{
												className: 'p-0'
											}}
											onChange={() => handleOptionChange(i)}
											checked={selectedFilters[i] === options[i]}
										/>
									</ListItemPrefix>
									<Typography color="blue-gray" className="font-class">
										{option}
									</Typography>
								</label>
							</ListItem>
						))}
					</List>
				</AccordionBody>
			</Accordion>
		</>
	)
}

export default AccordionComponent

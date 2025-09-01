import React, { useState } from 'react';

const ChevronDown = ({ open }) => (
	<svg
		width='24'
		height='24'
		fill='none'
		stroke='#222'
		strokeWidth='2'
		viewBox='0 0 24 24'
		className={`transform transition-transform duration-200 ${
			open ? 'rotate-180' : ''
		}`}
	>
		<path
			d='M6 9l6 6 6-6'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
	</svg>
);

const Faqs = ({ serviceContent }) => {
	const [openIdx, setOpenIdx] = useState(null);

	const handleToggle = (idx) => {
		setOpenIdx(openIdx === idx ? null : idx);
	};

	return (
		<section className='py-8 md:py-16 bg-[#fdf4ec] md:bg-transparent'>
			<div className='max-w-2xl mx-auto px-4 sm:px-6'>
				<h2 className='text-3xl sm:text-3xl font-bold text-center mb-6 sm:mb-10 font-poppins'>
					Frequently Asked Questions
				</h2>
				{/* Mobile: card style, Desktop: simple list */}
				<div className='space-y-4 md:space-y-0'>
					{serviceContent.faqs.map((faq, idx) => (
						<div
							key={idx}
							className={`${
								// Card style for mobile, plain for desktop
								'bg-white rounded-xl shadow p-3 sm:p-5 md:bg-transparent md:rounded-none md:shadow-none md:p-0'
							}`}
						>
							<button
								type='button'
								className='w-full flex items-center justify-between py-2 sm:py-3 md:py-6 px-1 sm:px-2 md:px-2 text-base sm:text-lg md:text-lg font-outfit font-normal focus:outline-none cursor-pointer'
								onClick={() => handleToggle(idx)}
							>
								<span className='text-left'>{faq.question}</span>
								<span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
									<ChevronDown open={openIdx === idx} />
								</span>
							</button>
							{openIdx === idx && (
								<div className='px-1 sm:px-2 md:px-2 pb-2 sm:pb-4 md:pb-6 text-sm sm:text-base md:text-base text-gray-700 font-outfit'>
									{faq.answer}
								</div>
							)}
							{idx <= serviceContent.faqs.length - 1 && (
								<hr className='hidden md:block border-t border-gray-200 mt-2 md:mt-0' />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Faqs;

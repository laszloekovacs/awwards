import React from 'react'

function Button(props) {
	const { title, id, leftIcon, containerClass } = props

	return (
		<button
			id={id}
			className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black ${containerClass}`}>
			<span className='relative inline-flex overflow-hidden font-general text-sx uppercase'>
				<div>{title}</div>
			</span>
			{leftIcon}
		</button>
	)
}

export default Button

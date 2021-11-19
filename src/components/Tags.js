import React from 'react'

const Tags = ({ tags }) => {
	return (
		<div className="my-2 mx-0">
			{tags.map((tag) => {
				return (
					<span
						className="my-1 mr-1 py-0.5 px-1.5 rounded-md bg-purple-600 text-white"
						key={tag}>
						{tag}
					</span>
				)
			})}
		</div>
	)
}

export default Tags

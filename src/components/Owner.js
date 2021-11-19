import React from 'react'

const Owner = ({ owner, time }) => {
	const getPostDate = (unparsedTime) => {
		let parsedTime = new Date(Date.parse(unparsedTime))
		return parsedTime.toDateString()
	}

	return (
		<div className="post-owner flex">
			<div className="flex-none">
				<img
					className="block w-10 rounded-full"
					src={owner.picture}
					alt="user profile"
				/>
			</div>
			<div className="ml-2 flex flex-col justify-around">
				<span className="">{`${owner.firstName} ${owner.lastName}`}</span>
				<span className="text-xs text-gray-600 font-semibold">
					{getPostDate(time)}
				</span>
			</div>
		</div>
	)
}

export default Owner

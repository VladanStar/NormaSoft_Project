import React from 'react'
import Owner from './Owner'

const CommentItem = ({ comment }) => {
	return (
		<div className="my-4 border-b-2">
			<Owner owner={comment.owner} time={comment.publishDate} />
			<p className="my-2">{comment.message}</p>
		</div>
	)
}

export default CommentItem

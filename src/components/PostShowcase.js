import React from 'react'
import { Link } from 'react-router-dom'
import Likes from './Likes'
import Owner from './Owner'
import PreviewImage from './PreviewImage'
import Tags from './Tags'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEdit } from '@fortawesome/free-solid-svg-icons'

const PostShowcase = ({ post }) => {
	return (
		<div className="post-showcase relative my-4 p-2 rounded-lg shadow-md">
			<Link to={`/${post.id}`}>
				<Owner owner={post.owner} time={post.publishDate} />
				<h2 className="mt-2 text-gray-800 font-semibold">
					{post.text}
				</h2>
				<Tags tags={post.tags} />
				<PreviewImage src={post.image} />
			</Link>
			<Likes likes={post.likes} postId={post.id} />
			<Link
				to={`${post.id}/edit`}
				className="absolute bottom-4 right-4 text-gray-400 text-xl">
				<FontAwesomeIcon icon={faEdit} />
			</Link>
		</div>
	)
}

export default PostShowcase

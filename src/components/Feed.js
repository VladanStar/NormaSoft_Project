import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import PostShowcase from './PostShowcase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { PostsContext } from '../context/PostsContext'

const Feed = () => {
	const { postsDogs, setPostsDogs } = useContext(PostsContext)

	return (
		<div>
			<Link
				to="/add"
				className="flex justify-center items-center my-2 p-2 rounded-md shadow-md bg-purple-600 text-white">
				<FontAwesomeIcon icon={faPlus} />
			</Link>

			{postsDogs.map((post) => {
				return <PostShowcase post={post} key={post.id} />
			})}
		</div>
	)
}

export default Feed

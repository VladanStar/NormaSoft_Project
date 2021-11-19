import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PostsContext } from '../context/PostsContext'
import { handleInputChange, handleTagsChange } from './HelperFunctions'

const EditPost = () => {
	const postId = useParams().id
	console.log(postId)

	const { postsDogs, setPostsDogs } = useContext(PostsContext)

	const [postText, setPostText] = useState('')
	const [postTags, setPostTags] = useState([])

	const textInput = useRef()
	const tagsInput = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()

		let postsCopy = postsDogs
		postsDogs.map((post) => {
			if (post.id === postId) {
				post.text = postText
				post.tags = postTags
			}
		})

		setPostsDogs(postsCopy)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="w-full my-2 p-2 rounded-md border-2 border-purple-600"
					ref={textInput}
					onChange={() => handleInputChange(setPostText, textInput)}
					type="text"
					placeholder="New title"
				/>
				<input
					className="w-full my-2 p-2 rounded-md border-2 border-purple-600"
					ref={tagsInput}
					onChange={() => handleTagsChange(setPostTags, tagsInput)}
					type="text"
					placeholder="new tags, space separated"
				/>

				<button
					className="w-full my-2 p-2 rounded-md bg-purple-600 text-white font-semibold"
					type="submit">
					submit
				</button>
			</form>
		</div>
	)
}

export default EditPost

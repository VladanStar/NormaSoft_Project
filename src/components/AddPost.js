import React, { useContext, useRef, useState } from 'react'
import { PostsContext } from '../context/PostsContext'
import {
	getPublishDate,
	handleInputChange,
	handleTagsChange,
} from './HelperFunctions'

const AddPost = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [postText, setPostText] = useState('')
	const [postTags, setPostTags] = useState('')
	const [postUrl, setPostUrl] = useState('')
	const { postsArr, setPostsArr } = useContext(PostsContext)

	const firstNameRef = useRef()
	const lastNameRef = useRef()
	const postTextRef = useRef()
	const postTagsRef = useRef()
	const postUrlRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()

		setPostsArr([
			{
				id: `${Math.random() * 1000000}`,
				image: postUrl,
				likes: 0,
				owner: {
					firstName: firstName,
					lastName: lastName,
					picture:
						'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
					title: 'mr',
				},
				publishDate: getPublishDate(),
				tags: postTags,
				text: postText,
				newPost: true,
			},
			...postsArr,
		])
		firstNameRef.current.value = ''
		lastNameRef.current.value = ''
		postTextRef.current.value = ''
		postTagsRef.current.value = ''
		postUrlRef.current.value = ''
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					className="w-full my-2 p-2 rounded-md border-2 border-purple-600"
					type="text"
					name=""
					id=""
					onChange={() => {
						handleInputChange(setFirstName, firstNameRef)
					}}
					ref={firstNameRef}
					placeholder="Your first name"
					required
				/>
				<input
					className="w-full my-2 p-2 rounded-md border-2 border-purple-600"
					type="text"
					name=""
					id=""
					onChange={() => {
						handleInputChange(setLastName, lastNameRef)
					}}
					ref={lastNameRef}
					placeholder="Your last name"
					required
				/>
				<input
					className="w-full my-2 p-2 rounded-md border-2 border-purple-600"
					type="text"
					name=""
					id=""
					onChange={() => {
						handleInputChange(setPostText, postTextRef)
					}}
					ref={postTextRef}
					placeholder="Post title"
					required
				/>
				<input
					className="w-full my-2 p-2 rounded-md border-2 border-purple-600"
					type="text"
					name=""
					id=""
					onChange={() => {
						handleTagsChange(setPostTags, postTagsRef)
					}}
					ref={postTagsRef}
					placeholder="Enter space separated tags"
					required
				/>
				<input
					className="w-full my-2 p-2 rounded-md border-2 border-purple-600"
					type="text"
					name=""
					id=""
					onChange={() => {
						handleInputChange(setPostUrl, postUrlRef)
					}}
					ref={postUrlRef}
					placeholder="Valid image URL"
					required
				/>
				<button
					type="submit"
					className="w-full my-2 p-2 rounded-md bg-purple-600 text-white font-semibold">
					Post
				</button>

				<p className="block mt-8 text-gray-600 font-semibold break-words">
					Try image at this address: <br />
					https://i.pinimg.com/originals/80/d3/64/80d364e09d31fcba8af274926d4332ff.jpg
				</p>
			</form>
		</div>
	)
}

export default AddPost

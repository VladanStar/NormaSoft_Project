import React, { useEffect, useState, useRef } from 'react'
import { getPublishDate } from './HelperFunctions'
import CommentItem from './CommentItem'
import Loader from './Loader'

const Comments = ({ id }) => {
	const [comments, setComments] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const [commentText, setCommentText] = useState('')

	const textArea = useRef()

	useEffect(() => {
		const fetchComments = async () => {
			fetch(`https://dummyapi.io/data/v1/post/${id}/comment`, {
				headers: {
					'app-id': '616ddd0c2a8ff6018ca5b17d',
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setComments(data.data)
					setIsLoading(false)
				})
		}
		fetchComments()
	}, [])

	const handleCommentText = (e) => {
		setCommentText(e.target.value)
	}

	const handleAddComment = (e) => {
		e.preventDefault()

		if (commentText == '') {
			return
		} else {
			updateComments()
			textArea.current.value = ''
			setCommentText('')
		}
	}

	const updateComments = () => {
		setComments([
			{
				id: `${Math.random() * 1000000}`,
				message: commentText,
				owner: {
					id: `${Math.random() * 1000000}`,
					title: 'mr',
					firstName: 'Srdjan',
					lastName: 'Sanadrovic',
					picture:
						'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
				},
				post: id,
				publishDate: getPublishDate(),
			},
			...comments,
		])
	}

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<div>
					<form action="" onSubmit={(e) => handleAddComment(e)}>
						<textarea
							ref={textArea}
							name="add-comment"
							id="add-comment"
							className="w-full h-24 mt-2 p-2 border-2 border-purple-600 rounded-md resize-none"
							placeholder="Add comment"
							onChange={handleCommentText}></textarea>
						<button
							className="w-full py-2 bg-purple-600 text-white font-semibold rounded-md"
							type="submit">
							Add
						</button>
					</form>

					{comments.map((item) => {
						return <CommentItem comment={item} key={item.id} />
					})}
				</div>
			)}
		</div>
	)
}

export default Comments

import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Likes = ({ likes, postId }) => {
	const [liked, setLiked] = useState(false)
	const [likeNumber, setLikeNumber] = useState(likes)
	const likeBtn = useRef()

	useEffect(() => {
		if (liked) {
			likeBtn.current.classList.remove('text-gray-400')
			likeBtn.current.classList.add('text-purple-600')
		} else if (!liked) {
			likeBtn.current.classList.add('text-gray-400')
			likeBtn.current.classList.remove('text-purple-600')
		}
	}, [liked])

	const handleLike = () => {
		if (liked) {
			setLiked(false)
			setLikeNumber(likeNumber - 1)
		} else {
			setLiked(true)
			setLikeNumber(likeNumber + 1)
		}
	}

	return (
		<div className="mt-2 flex items-center">
			<button
				className="like-btn w-10 h-10 mr-2 flex justify-center items-center text-2xl rounded-full hover:bg-gray-200 transition-all"
				ref={likeBtn}
				onClick={handleLike}>
				<FontAwesomeIcon icon={faHeart} />
			</button>
			<span className="text-gray-400 font-semibold">{likeNumber}</span>
		</div>
	)
}

export default Likes

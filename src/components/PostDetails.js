import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Owner from './Owner'
import Tags from './Tags'
import PreviewImage from './PreviewImage'
import Likes from './Likes'
import Loader from './Loader'
import Comments from './Comments'

const PostDetails = () => {
	const [post, setPost] = useState()
	const [isLoading, setIsLoading] = useState(true)
	let id = useParams().id

	useEffect(() => {
		const fetchPost = async () => {
			fetch(`https://dummyapi.io/data/v1/post/${id}`, {
				headers: {
					'app-id': '616ddd0c2a8ff6018ca5b17d',
				},
			})
				.then((res) => res.json())
				.then((data) => {
					setPost(data)
					setIsLoading(false)
				})
		}
		fetchPost()
	}, [])

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<div className="my-2 px-1">
					<Owner owner={post.owner} time={post.publishDate} />
					<h2 className="mt-2 text-gray-800 font-semibold">
						{post.text}
					</h2>
					<Tags tags={post.tags} />
					<img src={post.image} className="rounded-md" alt="post" />
					<Likes likes={post.likes} postId={post.id} />
					<Comments id={post.id} />
				</div>
			)}
		</div>
	)
}

export default PostDetails

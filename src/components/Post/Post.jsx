import React from 'react'
import './post.css'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../toolkitRedux/toolkitSlice'


export default function Post({ post }) {
	let postDate = new Date(post.date)

	const dispatch = useDispatch()

	function removePost(e) {
		dispatch(deletePost(post.id))
	}

	return (
		<div className='post'>
			<div
				className="post__delete"
				onClick={removePost}
			></div>
			<div className="post__title title">{post.title}</div>
			<div className="post__text">{post.text}</div>
			<div className="post__bottom medium-text">
				<div className="post__date">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path opacity="0.16" d="M4 8H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8Z" fill="#88A1DE" />
						<path d="M4 4H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V4Z" stroke="#88A1DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M4 8H20" stroke="#88A1DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M16 3V5" stroke="#88A1DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M8 3V5" stroke="#88A1DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					{postDate.getDate() < 10 ? '0' + postDate.getDate() : postDate.getDate()}.
					{postDate.getMonth() + 1 < 10 ? '0' + (postDate.getMonth() + 1) : postDate.getMonth() + 1}.
					{postDate.getYear() + 1900}
				</div>
				<div className="post__time">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<circle opacity="0.16" cx="12" cy="12" r="9" fill="#88A1DE" />
						<circle cx="12" cy="12" r="9" stroke="#88A1DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M11 8V13H16" stroke="#88A1DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					{postDate.getHours() < 10 ? '0' + postDate.getHours() : postDate.getHours()}:
					{postDate.getMinutes() < 10 ? '0' + postDate.getMinutes() : postDate.getMinutes()}
				</div>
			</div>
		</div>
	)
}

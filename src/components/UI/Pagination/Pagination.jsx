import React from 'react'
import './pagination.css'


export default function Pagination({ posts, postTileCount, postCount, setPostCount, postListPage, setPostListPage }) {
	const totalPostListPage = Math.ceil(posts.length / postTileCount)

	if (postListPage + 1 > totalPostListPage) {
		setPostListPage(postListPage - 1)
	}

	return (
		<div className="pagination">
			<div
				className={postListPage == 0 ? "pagination__btn pagination__btn_disable pagination__prev" : "pagination__btn pagination__prev"}
				onClick={() => {
					setPostListPage(postListPage - 1)
					setPostCount(postTileCount)
				}}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
					<circle opacity="0.16" cx="17" cy="17" r="12.75" fill="#88A1DE" />
					<circle cx="17" cy="17" r="12.75" stroke="#88A1DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M17 12.75L12.75 17M12.75 17L17 21.25M12.75 17H21.25" stroke="#88A1DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
			<div className="pagination__list large-text">
				{Array(totalPostListPage).fill().map((item, index) => {
					if (index == 0 || index == totalPostListPage - 1) {
						if (index == postListPage) {
							return <div
								className="pagination__item pagination__item_active"
								key={index}
								onClick={() => {
									setPostListPage(index)
									setPostCount(postTileCount)
								}}
							>{index + 1}</div>
						} else {
							return <div
								className="pagination__item"
								key={index}
								onClick={() => {
									setPostListPage(index)
									setPostCount(postTileCount)
								}}
							>{index + 1}</div>
						}
					} else if (index >= postListPage - 1 && index <= postListPage + 1) {
						if (index == postListPage) {
							return <div
								className="pagination__item pagination__item_active"
								key={index}
								onClick={() => {
									setPostListPage(index)
									setPostCount(postTileCount)
								}}
							>{index + 1}</div>
						} else {
							return <div
								className="pagination__item"
								key={index}
								onClick={() => {
									setPostListPage(index)
									setPostCount(postTileCount)
								}}
							>{index + 1}</div>
						}
					} else if (index == postListPage - 2 || index == postListPage + 2) {
						return <div className="pagination__item pagination__item_dots" key={index}>...</div>
					}
				})}
			</div>
			<div
				className={postListPage + 1 == totalPostListPage ? "pagination__btn pagination__btn_disable pagination__next" : "pagination__btn pagination__next"}
				onClick={() => {
					setPostListPage(postListPage + 1)
					setPostCount(postTileCount)
				}}
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
					<circle opacity="0.16" cx="17" cy="17" r="12.75" fill="#88A1DE" />
					<circle cx="17" cy="17" r="12.75" stroke="#88A1DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					<path d="M17 21.25L21.25 17M21.25 17L17 12.75M21.25 17H12.75" stroke="#88A1DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</div>
		</div>
	)
}

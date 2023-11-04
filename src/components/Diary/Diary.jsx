import React, { useMemo, useState } from 'react'
import './diary.css'
import Button from '../UI/Button/Button'
import Post from '../Post/Post'
import { useSelector } from 'react-redux'
import Pagination from '../UI/Pagination/Pagination'

export default function Diary() {
	const posts = useSelector(state => state.toolkit.posts)
	const [selectedSort, setSelectedSort] = useState('')

	const postTileCount = 6
	const [postCount, setPostCount] = useState(postTileCount)
	const [postListPage, setPostListPage] = useState(0)

	const sortedPosts = useMemo(() => {
		if (selectedSort) {
			if (selectedSort == 'date-new') {
				return [...posts].sort((a, b) => b['date'].localeCompare(a['date']))
			} else if (selectedSort == 'date-old') {
				return [...posts].sort((a, b) => a['date'].localeCompare(b['date']))
			}
		}
		return posts
	}, [selectedSort, posts])

	return (
		<div className='diary'>
			<div className="container">
				<div className="diary__heading">
					<div className="diary__title page-title">Мой дневничок</div>
					<div className="diary__sort">
						<Button
							className={selectedSort == "date-new" ? 'btn btn_blue small-text diary__sort-btn' : 'btn btn_white small-text diary__sort-btn'}
							onClick={(e) => setSelectedSort('date-new')}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M4 6H20M4 12H14M4 18H8" stroke="#050F28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M14 16L18 20M18 20L22 16M18 20L18 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							Сначала новые
						</Button>
						<Button
							className={selectedSort == "date-old" ? 'btn btn_blue small-text diary__sort-btn' : 'btn btn_white small-text diary__sort-btn'}
							onClick={(e) => setSelectedSort('date-old')}
						>
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M4 6H20M4 12H14M4 18H8" stroke="#050F28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
								<path d="M14 8L18 4M18 4L22 8M18 4L18 20" stroke="#88A1DE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
							Сначала старые
						</Button>
					</div>
				</div>
				<div className="diary__wrapper">
					{sortedPosts.map((post, index) => {
						if (index >= postListPage * postTileCount && index < (postListPage * postTileCount) + postCount) {
							return <Post post={post} key={index} />
						}
					})}
				</div>
				{posts.length - (postListPage * postTileCount) - postCount > 0 &&
					<Button
						className='btn btn_white btn_wide large-text diary__show-more-btn'
						onClick={(e) => {
							setPostCount(postCount + postTileCount)
						}}
					>
						Показать еще ({posts.length - (postListPage * postTileCount) - postCount})
					</Button>
				}
				{posts.length > postTileCount &&
					<div className="diary__pagination">
						<Pagination posts={posts} postCount={postCount} postTileCount={postTileCount} postListPage={postListPage} setPostListPage={setPostListPage} setPostCount={setPostCount} />
					</div>
				}

			</div>
		</div>
	)
}

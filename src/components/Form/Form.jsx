import React, { useContext, useState } from 'react'
import './form.css'
import Button from '../UI/Button/Button'
import Input from '../UI/Input/Input'
import Textarea from '../UI/Textarea/Textarea'
import { AppContext } from '../../context'
import { useDispatch } from 'react-redux'
import { createPost } from '../../toolkitRedux/toolkitSlice'

export default function Form() {
	const dispatch = useDispatch()

	const { popupState, setPopupState } = useContext(AppContext)
	const [post, setPost] = useState({ title: '', text: '', date: '' })

	function addPost(e) {
		e.preventDefault()
		let requiredInputArr = e.target.closest('.form').querySelectorAll('[required]')
		requiredInputArr.forEach(input => {
			if (!input.value) {
				input.closest('label').classList.add(input.closest('label').classList[0] + '_error')
			}
		});
		if (post.title && post.text && post.date) {
			let date = new Date(post.date)
			post.date = `${date.getFullYear()} ${date.getMonth() + 1} ${date.getDate()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

			dispatch(createPost({ ...post, id: Date.now() }))
			setPost({ title: '', text: '', date: '' })
			setPopupState(!popupState)
		}
	}

	if (!popupState) {
		let requiredInputArr = document.querySelectorAll("div[class*= '_error']")
		requiredInputArr.forEach(input => {
			if (!input.value) {
				input.closest('label').classList.remove(input.closest('label').classList[0] + '_error')
			}
		});
	}


	return (
		<form className='form'>
			<div className="form__inputs">
				<div className="form__row">
					<Input
						label='Заголовок'
						type='text'
						maxLength='20'
						required
						value={post.title}
						onChange={e => setPost({ ...post, title: e.target.value })}
					/>
					<Input
						label='Дата'
						type='date'
						required
						value={post.date}
						onChange={e => setPost({ ...post, date: e.target.value })}
					/>
				</div>
				<div className="form__row">
					<Textarea
						label='Заметка'
						required
						maxLength='2000'
						value={post.text}
						onChange={e => setPost({ ...post, text: e.target.value })}
					/>
				</div>
			</div>
			<Button
				className='form__btn btn'
				type="submit"
				onClick={addPost}
			>
				Поделиться наболевшим
			</Button>
		</form >
	)
}

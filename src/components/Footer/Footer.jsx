import React from 'react'
import './footer.css'
import Button from '../UI/Button/Button'

export default function Footer() {

	function scrollUp(e) {
		e.preventDefault()
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	}

	return (
		<footer className='footer'>
			<div className="container">
				<div className="footer__wrapper">
					<div className="footer__text">Мой Дневничок</div>
					<Button
						className='footer__btn btn btn_blue'
						onClick={scrollUp}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M19 12L12 5L5 12M12 5L12 19" stroke="#050F28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						Наверх
					</Button>
				</div>
			</div>
		</footer>
	)
}

import React, { useContext } from 'react'
import './popup.css'
import { AppContext } from '../../context'


export default function Popup({ title, id, children, ...props }) {
	const { popupState, setPopupState } = useContext(AppContext)

	return (
		<div {...props} id={id} className={popupState ? 'popup' : 'popup popup_hide'} onClick={(e) => { setPopupState(!popupState) }}>
			<div className="popup__backdrop"></div>
			<div className="popup__wrapper" onClick={(e) => { e.stopPropagation() }}>
				<div className="popup__close" onClick={(e) => { setPopupState(!popupState) }}></div>
				{title ? <div className="popup__title title">{title}</div> : ''}
				{children}
			</div>
		</div>
	)
}

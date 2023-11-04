import React from 'react'
import './input.css'

export default function Input({ label, ...props }) {
	return (
		<label className='input'>
			<div className="input__heading">
				{label ? <div className="input__label">{label}</div> : ''}
				<div className="input__error">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<circle opacity="0.16" cx="12" cy="12" r="9" fill="#FF832A" />
						<circle cx="12" cy="12" r="9" stroke="#FF832A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<rect x="12" y="16" width="0.01" height="0.01" stroke="#FF832A" strokeWidth="3" strokeLinejoin="round" />
						<path d="M12 12L12 8" stroke="#FF832A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					Обязательное поле
				</div>
			</div>
			<input {...props} className='input__field' />
		</label>
	)
}

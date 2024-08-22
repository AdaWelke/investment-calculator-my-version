import { useState } from 'react';

export default function Input({ label, identifier, value, onChange }) {
	const handleChange = event => {
		if (+event.target.value < 0) {
			onChange(identifier, 0);
		} else {
			onChange(identifier, +event.target.value);
		}
	};

	return (
		<p>
			<label>{label.toUpperCase()}</label>
			<input type='number' required onChange={handleChange} value={value} />
		</p>
	);
}

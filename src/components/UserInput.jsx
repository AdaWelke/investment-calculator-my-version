import InputField from './InputField';

export default function InputGroup({ inputValues, onChange }) {
	return (
		<section id='user-input'>
			<div className='input-group'>
				<InputField
					label='initial investment'
					identifier='initialInvestment'
					value={inputValues.initialInvestment}
					onChange={onChange}
				/>

				<InputField
					label='annual investment'
					identifier='annualInvestment'
					value={inputValues.annualInvestment}
					onChange={onChange}
				/>
			</div>

			<div className='input-group'>
				<InputField
					label='expected return'
					identifier='expectedReturn'
					value={inputValues.expectedReturn}
					onChange={onChange}
				/>

				<InputField label='duration' identifier='duration' value={inputValues.duration} onChange={onChange} />
			</div>
		</section>
	);
}

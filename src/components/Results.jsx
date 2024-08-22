import { calculateInvestmentResults, formatter } from '../util/investment';

export default function Results({ inputValues }) {
	/* The structure of inputValues
		{
			initialInvestment: 10000,
			annualInvestment: 1200,
			expectedReturn: 6,
			duration: 10,
		}
	*/

	const resultsData = calculateInvestmentResults(inputValues);
	/* The structure of resultsData
		{
			year: 1,
			interest: 600,
			valueEndOfYear: 11800,
			annualInvestment: 1200
		}
	*/

	/* The structure of target row
		col1: year
		col2: valueEndOfYear
		col3: interes
		col4: valueEndOrYear - <the value of col5>
		col5: initial investment + year * annualInvestment
	*/
	const rows = resultsData.map(yearData => {
		const investedCapital = inputValues.initialInvestment + yearData.year * yearData.annualInvestment;

		return (
			<tr key={yearData.year}>
				<td scope='row'>{formatter.format(yearData.year)}</td>
				<td>{formatter.format(yearData.valueEndOfYear)}</td>
				<td>{formatter.format(yearData.interest)}</td>
				<td>{formatter.format(yearData.valueEndOfYear - investedCapital)}</td>
				<td>{formatter.format(investedCapital)}</td>
			</tr>
		);
	});

	return (
		<>
			(
			<table id='result'>
				<thead>
					<tr>
						<th scope='col'>Year</th>
						<th scope='col'>Investment Value</th>
						<th scope='col'>Interest (Year)</th>
						<th scope='col'>Total Interest</th>
						<th scope='col'>Invested Capital</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
			)
		</>
	);
}

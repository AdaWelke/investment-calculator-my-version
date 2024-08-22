import { useState } from 'react';
import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const handleUserInput = (inputIdentifier, newValue) => {
		setUserInput({ ...userInput, [inputIdentifier]: newValue });
	};

	return (
		<>
			<Header />
			<UserInput inputValues={userInput} onChange={handleUserInput} />
			<Results inputValues={userInput} />
		</>
	);
}

export default App;

import React from 'react';
import NavigationBar from './Components/NavigationBar/NavigationBar.js';
import Logo from './Components/Logo/Logo.js';
import './App.css';

function App() {
	return (<div className="App">
		<NavigationBar />
		<Logo/>
			{/* <ImageForm/>
		<FaceDetectSquare/> */}
	</div>);
}

export default App;

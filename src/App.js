import { useState } from "react";
import Diary from "./components/Diary/Diary";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Popup from "./components/Popup/Popup";
import './style/reset.css';
import './style/style.css';
import { AppContext } from "./context";



function App() {
	let [popupState, setPopupState] = useState(false)

	return (
		<AppContext.Provider value={{
			popupState,
			setPopupState
		}}>
			<div className="body-wrapper">
				<Header />
				<main className="main">
					<Diary />
				</main>
				<Footer />
			</div>
			<Popup title='Новая запись'>
				<Form />
			</Popup>
		</AppContext.Provider>
	);
}

export default App;

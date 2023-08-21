import { Suspense, lazy } from "react";
import AppStyle from "./App.scss";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const User = lazy(() => import('./page/User'));
const App = () => {

	return (
		<div className={AppStyle.app}>
			<h1 className={AppStyle['h1']}>Hello world</h1>
		</div>
	);
};

export default App;

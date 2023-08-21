import { Suspense, lazy } from "react";
import "./App.scss";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

const User = lazy(() => import('./page/User'));
const App = () => {

	return (
		<div className='app'>
			<h1>Hello world</h1>
			<Link to={'/home'} >Home</Link>
			<br />
			<Link to={'/user'} >User</Link>
			<Routes>
				<Route
					path='/home'
					element={<div>Home</div>}
				/>
				<Route path="/user" element={
					<Suspense fallback={<h1>Loading...</h1>}>
						<User />
					</Suspense>} />
			</Routes>
		</div>
	);
};

export default App;

import { Toaster } from 'react-hot-toast';
import {Navigate,Route,Routes} from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import LikesPage from './pages/LikesPage';
import ExplorePage from './pages/ExplorePage';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import { useAuthContext } from './context/AuthContext';

function App() {
const {authUser,loading} = 	useAuthContext();
console.log("Authenticated user :",authUser);

if(loading) return null;
	return (
		<div className='flex '>
			<Sidebar />
			<div className='max-w-5xl my-5 text-white mx-auto transition-all duration-300 flex-1'>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
					<Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
					<Route path='/explore' element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />} />
					<Route path='/likes' element={authUser ? <LikesPage /> : <Navigate to={"/login"} />} />

				</Routes>
				<Toaster/>
      
			</div>
		</div>
	);
}
export default App

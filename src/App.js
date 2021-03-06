import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Navbar from './Pages/Shared/Navbar';
import ToDoList from './Pages/ToDoApp/ToDoList';
import { ToastContainer } from 'react-toastify';
import NotFound from './Pages/Shared/NotFound';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/todoapp' element={
                    <RequireAuth>
                        <ToDoList />
                    </RequireAuth>
                }></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;

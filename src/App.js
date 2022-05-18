import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import Navbar from './Pages/Shared/Navbar';
import ToDoList from './Pages/ToDoApp/ToDoList';

function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/todoapp' element={
                    <RequireAuth>
                        <ToDoList />
                    </RequireAuth>
                }></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default App;

import { Outlet } from 'react-router-dom';
import Header from './shared/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DashBoardLayout = () => {
    return (
        <main>
            <ToastContainer />
            <Header/>
            <Outlet/>
        </main>
    );
};

export default DashBoardLayout;
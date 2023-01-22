import { Outlet } from 'react-router-dom';
import Header from './shared/Header';
const DashBoardLayout = () => {
    return (
        <main>
            <Header/>
            <Outlet/>
        </main>
    );
};

export default DashBoardLayout;
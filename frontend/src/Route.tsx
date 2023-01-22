import { Route, Routes, Navigate } from 'react-router-dom';
import EmployeAction from './pages/EmployeAction';
import EmployeLists from './pages/EmployeList';
import DashBoardLayout from './components/DashBoardLayout';

const RouteList = () => {
    return (
        <Routes>
            <Route element={<DashBoardLayout/>}>
                <Route path="/" element={<Navigate replace to="/employe/list" />}></Route>
                <Route path="/employe/list" element={<EmployeLists/>}></Route>
                <Route path="/employe/add" element={<EmployeAction/>}></Route>
                <Route path="/employe/edit/:id" element={<EmployeAction/>}></Route>
            </Route>
        </Routes>
    );
};

export default RouteList;
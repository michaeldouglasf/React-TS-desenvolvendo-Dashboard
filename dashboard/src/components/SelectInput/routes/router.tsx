import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Dashboard from '../../../pages/Dashboard';
import List from '../../../pages/List';
import Layout from '../../Layout/index';



const Router = () => {
  return (
    <Layout>
      <Routes>
        {/* <Route index element={<Login/>} /> */}
        <Route path="/dashboard/:id" element={<Dashboard/>} />
        <Route path="/list/:id" element={<List/>} />
       
      </Routes>
    </Layout>
  );
};

export default Router
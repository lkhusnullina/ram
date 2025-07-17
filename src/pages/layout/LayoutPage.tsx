import { Outlet } from 'react-router-dom';
import { Header } from '../../components/header/Header';

const LayoutPage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutPage;

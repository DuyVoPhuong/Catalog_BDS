import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SocialFloat from '../components/SocialFloat';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <SocialFloat />
      <Footer />
    </div>
  );
}

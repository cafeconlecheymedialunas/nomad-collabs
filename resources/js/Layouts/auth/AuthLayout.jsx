import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import SearchModal from '../SearchModal';
import MobileHeader from './MobileHeader';
import Footer from './Footer';
import Header from './Header';

export default function Auth({ children }) {
  return (
    <div className="wrapper ovh mm-page mm-slideout" id="mm-28">
      <div className="preloader" style={{ display: 'none' }} />
      {/* Main Header Nav */}
      <Header />

      {/* Search Modal */}
      <SearchModal />
      <div className="hiddenbar-body-ovelay" />
      {/* Mobile Nav  */}
      <MobileHeader />
      <div className="body_content">
        {/* Our LogIn Area */}
        {children}
        {/* Our Footer */}
        <Footer />
       
      </div>
    </div>

  );
}

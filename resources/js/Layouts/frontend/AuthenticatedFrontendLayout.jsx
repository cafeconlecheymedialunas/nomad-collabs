import SearchModal from '../SearchModal';
import MobileHeader from './MobileHeader';
import Footer from './Footer';
import Header from './Header';

export default function AuthenticatedFrontend({ children , freelancer , user }) {
  return (
    <div className="wrapper ovh mm-page mm-slideout" id="mm-28">
      <div className="preloader" style={{ display: 'none' }} />
      <Header freelancer={freelancer} user={user}/>
      <SearchModal />
      <div className="hiddenbar-body-ovelay" />
      <MobileHeader />
      <div className="body_content">
        {children}
        <Footer />
       
      </div>
    </div>

  );
}

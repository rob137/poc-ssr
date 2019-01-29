import Header from './Header';

const tempStyles = {
  top: '50px',
  backgroundColor: 'red',
  height: 'calc(100% - 50px)',
  width: '100%'
};

const Layout = (props) => (
  <div>
    <Header />
    <div style={tempStyles}/>
    <style jsx global>{`
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0;
    }

    // expanding all elements from html down to next.js jsx wrapper
    html, body, #__next, #__next div {
      width: 100%;
      height: 100%;
    }

    `}</style>
  </div>
);

export default Layout;

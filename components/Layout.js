import TitleBar from './TitleBar';

const Layout = (props) => (
  <div>
    <TitleBar />
    {props.children}
  </div>
);

export default Layout;

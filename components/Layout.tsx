import TitleBar from './TitleBar';

const Layout = (props: any) => (
  <div>
    <TitleBar />
    {props.children}
  </div>
);

export default Layout;

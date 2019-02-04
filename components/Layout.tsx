import TitleBar from './TitleBar';
import SidePanel from '../components/SidePanel';

interface LayoutProps {
  location: string;
  children: any;
}

const Layout = (props: LayoutProps) => (
  <div>
    <TitleBar />
    <SidePanel location={props.location} />
    {props.children}
  </div>
);

export default Layout;

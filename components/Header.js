import Link from 'next/link';

const titleBarStyle = {
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  height: '50px',
  width: '100%',
  background: 'green',
  margin: 0,
  userSelect: 'none',
  top: 0,
  left: 0
}

const Header = () => (
  <div style={titleBarStyle}/>
);

export default Header;

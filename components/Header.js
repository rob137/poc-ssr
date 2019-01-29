import Link from 'next/link';

const titleBarStyle = {
  height: '50px',
  width: '100%',
  userSelect: 'none',
}

const logoStyle = {
  height: '50px',
  marginLeft: '10px'
}

const Header = () => (
  <div style={titleBarStyle}>
    <img src='./static/dynium-logo.gif' style={logoStyle}/>
  </div>
);

export default Header;

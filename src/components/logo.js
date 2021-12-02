/** @jsx jsx */
import { jsx, Image } from 'theme-ui';
import { Link } from 'components/link';
import { FaBlackberry } from 'react-icons/fa';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
        textDecoration: 'none',
        // display: 'flex',
        alignItems: 'center',
        // justifyContent: 'left',
        color: 'black',
      }}
      {...rest}
    >
      {/* <Image src={src} alt="notariorisk landing page logo" sx={{
        height: "30px",
        mr: 1,
      }}/> */}
      <h2>Tomás Calvo</h2>
    </Link>
  );
}

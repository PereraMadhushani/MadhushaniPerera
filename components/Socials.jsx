import Link from "next/link";
import{FaGithub, FaLinkedinIn, FaYoutube,FaTwitter} from 'react-icons/fa';

const socials= [
    {icon: <FaGithub/>, path:"https://github.com/PereraMadhushani"},
    {icon: <FaLinkedinIn/>, path:"https://www.linkedin.com/in/kaushalya-perera-878b98258/"},
    // {icon: <FaTwitter/>, path:""},
    // {icon: <FaYoutube/>, path:""},

]
const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item,index) =>{
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );    
        })}
    </div>
  );
};

export default Socials;
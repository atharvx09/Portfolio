import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


const navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img className="mx-1 w-10" src={logo} alt="logo" />

        </div>
        <div className="m-6 flex gap-5 px-1 text-2xl text-white">
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
            <FaSquareXTwitter/>
            
        </div>
    </nav>
  )
}

export default navbar
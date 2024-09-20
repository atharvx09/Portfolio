import { ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/IMG_7399.png";
import {motion} from "framer-motion";


const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="mt-20 mb-1 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
            <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 mx-10 mt-28 maxw-xl text-xl py-6">{ABOUT_TEXT}</p>

                </div>
            </motion.div>
            <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1}} className="w-full lg:w-1/2 lg:p-8">
                
                <div className="flex items-center mx-8 justify-center">
                    <img className="rounded-3xl " src={aboutImg} alt="" />
                </div>
                
            </motion.div>
        </div>
    </div>
  )
}

export default About;

import LinkedIn from '../assets/image/Linkedin.svg';
import GitHub from '../assets/image/GitHub.svg';
import { Link } from 'react-router-dom';

const FooterAndHeader = () => {
    return (
        // <div className="text-2xl items-center justify-center pt-5 ">
        <div className="flex items-center justify-center space-x-4  md:space-x-24 font-bold">
            <div className="w-8 md:w-16"><a href="https://www.linkedin.com/in/linda-perea/" target="_blank"><img src={LinkedIn} alt="" /></a></div>
            <div className="">
                <Link to={"/"}>
                    Home
                </Link>
            </div>
            <div className="w-8 md:w-16"><a href="https://github.com/LindaPerea" target="_blank"><img src={GitHub} alt="" /></a></div>
        </div>
        // </div>
    );
};

export default FooterAndHeader;
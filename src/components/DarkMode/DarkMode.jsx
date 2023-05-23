import { useState } from "react";
import { FaSun } from 'react-icons/fa';



const DarkMode = () => {

    const [isDark, setIsDark] = useState(false);

    const appCss = document.documentElement;

    const ChangeDarkMode = () => {
        appCss.style.setProperty('--body-background-color', isDark ? '#ffebe7' : 'black')
        setIsDark(!isDark)
    }

    return (
        <>
            <div className='text-right flex gap-10 fixed'>

                <FaSun onClick={ChangeDarkMode} className="text-pinkLetter text-4xl" />

            </div>
        </>
    );
};

export default DarkMode;
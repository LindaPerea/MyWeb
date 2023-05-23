import img1 from '../../assets/image/f1.png'
import { useState } from 'react';
import Articles from '../Particulas/Articles'
import { Link } from 'react-router-dom';
import MyLogo from '../Logo/MyLogo';

const Home = () => {

    const [contenido, setContenido] = useState('Hola');
    const [iam, setIam] = useState('Soy');

    return (
        <>
            <div className="items-center justify-center z-20 pt-2">
                <Articles />
                <div className='md:w-full items-center justify-center flex flex-col-reverse md:flex-row '>
                    <div className="md:w-full ">
                        <div className=" ">
                            <Link to={"/about"}>
                                <p
                                    onMouseEnter={() => setContenido('Conóceme')}
                                    onMouseLeave={() => setContenido('Hola.')}
                                    className="text-4xl md:text-9xl text-pinkLetter hover:text-pinkLetter ">{contenido}
                                </p >
                            </Link >
                        </div >
                        <div>
                            <Link to={"/works"}>
                                <p
                                    onMouseEnter={() => setIam('Mis Trabajos')}
                                    onMouseLeave={() => setIam('Soy')}
                                    className="text-4xl md:text-9xl text-pinkLetter  ">{iam}
                                </p>
                            </Link>
                        </div>
                    </div >
                    <div className='md:w-full sm:flex justify-center items-center w-44'>
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className='relative w-1/8 flex content-center'  >
                    <MyLogo />

                </div>
            </div >
        </>
    );
};

export default Home;
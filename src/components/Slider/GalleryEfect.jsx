import '../../assets/css/galleryEfect.css'

import image1 from '../../assets/image/img1.jpg'
import image2 from '../../assets/image/img2.jpg'
import image3 from '../../assets/image/img3.jpg'
import image4 from '../../assets/image/img4.jpg'
import image5 from '../../assets/image/img5.jpg'
import image6 from '../../assets/image/img6.jpg'

import FooterAndHeader from '../FooterAndHeader'

const GalleryEfect = () => {

    return (
        <div className="galeria">
            <h2 className='text-pinkLetter '><FooterAndHeader /></h2>
            <div className="linea"></div>
            <div className="contenedor-imagenes">
                <div className="imagen">
                    <img src={image1} alt="" />
                    <div className="overlay">
                        <a href="https://ecommercewhithreact.netlify.app/">
                            <h2 className='text-pinkLetter'>Ecommerce</h2>
                            <p className='text-center text-pinkLetter pt-20'>React, Bootstrap</p>

                        </a>
                    </div>
                </div>
                <div className="imagen">
                    <img src={image2} alt="" />
                    <div className="overlay">
                        <a href="https://playmemory.netlify.app/">
                            <h2 className='text-pinkLetter'>Juego de Memoria</h2>
                            <p className='text-center text-pinkLetter pt-20'>React, Css</p>
                        </a>
                    </div>
                </div>
                <div className="imagen">
                    <img src={image3} alt="" />
                    <div className="overlay">
                        <a href="https://www.inmobiliariacya.com/">
                            <h2 className='text-pinkLetter'>Web App Inmobiliaria</h2>
                            <p className='text-center text-pinkLetter pt-20'>WordPress</p>
                        </a>
                    </div>
                </div>
                <div className="imagen">
                    <img src={image4} alt="" />
                    <div className="overlay">
                        <a href="https://englishphrases.netlify.app/">
                            <h2 className='text-pinkLetter'>Frases Aleatorias</h2>
                            <p className='text-center text-pinkLetter pt-20'>React, Css</p>
                        </a>
                    </div>
                </div>
                <div className="imagen">
                    <img src={image5} alt="" />
                    <div className="overlay">
                        <a href="https://weatherlinda.netlify.app/">
                            <h2 className='text-pinkLetter'>Api Weather</h2>
                            <p className='text-center text-pinkLetter pt-20'>React, Css</p>
                        </a>
                    </div>
                </div>
                <div className="imagen">
                    <img src={image6} alt="" />
                    <div className="overlay">
                        <a href="">
                            <h2 className='text-pinkLetter'>CitasDent WebApp</h2>
                            <p className='text-center text-pinkLetter pt-20'>React, Tailwind, NodeJs</p>
                        </a>
                    </div>
                </div>
                {/* <div className="imagen">
                    <img src={image1} alt="" />
                    <div className="overlay">
                        <h2>Suscribete</h2>
                    </div>
                </div>
                <div className="imagen">
                    <img src={image2} alt="" />
                    <div className="overlay">
                        <h2>Suscribete</h2>
                    </div>
                </div>
                <div className="imagen">
                    <img src={image3} alt="" />
                    <div className="overlay">
                        <h2>Suscriberte</h2>
                    </div>
                </div>
                <div className="imagen">
                    <img src={image3} alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default GalleryEfect;
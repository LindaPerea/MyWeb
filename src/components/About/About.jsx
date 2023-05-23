import TextShpere from "../../utils/TextShpere";
import '../../assets/css/zoomableParagraph.css';
import Articles from '../Particulas/Articles';
import FooterAndHeader from "../FooterAndHeader";


const About = () => {

    // const textos = ["Html", "Css", "NodeJS", "ReactJs"];


    return (
        <>
            <div className=' text-pinkLetter h-screen w-screen overflow-hidden' >
                <Articles />
                <div className="text-4xl md:text-6xl flex h-1/4 items-center justify-center font-bold ">
                    <div className="text-center">
                        FullStack Developer
                    </div>
                </div>
                <div className="container-skills lg:pl-20 flex-col md:flex-row">
                    <div className="skills-h2 items-center justify-center transition-all duration-300 hover:scale-110 ml-0 mr-0 hidden md:inline-block ">
                        <h2>Soy desarrollador FullStack con experiencia en múltiples lenguajes de programación y en la creación de aplicaciones web y móviles, escalables y robustas. Me apasiona el desarrollo de soluciones innovadoras y eficientes para mejorar la experiencia del usuario.</h2>
                    </div>
                    <div className="  md:w-1/2 text-center pb-2">
                        <TextShpere />
                    </div>
                </div>
                <div className="text-2xl items-center justify-center pt-5 ">
                    <FooterAndHeader />
                </div>
            </div >

        </>
    );
};

export default About;
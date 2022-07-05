import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import { motion } from 'framer-motion'
import Victor2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Github from '../../img/github.png';
import Linkedin from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import GlassEmoji from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Home = () => {
    const transition = { duration: 2, type: 'spring' }
    return (
        <div className='home' id='home'>

            <div className="row h-row">
                <div className="col-xl-6 col-md-6 h-name">
                    <span>Hi! I Am</span>
                    <span>Opu Saha</span>
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint doloribus quae reprehenderit exercitationem placeat aliquid, animi rerum quidem in iusto maiores delectus similique quibusdam corporis fuga ipsum dignissimos facilis voluptas tempora explicabo reiciendis itaque! Aspernatur incidunt aut amet vero reiciendis voluptatibus exercitationem laborum soluta earum porro unde enim, iusto doloremque id tenetur nemo optio ratione, totam esse? Quisquam ipsam cupiditate, eligendi quis eveniet perspiciatis reiciendis!
                    </span>
                    <button className='button h-btn w-btn mt-4'>Hire me</button>
                    <div className="h-icons">
                        <a href="https://github.com/opusaha"><img src={Github} alt="" /></a>
                        <a href="https://www.linkedin.com"><img src={Linkedin} alt="" /></a>
                        <a href="https"><img src={Instagram} alt="" /></a>
                    </div>
                </div>
                <div className="col-xl-6 col-md-6 row">
                    <div className='col-xl-12 h-img'>
                        <img src={Victor2} alt="" className='img-fluid' />
                        <img src={Boy} alt="" className='img-fluid' />
                        <motion.div initial={{ left:'0' }} whileInView={{ left:'-10vw' }} transition={transition}>
                            <img src={GlassEmoji} alt="" />
                        </motion.div>
                        <motion.div initial={{ left:'0' }} whileInView={{ left:'70%', top:'10vh' }} transition={transition} className='floating-div-1 col-md-4'>
                            <FloatingDiv image={Crown} text1={'Web'} text2={'Developer'} ></FloatingDiv>
                        </motion.div>
                        <motion.div initial={{ left:'0' }} whileInView={{ left:'-1vw', top:'60vh' }} transition={transition} className='floating-div-2 col-md-4 col-offset-md-4'>
                            <FloatingDiv image={Thumbup} text1={'Best Developer'} text2={'Award'}></FloatingDiv>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
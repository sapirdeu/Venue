import React, {useState} from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

function Pricing() {
    const [prices] = useState([100,150,250]);
    const [positions] = useState(['Balcony', 'Medium', 'Star']);
    const [desc] = useState([
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt uts',
        'Dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea',
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ]);
    const [linkTo] = useState([
        'https://www.lipsum.com/',
        'https://www.react-reveal.com/examples/common/fade/',
        'https://www.react-reveal.com/docs/'
    ]);
    const [delay] = useState([500,0,500]);

    const showBoxes = () => (
        prices.map((box, i)=>(
            <Zoom delay={delay[i]} key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${prices[i]}</span>
                            <span>{positions[i]}</span>
                        </div>

                        <div className="pricing_description">
                            {desc[i]}
                        </div>

                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={linkTo[i]}
                            />
                        </div>
                    </div>
                </div>
            </Zoom>        
        ))
    );


    return (
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    {showBoxes()}
                </div>
            </div>
        </div>
    )
}

export default Pricing

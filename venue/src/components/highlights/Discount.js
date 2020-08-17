import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

function Discount() {
    const [discountStart, setDiscountStart] = useState(0);
    const [discountEnd] = useState(30);

    const porcentage = () => {
        if(discountStart < discountEnd){
            setDiscountStart(discountStart+1)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            porcentage();
        }, 30);
    });

    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">
                
                <Fade onReveal={()=>porcentage()}>
                    <div className="discount_porcentage">
                        <span>{discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>
                
                <Slide right>
                    <div className="discount_description">
                        <h3>Purches tickets before 25th June</h3>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                        <MyButton
                            text="Purchase tickets"
                            bck="#ffa800"
                            color="#ffffff"
                            link="https://www.google.co.il/"
                        />
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default Discount;

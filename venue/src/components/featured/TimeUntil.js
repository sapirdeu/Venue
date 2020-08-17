import React, {useState, useEffect} from 'react';
import Slide from 'react-reveal/Slide';

function TimeUntil() {
    const [deadline] = useState('Dec, 19, 2020');
    const [days, setDays] = useState('0');
    const [hours, setHours] = useState('0');
    const [minutes, setMinutes] = useState('0');
    const [secondes, setSecondes] = useState('0');

  useEffect(() => {
    const interval = setInterval(() => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time < 0){
            console.log('Date passed');
        } else {
            setSecondes(Math.floor((time/1000)%60));
            setMinutes(Math.floor((time/1000/60)%60));
            setHours(Math.floor((time/(1000*60*60))%24));
            setDays(Math.floor(time/(1000*60*60*24)));
        }
    }, 1000);
    // clearing interval
    return () => clearInterval(interval);
  });


    return (
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    <div className="countdown_item">
                        <div className="countdown_time">
                            {days}
                        </div>
                        <div className="countdown_tag">
                            Dayes
                        </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            {hours}
                        </div>
                        <div className="countdown_tag">
                            Hs
                        </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            {minutes}
                        </div>
                        <div className="countdown_tag">
                            Min
                        </div>
                    </div>

                    <div className="countdown_item">
                        <div className="countdown_time">
                            {secondes}
                        </div>
                        <div className="countdown_tag">
                            Sec
                        </div>
                    </div>
                </div>
            </div>
        </Slide>

        
    )
}

export default TimeUntil

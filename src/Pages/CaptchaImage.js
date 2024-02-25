
import React, { useState, useEffect, useRef } from 'react';

function CaptchaImage({setCaptchaStatus}) {
    const [captchaText, setCaptchaText] = useState('');
    const [userInput, setUserInput] = useState('');
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        initializeCaptcha(ctx);
    }, []);

    const generateRandomChar = (min, max) =>
        String.fromCharCode(Math.floor
            (Math.random() * (max - min + 1) + min));

    const generateCaptchaText = () => {
        let captcha = '';
        for (let i = 0; i < 2; i++) {
            captcha += generateRandomChar(65, 90);
            captcha += generateRandomChar(97, 122);
            captcha += generateRandomChar(48, 57);
        }
        return captcha.split('').sort(
            () => Math.random() - 0.5).join('');
    };

    const drawCaptchaOnCanvas = (ctx, captcha) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        const textColors = ['rgb(0,0,0)', 'rgb(130,130,130)'];
        const letterSpace = 100 / captcha.length;
        for (let i = 0; i < captcha.length; i++) {
            const xInitialSpace = 25;
            ctx.font = '20px Roboto Mono';
            ctx.fillStyle = textColors[Math.floor(
                Math.random() * 2)];
            ctx.fillText(
                captcha[i],
                xInitialSpace + i * letterSpace,

                // Randomize Y position slightly 
                Math.floor(Math.random() * 16 + 25),
                100
            );
        }
    };

    const initializeCaptcha = (ctx) => {
        setUserInput('');
        const newCaptcha = generateCaptchaText();
        setCaptchaText(newCaptcha);
        drawCaptchaOnCanvas(ctx, newCaptcha);
    };

    const handleUserInputChange = (e) => {
        console.log(e.target.value)
        if (e.target.value === captchaText) {
            setCaptchaStatus(true);
            
        }
        setUserInput(e.target.value);
    };


    return (
        <div className=''>
            <div className="text-sm border border-[#ececec] bg-[#f0f0f0] p-5 rounded-sm">
                <div className='flex justify-between'>
                    <div className='text-[11px]'>
                        Enter image verification code in the box. All characters are case sensitive.
                    </div>

                    <div >
                        <canvas ref={canvasRef}
                            className=" bg-sky-300"
                            width="150"
                            height="50">

                        </canvas>
                        <button id="reload-button" className='text-[11px]' onClick={
                            () => initializeCaptcha(
                                canvasRef.current.getContext('2d'))}>
                            try a new code
                        </button>
                    </div>
                </div>
                <div>

                    <input
                        type="text"
                        id="user-input"
                        className='outline-none bg-white p-3 w-full'
                        value={userInput}
                        onChange={handleUserInputChange} />

                </div>
                
            </div>
            
        </div>
    );
}

export default CaptchaImage;
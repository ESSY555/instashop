'use client'
import React, { useState } from 'react';
import Infor from './../basic-info/page';
import StoreDetails from '../create-store-details/page';

const GetStarted = () => {
    // Track the current progress (which bar is active)
    const [step, setStep] = useState(1);

    // Function to handle continue button click
    const handleContinue = () => {
        if (step < 3) {
            setStep(step + 1); // Move to next step
        }
    };

    return (
        <div className="container md:w-8/12 m-auto mt-8">
            {/* Progress bar */}
            <div className="flex mb-6 space-x-2">
                <div
                    className={`flex-1 h-2 ${step >= 1 ? 'bg-[#8A226F]' : 'bg-gray-300'}`}
                ></div>
                <div
                    className={`flex-1 h-2 ${step >= 2 ? 'bg-[#8A226F]' : 'bg-gray-300'}`}
                ></div>
                <div
                    className={`flex-1 h-2 ${step >= 3 ? 'bg-[#8A226F]' : 'bg-gray-300'}`}
                ></div>
            </div>

            {/* Step content */}
            <div className="mb-4">
                {step === 1 && <div className="">
                    <p className='font-bold text-[24px]'>Enter your phone number or email to get started</p>
                    <p className='text-[14px]'>We will send you a verification code for confirmation</p>
                    <input className='p-3 rounded-lg border w-full mt-8' type="text" placeholder='Enter phone number of email' />
                </div>}

                {step === 2 && <div className=""><Infor /> </div>}
                {step === 3 && <div className="mt-4"><StoreDetails /></div>}
            </div>

            <div className='mt-8  flex items-center justify-center h-20'>
                <button
                    onClick={handleContinue}
                    className='bg-[#8A226F] p-2 w-full text-white rounded-full'>Continue</button>
            </div>
        </div>
    );
};

export default GetStarted;

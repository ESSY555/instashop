'use client';

import React, { useState } from 'react';
import Infor from './../basic-info/page';
import StoreDetails from '../create-store-details/page';

const GetStarted = () => {
    const [step, setStep] = useState(1);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleContinue = () => {
        // Validate input on step 1
        if (step === 1 && inputValue.trim() === '') {
            setError('Please enter a valid phone number or email');
            return;
        }
        setError('');

        // Handle step navigation
        if (step < 3) {
            setStep(step + 1);
        } else {
            // Use window.location.href for navigation
            window.location.href = '/create-product';
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    return (
        <div className="container mx-auto mt-8 md:w-2/3">
            {/* Progress Bar */}
            <div className="flex mb-6 space-x-2" aria-label="Progress Bar">
                <div
                    className={`flex-1 h-2 ${step >= 1 ? 'bg-[#8A226F]' : 'bg-gray-300'}`}
                    aria-label={`Step 1 ${step >= 1 ? 'completed' : 'not completed'}`}
                />
                <div
                    className={`flex-1 h-2 ${step >= 2 ? 'bg-[#8A226F]' : 'bg-gray-300'}`}
                    aria-label={`Step 2 ${step >= 2 ? 'completed' : 'not completed'}`}
                />
                <div
                    className={`flex-1 h-2 ${step >= 3 ? 'bg-[#8A226F]' : 'bg-gray-300'}`}
                    aria-label={`Step 3 ${step >= 3 ? 'completed' : 'not completed'}`}
                />
            </div>

            {/* Step Content */}
            <div className="mb-4">
                {step === 1 && (
                    <div>
                        <p className="font-bold text-[24px]">
                            Enter your phone number or email to get started
                        </p>
                        <p className="text-[14px]">
                            We will send you a verification code for confirmation
                        </p>
                        <input
                            className="p-3 rounded-lg border w-full mt-8"
                            type="text"
                            placeholder="Enter phone number or email"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    </div>
                )}
                {step === 2 && <Infor />}
                {step === 3 && <StoreDetails />}
            </div>

            {/* Navigation Buttons */}
            <div className=" w-full mt-8 flex items-center justify-between">
                {step > 1 && (
                    <button
                        onClick={handleBack}
                        className="bg-gray-300 px-4 py-2 text-black rounded-full">
                        Back
                    </button>
                )}
                <button
                    onClick={handleContinue}
                    className="bg-[#8A226F] px-4 py-2 text-white rounded-full flex-1 ml-4">
                    Continue
                </button>
            </div>
        </div>
    );
};

export default GetStarted;

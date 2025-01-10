'use client'

import React, { useState } from 'react';

const StoreDetails = () => {
    // State for form inputs
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [category, setCategory] = useState('');

    // State for error messages
    const [errors, setErrors] = useState({
        fullName: '',
        username: '',
        phoneNumber: '',
        email: '',
        category: '',
    });

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'fullName') setFullName(value);
        if (name === 'username') setUsername(value);
        if (name === 'phoneNumber') setPhoneNumber(value);
        if (name === 'email') setEmail(value);
        if (name === 'category') setCategory(value);
    };

    // Validate form fields
    const validate = () => {
        let isValid = true;
        const newErrors = { fullName: '', username: '', phoneNumber: '', email: '', category: '' };

        if (!fullName) {
            newErrors.fullName = 'Full Name is required';
            isValid = false;
        }

        if (!username) {
            newErrors.username = 'Username is required';
            isValid = false;
        }

        const phonePattern = /^[0-9]{10}$/;
        if (!phoneNumber || !phonePattern.test(phoneNumber)) {
            newErrors.phoneNumber = 'Phone Number is invalid';
            isValid = false;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email || !emailPattern.test(email)) {
            newErrors.email = 'Email is invalid';
            isValid = false;
        }

        if (!category) {
            newErrors.category = 'Category is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted');
            // You can proceed with form submission logic here
        }
    };
    const [image, setImage] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    // Handle file upload
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };

    // Handle drag-and-drop
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4 mt-8">

                <div
                    className="p-4 py-20 border-2 border-dotted rounded-lg flex flex-col items-center justify-center"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    {imagePreview ? (
                        <img
                            src={imagePreview}
                            alt="Uploaded preview"
                            className="w-60 h-60 object-cover rounded-lg"
                        />
                    ) : (
                        <p className="text-gray-500 text-sm"></p>
                    )}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                        id="fileUpload"
                    />
                    <label
                        htmlFor="fileUpload"
                        className="mt-4 px-4 py-2 text-gray-500 text-sm rounded cursor-pointer"
                    >
                        Upload Store logo
                    </label>
                </div>

                <div>
                    <input
                        placeholder="Store name"
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={fullName}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-4 py-4 border rounded-lg"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>

                <div>
                    <input
                        placeholder="Store tag name"
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-4 py-4 border rounded-lg"
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                </div>

                <div>
                    <input
                        placeholder="Store phone number"
                        type="text"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-4 py-4 border rounded-lg"
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                </div>

                <div>
                    <input
                        placeholder="Store email"
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-4 py-4 border rounded-lg"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div>
                    <input
                        placeholder="Category"
                        type="text"
                        id="category"
                        name="category"
                        value={category}
                        onChange={handleInputChange}
                        className="mt-2 w-full px-4 py-4 border rounded-lg"
                    />
                    {errors.category && <p className="text-red-500 text-sm">{errors.category}</p>}
                </div>




                <div>

                </div>






                {/* <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg">
                    Submit
                </button> */}
            </form>
        </div>
    );
};

export default StoreDetails;

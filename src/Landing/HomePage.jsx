import React, { useState } from 'react';
import '../../src/Landing/homepage.css'; // Import your CSS file here
function HomePage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
    });

    function handleSubmit(e) {
        e.preventDefault();
        const checkValidation = validation(formData);
        if (characterCheck === true && checkValidation) {
            setFormData({
                name: formData.name,
                email: formData.email,
                address: formData.address,
            });
            alert("Submitted🎆...");
            setFormData({
                name: "",
                email: "",
                address: "",
            });
        } else {
            alert("Please enter Valid Credential 🤔...");
        }
    }

    function isFirstCharCapital(formData) {
        return formData.name.charAt(0) === formData.name.charAt(0).toUpperCase();
    }
    const characterCheck = isFirstCharCapital(formData);


    function validation(formData) {
        let validationForm = false;
        const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegx.test(formData.email)) {
            validationForm = true;
        }
        return validationForm;
    }

    function handleChange(e) {
        const { value, name } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    }
    console.log(formData);
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            value={formData.name}
                            name="name"
                            className="form-control"
                            onChange={handleChange}
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={formData.email}
                            name="email"
                            className="form-control"
                            onChange={handleChange}
                            placeholder="Enter Email"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={formData.address}
                            name="address"
                            className="form-control"
                            onChange={handleChange}
                            placeholder="Enter Address"
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Submit
                    </button>
                </form>
            </div>

        </>
    );
}

export default HomePage;
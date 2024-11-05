import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import './Questionnaire.css'
import personal from "../../assets/personal.png"
import hospital from "../../assets/hospital.png"
import choice from "../../assets/choice.png"
import countries from "../../constants/countryList.json";
import diseases from "../../constants/chronicDiseaseList.json"
import Button from "../../components/button/Button.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {AuthContext} from "../../authentication/AuthContext.jsx";

const Questionnaire = () => {
    const { register, handleSubmit, control, formState: { errors }} = useForm();
    const navigate = useNavigate();
    const {token, id} = useContext(AuthContext);
    const [firstName, setFirstName] = useState ('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            if (!token) {
                console.error('No token found');
                return;
            }
            try {
                const response = await axios.get("http://localhost:8080/users/firstname", {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token,
                    }
                });

                if (response.status === 200) {
                    setFirstName(response.data.firstName || "User");
                } else {
                    console.error('Error fetching user data:', response.status);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
    };

        fetchUserData();
        }, [token]);

    const handleProfileNavigation = async () => {
        if (!token) {
            console.error('No token found');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8080/users/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                }
            });
        if (response.data.profileId) {
            navigate('/profile');
        } else {
            setErrorMessage("You don't have a profile yet. Please fill in this questionnaire first.");
        }
    } catch (error) {
        console.error("Error checking profile existence:", error);
        setErrorMessage("An error occurred. Please try again.");
        }
    };


    const onSubmit = async (profile) => {
        try {
            const formData = new FormData();
            formData.append("profileData", JSON.stringify({
                dob: profile.dob,
                city: profile.city,
                country: profile.country,
                gender: profile.gender,
                healthChallenge: profile.healthChallenge,
                diagnosisDate: profile.diagnosisDate,
                hospital: profile.hospital,
                healingChoice: profile.healingChoice,
                connectionPreference: profile.connectionPreference,
                healForceName: profile.healForceName,
                hasCompletedQuestionnaire: true
            }));
            formData.append("profilePic", profile.profilePicture[0]);

            const response = await axios.post('http://localhost:8080/profiles', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: token,
                },
                });

            if (response.status === 200) {
                navigate('/profile');
            } else {
                console.error('Failed to save data', response.status);
            }
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <div className="questionnaire-page">

            <div className="handlenavigation-button">
                <Button onClick={handleProfileNavigation}
                        className="handlenavigation-button"
                        text="Go Directly to My Profile"
                        type="black"
                        size="large">
                </Button>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="questionnaire-form">
                <div className="questionnaire-section">
                    <div className="question-section-left">
                        <label htmlFor="dob">Hi {firstName}! When were you born?</label>
                        <input
                            type="date"
                            id="dob" {...register("dob", {required: true})}
                        />
                        {errors.dob && <span className="error-message">This field is required</span>}

                        <div className="location-group">
                            <div className="location-item">
                                <label htmlFor="city">Where are you currently living?</label>
                                <input
                                    type="text"
                                    id="city"
                                    placeholder="City"
                                    {...register("city", {required: true})}
                                />
                                {errors.city && <span className="error-message">This field is required</span>}
                            </div>

                            <div className="location-item">
                                <label htmlFor="country">Country</label>
                                <select id="country" {...register("country", {required: true})}>
                                    <option value="">Select your country</option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.country && <span className="error-message">This field is required</span>}
                            </div>
                        </div>

                        <label htmlFor="gender">What gender do you identify with?</label>
                        <Controller
                            name="gender"
                            control={control}
                            defaultValue=""
                            rules={{required: "This field is required"}}
                            render={({field}) => (
                                <select id="gender" {...field}>
                                    <option value="">Select your gender</option>
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="other">I Rather Not Say</option>
                                </select>
                            )}
                        />
                        {errors.gender && <span className="error-message">This field is required</span>}
                    </div>
                    <div className="image-section-right">
                        <img src={personal} alt="Person" className="personal-image"/>
                    </div>
                </div>

                <div className="questionnaire-section">
                    <div className="image-section-left">
                        <img src={hospital} alt="Hospital" className="hospital-image"/>
                    </div>
                    <div className="question-section-right">
                        <label htmlFor="healthChallenge">What is/was your primary health challenge?</label>

                        <select id="healthChallenge" {...register("healthChallenge", {required: "This field is required"})}>
                            <option value="">Select your primary health challenge</option>
                            {diseases.map((disease, index) => (
                                <option key={index} value={disease.name}>
                                    {disease.name}
                                </option>
                            ))}
                        </select>
                        {errors.healthChallenge && <span className="error-message">This field is required</span>}

                        <label htmlFor="diagnosisDate">When were you diagnosed or did you find out about this condition?</label>
                        <input
                            type="month"
                            id="diagnosisDate"
                            {...register("diagnosisDate", {required: true})}
                        />
                        {errors.diagnosisDate && <span className="error-message">This field is required</span>}

                        <label htmlFor="hospital">At what hospital(s) have you been treated or are you being treated for this
                            condition?</label>
                        <input
                            type="text"
                            id="hospital"
                            {...register("hospital", {required: true})}
                        />
                        {errors.hospital && <span className="error-message">This field is required</span>}
                    </div>
                </div>

                <div className="questionnaire-section">
                    <div className="question-section-left">
                        <label htmlFor="healingChoice">Please choose one of the below options that describes your choice of healing the
                            best:</label>
                        <div className="checkbox-group">
                            <label htmlFor="healingChoiceConventional">
                                <input
                                    type="radio"
                                    value="conventional"
                                    id="healingChoiceConventional"
                                    {...register("healingChoice", {required: true})}
                                />
                                I only use conventional healing methods
                            </label>

                            <label htmlFor="healingChoiceMix">
                                <input
                                    type="radio"
                                    value="mix"
                                    id="healingChoiceMix"
                                    {...register("healingChoice", {required: true})}
                                />
                                I use a mix of both conventional and alternative healing methods.
                            </label>

                            <label htmlFor="healingChoiceAlternative">
                                <input
                                    type="radio"
                                    value="alternative"
                                    id="healingChoiceAlternative"
                                    {...register("healingChoice", {required: true})}
                                />
                                I only use alternative healing methods.
                            </label>
                        </div>
                        {errors.healingChoice && <span className="error-message">This field is required</span>}

                        <label htmlFor="connectionPreference">With what kind of people would you like to connect on Heal Force?</label>
                        <div className="checkbox-group">
                            <label htmlFor="connectionPreferenceConventional">
                                <input
                                    type="radio"
                                    value="conventional"
                                    id="connectionPreferenceConventional"
                                    {...register("connectionPreference", {required: true})}
                                />
                                People who only use conventional healing methods
                            </label>

                            <label htmlFor="connectionPreferenceMix">
                                <input
                                    type="radio"
                                    value="mix"
                                    id="connectionPreferenceMix"
                                    {...register("connectionPreference", {required: true})}
                                />
                                People who use both conventional and alternative healing methods
                            </label>

                            <label htmlFor="connectionPreferenceAlternative">
                                <input
                                    type="radio"
                                    value="alternative"
                                    id="connectionPreferenceAlternative"
                                    {...register("connectionPreference", {required: true})}
                                />
                                People who only use alternative healing methods
                            </label>

                            <label htmlFor="connectionPreferenceAllTypes">
                                <input
                                    type="radio"
                                    value="all"
                                    id="connectionPreferenceAllTypes"
                                    {...register("connectionPreference", {required: true})}
                                />
                                With all types of people
                            </label>
                        </div>
                        {errors.connectionPreference && <span className="error-message">This field is required</span>}
                    </div>
                    <div className="image-section-right">
                        <img src={choice} alt="Choice" className="choice-image"/>
                    </div>
                </div>
                <div className="upload-section">
                    <label htmlFor="healForceName">What would you like your HealForce name to be?</label>
                    <div className="healforcename-container">
                    <input
                        type="text"
                        id="healForceName"
                        placeholder="Your HealForce Name"
                        {...register("healForceName", {required: true})}
                    />
                </div>
                    <label htmlFor="profilePicture">Lastly, please upload your Heal Force Profile Picture to complete this
                        Questionnaire!</label>
                    <div className="upload-box">
                        <input
                            type="file"
                            accept="image/*"
                            id="profilePicture"
                            {...register("profilePicture", {required: "Profile picture is required"})}
                        />
                        {errors.profilePicture &&
                            <span className="error-message">{errors.profilePicture.message}</span>}
                    </div>
                </div>
                <div className="submit-container">
                <Button text="Submit"
                        type="black"
                        size="large"
                        onClick={handleSubmit(onSubmit)}></Button>
                </div>
            </form>


        </div>
    )
        ;
};

export default Questionnaire;

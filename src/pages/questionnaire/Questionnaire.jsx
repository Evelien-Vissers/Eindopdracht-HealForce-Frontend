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
import {useEffect, useState} from "react";

const Questionnaire = () => {
    const { register, handleSubmit, control, formState: { errors }} = useForm();
    const navigate = useNavigate(); // Hook voor navigatie naar Profile.jsx
    const [firstName, setFirstName] = useState ('')

    //Fetch user's first name from database
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch("/api/getFirstName");
                const data = await response.json();
                setFirstName(data.firstName);
            }   catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
        }, []); // Dit gaat runnen zodra het component is 'gemount'

    const onSubmit = async (data) => {
        try {
            // API-verzoek om gegevens op te slaan in de database
            const response = await fetch('/api/saveProfileData', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Navigeren naar de profielpagina met opgeslagen gegevens
                navigate('/profile');
            } else {
                console.error('Failed to save data');
            }
        } catch (error) {
            console.error('Error saving data:', error);
        }
    };

    return (
        <div className="questionnaire-page">
            <form onSubmit={handleSubmit(onSubmit)} className="questionnaire-form">
                <div className="questionnaire-section">
                    <div className="question-section-left">
                        <label>Hi {firstName}! When were you born?</label>
                        <input
                            type="date"
                            {...register("dob", {required: true})}
                        />
                        {errors.dob && <span className="error-message">This field is required</span>}

                        <div className="location-group">
                            <div className="location-item">
                                <label>Where are you currently living?</label>
                                <input
                                    type="text"
                                    placeholder="City"
                                    {...register("city", {required: true})}
                                />
                                {errors.city && <span className="error-message">This field is required</span>}
                            </div>

                            <div className="location-group">
                                <label>Country</label>
                                <select {...register("country", {required: true})}>
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
                        <label>What gender do you identify with?</label>
                        <Controller
                            name="gender"
                            control={control}
                            defaultValue=""
                            rules={{required: "This field is required"}}
                            render={({field}) => (
                                <select {...field}>
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
                        <img src={personal} alt="Person"/>
                    </div>
                </div>

                <div className="questionnaire-section">
                    <div className="image-section-left">
                        <img src={hospital} alt="Hospital"/>
                    </div>
                    <div className="question-section-right">
                        <label>Primary Health Challenge</label>

                        <select {...register("healthChallenge", {required: "This field is required"})}>
                            <option value="">Select your primary health challenge</option>
                            {diseases.map((disease, index) => (
                                <option key={index} value={disease.name}>
                                    {disease.name}
                                </option>
                            ))}
                        </select>
                        {errors.healthChallenge && <span className="error-message">This field is required</span>}

                        <label>When were you diagnosed or did you find out about this condition?</label>
                        <input
                            type="month"
                            {...register("diagnosisDate", {required: true})}
                        />
                        {errors.diagnosisDate && <span className="error-message">This field is required</span>}

                        <label>At what hospital(s) have you been treated or are you being treated for this
                            condition?</label>
                        <input
                            type="text"
                            {...register("hospital", {required: true})}
                        />
                        {errors.hospital && <span className="error-message">This field is required</span>}
                    </div>
                </div>

                <div className="questionnaire-section">
                    <div className="question-section-left">
                        <label>Please choose one of the below options that describes your choice of healing the
                            best:</label>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="radio"
                                    value="conventional"
                                    {...register("healingChoice", {required: true})}
                                />
                                I only use conventional healing methods
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="mix"
                                    {...register("healingChoice", {required: true})}
                                />
                                I use a mix of both conventional and alternative healing methods.
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="alternative"
                                    {...register("healingChoice", {required: true})}
                                />
                                I only use alternative healing methods.
                            </label>
                        </div>
                        {errors.healingChoice && <span className="error-message">This field is required</span>}

                        <label>With what kind of people would you like to connect on Heal Force?</label>
                        <div className="checkbox-group">
                            <label>
                                <input
                                    type="radio"
                                    value="conventional"
                                    {...register("connectionPreference", {required: true})}
                                />
                                People who only use conventional healing methods
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="mix"
                                    {...register("connectionPreference", {required: true})}
                                />
                                People who use both conventional and alternative healing methods
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="alternative"
                                    {...register("connectionPreference", {required: true})}
                                />
                                People who only use alternative healing methods
                            </label>

                            <label>
                                <input
                                    type="radio"
                                    value="all"
                                    {...register("connectionPreference", {required: true})}
                                />
                                With all types of people
                            </label>
                        </div>
                        {errors.connectionPreference && <span className="error-message">This field is required</span>}
                    </div>
                    <div className="image-section-right">
                        <img src={choice} alt="Choice"/>
                    </div>
                </div>
            </form>

            <div className="upload-section">
                <label>Lastly, please upload your Heal Force Profile Picture to complete this Questionnaire!</label>
                <div className="upload-box">
                    <input
                        type="file"
                        accept="image/*"
                        {...register("profilePicture", {required: "Profile picture is required"})}
                    />
                    {errors.profilePicture && <span className="error-message">{errors.profilePicture.message}</span>}
                </div>
            </div>

            <Button text="Submit" type="black" size="large"></Button>

        </div>
    )
        ;
};

export default Questionnaire;

import mission from '../../assets/mission.png'
import friends from '../../assets/friends.png'
import why from '../../assets/why.png'
import './Mission.css'
import Button from '../../components/button/Button.jsx'
import ToggleButton from '../../components/toggleButton/ToggleButton.jsx'

const Mission = () => {
    return (
        <div>
            <div className="mission-container">
                <div className="mission-section">
                    <div className="mission-column">
                        <h3 className="mission-title">The Mission & Vision of Heal Force</h3>
                        <img className="mission-image" src={mission} alt="Mission"/>
                        <ToggleButton>
                        <p className="mission-paragraph">
                            Heal Force&apos;s primary mission is to make a positive impact in the healthcare industry,
                            empowering
                            those who are currently battling chronic diseases. To achieve this vision, our platform
                            focuses
                            on three key areas:
                        </p>
                        <ol className="numbered-list">
                            <li><b>User Empowerment</b>: We aim to give users a voice and sense of value by allowing
                                them to
                                create a profile where they can share their unique stories and experiences.
                            </li>
                            <li><b>Peer Connections</b>: Heal Force will facilitate connections between individuals
                                based on
                                factors such as their specific condition, geographical location, or their choice of
                                treatment—
                                fostering a supportive community.
                            </li>
                            <li><b>Informed Decision-Making</b>: Based on the information that peers have shared with
                                each
                                other, our users have the opportunity to make better-informed decisions about their
                                healthcare
                                choices.
                            </li>
                        </ol>
                        </ToggleButton>
                    </div>
                    <div className="mission-column">
                        <h3 className="mission-title">Who Can Use Heal Force?</h3>
                        <img className="mission-image" src={friends} alt="Friends"/>
                        <ToggleButton>
                        <p className="mission-paragraph">
                            People who can use Heal Force are:
                        </p>
                        <ul className="bullet-list">
                            <li>Everyone who is currently going through a chronic disease; and</li>
                            <li>Everyone who has suffered from a chronic disease or is in remission.</li>
                        </ul>
                        <p className="mission-paragraph">
                            We understand that many chronic disease fighters are not able to register themselves onto the Heal Force platform due to their condition.
                            As of this moment, we can not allow care takers to register in name of their loved ones due to security issues, but we are working diligently to offer this possibility in the future.
                        </p>
                        </ToggleButton>
                    </div>
                    <div className="mission-column">
                        <h3 className="mission-title">Why Should People Use Heal Force?</h3>
                        <img className="mission-image" src={why} alt="Questionmark"/>
                        <ToggleButton>
                        <ol className="numbered-list">
                            <li>Because there is an immense need for an <b>accessible source of experiential
                                knowledge</b> within the
                                healthcare industry.
                            </li>
                            <li>Because those who are suffering can feel alienated from people around them and want to
                                connect to
                                those who are going through the same thing as they are.
                            </li>
                            <li>Because people who are battling a chronic disease or are in remission, <b>want to help
                                and inspire
                                their peers</b> who are going through the same, by sharing their own experiences and
                                stories.
                            </li>
                        </ol>
                        </ToggleButton>
                    </div>
                </div>
                <div className="mission-second-section">
                    <div className="mission-second-content">
                        <h3 className="mission-second-title">In Order To Win the War Against Chronic Diseases, We Should Listen to Those Who Already Won.</h3>
                        <Button text="Start Your Heal Force Journey Now" type="black" size="large"
                                link="/register"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Mission;
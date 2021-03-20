import "./Profile.css";
const Profile = () => (
  <>
    <div className="profileHolder">
      <p className="profileType">Github:</p>
      <a href="https://github.com/SaptarshiBagchi" target="_blank">
        https://github.com/SaptarshiBagchi
      </a>
    </div>
    <div className="profileHolder">
      <p className="profileType">Linked-In:</p>
      <a
        href="https://www.linkedin.com/in/saptarshi-bagchi-a5018a160/"
        target="_blank"
      >
        https://www.linkedin.com/in/saptarshi-bagchi-a5018a160/
      </a>
    </div>
    <div className="profileHolder">
      <p className="profileType">Email:</p>
      <a href="mailto:roni.bagchi@gmail.com" target="_blank">
        roni.bagchi@gmail.com
      </a>
    </div>
    <div className="profileHolder">
      <p className="profileType">Contact No:</p>
      <a href="tel:8334900022" target="_blank">
        +918334900022
      </a>
    </div>
  </>
);

export default Profile;

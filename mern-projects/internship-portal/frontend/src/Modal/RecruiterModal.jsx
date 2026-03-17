const RecruiterModal = ({ applicant, onClose }) => (
    <div>
        <h2>Recruiter Details</h2>
        <p>Name: {applicant.name}</p>
        <button onClick={onClose}>Close</button>
    </div>
);
export default RecruiterModal;

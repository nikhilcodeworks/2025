const StudentModal = ({ applicant, onClose }) => (
    <div>
        <h2>Student Details</h2>
        <p>Name: {applicant.name}</p>
        <button onClick={onClose}>Close</button>
    </div>
);
export default StudentModal;

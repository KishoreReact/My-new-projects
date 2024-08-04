import styles from '../styles/StaffTable.module.css';

const StaffTable = ({ staff }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>S.no</th>
          <th>User Name</th>
          <th>Employee ID</th>
          <th>Job Title</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {staff.map((member, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{member.name}</td>
            <td>{member.employeeId}</td>
            <td>{member.jobRole}</td>
            <td>{member.phoneNumber}</td>
            <td><a href={`/staff/${member.id}`}>View</a></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StaffTable;

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const addStaff = async (staffData) => {
  const {
    employeeId,
    name,
    personalMailId,
    companyMailId,
    phoneNumber,
    dateOfBirth,
    gender,
    jobRole,
    joiningDate,
    relievingDate,
    aadhaarNumber,
    education,
    houseStreetArea,
    village,
    district,
    state,
    country,
    pinCode,
    maritalStatus,
    spouseName,
    maleChildrenCount,
    femaleChildrenCount,
  } = staffData;

  const result = await pool.query(
    `INSERT INTO staff (
      employee_id,
      name,
      personal_mail_id,
      company_mail_id,
      phone_number,
      date_of_birth,
      gender,
      job_role,
      joining_date,
      relieving_date,
      aadhaar_number,
      education,
      house_street_area,
      village,
      district,
      state,
      country,
      pin_code,
      marital_status,
      spouse_name,
      male_children_count,
      female_children_count
    ) VALUES (
      $1, $2, $3, $4, $5, 
      $6, $7, $8, $9, $10, 
      $11, $12, $13, $14, $15, 
      $16, $17, $18, $19, $20, 
      $21, $22
    ) RETURNING *`,
    [
      employeeId,
      name,
      personalMailId,
      companyMailId,
      phoneNumber,
      dateOfBirth || null,
      gender,
      jobRole,
      joiningDate || null,
      relievingDate || null,
      aadhaarNumber,
      education,
      houseStreetArea,
      village,
      district,
      state,
      country,
      pinCode,
      maritalStatus,
      spouseName,
      maleChildrenCount,
      femaleChildrenCount,
    ]
  );
  return result.rows[0];
};

const getAllStaff = async () => {
  const result = await pool.query('SELECT * FROM staff');
  return result.rows.map(row => ({
    id: row.id, // Assuming you have a primary key `id` in your staff table
    name: row.name,
    employeeId: row.employee_id,
    jobRole: row.job_role,
    phoneNumber: row.phone_number,
  }));
};

module.exports = {
  addStaff,
  getAllStaff,
};

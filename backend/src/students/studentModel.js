const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  
  // BASIC INFORMATION
  registrationType: { type: String, required: true },
  registerID: { type: String, required: true},
  fullName: { type: String },
  socialName: { type: String },
  birthDate: {  type: String },

  // ID's INFORMATION
  docRg: { type: String },
  docCpf: { type: String },
  
  // CONTACT INFORMATION
  cellphoneNumber: { type: String },
  phoneNumber: { type: String },
  email: { type: String },
  emailCpm: { type: String },
  
  // ADDRESS INFORMATION
  cepNumber: { type: String },
  neighborhood: { type: String },
  city: { type: String },

  // RESPONSIBLE INFORMATION
  responsibleFullName: { type: String },
  responsibleCellphoneNumber: { type: String },
  responsibleEmail: { type: String },

  // SCHOOL INFORMATION
  fundamentalSchool: { type: String },
  fundamentalSchoolType: { type: String },
  highSchool: { type: String },
  highSchoolType: { type: String },
  currentSchool: { type: String },
  currentSchoolType: { type: String},
  status: {
    type: Boolean,
    default: true
  }
}, 
{ timestamps: true});

// Criamos o Model
const Student = mongoose.model("Student", studentSchema);

module.exports = Student
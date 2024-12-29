import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({
    User_Name: {type: String},
    phone_Number: {type: String},
    Email_Add: {type: String},
    Date_of_Birth: {type: String},
    Designation: {type: String}, 
}, {timestamps: true})

const AllContacts = mongoose.model('contacts', ContactSchema);

export default AllContacts;
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        course: {
            type: String,
            required: true,
        },
        birthdate: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
        userimage: {
            type: String,
        },
    },
    {

        timestamps: true
    }
);


export default mongoose.model('Student', studentSchema);
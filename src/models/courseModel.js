import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CourseSchema = new Schema({
    courseID: String,
    credits: Number,
    prerequisites: [String],
    description: String
});
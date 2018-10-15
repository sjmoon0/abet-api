import mongoose from "mongoose";
import { CourseSchema } from "../models/courseModel.js";

const Course = mongoose.model("Course", CourseSchema);

export const addNewCourse = (req,res) => {
    let newCourse = new Course(req.body);
    newCourse.save((err, course) => {
        if(err){
            res.send(err);
        }
        res.json(course);
    });
}

export const getCourses = (req,res) => {
    Course.find({}, (err,course) => {
        if(err) {
            res.send(err);
        }
        res.json(course);
    });
}

export const getCourseByID = (req,res) => {
    Course.findById(req.params.id, (err,course) => {
        if(err) {
            res.send(err);
        }
        res.json(course);
    });
}

export const editCourse = (req,res) => {
    Course.findOneAndUpdate({ _id: req.params.id},req.body, { new: true }, (err, course) => {
        if(err) {
            res.send(err);
        }
        res.json(course);
    });
}

export const deleteCourse = (req,res) => {
    Course.findOneAndDelete({_id: req.params.id}, req.body, (err,course) => {
        if(err) {
            res.send(err);
        }
        res.json({ "message": 'Successfully deleted contact' });
    });
}
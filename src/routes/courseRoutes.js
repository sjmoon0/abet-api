import { addNewCourse, getCourses, getCourseByID, editCourse, deleteCourse } from "../controllers/courseController.js";


const routes = (app) => {
    app.route('/course')
    .get((req,res,next) => {
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
    }, getCourses)
    .post(addNewCourse);
    
    app.route('/course/:id')
    .get(getCourseByID)
    .put(editCourse)
    .delete(deleteCourse);
}

export default routes;
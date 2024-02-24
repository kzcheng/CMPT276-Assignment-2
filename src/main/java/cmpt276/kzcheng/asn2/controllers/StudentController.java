package cmpt276.kzcheng.asn2.controllers;

import java.util.List;
import java.util.Map;
import jakarta.servlet.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.servlet.view.RedirectView;
import cmpt276.kzcheng.asn2.models.Student;
import cmpt276.kzcheng.asn2.models.StudentRepository;

@Controller
public class StudentController {
    @Autowired
    private StudentRepository studentRepo;

    @GetMapping("/")
    public RedirectView process() {
        return new RedirectView("students/main");
    }

    @GetMapping("/students/main")
    public String getMainPage(Model model, HttpServletRequest request, HttpSession session) {
        return "students/main";
    }

    @GetMapping("/students/admin")
    public String getAdminPage(Model model, HttpServletRequest request, HttpSession session) {
        return "students/admin";
    }

    /**
     * Retrieves all students from the database and displays them in the view. We can trigger this by visiting the URL /students/view. This will get all students from the database and display them using the view template found in /students/showAll.html.
     * 
     * @param model
     * @return the name of the view template to render, can be found in the file /students/showAll.html
     */
    @GetMapping("/students/view")
    public String getAllStudents(Model model) {
        System.out.println("Get all users");
        // Get all students from the database
        List<Student> students = studentRepo.findAll();
        // End of database call.
        model.addAttribute("st", students);
        return "students/showAll";
    }

    /**
     * Adds a new student to the system.
     *
     * @param newStudent the details of the new student received from the HTTP request
     * @param response the HTTP response object
     * @return a page indicating that the student has been added, can be found in the file /students/addedStudent.html
     */
    @PostMapping("/students/add")
    public String addStudent(@RequestParam Map<String, String> newStudent, HttpServletResponse response) {
        System.out.println("ADD student");
        String name = newStudent.get("name");
        int weight = Integer.parseInt(newStudent.get("weight"));
        int height = Integer.parseInt(newStudent.get("height"));
        String hairColor = newStudent.get("hairColor");
        float gpa = Float.parseFloat(newStudent.get("gpa"));
        studentRepo.save(new Student(name, weight, height, hairColor, gpa));
        response.setStatus(HttpServletResponse.SC_CREATED);
        // TODO this redirect should probably be something different in the final version.
        return "students/addedStudent";
    }



    /**
     * Deletes a student from the system. In theory, the correct way to do this is to use a DELETE request. However, HTML forms only support GET and POST requests, and a DELETE request will need to be sent using JavaScript. Therefore, for simplicity, we use a POST request here.
     *
     * @param sid the id of the student to delete
     * @return a page indicating that the student has been deleted, can be found in the file /students/deletedStudent.html
     */
    @PostMapping("/students/delete/{sid}")
    public String deleteStudent(@PathVariable int sid) {
        studentRepo.deleteById(sid);
        return "redirect:/students/view";
    }

    // The deleteStudent that actually uses a DELETE request.
    // @DeleteMapping("/students/delete/{sid}")
    // public String deleteStudent(@PathVariable int sid) {
    //     studentRepo.deleteById(sid);
    //     return "students/deletedStudent";
    // }
}

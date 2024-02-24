package cmpt276.kzcheng.asn2.controllers;

import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletResponse;
import cmpt276.kzcheng.asn2.models.Student;
import cmpt276.kzcheng.asn2.models.StudentRepository;

@Controller
public class StudentController {
    @Autowired
    private StudentRepository studentRepo;

    /**
        * Retrieves all students from the database and displays them in the view.
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
     * @param response   the HTTP response object
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
}

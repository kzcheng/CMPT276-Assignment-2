package cmpt276.kzcheng.asn2.controllers;

import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import jakarta.servlet.http.HttpServletResponse;
import cmpt276.kzcheng.asn2.models.Student;
import cmpt276.kzcheng.asn2.models.StudentRepository;

@Controller
public class StudentController {
    @Autowired
    private StudentRepository studentRepo;

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
        return "students/addedStudent";
    }
}

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

    /**
     * This method is called before any other method in this class. It is used to populate the model with a list of all students in the database. This list can then be accessed in the view template using the name "st". ...anyway, that's what Copilot said. I'm still not sure if this is a good idea but I want to try and see if it works. Edit: Ok, so it works. As Copilot said, this thing is called every time a method in this class is called. Which means, there are some security and performance concerns. But I guess it's fine for this project.
     */
    @ModelAttribute("st")
    public List<Student> populateStudents() {
        return studentRepo.findAll();
    }

    /**
     * Ok, this is so stupid but it actually works. So, I'm using this to refresh the webpage after doing something. Which means I need to find a way to redirect to the current page the user is on.
     */
    @ModelAttribute("currentUrl")
    public String getCurrentUrl(HttpServletRequest request) {
        return request.getRequestURI();
    }

    /**
     * Main page, might be the only page required for this project.
     */
    @GetMapping("/students/main")
    public String getMainPage(Model model, HttpServletRequest request, HttpSession session) {
        return "students/main";
    }

    /**
     * Admin page, useful for testing.
     */
    @GetMapping("/students/admin")
    public String getAdminPage(Model model, HttpServletRequest request, HttpSession session) {
        return "students/admin";
    }

    /**
     * Adds a new student to the system.
     */
    @PostMapping("/students/add")
    public String addStudent(@RequestParam Map<String, String> newStudent, @RequestParam String redirectUrl, HttpServletResponse response) {
        System.out.println("ADD student");
        String name = newStudent.get("name");
        int weight = Integer.parseInt(newStudent.get("weight"));
        int height = Integer.parseInt(newStudent.get("height"));
        String hairColor = newStudent.get("hairColor");
        float gpa = Float.parseFloat(newStudent.get("gpa"));
        studentRepo.save(new Student(name, weight, height, hairColor, gpa));
        response.setStatus(HttpServletResponse.SC_CREATED);
        return "redirect:" + redirectUrl;
    }

    /**
     * Deletes a student from the system. In theory, the correct way to do this is to use a DELETE request. However, HTML forms only support GET and POST requests, and a DELETE request will need to be sent using JavaScript. Therefore, for simplicity, we use a POST request here.
     */
    @PostMapping("/students/delete/{sid}")
    public String deleteStudent(@PathVariable int sid, @RequestParam String redirectUrl) {
        studentRepo.deleteById(sid);
        return "redirect:" + redirectUrl;
    }

    /**
     * Deletes all students from the database. This is a dangerous operation and should not be used in a production environment. But this is just an assignment so it's gonna be helpful for the marker to test the application.
     */
    @PostMapping("/students/delete/all")
    public String deleteAllStudents(@RequestParam String redirectUrl) {
        studentRepo.deleteAll();
        return "redirect:" + redirectUrl;
    }

    /**
     * Fills the student database with testing data. Note that this won't clear the database. It will just add more students to it. And it won't check for duplicates either. So, if you run this method multiple times, you will get multiple copies of the same students in the database.
     */
    @PostMapping("/students/fill")
    public String fillTestingData(@RequestParam String redirectUrl) {
        studentRepo.save(new Student("Ruby", 100, 220, "Red", 4.8f));
        studentRepo.save(new Student("Emerald", 80, 170, "Green", 3.5f));
        studentRepo.save(new Student("Sapphire", 60, 190, "Blue", 3.9f));
        return "redirect:" + redirectUrl;
    }

    /**
     * Edits a student in the system. 
     */
    @PostMapping("/students/edit/{sid}")
    public String editStudent(@PathVariable int sid, @RequestParam Map<String, String> newStudent, @RequestParam String redirectUrl) {
        Student student = studentRepo.findById(sid).get();
        student.setName(newStudent.get("name"));
        student.setWeight(Integer.parseInt(newStudent.get("weight")));
        student.setHeight(Integer.parseInt(newStudent.get("height")));
        student.setHairColor(newStudent.get("hairColor"));
        student.setGpa(Float.parseFloat(newStudent.get("gpa")));
        studentRepo.save(student);
        return "redirect:" + redirectUrl;
    }



    // -- Redirects for QoL --
    @GetMapping("/")
    public RedirectView redirectNull() {
        return new RedirectView("students/main");
    }

    @GetMapping("/main")
    public RedirectView redirectMain() {
        return new RedirectView("students/main");
    }

    @GetMapping("/students")
    public RedirectView redirectStudents() {
        return new RedirectView("students/main");
    }

    @GetMapping("/admin")
    public RedirectView redirectAdmin() {
        return new RedirectView("students/admin");
    }



    // -- Commented Out Obsolete Code --

    // The deleteStudent that actually uses a DELETE request.
    // @DeleteMapping("/students/delete/{sid}")
    // public String deleteStudent(@PathVariable int sid) {
    //     studentRepo.deleteById(sid);
    //     return "students/deletedStudent";
    // }

    // /**
    //  * Retrieves all students from the database and displays them in the view. We can trigger this by visiting the URL /students/view. This will get all students from the database and display them using the view template found in /students/showAll.html.
    //  */
    // @GetMapping("/students/view")
    // public String getAllStudents(Model model) {
    //     // This part is being made irrelevant by the populateStudents method.
    //     // System.out.println("Get all users");
    //     // // Get all students from the database
    //     // List<Student> students = studentRepo.findAll();
    //     // // End of database call.
    //     // model.addAttribute("st", students);
    //     return "students/showAll";
    // }
}

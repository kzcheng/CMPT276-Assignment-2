package cmpt276.kzcheng.asn1.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Map; // Correct Map import
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.autoconfigure.observation.ObservationProperties.Http;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import cmpt276.kzcheng.asn1.models.User;
import cmpt276.kzcheng.asn1.models.UserRepository;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@Controller
public class UsersController {
    @Autowired
    private UserRepository userRepo;

    @GetMapping("/users/view")
    public String getAllUsers(Model model) {
        System.out.println("Get all users");
        // Get all users from the database
        List<User> users = userRepo.findAll();
        // End of database call.
        model.addAttribute("us", users);
        return "users/showAll";
        // Links to the file in resources/templates/users/showAll.html
    }

    @PostMapping("/users/add")
    public String addUser(@RequestParam Map<String, String> newuser, HttpServletResponse response) {
        System.out.println("ADD user");
        String newName = newuser.get("name");
        String newPassword = newuser.get("password");
        int newSize = Integer.parseInt(newuser.get("size"));
        userRepo.save(new User(newName, newPassword, newSize));
        response.setStatus(HttpServletResponse.SC_CREATED);
        return "users/addedUser";
    }
}

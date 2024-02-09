package cmpt276.kzcheng.asn1.controllers;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import cmpt276.kzcheng.asn1.models.Users;

@Controller
public class UsersController {
    @GetMapping("/users/view")
    public String getAllUsers(Model model) {
        System.out.println("Get all users");
        // TODO: Get all users from the database
        List<Users> users = new ArrayList<>();
        users.add(new Users("Bobby", "1234", 10));
        users.add(new Users("Steve", "4321", 20));
        users.add(new Users("Jack", "4322", 30));
        users.add(new Users("Bob", "1231", 40));
        // End of database call.
        model.addAttribute("us", users);
        return "users/showAll";
        // Links to the file in resources/templates/users/showAll.html
    }
}

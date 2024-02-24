package cmpt276.kzcheng.asn2.controllers;

import org.springframework.stereotype.*;
import org.springframework.ui.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.*;
import jakarta.servlet.http.*;

@Controller
public class HomeController {

    @GetMapping("/")
    public RedirectView process() {
        return new RedirectView("main");
    }

    @GetMapping("/main")
    public String getMainPage(Model model, HttpServletRequest request, HttpSession session) {
        return "main";
    }

    @GetMapping("/admin")
    public String getAdminPage(Model model, HttpServletRequest request, HttpSession session) {
        return "admin";
    }
}

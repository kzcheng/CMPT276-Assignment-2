package cmpt276.kzcheng.asn2.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.view.RedirectView;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;

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

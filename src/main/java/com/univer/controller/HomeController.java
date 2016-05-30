package com.univer.controller;

import com.univer.helper.UserContainer;
import com.univer.model.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class HomeController {

    @Autowired
    private UserContainer userContainer;

    @RequestMapping(value = {"/", "/homenotsignin"}, method = RequestMethod.GET)
    public String index(HttpSession session) {
        session.setAttribute("username", "guest");
        return "home/homeNotSignIn";
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ModelAndView doLogin(@RequestParam String username,
                                @RequestParam String password,
                                HttpSession session) {
        List<User> users = userContainer.getAll();
        if (userContainer.areCredentialsValid(username, password, users) ) {
            //LOG.info("User: [" + username + "] successful signin");
            session.setAttribute("username", username);
            return new ModelAndView("redirect:/homesignin");
        } else {
            ModelAndView mav = new ModelAndView("signin/signin");
            mav.addObject("isvalid", false);
            return mav;
        }
    }

    @RequestMapping(value = "/homesignin", method = RequestMethod.GET)
    public ModelAndView doSignIn() {
        //ModelAndView mav = new ModelAndView("home/homeSignedIn");
        ModelAndView mav = new ModelAndView("home/playBegin");
        //stat.generateStatistic();
        //mav.addObject("statistics", stat);
        return mav;
    }

}
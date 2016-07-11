package com.univer.controller;

import com.univer.helper.TOPScoreContainer;
import com.univer.helper.UserContainer;
import com.univer.model.entity.RegistrationDTO;
import com.univer.model.entity.TOPScore;
import com.univer.model.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import java.util.List;

@Controller
public class HomeController {

    /*private static org.slf4j.Logger LOG = org.slf4j.LoggerFactory.getLogger(HomeController.class);*/

    @Autowired
    private UserContainer userContainer;

    @Autowired
    private TOPScoreContainer topScoreContainer;

/*    @Autowired
    private CurrentUser currentUser;*/

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String index() {
        return "home/index";
    }

    // на вход принимаем объект JSON
    @RequestMapping(value = "/signin", method = RequestMethod.POST)
    @ResponseBody
    public String doLogin(@RequestBody RegistrationDTO registrationDTO) {
        System.out.println("Login: " + registrationDTO.getUserName() + ", " +
                "Password" + registrationDTO.getPassword());
    /*    List<User> users = userContainer.getAll();
        if (userContainer.areCredentialsValid(username, password, users) ) {
            //LOG.info("User: [" + username + "] successful signin");
            session.setAttribute("username", username);
            return new ModelAndView("redirect:/homesignin");
        } else {
            ModelAndView mav = new ModelAndView("signin/signin");
            mav.addObject("isvalid", false);
            return mav;
        }*/
        return "signin/signin";
    }

/*
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
*/

    @RequestMapping(value = "/homesignin", method = RequestMethod.GET)
    public ModelAndView doSignIn() {
        //ModelAndView mav = new ModelAndView("home/homeSignedIn");
        ModelAndView mav = new ModelAndView("home/playBegin");
        //stat.generateStatistic();
        //mav.addObject("statistics", stat);
        return mav;
    }

    @RequestMapping(value = "/allusers", method = RequestMethod.GET)
    @ResponseBody
    public Object getAllUsers() {
        List<User> users = userContainer.getAll();
        return users;
    }

    @RequestMapping(value = "/statistic", method = RequestMethod.GET)
    @ResponseBody
    public Object doResult() {
        List<TOPScore> topScores = topScoreContainer.getAll();
        return topScores;
    }

/*    @RequestMapping(value = "/login", method = RequestMethod.GET)
    @ResponseBody
    public Object doLogin() {
        return "John Smith";
    }*/

}
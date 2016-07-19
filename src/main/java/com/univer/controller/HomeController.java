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

    @Autowired
    private UserContainer userContainer;

    @Autowired
    private TOPScoreContainer topScoreContainer;


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

        return "signin/signin";
    }


    @RequestMapping(value = "/homesignin", method = RequestMethod.GET)
    public ModelAndView doSignIn() {
        ModelAndView mav = new ModelAndView("home/playBegin");

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


}
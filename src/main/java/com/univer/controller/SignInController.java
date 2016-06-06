package com.univer.controller;

import com.univer.helper.UserContainer;
import com.univer.model.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class SignInController {

    @Autowired
    private UserContainer userContainer;

/*    @RequestMapping(value = "/signin", method = RequestMethod.GET)
    public ModelAndView doLogin() {
        ModelAndView mav = new ModelAndView("signin/signinTest");
        return mav;
    }*/

    @RequestMapping(value = "/signin", method = RequestMethod.GET)
    @ResponseBody
    public String doLogin() {
        String testString = "My test string";
        return testString;
    }



}
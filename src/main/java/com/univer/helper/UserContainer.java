package com.univer.helper;

import com.univer.model.entity.User;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserContainer {
    private List<User> userList;

    public UserContainer(){
        this.userList = createUserList();
    }


    private List<User> createUserList(){
        List<User> userList = new ArrayList<User>();
        userList.add(new User("admin", "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918")); //DigestUtils.sha256Hex("admin")
        //userList.add(new User("user1", DigestUtils.sha256Hex("user1")));
        userList.add(new User("user1", "user1"));
        //userList.add(new User("incognito", DigestUtils.sha256Hex("1")));
        userList.add(new User("1", "1"));
        //userList.add(new User("1", "1"));

        return userList;
    }

    public List<User> getAll() {
        return userList;
    }

    public boolean areCredentialsValid(String email, String password, List<User> users){
        if ( (email == "") || (password == "") ) {
            return false;
        }
        boolean isValid = false;
        for (User user : users) {
            if ( email.equals(user.getEmail()) ){
                //if (DigestUtils.sha256Hex(password).equals(user.getPassword())){
                if (password.equals(user.getPassword())){
                    isValid = true;
                    return isValid;
                }
            }
        }
        return isValid;
    }

    public void addUser(String email, String password){
        //this.userList.add(new User(email, DigestUtils.sha256Hex(password)));
        this.userList.add(new User(email, password));
    }

}

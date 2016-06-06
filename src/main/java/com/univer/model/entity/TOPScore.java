package com.univer.model.entity;

public class TOPScore {
    private String userName;
    private long score;

    public TOPScore() {
    }

    public TOPScore(String userName) {
        this.userName = userName;
    }

    public TOPScore(String userName, long score) {
        this.userName = userName;
        this.score = score;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public long getScore() {
        return score;
    }

    public void setScore(long score) {
        this.score = score;
    }
}

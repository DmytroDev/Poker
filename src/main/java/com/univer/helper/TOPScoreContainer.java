package com.univer.helper;

import com.univer.model.entity.TOPScore;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class TOPScoreContainer {

    private List<TOPScore> topScoreList;

    public TOPScoreContainer(){
        this.topScoreList = createTOPScoreList();
    }

    private List<TOPScore> createTOPScoreList(){
        List<TOPScore> topScoreList = new ArrayList<TOPScore>();
        topScoreList.add(new TOPScore("Guru", 1_000_000_000L));
        topScoreList.add(new TOPScore("Lucky", 5_000_000L));
        topScoreList.add(new TOPScore("Maverick", 100_000L));
        topScoreList.add(new TOPScore("Dart Weider", 200_000_000L));
        topScoreList.add(new TOPScore("Beginner", 5_000L));

        return topScoreList;
    }

    public List<TOPScore> getAll() {
        return topScoreList;
    }

    public void addTOPScore(String userName, long score){
        this.topScoreList.add(new TOPScore(userName, score));
    }

}
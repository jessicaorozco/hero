package com.example.hero.hero.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.hero.hero.repository.Hero;
import com.example.hero.hero.dao.HeroDao;
import java.util.List;

@RestController
public class HeroController {
    @Autowired
    private HeroDao heroDao;

    @GetMapping("/")
    public List<Hero> getListHero() {
        return heroDao.getListHero();
    }
}

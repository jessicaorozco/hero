package com.example.hero.hero.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RestController;
import com.example.hero.hero.repository.Hero;
import com.example.hero.hero.dao.HeroDao;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class HeroController {
    @Autowired
    private HeroDao heroDao;

    @GetMapping("api/hero")
    public List<Hero> getListHero() {
        return heroDao.getListHero();
    }

    @GetMapping("api/hero/{id}")
    public Hero getHeroById(@PathVariable Long id) {
        Hero hero = heroDao.findById(id);
        return hero;
    }
}

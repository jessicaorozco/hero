package com.example.hero.hero.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @PostMapping("api/hero")
    public ResponseEntity<Hero> create(@RequestBody Hero hero) {
        Hero newHero = heroDao.create(hero);
        return ResponseEntity.ok(newHero);
    }

    @PutMapping("api/hero/{id}")
    public ResponseEntity<Hero> update(@PathVariable Long id, @RequestBody Hero hero) {
        Hero newHero = heroDao.update(id, hero);
        return ResponseEntity.ok(newHero);
    }

    @DeleteMapping("api/hero/{id}")
    public boolean delete(@PathVariable Long id) {
        return heroDao.delete(id);
    }
}

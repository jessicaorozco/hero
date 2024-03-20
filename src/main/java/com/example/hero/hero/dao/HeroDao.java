package com.example.hero.hero.dao;

import org.springframework.stereotype.Repository;
import java.util.List;

import com.example.hero.hero.repository.Hero;

@Repository
public interface HeroDao {
    List<Hero> getListHero();

    Hero findById(Long id);

    Hero create(Hero hero);

    Hero update(Long id, Hero hero);

    boolean delete(Long id);
}

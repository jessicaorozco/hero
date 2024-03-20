package com.example.hero.hero.dao;

import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

import com.example.hero.hero.repository.Hero;

@Repository
public interface HeroDao {
    List<Hero> getListHero();

    Optional<Hero> findById(String id);

}

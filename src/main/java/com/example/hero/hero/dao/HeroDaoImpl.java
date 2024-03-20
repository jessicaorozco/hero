package com.example.hero.hero.dao;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.hero.hero.repository.Hero;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.sql.Connection;

@Repository
@Transactional
public class HeroDaoImpl implements HeroDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Autowired
    private DataSource dataSource;

    @Override
    public List<Hero> getListHero() {
        try (Connection connection = dataSource.getConnection()) {
            PreparedStatement statement = connection.prepareStatement("SELECT * FROM gral.hero");
            List<Hero> heroes = new ArrayList<>();

            ResultSet resultSet = statement.executeQuery();
            while (resultSet.next()) {
                Hero hero = new Hero();
                hero.setId(resultSet.getString("id"));
                hero.setName(resultSet.getString("name"));
                hero.setPower(resultSet.getString("power"));

                heroes.add(hero);
            }

            return heroes;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public Hero findById(Long id) {
        if (id == null) {
            throw new IllegalArgumentException("El id no puede ser null");
        }
        try (Connection connection = dataSource.getConnection()) {
            PreparedStatement statement = connection
                    .prepareStatement("SELECT id, name, power FROM gral.hero WHERE id = ?");
            statement.setLong(1, id.longValue()); // Ahora sabemos que id no es null
            ResultSet resultSet = statement.executeQuery();
            Hero hero = null;
            if (resultSet.next()) {
                hero = new Hero();
                hero.setId(resultSet.getLong("id"));
                hero.setName(resultSet.getString("name"));
                hero.setPower(resultSet.getString("power"));
            }
            return hero;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}

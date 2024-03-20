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

    @Override
    public Optional<Hero> findById(String id) {
        Optional<Hero> heroOptional = Optional.empty();
        try (Connection connection = dataSource.getConnection()) {
            PreparedStatement statement = connection
                    .prepareStatement("SELECT id, name, power FROM gral.hero WHERE id = ?");
            statement.setString(1, id); // Asumiendo que id es un String. Si es numérico, usa setLong o setInt.
            ResultSet resultSet = statement.executeQuery();
            if (resultSet.next()) {
                Hero hero = new Hero();
                hero.setId(resultSet.getString("id")); // Cambia a getString si el id es de tipo String.
                hero.setName(resultSet.getString("name"));
                hero.setPower(resultSet.getString("power"));
                heroOptional = Optional.of(hero);
            }
            return heroOptional;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}

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
                hero.setId(resultSet.getLong("id"));
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

    @Override
    public Hero create(Hero newHero) {
        try (Connection connection = dataSource.getConnection()) {
            PreparedStatement statement = connection.prepareStatement(
                    "INSERT INTO gral.hero (id, name, power) VALUES ( ?, ?, ?)");
            statement.setLong(1, newHero.getId());
            statement.setString(2, newHero.getName());
            statement.setString(3, newHero.getPower());

            int affectedRows = statement.executeUpdate();

            if (affectedRows == 0) {
                throw new SQLException("Creating hero failed, no rows affected.");
            }

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return newHero;
    }

    @Override
    public Hero update(Long id, Hero hero) {
        try (Connection connection = dataSource.getConnection()) {
            PreparedStatement updateStatement = connection.prepareStatement(
                    "UPDATE gral.hero SET name = ?, power = ? WHERE id = ?");
            updateStatement.setString(1, hero.getName());
            updateStatement.setString(2, hero.getPower());
            updateStatement.setLong(3, id);

            int rowsAffected = updateStatement.executeUpdate();
            if (rowsAffected == 0) {
                throw new SQLException("updating hero failed, no rows affected.");
            }
            return hero;

        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public boolean delete(Long id) {
        try (Connection connection = dataSource.getConnection()) {
            PreparedStatement statement = connection.prepareStatement(
                    "DELETE FROM gral.hero WHERE id = ?");

            statement.setLong(1, id);

            int rowsAffected = statement.executeUpdate();
            if (rowsAffected == 0) {
                throw new SQLException("Deleting hero failed, no rows affected.");
            }
            return true;
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

}

package com.example.hero.hero.repository;

import java.io.Serializable;

import org.springframework.boot.autoconfigure.domain.EntityScan;

import jakarta.persistence.Table;

@EntityScan
@Table(name = "sec_users", schema = "security")
public class HeroRepository implements Serializable {

}

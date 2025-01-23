package com.backwork.backen.repo;

import com.backwork.backen.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository <Users,Integer>{

    Users findByUsername(String username);


}
//PLAIN ->HASH 1 -> HASH 2
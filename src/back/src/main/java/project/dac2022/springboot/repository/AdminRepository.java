package project.dac2022.springboot.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.*;

import project.dac2022.springboot.model.AdminRegister;
//import project.dac2022.springboot.model.CustomerRegister;

public interface AdminRepository extends JpaRepository<AdminRegister, Long>{
	
	@Query(value = "SELECT * from admindetail where a_Email = ?", nativeQuery=true )
	AdminRegister findByEmail(String a_email);
	
//	@Query(value = "SELECT * from customerdetail where c_Email = ?", nativeQuery=true ")
//	CustomerRegister findByEmail(String c_email);

}

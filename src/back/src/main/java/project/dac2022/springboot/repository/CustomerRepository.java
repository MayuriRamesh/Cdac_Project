package project.dac2022.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.*;


import project.dac2022.springboot.model.CustomerRegister;

public interface CustomerRepository extends JpaRepository<CustomerRegister, Long>{

	@Query(value="SELECT * from customerdetail where c_Email = ?",nativeQuery = true)
	CustomerRegister findByEmail(String c_email);
	
	
	@Query(value="SELECT * from customerdetail", nativeQuery= true)
	CustomerRegister getCustomerDetails();
}

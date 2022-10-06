package project.dac2022.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import project.dac2022.springboot.model.TruckLendorRegister;

public interface TruckLenderRepository extends JpaRepository<TruckLendorRegister, Long> {

	
	
	@Query(value="SELECT * from trucklendor where t_Email = ?",nativeQuery = true)
	TruckLendorRegister findByEmail(String t_Email);

}

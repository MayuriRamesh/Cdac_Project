package project.dac2022.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import project.dac2022.springboot.model.DriverRegister;

public interface DriverRepository extends JpaRepository<DriverRegister, Long> {

	@Query(value="SELECT * from driverdetail where d_Phone = ?",nativeQuery = true)
	DriverRegister findByPhone(String d_Phone);

}

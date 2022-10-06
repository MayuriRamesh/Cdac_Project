package project.dac2022.springboot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import project.dac2022.springboot.model.Shipments;

public interface ShipmentsRepository extends JpaRepository<Shipments, Long> {

	
	@Query(value="SELECT * from shipments where i_id = ?",nativeQuery = true)
	public List<Shipments> findByi_id(Long i_id);

}

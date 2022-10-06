package project.dac2022.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

import org.springframework.data.jpa.repository.*;

import project.dac2022.springboot.model.Tracking;

public interface TrackingRepository extends JpaRepository<Tracking, Long> {

	@Query(value="SELECT * from tracking where trackingID = ?",nativeQuery = true)
	Tracking findByTrackingID(int trackingid);
	
	public List<Tracking> findBydriverID(Long driverID);
}

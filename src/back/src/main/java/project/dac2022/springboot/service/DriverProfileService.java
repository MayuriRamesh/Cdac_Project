package project.dac2022.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import project.dac2022.springboot.model.Tracking;
import project.dac2022.springboot.repository.TrackingRepository;

@Service
public class DriverProfileService {

	
	@Autowired
	TrackingRepository Track;
	
	public ResponseEntity<?> trackingDataEntry(Tracking track) {
		
		try {
			Track.save(track);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
		
	}

}

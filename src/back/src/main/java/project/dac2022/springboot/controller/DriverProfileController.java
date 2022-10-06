package project.dac2022.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.dac2022.springboot.model.Tracking;
import project.dac2022.springboot.service.DriverProfileService;

@RestController
@CrossOrigin("*")
@RequestMapping("/driverprofile")
public class DriverProfileController {

	@Autowired
	DriverProfileService DP_S;
	
	@PostMapping("/entertrackingdata")
	public ResponseEntity<?> trackingDataEntry(@RequestBody Tracking track)
	{
		return DP_S.trackingDataEntry(track);
	}
	
}

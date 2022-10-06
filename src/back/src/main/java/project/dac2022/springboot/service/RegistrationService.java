package project.dac2022.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import project.dac2022.springboot.model.CustomerRegister;
import project.dac2022.springboot.model.DriverRegister;
import project.dac2022.springboot.model.TruckLendorRegister;
import project.dac2022.springboot.repository.CustomerRepository;
import project.dac2022.springboot.repository.DriverRepository;
import project.dac2022.springboot.repository.TruckLenderRepository;

@Service
public class RegistrationService {

	@Autowired
	CustomerRepository C_R;
	
	@Autowired
	DriverRepository D_R;
	
	@Autowired
	TruckLenderRepository TL_R;
	
	public ResponseEntity<?> registerCustomer(CustomerRegister cR) {
		
		try {
			C_R.save(cR);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
		
	}

	public ResponseEntity<?> registerDriver(DriverRegister dR) {
		
		try {
			D_R.save(dR);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
		
	}
	
	public ResponseEntity<?> registerTruckLendor(TruckLendorRegister tlR) {
		
		try {
			TL_R.save(tlR);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
		
	}

}

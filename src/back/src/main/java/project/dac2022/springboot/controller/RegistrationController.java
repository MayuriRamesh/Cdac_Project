package project.dac2022.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.dac2022.springboot.model.CustomerRegister;
import project.dac2022.springboot.model.DriverRegister;
import project.dac2022.springboot.model.TruckLendorRegister;
import project.dac2022.springboot.service.RegistrationService;

@RestController
@CrossOrigin("*")
@RequestMapping("/registration")
public class RegistrationController {

	
	@Autowired
	RegistrationService R_S;
	
	
	@PostMapping
	@RequestMapping("/customer")
	public ResponseEntity<?> CustomerRegistration(@RequestBody CustomerRegister cR)
	{
		return R_S.registerCustomer(cR);
	}
	
	
	@PostMapping
	@RequestMapping("/driver")
	public ResponseEntity<?> DriverRegistration(@RequestBody DriverRegister dR)
	{
		return R_S.registerDriver(dR);
	}
	
	@PostMapping
	@RequestMapping("/trucklendor")
	public ResponseEntity<?> TruckLendorRegistration(@RequestBody TruckLendorRegister tlR)
	{
		return R_S.registerTruckLendor(tlR);
	}
}

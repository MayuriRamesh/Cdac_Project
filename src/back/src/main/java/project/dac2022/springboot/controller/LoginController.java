package project.dac2022.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.dac2022.springboot.model.AdminRegister;
import project.dac2022.springboot.model.CustomerRegister;
import project.dac2022.springboot.model.DriverRegister;
import project.dac2022.springboot.model.TruckLendorRegister;
import project.dac2022.springboot.service.LoginService;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/login")
public class LoginController {
	
	@Autowired
	LoginService L_S;
	
	@PostMapping("/admin")
	public ResponseEntity<AdminRegister> AdminLogin(@RequestBody AdminRegister aR )
	{
		System.out.println(aR.getA_Email());
		System.out.println(aR.getA_Password());
		return L_S.validateAdmin(aR);
	}
	
	@PostMapping("/customer")
	public ResponseEntity<CustomerRegister> CustomerLogin(@RequestBody CustomerRegister cR )
	{
		return L_S.validateCustomer(cR);
	}
	
	@PostMapping("/driver")
	public ResponseEntity<DriverRegister> DriverLogin(@RequestBody DriverRegister dR )
	{
		return L_S.validateDriver(dR);
	}
	
	@PostMapping("/trucklendor")
	public ResponseEntity<TruckLendorRegister> TruckLendorLogin(@RequestBody TruckLendorRegister tlR )
	{
		return L_S.validateTruckLendor(tlR);
	}

}

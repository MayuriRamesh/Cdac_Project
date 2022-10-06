package project.dac2022.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import project.dac2022.springboot.model.AdminRegister;
import project.dac2022.springboot.model.CustomerRegister;
import project.dac2022.springboot.model.DriverRegister;
import project.dac2022.springboot.model.TruckLendorRegister;
import project.dac2022.springboot.repository.AdminRepository;
import project.dac2022.springboot.repository.CustomerRepository;
import project.dac2022.springboot.repository.DriverRepository;
import project.dac2022.springboot.repository.TruckLenderRepository;


@Service
public class LoginService {

	
	@Autowired
	AdminRepository A_R;
	
	@Autowired
	CustomerRepository C_R;
	
	@Autowired
	DriverRepository D_R;
	
	@Autowired
	TruckLenderRepository TL_R;
	
	public ResponseEntity<AdminRegister> validateAdmin(AdminRegister aR) {
		
		AdminRegister admin=A_R.findByEmail(aR.getA_Email());
		
		System.out.println(admin.getA_Email());
		System.out.println(admin.getA_Password());
		
		if(admin.getA_Email().equals(aR.getA_Email()) && admin.getA_Password().equals(aR.getA_Password()))
			return new ResponseEntity<>(admin,HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	public ResponseEntity<CustomerRegister> validateCustomer(CustomerRegister cR) {
		
		CustomerRegister customer=C_R.findByEmail(cR.getC_Email());
		
		if(customer.getC_Email().equals(cR.getC_Email()) && customer.getC_Password().equals(cR.getC_Password()))
			return new ResponseEntity<>(customer,HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	public ResponseEntity<DriverRegister> validateDriver(DriverRegister dR) {
		
		DriverRegister driver=D_R.findByPhone(dR.getD_Phone());
		
		if(driver.getD_Phone().equals(dR.getD_Phone()) && driver.getD_Password().equals(dR.getD_Password()))
			return new ResponseEntity<>(driver,HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
	
	public ResponseEntity<TruckLendorRegister> validateTruckLendor(TruckLendorRegister tlR) {
		
		TruckLendorRegister truck=TL_R.findByEmail(tlR.getT_Email());
		
		if(truck.getT_Email().equals(tlR.getT_Email()) && truck.getT_Password().equals(tlR.getT_Password()))
			return new ResponseEntity<>(truck,HttpStatus.OK);
		else
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

}

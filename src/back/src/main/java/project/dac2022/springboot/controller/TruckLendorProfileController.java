package project.dac2022.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.dac2022.springboot.model.TruckLendorRegister;
import project.dac2022.springboot.service.TruckLendorProfileService;


@RestController
@CrossOrigin("*")
@RequestMapping("/trucklendorprofile")
public class TruckLendorProfileController {
	
	
	@Autowired
	TruckLendorProfileService TL_PS;
	
	@PutMapping("/updateprice")
	public ResponseEntity<TruckLendorRegister> updatePrice(@PathVariable long t_ID, @RequestBody TruckLendorRegister tlr)
	{
		return TL_PS.updatePrice(t_ID, tlr);
	}

}

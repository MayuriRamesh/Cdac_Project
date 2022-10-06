package project.dac2022.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.dac2022.springboot.model.Shipments;
import project.dac2022.springboot.model.Tracking;
import project.dac2022.springboot.model.TruckLendorRegister;
import project.dac2022.springboot.service.CustomerProfileService;

@RestController
@CrossOrigin("*")
@RequestMapping("/customerhomepage")
public class CustomerProfileController {

	@Autowired
	CustomerProfileService C_PS;
	
	
	@GetMapping
	@RequestMapping("/getshipmentbyid/{c_ID}")
	public List<Shipments> getShipmentDataById(@PathVariable Long c_ID)
	{
		return C_PS.getShipmentDataById(c_ID);
	}
	
	@PostMapping
	@RequestMapping("/createshipment")
	public ResponseEntity<Shipments> createShipment(@RequestBody Shipments ship)
	{
		return C_PS.createShipment(ship);
	}
	
	
	@PutMapping("/updateitem/{i_id}/{ranges}")
	public ResponseEntity<Shipments> updateItem(@PathVariable("i_id") long i_id, @PathVariable("ranges") double ranges)
	{
		System.out.println(i_id);
		System.out.println(ranges);
		return C_PS.updateItem(i_id, ranges);
	}
	
	@GetMapping("/gettrackingdata")
	public List<Tracking> getTrackingDataById(@PathVariable long d_ID)
	{
		return C_PS.getTrackingDataById(d_ID);
	}
	
	@GetMapping("/getprice")
	public List<TruckLendorRegister> getPriceRange()
	{
		return C_PS.getPriceRange();
	}
//	@GetMapping("/getalltransporter")
//	public List<TruckLendorRegister> getTransporter()
//	{
//		return C_PS.getAllTransporter();
//	}
//	
}

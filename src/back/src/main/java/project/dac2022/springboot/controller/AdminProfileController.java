package project.dac2022.springboot.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.dac2022.springboot.model.AdminRegister;
import project.dac2022.springboot.model.CustomerRegister;
import project.dac2022.springboot.model.DriverRegister;
import project.dac2022.springboot.model.Shipments;
import project.dac2022.springboot.model.Tracking;
import project.dac2022.springboot.model.TruckLendorRegister;
import project.dac2022.springboot.service.AdminProfileService;

@RestController 
@RequestMapping("/adminhomepage")
@CrossOrigin("*")
public class AdminProfileController {
	
	@Autowired
	AdminProfileService A_PS;
	
	@GetMapping 
	@RequestMapping("/getcustomerdata")
	public List<CustomerRegister> getAllCustomer()
	{
		return A_PS.getAllCustomer();
	}

	@GetMapping
	@RequestMapping("/getdriverdata")
	public List<DriverRegister> getAllDriver()
	{
		return A_PS.getAllDriver();
	}
	
	@GetMapping
	@RequestMapping("/gettrucklendordata")
	public List<TruckLendorRegister> getAllLendors()
	{
		return A_PS.getAllLendors();
	}
	
	@GetMapping
	@RequestMapping("/getadmindata")
	public List<AdminRegister> getAllAdmins()
	{
		return A_PS.getAllAdmins();
	}
	
	@PostMapping
	@RequestMapping("/createcustomer")
	public ResponseEntity<?> CustomerCreation(@RequestBody CustomerRegister cr)
	{
		return A_PS.createCustomer(cr);
	}
	
	@PostMapping
	@RequestMapping("/createdriver")
	public ResponseEntity<?> DriverCreation(@RequestBody DriverRegister dr)
	{
		return A_PS.createDriver(dr);
	}
	
	@PostMapping
	@RequestMapping("/createtrucklendor")
	public ResponseEntity<?> TruckLendorCreation(@RequestBody TruckLendorRegister tlr)
	{
		return A_PS.createTruckLendor(tlr);
	}
	
	
	@GetMapping
	@RequestMapping("/getcustomer/{c_ID}")
	public ResponseEntity<CustomerRegister> getCustomerbyId(@PathVariable long c_ID)
	{
		return A_PS.getCustomerbyId(c_ID);
	}
	
	@PutMapping("/updateCustomer/{c_ID}")
	public ResponseEntity<CustomerRegister> updateCustomer(@PathVariable long c_ID,@RequestBody CustomerRegister c_R)
	{
		return A_PS.updateCustomer(c_ID,c_R);
	}
	
	@PutMapping("/updateDriver/{d_ID}")
	public ResponseEntity<DriverRegister> updateCustomer(long d_ID, DriverRegister d_R)
	{
		return A_PS.updateDriver(d_ID,d_R);
	}
	
	@PutMapping("/updateTruckLendor/{tl_ID}")
	public ResponseEntity<TruckLendorRegister> updateTruckLendor(long tl_ID, TruckLendorRegister tl_R)
	{
		return A_PS.updateTruckLendor(tl_ID,tl_R);
	}
	
	
	@DeleteMapping("deleteCustomer/{c_ID}")
	public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable long c_ID)
	{
		return A_PS.deleteCustomer(c_ID);
	}
	
	@DeleteMapping("deleteDriver/{d_ID}")
	public ResponseEntity<Map<String, Boolean>> deleteDriver(@PathVariable long d_ID)
	{
		return A_PS.deleteDriver(d_ID);
	}
	
	@DeleteMapping("deleteTruckLendor/{tl_ID}")
	public ResponseEntity<Map<String, Boolean>> deleteTruckLendor(@PathVariable long tl_ID)
	{
		return A_PS.deleteTruckLendor(tl_ID);
	}
	
	@PostMapping("/createshipment")
	public ResponseEntity<?> ShipmentCreation(@RequestBody Shipments ship)
	{
		return A_PS.ShipmentCreation(ship);
	}
	
	@GetMapping 
	@RequestMapping("/getshipmentdata")
	public List<Shipments> getAllShipment()
	{
		return A_PS.getAllShipment();
	}
	
	@GetMapping
	@RequestMapping("/getshipmentdata/{shipmentID}")
	public ResponseEntity<Shipments> getShipmentbyId(@PathVariable long shipmentID)
	{
		return A_PS.getShipmentbyId(shipmentID);
	}
	
	@GetMapping
	@RequestMapping("/getshipmentdatabycustomerid/{customerID}")
	public List<Shipments> getShipmentByCustomerId(@PathVariable long customerID)
	{
		return A_PS.getShipmentByCustomerId(customerID);
	}
	
	@GetMapping
	@RequestMapping("/getalltrackingdata")
	public List<Tracking> getAllTrackingData()
	{
		return A_PS.getAllTrackingData();
	}
	
	@GetMapping
	@RequestMapping("/gettrackingdatabyid/{d_ID}")
	public List<Tracking> getTrackingDataById(@PathVariable long d_ID)
	{
		return A_PS.getTrackingDataById(d_ID);
	}
	
	@PostMapping
	@RequestMapping("/addtrackingdata")
	public ResponseEntity<?> trackingDataEntry(@RequestBody Tracking TR)
	{
		return A_PS.trackingDataEntry(TR);
	}
	
	@PutMapping
	@RequestMapping("/updatetrackingdatabyid/{tID}")
	public ResponseEntity<Tracking> updateTrackingDataById(@RequestBody Tracking tR, @PathVariable long tID)
	{
		return A_PS.updateTrackingDataById(tR, tID);
	}
	
	
}

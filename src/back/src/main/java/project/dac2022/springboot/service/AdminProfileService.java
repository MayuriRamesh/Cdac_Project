package project.dac2022.springboot.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import project.dac2022.springboot.model.AdminRegister;
import project.dac2022.springboot.model.CustomerRegister;
import project.dac2022.springboot.model.DriverRegister;
import project.dac2022.springboot.model.Shipments;
import project.dac2022.springboot.model.Tracking;
import project.dac2022.springboot.model.TruckLendorRegister;
import project.dac2022.springboot.repository.AdminRepository;
import project.dac2022.springboot.repository.CustomerRepository;
import project.dac2022.springboot.repository.DriverRepository;
import project.dac2022.springboot.repository.ShipmentsRepository;
import project.dac2022.springboot.repository.TrackingRepository;
import project.dac2022.springboot.repository.TruckLenderRepository;

@Service
public class AdminProfileService {

	
	@Autowired
	AdminRepository A_R;
	
	@Autowired
	CustomerRepository C_R;
	
	@Autowired
	DriverRepository D_R;
	
	@Autowired
	TruckLenderRepository TL_R;
	
	
	@Autowired
	ShipmentsRepository Ship;
	
	@Autowired
	TrackingRepository Track;
	
	
	// Get all customer/user details
	public List<CustomerRegister> getAllCustomer() {
				
		return C_R.findAll();
		
	}


	//get All employed Driver Details
	public List<DriverRegister> getAllDriver() {
		
		return D_R.findAll();
	}


	// get All Truck Lendor Details
	public List<TruckLendorRegister> getAllLendors() {
		
		return TL_R.findAll();
	}


	//get All Administrators details
	public List<AdminRegister> getAllAdmins() {
		
		return A_R.findAll();
		
	}


	public ResponseEntity<?> createCustomer(CustomerRegister cr) {
		
		
		try {
			C_R.save(cr);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	
	public ResponseEntity<?> createDriver(DriverRegister dr) {
		
		
		try {
			D_R.save(dr);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}
	
	
	public ResponseEntity<?> createTruckLendor(TruckLendorRegister tlr) {
				
		try {
			TL_R.save(tlr);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}


	public ResponseEntity<CustomerRegister> updateCustomer(long c_ID, CustomerRegister c_R2) {
		
		
		CustomerRegister updateCustomer = C_R.findById(c_ID).orElseThrow(null);
		
		
		updateCustomer.setC_FirstName(c_R2.getC_FirstName());
		updateCustomer.setC_MiddleName(c_R2.getC_MiddleName());
		updateCustomer.setC_LastName(c_R2.getC_LastName());
		updateCustomer.setC_Email(c_R2.getC_Email());
		updateCustomer.setC_Password(c_R2.getC_Password());
		updateCustomer.setC_Phone(c_R2.getC_Phone());
		updateCustomer.setC_Address(c_R2.getC_Address());
		C_R.save(updateCustomer);
		
		return ResponseEntity.ok(updateCustomer);
	}


	public ResponseEntity<DriverRegister> updateDriver(long d_ID, DriverRegister d_R2) {
		
		DriverRegister updateDriver = D_R.findById(d_ID).orElseThrow(null);
		
		updateDriver.setD_FirstName(d_R2.getD_FirstName());
		updateDriver.setD_MiddleName(d_R2.getD_MiddleName());
		updateDriver.setD_LastName(d_R2.getD_LastName());
		//updateDriver.setD_Email(d_R2.getD_Email());
		updateDriver.setD_Password(d_R2.getD_Password());
		updateDriver.setD_Aadhar_no(d_R2.getD_Aadhar_no());
		updateDriver.setD_DrivingLiscence_no(d_R2.getD_DrivingLiscence_no());
		updateDriver.setD_Phone(d_R2.getD_Phone());
		updateDriver.setD_Address(d_R2.getD_Address());
		
		
		D_R.save(updateDriver);
		
		return ResponseEntity.ok(updateDriver);
	}


	public ResponseEntity<TruckLendorRegister> updateTruckLendor(long tl_ID, TruckLendorRegister tl_R2) {
		
		TruckLendorRegister updateTruckLendor = TL_R.findById(tl_ID).orElseThrow(null);
		
		updateTruckLendor.setT_FirstName(tl_R2.getT_FirstName());
		updateTruckLendor.setT_MiddleName(tl_R2.getT_MiddleName());
		updateTruckLendor.setT_LastName(tl_R2.getT_LastName());
		updateTruckLendor.setT_Email(tl_R2.getT_Email());
		updateTruckLendor.setT_Password(tl_R2.getT_Password());
		updateTruckLendor.setT_Aadhar_no(tl_R2.getT_Aadhar_no());
		updateTruckLendor.setT_Phone(tl_R2.getT_Phone());
		updateTruckLendor.setT_Address(tl_R2.getT_Address());
		
		
		return ResponseEntity.ok(updateTruckLendor);
	}


	public ResponseEntity<Map<String, Boolean>> deleteCustomer(long c_ID) {
		
		CustomerRegister cr = C_R.findById(c_ID).orElseThrow(null);
		
		C_R.delete(cr);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}


	public ResponseEntity<Map<String, Boolean>> deleteDriver(long d_ID) {
		
		DriverRegister dr = D_R.findById(d_ID).orElseThrow(null);
		
		D_R.delete(dr);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}


	public ResponseEntity<Map<String, Boolean>> deleteTruckLendor(long tl_ID) {
		
		TruckLendorRegister tlr = TL_R.findById(tl_ID).orElseThrow(null);
		
		TL_R.delete(tlr);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("Deleted", Boolean.TRUE);
		
		return ResponseEntity.ok(response);
	}


	public ResponseEntity<CustomerRegister> getCustomerbyId(long c_ID) {
		
		CustomerRegister cr = C_R.findById(c_ID).orElseThrow(null);
		return ResponseEntity.ok(cr);
		
	}


	public ResponseEntity<?> ShipmentCreation(Shipments ship) {
		try {
			Ship.save(ship);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
	}


	public List<Shipments> getAllShipment() {
		
		
		return Ship.findAll();
	}


	public ResponseEntity<Shipments> getShipmentbyId(long shipmentID) {
		
		Shipments ship = Ship.findById(shipmentID).orElseThrow(null);
		return ResponseEntity.ok(ship);
	}


	public List<Shipments> getShipmentByCustomerId(long customerID) {
		
		return Ship.findByi_id(customerID);
	}


	public List<Tracking> getAllTrackingData() {
		
		return Track.findAll();
	}


	public List<Tracking> getTrackingDataById(Long d_ID2) {
		
		return Track.findBydriverID(d_ID2);
	}


	public ResponseEntity<?> trackingDataEntry(Tracking tR) {

		try {
			Track.save(tR);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
		
	}


	public ResponseEntity<Tracking> updateTrackingDataById(Tracking tR, long tID) {
		
		
	    	Tracking Trac = Track.findById(tID).orElseThrow(null);
	    	
	    	
				Trac.setDriverID(tR.getDriverID());
				Trac.setTrackingID(tR.getTrackingID());
				Trac.setCheckpoint(tR.getCheckpoint());
				Trac.setTime_stamp(tR.getTime_stamp());
				
				Track.save(Trac);
				return ResponseEntity.ok(Trac);
			
		
	}
	
}

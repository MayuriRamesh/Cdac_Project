package project.dac2022.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import project.dac2022.springboot.repository.CustomerRepository;
import project.dac2022.springboot.repository.ShipmentsRepository;
import project.dac2022.springboot.repository.TrackingRepository;
import project.dac2022.springboot.repository.TruckLenderRepository;
//import project.dac2022.springboot.model.CustomerRegister;
import project.dac2022.springboot.model.Shipments;
//import project.dac2022.springboot.model.Tracking;
import project.dac2022.springboot.model.Tracking;
import project.dac2022.springboot.model.TruckLendorRegister;


@Service
public class CustomerProfileService {
	
	
	@Autowired
	CustomerRepository C_R;
	
	@Autowired
	ShipmentsRepository Ship;
	
	@Autowired
	TrackingRepository Trac;
	
	@Autowired
	TruckLenderRepository TL_R;

	public List<Shipments> getShipmentDataById(Long i_id) {
		
		return Ship.findByi_id(i_id);
	}

	public ResponseEntity<Shipments> createShipment(Shipments ship2) {
		
		try {
			Shipments shipments = Ship.save(ship2);
			return ResponseEntity.ok(shipments);
		} catch (Exception e) {	
			return new ResponseEntity<>(HttpStatus.EXPECTATION_FAILED);
		}
		
	}

	public ResponseEntity<Shipments> updateItem(long i_id, double ranges) {
		
		Shipments Item = Ship.findById(i_id).orElseThrow(null);
		
		Item.setRange(ranges);
		Ship.save(Item);
		return ResponseEntity.ok(Item);
	}

	public List<Tracking> getTrackingDataById(long d_ID) {
		
		return Trac.findBydriverID(d_ID);
	}

	public List<TruckLendorRegister> getPriceRange() {
		
		return TL_R.findAll();
	}

//	public List<TruckLendorRegister> getAllTransporter() {
//		
//		return TL_R.findAll();
//	}

	
	
	
	

}

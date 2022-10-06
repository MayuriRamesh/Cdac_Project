package project.dac2022.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import project.dac2022.springboot.model.TruckLendorRegister;
import project.dac2022.springboot.repository.TruckLenderRepository;

@Service
public class TruckLendorProfileService {

	
	@Autowired
	TruckLenderRepository TL_R;
	
	public ResponseEntity<TruckLendorRegister> updatePrice(long t_ID, TruckLendorRegister tlr) {
		
		TruckLendorRegister truck = TL_R.findById(t_ID).orElseThrow(null);
		
		truck.setRange_A(tlr.getRange_A());
		truck.setRange_B(tlr.getRange_B());
		truck.setRange_C(tlr.getRange_C());
		TL_R.save(truck);
		
		return ResponseEntity.ok(truck);
	}

	
	
	
}

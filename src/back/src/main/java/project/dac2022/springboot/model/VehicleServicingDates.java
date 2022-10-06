package project.dac2022.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Id;



@Entity
@Table(name = "VehicleServiceDates")
public class VehicleServicingDates {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "Id")
	private long Id;
	
	@Column(name = "VehicleNumber")
	private String VehicleNumber;
	
	@Column(name = "LastServiceDate")
	private String LastServiceDate;

	@Override
	public String toString() {
		return "VehicleServicingDates [Id=" + Id + ", VehicleNumber=" + VehicleNumber + ", LastServiceDate="
				+ LastServiceDate + "]";
	}

	

	VehicleServicingDates() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getVehicleNumber() {
		return VehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		VehicleNumber = vehicleNumber;
	}

	public String getLastServiceDate() {
		return LastServiceDate;
	}

	public void setLastServiceDate(String lastServiceDate) {
		LastServiceDate = lastServiceDate;
	}

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	VehicleServicingDates(Long id, String vehicleNumber, String lastServiceDate) {
		super();
		Id = id;
		VehicleNumber = vehicleNumber;
		LastServiceDate = lastServiceDate;
	}
	
	

	
}

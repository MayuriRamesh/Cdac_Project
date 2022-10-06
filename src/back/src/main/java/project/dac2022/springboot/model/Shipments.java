package project.dac2022.springboot.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="shipments")
public class Shipments {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="i_id", nullable=false)
	private long i_id;
	
Shipments() {
		super();
		// TODO Auto-generated constructor stub
	}



	
	@Override
	public String toString() {
		return "Shipments [i_id=" + i_id + ", i_name=" + i_name + ", i_weight=" + i_weight + ", pickup_time="
				+ pickup_time + ", pickup_location=" + pickup_location + ", pickup_state=" + pickup_state
				+ ", pickup_city=" + pickup_city + ", delivery_city=" + delivery_city + ", delivery_state="
				+ delivery_state + ", delivery_location=" + delivery_location + ", description=" + description
				+ ", ranges=" + ranges + "]";
	}

	public Long getI_id() {
		return i_id;
	}

	public void setI_id(Long i_id) {
		this.i_id = i_id;
	}

	public String getI_name() {
		return i_name;
	}

	public void setI_name(String i_name) {
		this.i_name = i_name;
	}

	public double getI_weight() {
		return i_weight;
	}

	public void setI_weight(double i_weight) {
		this.i_weight = i_weight;
	}

	public String getPickup_time() {
		return pickup_time;
	}

	public void setPickup_time(String pickup_time) {
		this.pickup_time = pickup_time;
	}

	public String getPickup_location() {
		return pickup_location;
	}

	public void setPickup_location(String pickup_location) {
		this.pickup_location = pickup_location;
	}

	public String getPickup_state() {
		return pickup_state;
	}

	public void setPickup_state(String pickup_state) {
		this.pickup_state = pickup_state;
	}

	public String getPickup_city() {
		return pickup_city;
	}

	public void setPickup_city(String pickup_city) {
		this.pickup_city = pickup_city;
	}

	public String getDelivery_city() {
		return delivery_city;
	}

	public void setDelivery_city(String delivery_city) {
		this.delivery_city = delivery_city;
	}

	public String getDelivery_state() {
		return delivery_state;
	}

	public void setDelivery_state(String delivery_state) {
		this.delivery_state = delivery_state;
	}

	public String getDelivery_location() {
		return delivery_location;
	}

	public void setDelivery_location(String delivery_location) {
		this.delivery_location = delivery_location;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column  (name="i_name")
	private String i_name;
	
	@Column  (name="i_weight")
	private double i_weight;
	
	@Column  (name="pickup_time")
	private String pickup_time;
	
	@Column  (name="pickup_location")
	private String pickup_location;
	
	@Column  (name="pickup_state")
	private String pickup_state;
	
	@Column  (name="pickup_city")
	private String pickup_city;
	
	@Column  (name="delivery_city")
	private String delivery_city;
	
	@Column  (name="delivery_state")
	private String delivery_state;
	
	@Column  (name="delivery_location")
	private String delivery_location;
	
	@Column  (name="description")
	private String description;
	
//	@Column (name="driverAssign")
//	private String driverAssign;
//	
//	@Column (name = "vehicleAssign")
//	private String vehicleassign;
	
//	@Column (name = "CustomerID")
//	private Long customerID;
	
	@Column (name = "ranges")
	private double ranges;
	
//	
//
//	public String getDriverAssign() {
//		return driverAssign;
//	}
//
//	public void setDriverAssign(String driverAssign) {
//		this.driverAssign = driverAssign;
//	}
//
//	public String getVehicleassign() {
//		return vehicleassign;
//	}
//
//	public void setVehicleassign(String vehicleassign) {
//		this.vehicleassign = vehicleassign;
//	}

//	public Long getCustomerID() {
//		return customerID;
//	}
//
//	public void setCustomerID(Long customeriD) {
//		customerID = customeriD;
//	}
	
	
	public double getRange() {
		return ranges;
	}

	public void setRange(double ranges) {
		this.ranges = ranges;
	}




	Shipments(Long i_id, String i_name, double i_weight, String pickup_time, String pickup_location,
			String pickup_state, String pickup_city, String delivery_city, String delivery_state,
			String delivery_location, String description, Long customerID,
			double ranges) {
		super();
		this.i_id = i_id;
		this.i_name = i_name;
		this.i_weight = i_weight;
		this.pickup_time = pickup_time;
		this.pickup_location = pickup_location;
		this.pickup_state = pickup_state;
		this.pickup_city = pickup_city;
		this.delivery_city = delivery_city;
		this.delivery_state = delivery_state;
		this.delivery_location = delivery_location;
		this.description = description;
		//this.driverAssign = driverAssign;
		//this.vehicleassign = vehicleassign;
		//this.customerID = customerID;
		this.ranges = ranges;
	}




	
	}
	
	
	


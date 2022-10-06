package project.dac2022.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="vehicledetail")
public class VehicleDetail {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="vehicle_ID")
	private long vehicle_ID;
	
	
	@Column(name = "VehicleNumber")
	private String VehicleNumber;
	
	@Column(name = "Make")
	private String Make;
	
	@Column(name = "Model")
	private String Model;
	
	@Column(name = "EngineCapacity")
	private String EngineCapacity;
	
	@Column(name = "Engine")
	private String Engine;
	
	@Column(name = "EnginePower")
	private String EnginePower;
	
	@Column(name = "EngineTorque")
	private String EngineTorque;
	
	@Column(name = "FuelTankCapacity")
	private String FuelTankCapacity;
	
	@Column(name = "Clutch")
	private String Clutch;
	
	@Column(name = "GearBox")
	private String GearBox;
	
	@Column(name = "Steering")
	private String Steering;
	
	@Column(name = "SuspensionFront")
	private String SuspensionFront;
	
	@Column(name = "SuspensionBack")
	private String SuspensionBack;
	
	@Column(name = "BrakesFront")
	private String BrakesFront;
	
	@Column(name = "BrakesRear")
	private String BrakesRear;
	
	@Column(name = "Wheels")
	private String Wheels;
	
	@Column(name = "WheelBase")
	private String WheelBase;
	
	@Column(name = "Width")
	private String Width;
	
	@Column(name = "Length")
	private String Length;
	
	@Column(name = "Height")
	private String Height;
	
	@Column(name = "GroundClearance")
	private String GroundClearance;
	
	@Column(name = "LoadBayDimensions")
	private String LoadBayDimensions;
	
	@Column(name = "TurningRadius")
	private String TurningRadius;
	
	@Column(name = "Weight")
	private String Weight;
	
	@Column(name = "Gradability")
	private String Gradability;
	
	@Column(name = "TopSpeed")
	private String TopSpeed;
	
	@Column(name = "OperatingSpeed")
	private String OperatingSpeed;
	
	@Column(name = "Mileage")
	private String Mileage;
	
	//@Column(name = "Range")
	//private String Range; //= String.valueOf(Double.parseDouble(OperatingSpeed)*Double.parseDouble(Mileage))+" km";

	@Column(name = "StartDate")
	private String StartDate;
	
	@Column(name = "EndDate")
	private String EndDate;
	
	@Column(name = "LastServiceDay")
	private String LastServiceDay;
	
	@Column(name = "Status")
	private String Status;
	
	@Column(name = "Owner")
	private String Owner;

	VehicleDetail() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "VehicleDetail [vehicle_ID=" + vehicle_ID + ", VehicleNumber=" + VehicleNumber + ", Make=" + Make
				+ ", Model=" + Model + ", EngineCapacity=" + EngineCapacity + ", Engine=" + Engine + ", EnginePower="
				+ EnginePower + ", EngineTorque=" + EngineTorque + ", FuelTankCapacity=" + FuelTankCapacity
				+ ", Clutch=" + Clutch + ", GearBox=" + GearBox + ", Steering=" + Steering + ", SuspensionFront="
				+ SuspensionFront + ", SuspensionBack=" + SuspensionBack + ", BrakesFront=" + BrakesFront
				+ ", BrakesRear=" + BrakesRear + ", Wheels=" + Wheels + ", WheelBase=" + WheelBase + ", Width=" + Width
				+ ", Length=" + Length + ", Height=" + Height + ", GroundClearance=" + GroundClearance
				+ ", LoadBayDimensions=" + LoadBayDimensions + ", TurningRadius=" + TurningRadius + ", Weight=" + Weight
				+ ", Gradability=" + Gradability + ", TopSpeed=" + TopSpeed + ", OperatingSpeed=" + OperatingSpeed
				+ ", Mileage=" + Mileage +  ", StartDate=" + StartDate + ", EndDate=" + EndDate
				+ ", LastServiceDay=" + LastServiceDay + ", Status=" + Status + ", Owner=" + Owner + "]";
	}

	VehicleDetail(long vehicle_ID, String vehicleNumber, String make, String model, String engineCapacity,
			String engine, String enginePower, String engineTorque, String fuelTankCapacity, String clutch,
			String gearBox, String steering, String suspensionFront, String suspensionBack, String brakesFront,
			String brakesRear, String wheels, String wheelBase, String width, String length, String height,
			String groundClearance, String loadBayDimensions, String turningRadius, String weight, String gradability,
			String topSpeed, String operatingSpeed, String mileage, String range, String startDate, String endDate,
			String lastServiceDay, String status, String owner) {
		super();
		this.vehicle_ID = vehicle_ID;
		VehicleNumber = vehicleNumber;
		Make = make;
		Model = model;
		EngineCapacity = engineCapacity;
		Engine = engine;
		EnginePower = enginePower;
		EngineTorque = engineTorque;
		FuelTankCapacity = fuelTankCapacity;
		Clutch = clutch;
		GearBox = gearBox;
		Steering = steering;
		SuspensionFront = suspensionFront;
		SuspensionBack = suspensionBack;
		BrakesFront = brakesFront;
		BrakesRear = brakesRear;
		Wheels = wheels;
		WheelBase = wheelBase;
		Width = width;
		Length = length;
		Height = height;
		GroundClearance = groundClearance;
		LoadBayDimensions = loadBayDimensions;
		TurningRadius = turningRadius;
		Weight = weight;
		Gradability = gradability;
		TopSpeed = topSpeed;
		OperatingSpeed = operatingSpeed;
		Mileage = mileage;
		//Range = range;
		StartDate = startDate;
		EndDate = endDate;
		LastServiceDay = lastServiceDay;
		Status = status;
		Owner = owner;
	}

	public long getVehicle_ID() {
		return vehicle_ID;
	}

	public void setVehicle_ID(long vehicle_ID) {
		this.vehicle_ID = vehicle_ID;
	}

	public String getVehicleNumber() {
		return VehicleNumber;
	}

	public void setVehicleNumber(String vehicleNumber) {
		VehicleNumber = vehicleNumber;
	}

	public String getMake() {
		return Make;
	}

	public void setMake(String make) {
		Make = make;
	}

	public String getModel() {
		return Model;
	}

	public void setModel(String model) {
		Model = model;
	}

	public String getEngineCapacity() {
		return EngineCapacity;
	}

	public void setEngineCapacity(String engineCapacity) {
		EngineCapacity = engineCapacity;
	}

	public String getEngine() {
		return Engine;
	}

	public void setEngine(String engine) {
		Engine = engine;
	}

	public String getEnginePower() {
		return EnginePower;
	}

	public void setEnginePower(String enginePower) {
		EnginePower = enginePower;
	}

	public String getEngineTorque() {
		return EngineTorque;
	}

	public void setEngineTorque(String engineTorque) {
		EngineTorque = engineTorque;
	}

	public String getFuelTankCapacity() {
		return FuelTankCapacity;
	}

	public void setFuelTankCapacity(String fuelTankCapacity) {
		FuelTankCapacity = fuelTankCapacity;
	}

	public String getClutch() {
		return Clutch;
	}

	public void setClutch(String clutch) {
		Clutch = clutch;
	}

	public String getGearBox() {
		return GearBox;
	}

	public void setGearBox(String gearBox) {
		GearBox = gearBox;
	}

	public String getSteering() {
		return Steering;
	}

	public void setSteering(String steering) {
		Steering = steering;
	}

	public String getSuspensionFront() {
		return SuspensionFront;
	}

	public void setSuspensionFront(String suspensionFront) {
		SuspensionFront = suspensionFront;
	}

	public String getSuspensionBack() {
		return SuspensionBack;
	}

	public void setSuspensionBack(String suspensionBack) {
		SuspensionBack = suspensionBack;
	}

	public String getBrakesFront() {
		return BrakesFront;
	}

	public void setBrakesFront(String brakesFront) {
		BrakesFront = brakesFront;
	}

	public String getBrakesRear() {
		return BrakesRear;
	}

	public void setBrakesRear(String brakesRear) {
		BrakesRear = brakesRear;
	}

	public String getWheels() {
		return Wheels;
	}

	public void setWheels(String wheels) {
		Wheels = wheels;
	}

	public String getWheelBase() {
		return WheelBase;
	}

	public void setWheelBase(String wheelBase) {
		WheelBase = wheelBase;
	}

	public String getWidth() {
		return Width;
	}

	public void setWidth(String width) {
		Width = width;
	}

	public String getLength() {
		return Length;
	}

	public void setLength(String length) {
		Length = length;
	}

	public String getHeight() {
		return Height;
	}

	public void setHeight(String height) {
		Height = height;
	}

	public String getGroundClearance() {
		return GroundClearance;
	}

	public void setGroundClearance(String groundClearance) {
		GroundClearance = groundClearance;
	}

	public String getLoadBayDimensions() {
		return LoadBayDimensions;
	}

	public void setLoadBayDimensions(String loadBayDimensions) {
		LoadBayDimensions = loadBayDimensions;
	}

	public String getTurningRadius() {
		return TurningRadius;
	}

	public void setTurningRadius(String turningRadius) {
		TurningRadius = turningRadius;
	}

	public String getWeight() {
		return Weight;
	}

	public void setWeight(String weight) {
		Weight = weight;
	}

	public String getGradability() {
		return Gradability;
	}

	public void setGradability(String gradability) {
		Gradability = gradability;
	}

	public String getTopSpeed() {
		return TopSpeed;
	}

	public void setTopSpeed(String topSpeed) {
		TopSpeed = topSpeed;
	}

	public String getOperatingSpeed() {
		return OperatingSpeed;
	}

	public void setOperatingSpeed(String operatingSpeed) {
		OperatingSpeed = operatingSpeed;
	}

	public String getMileage() {
		return Mileage;
	}

	public void setMileage(String mileage) {
		Mileage = mileage;
	}

//	public String getRange() {
//		return Range;
//	}
//
//	public void setRange(String range) {
//		Range = range;
//	}

	public String getStartDate() {
		return StartDate;
	}

	public void setStartDate(String startDate) {
		StartDate = startDate;
	}

	public String getEndDate() {
		return EndDate;
	}

	public void setEndDate(String endDate) {
		EndDate = endDate;
	}

	public String getLastServiceDay() {
		return LastServiceDay;
	}

	public void setLastServiceDay(String lastServiceDay) {
		LastServiceDay = lastServiceDay;
	}

	public String getStatus() {
		return Status;
	}

	public void setStatus(String status) {
		Status = status;
	}

	public String getOwner() {
		return Owner;
	}

	public void setOwner(String owner) {
		Owner = owner;
	}
	
	
	
}

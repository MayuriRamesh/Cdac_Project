package project.dac2022.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="driverdetail")
public class DriverRegister {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="d_ID")
	private long d_ID;
	
	@Column(name="d_FirstName",nullable=false)
	private String d_FirstName;
	
	@Column(name="d_MiddleName")
	private String d_MiddleName;
	
	@Column(name="d_LastName",nullable=false)
	private String d_LastName;
	
//	@Column(name="d_Email",nullable=false, unique=true)
//	private String d_Email;
	
	@Column(name="d_Password",nullable=false)
	private String d_Password;
	
	@Column (name = "d_Aadhar_no", nullable=false)
	private long d_Aadhar_no;
	
	@Column (name = "d_DrivingLiscence_no", nullable=false)
	private String d_DrivingLiscence_no;
	
	@Column(name="d_Phone",nullable=false)
	private String d_Phone;
	
	@Column(name="d_Address",nullable=false)
	private String d_Address;
	
	

	
	DriverRegister() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getD_ID() {
		return d_ID;
	}

	public void setD_ID(long d_ID) {
		this.d_ID = d_ID;
	}

	public String getD_FirstName() {
		return d_FirstName;
	}

	public void setD_FirstName(String d_FirstName) {
		this.d_FirstName = d_FirstName;
	}

	public String getD_MiddleName() {
		return d_MiddleName;
	}

	public void setD_MiddleName(String d_MiddleName) {
		this.d_MiddleName = d_MiddleName;
	}

	public String getD_LastName() {
		return d_LastName;
	}

	public void setD_LastName(String d_LastName) {
		this.d_LastName = d_LastName;
	}

//	public String getD_Email() {
//		return d_Email;
//	}
//
//	public void setD_Email(String d_Email) {
//		this.d_Email = d_Email;
//	}

	public String getD_Password() {
		return d_Password;
	}

	public void setD_Password(String d_Password) {
		this.d_Password = d_Password;
	}

	public String getD_Phone() {
		return d_Phone;
	}

	public void setD_Phone(String d_Phone) {
		this.d_Phone = d_Phone;
	}

	public String getD_Address() {
		return d_Address;
	}

	public void setD_Address(String d_Address) {
		this.d_Address = d_Address;
	}


	public long getD_Aadhar_no() {
		return d_Aadhar_no;
	}

	public void setD_Aadhar_no(long d_Aadhar_no) {
		this.d_Aadhar_no = d_Aadhar_no;
	}

	public String getD_DrivingLiscence_no() {
		return d_DrivingLiscence_no;
	}

	public void setD_DrivingLiscence_no(String d_DrivingLiscence_no) {
		this.d_DrivingLiscence_no = d_DrivingLiscence_no;
	}

	DriverRegister(long d_ID, String d_FirstName, String d_MiddleName, String d_LastName, 
			String d_Password, long d_Aadhar_no, String d_DrivingLiscence_no, String d_Phone, String d_Address) {
		super();
		this.d_ID = d_ID;
		this.d_FirstName = d_FirstName;
		this.d_MiddleName = d_MiddleName;
		this.d_LastName = d_LastName;
//		this.d_Email = d_Email;
		this.d_Password = d_Password;
		this.d_Aadhar_no = d_Aadhar_no;
		this.d_DrivingLiscence_no = d_DrivingLiscence_no;
		this.d_Phone = d_Phone;
		this.d_Address = d_Address;
	}

	@Override
	public String toString() {
		return "DriverRegister [d_ID=" + d_ID + ", d_FirstName=" + d_FirstName + ", d_MiddleName=" + d_MiddleName
				+ ", d_LastName=" + d_LastName + ", d_Email=" +  ", d_Password=" + d_Password
				+ ", d_Aadhar_no=" + d_Aadhar_no + ", d_DrivingLiscence_no=" + d_DrivingLiscence_no + ", d_Phone="
				+ d_Phone + ", d_Address=" + d_Address + "]";
	}

	
	
	
	
	
	
}


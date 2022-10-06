package project.dac2022.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="trucklendor")


public class TruckLendorRegister {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="t_ID")
	private long t_ID;
	
	@Column(name="t_FirstName",nullable=false)
	private String t_FirstName;
	
	@Column(name="t_MiddleName")
	private String t_MiddleName;
	
	@Column(name="t_LastName",nullable=false)
	private String t_LastName;
	
	@Column(name="t_Email",nullable=false, unique=true)
	private String t_Email;
	
	@Column(name="t_Password",nullable=false)
	private String t_Password;
	
	@Column (name = "t_Aadhar_no", nullable=false)
	private long t_Aadhar_no;
	
	@Column(name="t_Phone",nullable=false)
	private String t_Phone;
	
	@Column(name="t_Address",nullable=false)
	private String t_Address;
	
	@Column (name="Range_A")
	private double Range_A;
	
	@Column (name = "Range_B")
	private double Range_B;
	
	@Column (name = "Range_C")
	private double Range_C;
	


	
	TruckLendorRegister() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	public long getT_ID() {
		return t_ID;
	}

	public void setT_ID(long t_ID) {
		this.t_ID = t_ID;
	}

	public String getT_FirstName() {
		return t_FirstName;
	}

	public void setT_FirstName(String t_FirstName) {
		this.t_FirstName = t_FirstName;
	}

	public String getT_MiddleName() {
		return t_MiddleName;
	}

	public void setT_MiddleName(String t_MiddleName) {
		this.t_MiddleName = t_MiddleName;
	}

	public String getT_LastName() {
		return t_LastName;
	}

	public void setT_LastName(String t_LastName) {
		this.t_LastName = t_LastName;
	}

	public String getT_Email() {
		return t_Email;
	}

	public void setT_Email(String t_Email) {
		this.t_Email = t_Email;
	}

	public String getT_Password() {
		return t_Password;
	}

	public void setT_Password(String t_Password) {
		this.t_Password = t_Password;
	}

	public String getT_Phone() {
		return t_Phone;
	}

	public void setT_Phone(String t_Phone) {
		this.t_Phone = t_Phone;
	}

	public String getT_Address() {
		return t_Address;
	}

	public void setT_Address(String t_Address) {
		this.t_Address = t_Address;
	}

	

	public double getRange_A() {
		return Range_A;
	}



	public void setRange_A(double range_A) {
		Range_A = range_A;
	}



	public double getRange_B() {
		return Range_B;
	}



	public void setRange_B(double range_B) {
		Range_B = range_B;
	}



	public double getRange_C() {
		return Range_C;
	}



	public void setRange_C(double range_C) {
		Range_C = range_C;
	}



	public long getT_Aadhar_no() {
		return t_Aadhar_no;
	}



	public void setT_Aadhar_no(long t_Aadhar_no) {
		this.t_Aadhar_no = t_Aadhar_no;
	}



	@Override
	public String toString() {
		return "TruckLendorRegister [t_ID=" + t_ID + ", t_FirstName=" + t_FirstName + ", t_MiddleName=" + t_MiddleName
				+ ", t_LastName=" + t_LastName + ", t_Email=" + t_Email + ", t_Password=" + t_Password
				+ ", t_Aadhar_no=" + t_Aadhar_no + ", t_Phone=" + t_Phone + ", t_Address=" + t_Address + ", Range_A="
				+ Range_A + ", Range_B=" + Range_B + ", Range_C=" + Range_C + "]";
	}



	TruckLendorRegister(long t_ID, String t_FirstName, String t_MiddleName, String t_LastName, String t_Email,
			String t_Password, long t_Aadhar_no, String t_Phone, String t_Address, double range_A, double range_B,
			double range_C) {
		super();
		this.t_ID = t_ID;
		this.t_FirstName = t_FirstName;
		this.t_MiddleName = t_MiddleName;
		this.t_LastName = t_LastName;
		this.t_Email = t_Email;
		this.t_Password = t_Password;
		this.t_Aadhar_no = t_Aadhar_no;
		this.t_Phone = t_Phone;
		this.t_Address = t_Address;
		this.Range_A = range_A;
		this.Range_B = range_B;
		this.Range_C = range_C;
	}
	
}

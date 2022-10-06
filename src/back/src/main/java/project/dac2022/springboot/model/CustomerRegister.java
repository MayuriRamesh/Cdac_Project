package project.dac2022.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="customerdetail")

public class CustomerRegister {
	
	
	@Id
 	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="c_ID")
	private long c_ID;
	
	@Column(name="c_FirstName",nullable=false)
	private String c_FirstName;
	
	@Column(name="c_MiddleName")
	private String c_MiddleName;
	
	@Column(name="c_LastName",nullable=false)
	private String c_LastName;
	
	@Column(name="c_Email",nullable=false, unique=true)
	private String c_Email;
	
	@Column(name="c_Password",nullable=false)
	private String c_Password;
	
	@Column(name="c_Phone",nullable=false)
	private String c_Phone;
	
	@Column(name="c_Address",nullable=false)
	private String c_Address;
	
	


	@Override
	public String toString() {
		return "CustomerRegister [c_ID=" + c_ID + ", c_FirstName=" + c_FirstName + ", c_MiddleName=" + c_MiddleName
				+ ", c_LastName=" + c_LastName + ", c_Email=" + c_Email + ", c_Password=" + c_Password + ", c_Phone="
				+ c_Phone + ", c_Address=" + c_Address + "]";
	}

	public long getC_ID() {
		return c_ID;
	}

	public void setC_ID(long c_ID) {
		this.c_ID = c_ID;
	}

	public String getC_FirstName() {
		return c_FirstName;
	}

	public void setC_FirstName(String c_FirstName) {
		this.c_FirstName = c_FirstName;
	}

	public String getC_MiddleName() {
		return c_MiddleName;
	}

	public void setC_MiddleName(String c_MiddleName) {
		this.c_MiddleName = c_MiddleName;
	}

	public String getC_LastName() {
		return c_LastName;
	}

	public void setC_LastName(String c_LastName) {
		this.c_LastName = c_LastName;
	}

	public String getC_Email() {
		return c_Email;
	}

	public void setC_Email(String c_Email) {
		this.c_Email = c_Email;
	}

	public String getC_Password() {
		return c_Password;
	}

	public void setC_Password(String c_Password) {
		this.c_Password = c_Password;
	}

	public String getC_Phone() {
		return c_Phone;
	}

	public void setC_Phone(String c_Phone) {
		this.c_Phone = c_Phone;
	}

	public String getC_Address() {
		return c_Address;
	}

	public void setC_Address(String c_Address) {
		this.c_Address = c_Address;
	}

	CustomerRegister(long c_ID, String c_FirstName, String c_MiddleName, String c_LastName, String c_Email,
			String c_Password, String c_Phone, String c_Address) {
		super();
		this.c_ID = c_ID;
		this.c_FirstName = c_FirstName;
		this.c_MiddleName = c_MiddleName;
		this.c_LastName = c_LastName;
		this.c_Email = c_Email;
		this.c_Password = c_Password;
		this.c_Phone = c_Phone;
		this.c_Address = c_Address;
	}

	CustomerRegister() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

}

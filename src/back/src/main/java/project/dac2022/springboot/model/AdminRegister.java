package project.dac2022.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="admindetail")
public class AdminRegister {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="a_ID")
	private long a_ID;
	
	@Column(name="a_FirstName",nullable=false)
	private String a_FirstName;
	
	@Column(name="a_MiddleName")
	private String a_MiddleName;
	
	@Column(name="a_LastName",nullable=false)
	private String a_LastName;
	
	@Column(name="a_Email",nullable=false, unique=true)
	private String a_Email;
	
	@Column(name="a_Password",nullable=false)
	private String a_Password;
	
	@Column(name="a_Phone",nullable=false)
	private String a_Phone;
	
	@Column(name="a_Address",nullable=false)
	private String a_Address;
	
	

	AdminRegister() {
		super();
		// TODO Auto-generated constructor stub
	}

	AdminRegister(long a_ID, String a_FirstName, String a_MiddleName, String a_LastName, String a_Email,
			String a_Password, String a_Phone, String a_Address) {
		super();
		this.a_ID = a_ID;
		this.a_FirstName = a_FirstName;
		this.a_MiddleName = a_MiddleName;
		this.a_LastName = a_LastName;
		this.a_Email = a_Email;
		this.a_Password = a_Password;
		this.a_Phone = a_Phone;
		this.a_Address = a_Address;
	}

	public long getA_ID() {
		return a_ID;
	}

	public void setA_ID(long a_ID) {
		this.a_ID = a_ID;
	}

	public String getA_FirstName() {
		return a_FirstName;
	}

	public void setA_FirstName(String a_FirstName) {
		this.a_FirstName = a_FirstName;
	}

	public String getA_MiddleName() {
		return a_MiddleName;
	}

	public void setA_MiddleName(String a_MiddleName) {
		this.a_MiddleName = a_MiddleName;
	}

	public String getA_LastName() {
		return a_LastName;
	}

	public void setA_LastName(String a_LastName) {
		this.a_LastName = a_LastName;
	}

	public String getA_Email() {
		return a_Email;
	}

	public void setA_Email(String a_Email) {
		this.a_Email = a_Email;
	}

	public String getA_Password() {
		return a_Password;
	}

	public void setA_Password(String a_Password) {
		this.a_Password = a_Password;
	}

	public String getA_Phone() {
		return a_Phone;
	}

	public void setA_Phone(String a_Phone) {
		this.a_Phone = a_Phone;
	}

	public String getA_Address() {
		return a_Address;
	}

	public void setA_Address(String a_Address) {
		this.a_Address = a_Address;
	}


	
	
	
}

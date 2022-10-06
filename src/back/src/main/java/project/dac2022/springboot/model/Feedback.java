package project.dac2022.springboot.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table (name = "feedback")
public class Feedback {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id", nullable=false)
	private long id;
	
	@Column (name = "i_id")
	private long item;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="c_Name", referencedColumnName="c_FirstName")
	private CustomerRegister customer;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="t_Name", referencedColumnName="t_FirstName")
	private TruckLendorRegister t_name;
	
	
	@Column(name="feedback")
	private String feedback;


	Feedback(long id, long item, CustomerRegister customer, TruckLendorRegister t_name, String feedback) {
		super();
		this.id = id;
		this.item = item;
		this.customer = customer;
		this.t_name = t_name;
		this.feedback = feedback;
	}


	Feedback() {
		super();
		// TODO Auto-generated constructor stub
	}


	@Override
	public String toString() {
		return "Feedback [id=" + id + ", item=" + item + ", customer=" + customer + ", t_name=" + t_name + ", feedback="
				+ feedback + "]";
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public long getItem() {
		return item;
	}


	public void setItem(long item) {
		this.item = item;
	}


	public CustomerRegister getCustomer() {
		return customer;
	}


	public void setCustomer(CustomerRegister customer) {
		this.customer = customer;
	}


	public TruckLendorRegister getT_name() {
		return t_name;
	}


	public void setT_name(TruckLendorRegister t_name) {
		this.t_name = t_name;
	}


	public String getFeedback() {
		return feedback;
	}


	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}
	
	
	
}

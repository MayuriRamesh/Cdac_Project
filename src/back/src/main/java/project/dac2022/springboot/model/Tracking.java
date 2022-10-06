package project.dac2022.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.ManyToMany;
import javax.persistence.Table;



@Entity
@Table(name="tracking")
public class Tracking {

	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="t_ID")
	private long tID;
	
	//@ManyToMany(mappedBy = "tracking")
	//@JoinColumn(name="shipmentID",referencedColumnName = "shipmentID")
	@Column(name="trackingID",nullable=false)
	private long trackingID;
	
	@Column (name = "driverID", nullable=false)
	private long driverID;
	
	@Column(name="checkpoint",nullable=false)
	private String checkpoint;
	
	@Column(name="time_stamp",nullable=false)
	private String time_stamp;

	@Override
	public String toString() {
		return "Tracking [tID=" + tID + ", trackingID=" + trackingID + ", driverID=" + driverID + ", checkpoint=" + checkpoint
				+ ", time_stamp=" + time_stamp + "]";
	}

	public long gettID() {
		return tID;
	}

	public void settID(long tID) {
		this.tID = tID;
	}

	public long getTrackingID() {
		return trackingID;
	}

	public void setTrackingID(long trackingID) {
		this.trackingID = trackingID;
	}

	public String getCheckpoint() {
		return checkpoint;
	}

	public void setCheckpoint(String checkpoint) {
		this.checkpoint = checkpoint;
	}

	public String getTime_stamp() {
		return time_stamp;
	}

	public void setTime_stamp(String time_stamp) {
		this.time_stamp = time_stamp;
	}
	
	

	public long getDriverID() {
		return driverID;
	}

	public void setDriverID(long driverID) {
		this.driverID = driverID;
	}

	Tracking(long tID, long trackingID, long driverID2, String checkpoint, String time_stamp) {
		super();
		this.tID = tID;
		this.trackingID = trackingID;
		this.driverID = driverID2;
		this.checkpoint = checkpoint;
		this.time_stamp = time_stamp;
	}

	Tracking() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}

package project.dac2022.springboot.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;



@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class TrackingDataNotFoundException extends RuntimeException{
	
	
	private String resourceName;
	private String fieldName;
	private String fieldValue;
	TrackingDataNotFoundException(String resourceName, String fieldName, String fieldValue) {
		super(String.format("%s not found with %s: '%s'",resourceName, fieldName, fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}
	
	public String getResourceName() {
		return resourceName;
	}
	
	public String getFieldName() {
		return fieldName;
	}
	
	public String getFieldValue() {
		return fieldValue;
	}

}

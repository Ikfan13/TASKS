package com.APITEST;
import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

import org.json.simple.JSONObject;
import org.testng.annotations.Test;

import io.restassured.http.ContentType;

import static org.hamcrest.Matchers.hasItems;

import java.util.HashMap;
import java.util.Map;


public class TESTgetAndpostRequest {

	//@Test
	public void GETREquest() {
		
		//1st validation by id
		baseURI="https://reqres.in/api";
		given().get("/unknown").then().statusCode(200).body("data[0].id",equalTo(1)).log().all();
		
		//2nd validation by name
		given().get("/unknown").
		then().statusCode(200).
		body("data[1].name",equalTo("fuchsia rose")).
		body("data[1].id",equalTo(2)).log().all();
	}
	
	//@Test
	public void GETRequest2() {
		//3rd validation by group
		baseURI="https://reqres.in/api";
		
		given().get("/users?page=2").then().statusCode(200).body("data.first_name", hasItems("Lindsay","Tobias"));
	}
	
	@Test
	public void POSTRequest() {
		Map<String,Object> map=new HashMap<String,Object>();
		JSONObject request=new JSONObject(map);
		
		request.put("name", "Nirmal Raj");
		request.put("job", "Trainee");
		
		System.out.println(request.toJSONString());
		
		baseURI="https://reqres.in/api";
		
		given().header("Content-Type","application/json").
		contentType(ContentType.JSON).
		accept(ContentType.JSON).
		body(request.toString()).post("/users").then().statusCode(201).log().all();
	}
}
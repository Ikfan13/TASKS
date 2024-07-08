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
public class PutPatchDeleteRequest {
	//@Test
	public void POSTRequest() {
		JSONObject request=new JSONObject();
		
		request.put("name", "Mohamed Ikfan");
		request.put("job", "Trainee");
		
		System.out.println(request.toJSONString());
		
		baseURI="http://localhost:8888/";
		
		given().header("Content-Type","application/json").
		contentType(ContentType.JSON).accept(ContentType.JSON).
		body(request.toJSONString()).post("/users").then().statusCode(201).log().all();
	}
	//
	//@Test
	public void PUTRequest() {
		JSONObject request=new JSONObject();
		
		request.put("name", "Ikfan M");
		request.put("job", "Trainee");
		
		System.out.println(request.toJSONString());
		
		baseURI="http://localhost:8888/";
		
		given().header("Content-Type","application/json").
		contentType(ContentType.JSON).accept(ContentType.JSON).
		body(request.toJSONString()).put("/users/42fe").then().statusCode(200).log().all();
	}
	//@Test
	public void PATCHRequest() {
		JSONObject request=new JSONObject();
		
		request.put("name", "Ikfan M");
		request.put("userPass", "Ikfan@123");
		
		System.out.println(request.toJSONString());
		
		baseURI="http://localhost:8888/";
		
		given().header("Content-Type","application/json").
		contentType(ContentType.JSON).accept(ContentType.JSON).
		body(request.toJSONString()).put("/users/1").then().statusCode(200).log().all();
	}
	@Test
	public void DeleteRequest() {
		JSONObject request=new JSONObject();
		
		request.remove("name", "Ikfan M");
		request.remove("job", "Trainee");
		
		System.out.println(request.toJSONString());
		
		baseURI="http://localhost:8888/";
		
		given().header("Content-Type","application/json").
		contentType(ContentType.JSON).accept(ContentType.JSON).
		body(request.toJSONString()).delete("/users/42fe").then().statusCode(200).log().all();
	}
}
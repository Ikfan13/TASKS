package com.APITEST;

import org.testng.Assert;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

public class ReactProjectHomePage {
   
//	@Test
//	public void HomePageApiTest()
// {
//		Response response = RestAssured.get("http://localhost:8888/users");
//		System.out.println(response.getStatusCode());
//		System.out.println(response.getTime());
//		System.out.println(response.getStatusLine());
//		System.out.println(response.getBody().asString());
//		System.out.println(response.getHeader("content-type"));
//		
//		int statuscode=response.getStatusCode();
//		Assert.assertEquals(statuscode,200);
// }
	 @Test
		public void GETAPITEST2()
	     {
	     	 baseURI = "http://localhost:8888";
	     	 given().get("/cities").then().statusCode(200).body("[0].id",equalTo(1)).log().all();
	     	  given().get("/cities").then().statusCode(200).body("[0].city", equalTo("Chennai"));
	     	 
	     }
}

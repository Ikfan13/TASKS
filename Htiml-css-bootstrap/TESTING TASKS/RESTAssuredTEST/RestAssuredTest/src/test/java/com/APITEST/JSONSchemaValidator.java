package com.APITEST;
import org.testng.Assert;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.*;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;
public class JSONSchemaValidator {
	@Test
    public void testGet()
    {
    	baseURI="http://localhost:8888/";
    	given().get("/users").
    	then().
    	assertThat().body(matchesJsonSchemaInClasspath("Schema.json")).statusCode(200).log().all();
    }
}

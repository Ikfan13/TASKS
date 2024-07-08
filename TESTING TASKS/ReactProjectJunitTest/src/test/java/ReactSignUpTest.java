import java.util.*;
import java.util.regex.Pattern;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

@TestMethodOrder(OrderAnnotation.class) 
class ReactSignUpTest {
	ReactSignUp r=new ReactSignUp();
	Scanner sc=new Scanner(System.in);
    @Test
    @Order(1)
	void Nametest()
	{
    	
		String name=sc.nextLine();
		String actualname=r.Name(name);
		String expectedname="Mohamed Ikfan";
		assertEquals(expectedname, actualname);
		if(actualname.trim()=="")
		{
			assertEquals(expectedname, actualname,"Name Is Required");
		}
		assertEquals(expectedname, actualname);
		
	}
    @Test
    @Order(2)
   void Contacttest()
   {
	   String contactno=sc.next();
	   String actualno=r.contact(contactno);
	   String expectedno="9788054981";
	   if(actualno.length()==10)
	   {
		   assertEquals(expectedno, actualno);
	   }
	   else
	   {
		   assertEquals(expectedno,actualno,"Enter Valid Contact no" );
	   }
   }
    @Test
    @Order(3)
    void EmailTest()
    {
    	String email=sc.next();
    	String actualemail=r.Email(email);
    	String expectedemail="ikfan@gmail.com";
    	if(Pattern.matches("/^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$/", actualemail))
    	{
    		assertEquals(expectedemail, actualemail,"Correct Email Format");
    	}
    	else
        {
    		assertEquals(expectedemail, actualemail,"Enter the Valid Email");
    	}
    }
    @Test
    @Order(4)
    void UsernameTest()
    {
    	String usrnm=sc.next();
        String actualusrnm=r.Username(usrnm);
        String expectedusrnm="Ikfan12";
        if(actualusrnm.trim()=="")
        {
        	assertEquals(expectedusrnm, actualusrnm,"Enter a Valid Username");
        }
        else
        {
        	assertEquals(expectedusrnm, actualusrnm);
        }
    }    
        @Test
        @Order(5)
        void UserPassTest()
        {
        	String usrps=sc.next();
        	String actualpass=r.UserPass(usrps);
        	String expectedPass="Ikfan@2131";
        	if(Pattern.matches("^[a-zA-Z]{3,20}$",actualpass))
        	{
        		assertEquals(expectedPass, actualpass);
        	}
        	else
        	{
        		assertEquals(expectedPass,actualpass,"Enter a Valid Password");
        	}
        			
        	
        }
    

}

package cmpt276.kzcheng.asn1;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Asn1Application {

	public static void main(String[] args) {
		SpringApplication.run(Asn1Application.class, args);
	}

}

// Spring is running the server on localhost.
// As indicated by the console output: `2024-01-28T09:41:15.584-08:00  INFO 29396 --- [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 9090 (http)`
// To access the server, go to http://localhost:9090/

// To access the Actuator, go to http://localhost:9090/actuator
// It's a tool that allows us to monitor the server. Checking if the server is online.

// To access the html file in the resources/static folder, go to http://localhost:9090/hello.html
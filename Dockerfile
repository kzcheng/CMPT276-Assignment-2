FROM maven:3.9.6-openjdk-21 AS build
COPY . .
RUN mvn clean package -DskipTests

FROM openjdk:21-jdk-slim 
COPY --from=build /target/demo-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 9090
ENTRYPOINT ["java", "-jar", "demo.jar"] 


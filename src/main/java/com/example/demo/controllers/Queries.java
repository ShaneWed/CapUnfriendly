package com.example.demo.controllers;

import java.sql.*;

public class Queries {
    public void executeQuery() throws SQLException {
        Connection con = DriverManager.getConnection("localhost:3031", "root", "password");

        if(con != null) {
            String selectQuery = "select * from blackhawks where espnName='Connor Bedard'";
            Statement statement = con.createStatement();

            ResultSet resultSet = statement.executeQuery(selectQuery);

            System.out.println(resultSet.toString());
        } else {
            System.out.println("Connection failed");
        }
    }
}

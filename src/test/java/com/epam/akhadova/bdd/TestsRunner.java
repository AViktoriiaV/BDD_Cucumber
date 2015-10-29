package com.epam.akhadova.bdd;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(tags = {"~@ignore"}, format = {"pretty", "json:target/cucumber.json", "html:target/cucumber.html"},
        features = {"feature/"}, glue = "com.epam.akhadova.bdd.steps")
public class TestsRunner {

}



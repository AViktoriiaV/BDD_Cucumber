package com.epam.akhadova.bdd.core.generalhelpers;

import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;

import java.util.List;

import static com.epam.akhadova.bdd.core.generalhelpers.Constants.HALF_SEC_DELAY;
import static com.epam.akhadova.bdd.core.generalhelpers.Constants.SEC_DELAY;
import static com.epam.akhadova.bdd.core.generalhelpers.WaiterHelper.delay;
import static com.epam.akhadova.bdd.core.generalhelpers.WaiterHelper.waitElement;

/**
 * Created by Winner on 29.10.2015.
 */
public class ClickerHelper {

    public static void clickOnElement(WebDriver driver, WebElement element) throws StaleElementReferenceException {
        waitElement(driver, element, Constants.SMALL_DELAY);
        try {
            element.click();
            delay(HALF_SEC_DELAY + SEC_DELAY);
        } catch (WebDriverException e) {
            System.out.println("WebDriverException " + e);
        }
    }

    public static void clickOnElementWithText(WebDriver driver, List<WebElement> elements, String text) {
        List<WebElement> listOfElements = elements;
        for (WebElement webElement : listOfElements) {
            if (webElement.getText().equals(text)) {
                clickOnElement(driver, webElement);
                break;
            }
        }
    }


}

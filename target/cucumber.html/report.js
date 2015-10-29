$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FilterTest.feature");
formatter.feature({
  "line": 2,
  "name": "Filter search results",
  "description": "As user\r\nI want to filter the search results\r\nSo that I can search a necessary product quickly",
  "id": "filter-search-results",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Suite"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Check filter by price",
  "description": "",
  "id": "filter-search-results;check-filter-by-price",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "I set minimum \"\u003cmin\u003e\" and maximum \"\u003cmax\u003e\" prices",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see results matching search parameters \"\u003cmin\u003e\" \"\u003cmax\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "filter-search-results;check-filter-by-price;",
  "rows": [
    {
      "cells": [
        "min",
        "max"
      ],
      "line": 17,
      "id": "filter-search-results;check-filter-by-price;;1"
    },
    {
      "cells": [
        "2000",
        "4000"
      ],
      "line": 18,
      "id": "filter-search-results;check-filter-by-price;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4325996519,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on start page \"http://pn.com.ua\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select category \"����������\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select subcategory \"��������, ��������\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://pn.com.ua",
      "offset": 20
    }
  ],
  "location": "FilterTestSteps.I_am_on_start_page(String)"
});
formatter.result({
  "duration": 7009846695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "����������",
      "offset": 19
    }
  ],
  "location": "FilterTestSteps.I_select_category(String)"
});
formatter.result({
  "duration": 2715893611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "��������, ��������",
      "offset": 22
    }
  ],
  "location": "FilterTestSteps.I_select_subcategory(String)"
});
formatter.result({
  "duration": 3205538097,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Check filter by price",
  "description": "",
  "id": "filter-search-results;check-filter-by-price;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Suite"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I set minimum \"2000\" and maximum \"4000\" prices",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see results matching search parameters \"2000\" \"4000\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 15
    },
    {
      "val": "4000",
      "offset": 34
    }
  ],
  "location": "FilterTestSteps.I_set_mini_and_max_prices(String,String)"
});
formatter.result({
  "duration": 6304477789,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 42
    },
    {
      "val": "4000",
      "offset": 49
    }
  ],
  "location": "FilterTestSteps.I_see_results_matching_search_parameters(String,String)"
});
formatter.result({
  "duration": 442054408,
  "status": "passed"
});
formatter.after({
  "duration": 329520927,
  "status": "passed"
});
formatter.before({
  "duration": 4812069324,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on start page \"http://pn.com.ua\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select category \"����������\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select subcategory \"��������, ��������\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://pn.com.ua",
      "offset": 20
    }
  ],
  "location": "FilterTestSteps.I_am_on_start_page(String)"
});
formatter.result({
  "duration": 6534252566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "����������",
      "offset": 19
    }
  ],
  "location": "FilterTestSteps.I_select_category(String)"
});
formatter.result({
  "duration": 3055073692,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "��������, ��������",
      "offset": 22
    }
  ],
  "location": "FilterTestSteps.I_select_subcategory(String)"
});
formatter.result({
  "duration": 4325675864,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Check filter by manufacturer name",
  "description": "",
  "id": "filter-search-results;check-filter-by-manufacturer-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I select manufacturer",
  "rows": [
    {
      "cells": [
        "Fly"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "number of products equals to the number near the manufacturer",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "product names begin with the selected product",
  "rows": [
    {
      "cells": [
        "Fly"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FilterTestSteps.I_select_manufacturer(String\u003e)"
});
formatter.result({
  "duration": 3788914972,
  "status": "passed"
});
formatter.match({
  "location": "FilterTestSteps.number_of_products_equals_to_the_number_near_manufacturer_name()"
});
formatter.result({
  "duration": 28923034,
  "status": "passed"
});
formatter.match({
  "location": "FilterTestSteps.product_names_begin_with_the_selected_product(String)"
});
formatter.result({
  "duration": 322832,
  "error_message": "cucumber.runtime.CucumberException: Not a Map or List type: class java.lang.String\r\n\tat cucumber.runtime.table.TableConverter.convert(TableConverter.java:75)\r\n\tat cucumber.runtime.StepDefinitionMatch.tableArgument(StepDefinitionMatch.java:97)\r\n\tat cucumber.runtime.StepDefinitionMatch.transformedArgs(StepDefinitionMatch.java:74)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.execute(JUnit4Provider.java:252)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.executeTestSet(JUnit4Provider.java:141)\r\n\tat org.apache.maven.surefire.junit4.JUnit4Provider.invoke(JUnit4Provider.java:112)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.apache.maven.surefire.util.ReflectionUtils.invokeMethodWithArray(ReflectionUtils.java:189)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory$ProviderProxy.invoke(ProviderFactory.java:165)\r\n\tat org.apache.maven.surefire.booter.ProviderFactory.invokeProvider(ProviderFactory.java:85)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.runSuitesInProcess(ForkedBooter.java:115)\r\n\tat org.apache.maven.surefire.booter.ForkedBooter.main(ForkedBooter.java:75)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 166715185,
  "status": "passed"
});
formatter.before({
  "duration": 4973821662,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on start page \"http://pn.com.ua\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I select category \"����������\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I select subcategory \"��������, ��������\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://pn.com.ua",
      "offset": 20
    }
  ],
  "location": "FilterTestSteps.I_am_on_start_page(String)"
});
formatter.result({
  "duration": 6925036358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "����������",
      "offset": 19
    }
  ],
  "location": "FilterTestSteps.I_select_category(String)"
});
formatter.result({
  "duration": 2744677932,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "��������, ��������",
      "offset": 22
    }
  ],
  "location": "FilterTestSteps.I_select_subcategory(String)"
});
formatter.result({
  "duration": 3155090113,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Check search by product name",
  "description": "",
  "id": "filter-search-results;check-search-by-product-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I sort product by price",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I get the name of the cheapest product",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "enter product name into the search field and submit",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Search Results Page has 1 product",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "product name is equal to specified name",
  "keyword": "And "
});
formatter.match({
  "location": "FilterTestSteps.I_sort_product_by_price()"
});
formatter.result({
  "duration": 2882173687,
  "status": "passed"
});
formatter.match({
  "location": "FilterTestSteps.I_get_the_name_of_the_cheapest_product()"
});
formatter.result({
  "duration": 53561853,
  "status": "passed"
});
formatter.match({
  "location": "FilterTestSteps.enter_product_name_into_the_search_field()"
});
formatter.result({
  "duration": 4058848777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "FilterTestSteps.Search_Results_Page_has_product(int)"
});
formatter.result({
  "duration": 13886452,
  "status": "passed"
});
formatter.match({
  "location": "FilterTestSteps.product_name_is_equal_to_specified_name()"
});
formatter.result({
  "duration": 33984161,
  "status": "passed"
});
formatter.after({
  "duration": 166399506,
  "status": "passed"
});
});
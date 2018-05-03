$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GoogleSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Search Google for links",
  "description": "As an internet user\nI want to use Google to search for websites\nSo that I can find them without knowing the URL",
  "id": "search-google-for-links",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@search"
    }
  ]
});
formatter.before({
  "duration": 84705,
  "status": "passed"
});
formatter.before({
  "duration": 372213,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Search for Facebook",
  "description": "",
  "id": "search-google-for-links;search-for-facebook",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I want to go on \"Facebook\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I search on Google",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should see the search results for \"Facebook\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 17
    }
  ],
  "location": "GoogleSearch_Steps.i_want_to_go_on(String)"
});
formatter.result({
  "duration": 96525856,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch_Steps.i_search_on_google()"
});
formatter.result({
  "duration": 4100363153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 37
    }
  ],
  "location": "GoogleSearch_Steps.i_should_see_the_search_results_for(String)"
});
formatter.result({
  "duration": 10461374,
  "status": "passed"
});
formatter.after({
  "duration": 93896,
  "status": "passed"
});
formatter.before({
  "duration": 28408,
  "status": "passed"
});
formatter.before({
  "duration": 178311,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Search for Twitter",
  "description": "",
  "id": "search-google-for-links;search-for-twitter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I want to go on \"Twitter\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I search on Google",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the search results for \"Twitter\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 17
    }
  ],
  "location": "GoogleSearch_Steps.i_want_to_go_on(String)"
});
formatter.result({
  "duration": 98120,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch_Steps.i_search_on_google()"
});
formatter.result({
  "duration": 1665854766,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Twitter",
      "offset": 37
    }
  ],
  "location": "GoogleSearch_Steps.i_should_see_the_search_results_for(String)"
});
formatter.result({
  "duration": 13285310,
  "status": "passed"
});
formatter.after({
  "duration": 29058,
  "status": "passed"
});
});
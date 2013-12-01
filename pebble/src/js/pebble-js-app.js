Pebble.addEventListener("ready",
    function(e) {
        console.log("Wanderage is running...");
        sendTestMessage();
        registerAppListener();
        registerConfigurationListener();
    }
);

function sendTestMessage() {
  var transactionId = Pebble.sendAppMessage( { "0": 42, "1": "String value" },
    function(e) {
      console.log("Successfully delivered message with transactionId="
        + e.data.transactionId);
    },
    function(e) {
      console.log("Unable to deliver message with transactionId="
        + e.data.transactionId
        + " Error is: " + e.error.message);
    }
  );
}

function registerAppListener() {
  Pebble.addEventListener("appmessage",
    function(e) {
      console.log("Received message: " + e.payload);

      Pebble.sendAppMessage({ APPKEY_ACTION: "A test value" });
      Pebble.showSimpleNotificationOnPebble("title", "text");

      console.log("Pebble Account Token: " + Pebble.getAccountToken());
    }
  );
}

function registerConfigurationListener() {
  Pebble.addEventListener("showConfiguration",
    function(e) {
      console.log("Showing configutation");
      console.log("Received message: " + e.payload);

      Pebble.openURL("http://www.google.com"));
    }
  );
}

var APPKEY_USER_ID = "user_id";
var APPKEY_ACTION = "action";
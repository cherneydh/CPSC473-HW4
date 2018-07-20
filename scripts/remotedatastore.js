(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function RemoteDataStore(url) {
    if (!url) {
      throw new Error("No remote URL supplied.");
    }

    this.serverUrl = url;
  }

  RemoteDataStore.prototype.add = function(key, val) {
    $.post(this.serverUrl, val, function( /*serverResponse*/ ) {
      //console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.getAll = function() {
    $.get(this.serverUrl, function( /*serverResponse*/ ) {
      //console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.get = function(key) {
    $.get(this.serverUrl + "/?emailAddress=" + key, function( /*serverResponse*/ ) {
      //console.log(serverResponse);
    });
  };

  RemoteDataStore.prototype.remove = function(key) {
    var urlS = this.serverUrl;
    $.get(urlS + "/?emailAddress=" + key, function(serverResponse) {
      $.ajax({
        type: "DELETE",
        url: urlS + "/" + $(serverResponse).attr("id")
      });
    });
  };

  App.RemoteDataStore = RemoteDataStore;
  window.App = App;

})(window);

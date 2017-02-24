define([], function() {
    function Request() {}
    Request.execute = function(url, callback, method, data) {
        var xhr = new XMLHttpRequest();

        xhr.open(method, url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = "json";
        xhr.addEventListener("readystatechange", function() {
            if(this.readyState !== 4) {
                return;
            }

            callback(this.response);
        });

        var dataToSend = null;

        if(data) {
            dataToSend = JSON.stringify(data);
        }

        xhr.send(dataToSend);
    };

    Request.get = function(url, callback) {
        Request.execute(url, callback, "get");
    };

    Request.post = function(url, callback, data) {
        Request.execute(url, callback, "post", data);
    };

    Request.put = function(url, callback, data) {
        Request.execute(url, callback, "put", data);
    };

    Request.delete = function(url, callback) {
        Request.execute(url, callback, "delete");
    };

    return Request;
});
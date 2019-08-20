function beginInvokeJsonService(serviceName, methodName, data, successFunction, errorFunction) {
    if (methodName != null) {
        data.m = methodName;
    }
    data.useJsonp = true;

    var sf = {}; 
    sf.successFunction = successFunction;
    sf.invokeServiceSuccess = function (result) {
        if (sf.successFunction) {
            sf.successFunction(result);
        }
    }

    setTimeout(function () {
        $.ajax({
            type: "post",
            async: true,
            cache: false,
            timeout: 1000 * 40,
            url: serviceName,
            dataType: "jsonp",
            contentType: "application/x-www-form-urlencoded; charset=utf-8",
            data: data,
            success: sf.invokeServiceSuccess,
            error: errorFunction
        });
    }, 50);
}

function invokeServiceError(XMLHttpRequest, textStatus, errorThrown) {
    console.info(XMLHttpRequest);
    console.info(textStatus);
    console.info(errorThrown);
}

function loadXMLDoc(docName) { //содержит описание функции загрузки XML документа
    if (window.XMLHttpRequest)
    { // браузеры
        xmlhttp = new XMLHttpRequest();
    }
    else
    { // для IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.open("GET", docName,false);
    xmlhttp.send();
    return xmlhttp.responseXML;
}

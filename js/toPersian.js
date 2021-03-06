String.prototype.toPersianDigit = function (a) {
    return this.replace(/\d+/g, function (digit) {
        var enDigitArr = [], peDigitArr = [];
        for (var i = 0; i < digit.length; i++) {
            enDigitArr.push(digit.charCodeAt(i));
        }
        for (var j = 0; j < enDigitArr.length; j++) {
            peDigitArr.push(String.fromCharCode(enDigitArr[j] + ((!!a && a == true) ? 1584 : 1728)));
        }
        return peDigitArr.join('');
    });
};

function TraceNodes(Node) {
    if (Node.nodeType == 3)  //TextNode
        Node.nodeValue = Node.nodeValue.toPersianDigit();
    else
        for (var i = 0; i < Node.childNodes.length; i++)
            TraceNodes(Node.childNodes[i]);
}

TraceNodes(document);
var isHoldingPiece = false;
var pieceInHand = {};

$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".cell").click(function () {
        
        if (!isHoldingPiece) {
            if ($(this).hasClass("piece")) {
                PickUpPiece(this)
            }
        }
        else {
            DropPiece(this)
        }
    });
});

PickUpPiece = function (element) {

    $(element).css("border", "1px solid red");

    pieceInHand = element;
    isHoldingPiece = true;
}

DropPiece = function (targetElement) {

    targetElement.className = pieceInHand.className;

    $(pieceInHand).css("border", "1px solid black");
    pieceInHand.className = "cell";

    isHoldingPiece = false;
    pieceInHand = {};
}
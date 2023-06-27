
function generateQRCode() {
    var canvas = document.getElementById("qrCodeCanvas");
    var text = document.getElementById("inputText").value;

    QRCode.toCanvas(canvas, text, function (error) {
        if (error) console.error(error);
        console.log("QR code generated successfully");
    });
}

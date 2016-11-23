function ler_arquivo(fe) {
    fe.file(function (arquivo) {
        var reader = new FileReader();

        reader.onloadend = function () {
            console.log("Successful file read: " + this.result);
        }:
        console.log(arquivo);
        reader.readAsText (arquivo)
    })










}

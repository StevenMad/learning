$(document).ready(function () {
    $("button").click(function (event) {
        var page = event.target.textContent;
        switch (page) {
            case "HTML":
                window.location.replace("html");
                break;
            case "CSS":
                window.location.replace("css.html");
                break;
            case "JavaScript":
                window.location.replace("js.html");
                break;
            case "PHP":
                window.location.replace("php");
                break;
            case "Exo":
                executerInstructions();
            case "Exo1":
                executerInstructions1();
            default:
                break;
        }
    });

    var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true
        
    });

    var codeMirror1 = CodeMirror.fromTextArea(document.getElementById("code1"),{
        lineNumbers:true
    })

    function executerInstructions() {
        var codemirrorvalue = myCodeMirror.getValue();
        $("#jscode").html(codemirrorvalue);
        eval(codemirrorvalue);
        //clean all the results
        var size = $(".result").length;
        //test case 0
        if (calculer(1, 2) === 3) {
            var el = $(".result")[0];
            el.className = "result correct";
        } else {
            var el = $(".result")[0];
            el.className = "result faux";
        }

        //test case 1
        if (calculer(10, 15) === 25) {
            var el = $(".result")[1];
            el.className = "result correct";
        } else {
            var el = $(".result")[1];
            el.className = "result faux";
        }

        //test case 2
        if (calculer(3, 3) === 6) {
            var el = $(".result")[2];
            el.className = "result correct";
        } else {
            var el = $(".result")[2];
            el.className = "result faux";
        }

        //test case 3
        if (calculer(1, 5) === 6) {
            var el = $(".result")[3];
            el.className = "result correct";
        } else {
            var el = $(".result")[3];
            el.className = "result faux";
        }
    }
})


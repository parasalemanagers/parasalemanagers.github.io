document.getElementById("editor").addEventListener("input", function() {
    document.getElementById("log").value += "input event fired\n";
}, false);

document.getElementById("edit").addEventListener("input", function() {
    document.getElementById("logs").value += "input event fired\n";
}, false);
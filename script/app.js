function get_num(num) {
    document.getElementById('result').value += num

}
function getResult() {
    document.getElementById("result").value = eval(
        document.getElementById("result").value)
}
function ClearResult() {
    document.getElementById('result').value = ""
}
function clear_num() {
    var result = document.getElementById('result').value
    document.getElementById('result').value = document.getElementById("result").value.slice(0, result.length - 1);
}
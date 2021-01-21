function back()
{
    window.location = "activity_1.html";
}
function fetch()
{
    score= localStorage.getItem("score");
    document.getElementById("paste").innerHTML = "Score:"+ score;
}

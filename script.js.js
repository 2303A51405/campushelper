function calculateCGPA() {
    let m1 = Number(document.getElementById("sub1").value);
    let m2 = Number(document.getElementById("sub2").value);
    let m3 = Number(document.getElementById("sub3").value);
    let m4 = Number(document.getElementById("sub4").value);
    let m5 = Number(document.getElementById("sub5").value);

    let avg = (m1 + m2 + m3 + m4 + m5) / 5;
    let cgpa = avg / 10;

    document.getElementById("result").innerHTML =
        "Your CGPA is: " + cgpa.toFixed(2);
}

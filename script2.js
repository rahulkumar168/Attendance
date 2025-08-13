document.getElementById("attendanceForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let subject = document.getElementById("subject").value;
    let date = document.getElementById("date").value;
    let status = document.getElementById("status").value;

    let records = JSON.parse(localStorage.getItem("attendance")) || [];


    records.push({ subject, date, status });


    localStorage.setItem("attendance", JSON.stringify(records));

   
    displayAttendance();

  
    document.getElementById("attendanceForm").reset();
});

function displayAttendance() {
    let records = JSON.parse(localStorage.getItem("attendance")) || [];
    let tableBody = document.getElementById("attendanceList");
    tableBody.innerHTML = "";

    records.forEach((rec, index) => {
        let row = `<tr>
            <td>${rec.subject}</td>
            <td>${rec.date}</td>
            <td>${rec.status}</td>
            <td><button class="deleteBtn" onclick="deleteRecord(${index})">Delete</button></td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

function deleteRecord(index) {
    let records = JSON.parse(localStorage.getItem("attendance")) || [];
    records.splice(index, 1); 
    localStorage.setItem("attendance", JSON.stringify(records));
    displayAttendance();
}


window.onload = displayAttendance;

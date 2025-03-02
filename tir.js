function addTask() {
    let task = document.getElementById("task").value;
    let priority = document.getElementById("priority").value;

    if (task && priority) {
        let table = document.getElementById("taskTableBody");
        let row = table.insertRow();
        
        row.insertCell(0).innerHTML = task;
        row.insertCell(1).innerHTML = priority;

        document.getElementById("todoForm").reset();

        sortTasks(1);
    }
}

function sortTasks(columnIndex) {
    let table = document.querySelector("table tbody");
    let rows = Array.from(table.rows);
    let ascending = table.dataset.sortOrder !== "asc";
    let priorityOrder = { "1": 1, "2": 2, "3": 3 };

    rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].innerText;
        let cellB = rowB.cells[columnIndex].innerText;

        if (columnIndex === 1) 
        {
            return ascending ? priorityOrder[cellA] - priorityOrder[cellB] : priorityOrder[cellB] - priorityOrder[cellA];
        }

        return ascending ? cellA.localeCompare(cellB) : cellB.localeCompare(cellA);
    });

    table.dataset.sortOrder = ascending ? "asc" : "desc";
    table.append(...rows);
}

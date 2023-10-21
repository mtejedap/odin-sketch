const container = document.querySelector(".container");

function createGrid(size) {
    for (let i = 0; i < (size*size); i++) {
        const div = document.createElement("div");
        div.classList.add("gridSquare");
        let dimension = 512 / size;
        div.style.width = dimension + "px";
        div.style.height = dimension + "px";
        div.addEventListener("mouseover", (e) => {
            e.target.style.background = "black";
        });
        container.appendChild(div);
    }
}

createGrid(16);

const newGrid = document.querySelector(".newGrid");
newGrid.addEventListener("click", () => {
    let size = prompt("Please enter new grid size");
    if (size > 100) {
        alert("Please enter a number no greater than 100");
    } else {
        let oldGrid = document.querySelectorAll(".gridSquare");
        oldGrid.forEach(element => {
            container.removeChild(element);
        });
        createGrid(size);
    }
});
let total = 0;
let selesai = 0;

function tambahTugas() {
    let input = document.getElementById("taskInput");
    let namaTugas = input.value.trim();

    if (namaTugas === "") {
        alert("INI TIDAK BOLEH KOSONG !!");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${namaTugas}</span>
        <div class="actions">
            <button class="selesai-btn" onclick="tandaiSelesai(this)">Selesai</button>
            <button class="hapus" onclick="hapusTugas(this)">Hapus</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    total++;    
    updateInfo();

    input.value = "";
}

function tandaiSelesai(button) {
    let li = button.parentElement.parentElement;

    if (!li.classList.contains("selesai")) {
        li.classList.add("selesai");
        selesai++;
        updateInfo();
    }
}

function hapusTugas(button) {
    let li = button.parentElement.parentElement;

    if (li.classList.contains("selesai")) {
        selesai--;
    }

    li.remove();
    total--;
    updateInfo();
}

function updateInfo() {
    document.getElementById("totalTugas").innerText = total;
    document.getElementById("tugasSelesai").innerText = selesai;
}
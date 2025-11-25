document.getElementById("year").textContent = new Date().getFullYear();

const projects = {
  1: { title: "Robot Avoider", img: "avoider.jpeg", desc: "Robot penghindar halangan." },
  2: { title: "Smart Home", img: "smarthome.jpeg", desc: "Proyek smart home IoT." },
  3: { title: "Pengukur Jarak", img: "pengukur.jpeg", desc: "Sensor ultrasonik pengukur jarak." }
};

function openProject(id) {
  const p = projects[id];
  document.getElementById("modalContent").innerHTML =
    `<h2>${p.title}</h2>
     <img src="${p.img}" style="width:100%; margin:12px 0; border-radius:10px" />
     <p class="muted">${p.desc}</p>`;
  document.getElementById("modal").classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

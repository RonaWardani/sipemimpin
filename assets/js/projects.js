// Data semua proyek
const projects = [
  {
    id: 1,
    name: "Normalisasi Sungai",
    category: "SDA", // Kategori SDA
    location: "Kec. Weda",
    budget: "Rp 2,5 M",
    progress: 65,
    image: "link-gambar.jpg",
    description: "Proyek untuk mencegah banjir...",
    contractor: "PT. Bangun Jaya"
  },
  {
    id: 2,
    name: "Pembangunan Jalan",
    category: "Bina Marga", // Kategori berbeda
    location: "Kec. Patani",
    budget: "Rp 5,2 M",
    progress: 30,
    image: "link-gambar-2.jpg",
    description: "Pembangunan jalan arteri...",
    contractor: "PT. Jalan Bersama"
  },

  {
    id: 3,
    name: "Pembangunan Rumah Sehat Sederhana Paket 1",
    category: "Tata Ruang", // Kategori berbeda
    location: "Kec. Patani",
    budget: "Rp 1,2 M",
    progress: 40,
    image: "link-gambar-2.jpg",
    description: "Pembangunan Rumah Sehat Sederhana",
    contractor: "CV Abdi Guna"
  },

    {
    id: 4,
    name: "Air bersih Kota weda",
    category: "Cipta Karya", // Kategori berbeda
    location: "Kec. Weda",
    budget: "Rp 1,2 M",
    progress: 70,
    image: "link-gambar-2.jpg",
    description: "Pembuatan Jarinagn air Bersih Dalam Kota Weda",
    contractor: "CV Abdi Karya"
  }
];

// Simpan ke localStorage (simpan sementara di browser)
localStorage.setItem('projects', JSON.stringify(projects));

// Fungsi untuk ambil proyek by kategori
function getProjectsByCategory(category) {
  const allProjects = JSON.parse(localStorage.getItem('projects'));
  return allProjects.filter(project => project.category === category);
}

// Fungsi untuk ambil proyek by ID
function getProjectById(id) {
  const allProjects = JSON.parse(localStorage.getItem('projects'));
  return allProjects.find(project => project.id === parseInt(id));
}



// Fungsi filter proyek
function filterProjects() {
  const jenis = document.querySelector('select:nth-of-type(1)').value;
  const status = document.querySelector('select:nth-of-type(2)').value;
  const tahun = document.querySelector('select:nth-of-type(3)').value;
  
  const filteredProjects = projects.filter(project => {
    return (jenis === 'Semua Jenis' || project.category === jenis) &&
           (status === 'Semua Status' || project.status === status) &&
           (tahun === 'Semua Tahun' || project.year == tahun);
  });
  
  renderProjects(filteredProjects);
}

// Fungsi render proyek
function renderProjects(projectsToRender) {
  const projectList = document.getElementById('project-list');
  projectList.innerHTML = '';
  
  projectsToRender.forEach(project => {
    projectList.innerHTML += `
      <div class="project-card bg-white rounded-xl shadow-md overflow-hidden" data-aos="fade-up">
        <!-- Template card proyek sama seperti sebelumnya -->
      </div>
    `;
  });
}

// Event listener untuk tombol filter
document.querySelector('button').addEventListener('click', filterProjects);
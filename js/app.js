const gallery = document.getElementById("gallery");
const search = document.getElementById("search");

function render(data) {
  gallery.innerHTML = "";
  data.forEach(p => {
    gallery.innerHTML += `
      <div class="card">
        <img src="${p.imageUrl}">
        <h3>${p.title}</h3>
        <button onclick="download('${p.imageUrl}')">Download</button>
      </div>
    `;
  });
}

function filterCategory(cat) {
  if (cat === "All") return render(photos);
  render(photos.filter(p => p.category === cat));
}

search.addEventListener("input", () => {
  const val = search.value.toLowerCase();
  render(photos.filter(p => p.title.toLowerCase().includes(val)));
});

function download(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = "photo.png";
  a.click();
}

render(photos);
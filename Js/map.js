// Initialiser la carte centrée sur Paris
const map = L.map('map').setView([48.8566, 2.3522], 12);

// Ajouter les tuiles OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Requête Overpass API pour récupérer les food_bank dans un rayon autour de Paris
const query = `
  [out:json][timeout:25];
  (
    node["amenity"="food_bank"](around:5000,48.8515,2.3851);
    node["amenity"="soup_kitchen"](around:5000,48.8515,2.3851);
    node["social_facility"="food_bank"](around:5000,48.8515,2.3851);
    node["charity"="food_bank"](around:5000,48.8515,2.3851);
    node["shop"="charity"](around:5000,48.8515,2.3851);
    node["social_facility"="homeless_shelter"](around:5000,48.8515,2.3851);
    node["amenity"="soup_kitchen"](around:5000,48.8515,2.3851);
  );
  out center;
`;

// Fonction pour charger les données depuis Overpass API
async function chargerFoodBanks() {
  const url = 'https://overpass-api.de/api/interpreter?data=' + encodeURIComponent(query);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erreur réseau lors de la récupération des données");

    const data = await response.json();

    if (!data.elements.length) {
      alert("Aucune banque alimentaire trouvée dans la zone");
      return;
    }

    data.elements.forEach(el => {
      // Récupérer les coordonnées : node a lat/lon, way/relation ont center
      const lat = el.lat || (el.center && el.center.lat);
      const lon = el.lon || (el.center && el.center.lon);

      if (lat && lon) {
        const name = el.tags && el.tags.name ? el.tags.name : "Banque Alimentaire";
        L.marker([lat, lon])
          .addTo(map)
          .bindPopup(`<b>${name}</b><br>Type: banque alimentaire`);
      }
    });
  } catch (error) {
    alert("Erreur: " + error.message);
  }
}

// Charger la carte avec les banques alimentaires
chargerFoodBanks();

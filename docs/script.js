let map;
let markers = [];
let allLocations = [];

const typeOptions = {
  "Commercial Establishment": "commercial_establishment",
  "Government Building": "government_building",
  "Educational Institution": "educational_institution",
  "Urban Center": "urban_center",
  "Cultural Site": "cultural_site",
  "Research Facility": "research_facility",
  "Medical Facility": "medical_facility",
  "Conservation Area": "conservation_area",
  "Natural Landscape": "natural_landscape",
  "Tech Hub": "tech_hub"
};

function initMap() {
    map = L.map('map').setView([24, 2], 1.3); 
    map.flyTo([18, 2], 2, { animate: true, duration: 2 }); 


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    fetchLocations();
    setupFilters();
}

function generateYearOptions() {
    const years = [2024]
    for (let year = 2023; year >= 2002; year --) {
        years.push(year.toString());
    }
    return years;
}

function setupFilters() {
    // type filter
    const typeSelect = document.getElementById('type-select');
    Object.keys(typeOptions).forEach(label => {
        const option = document.createElement('option');
        option.value = typeOptions[label];
        option.textContent = label;
        typeSelect.appendChild(option);
    });

    // year filter
    const yearSelect = document.getElementById('year-select');
    generateYearOptions().forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    });

    typeSelect.addEventListener('change', applyFilters);
    yearSelect.addEventListener('change', applyFilters);
}

function fetchLocations() {
    console.log('fetchLocations');
    fetch('data/locations.json')
        .then(response => {
            console.log('Response recieved: ', response.status);
            if(!response.ok) {
                throw new Error('Network response was not okay');
            }
            return response.json(); 
        })
        .then(data => {
            if (data && data.locations) {
                allLocations = data.locations;
                addMarkersToMap(data.locations);
            } else {
                throw new Error('Invalid data format');
            }
        })
        .catch(error => {
            console.error('Error fetching locations', error);
        });
}

function addMarkersToMap(locations) {
    markers.forEach(marker => marker.marker.remove());
    markers= [];

    locations.forEach(location => {
        const marker = L.marker([location.lat, location.lng]).addTo(map);
        marker.bindPopup(`<b>${location.name}</b><br>${location.description}`);
        markers.push({ marker, data: location });
    });
}

function applyFilters() {
    const typeSelect = document.getElementById('type-select');
    const yearSelect = document.getElementById('year-select');
    
    const selectedType = typeSelect.value;
    const selectedYear = yearSelect.value;

    const filteredLocations = allLocations.filter(location => {
        const typeMatch = selectedType === "" || 
            location.type.includes(selectedType);

        const yearMatch = selectedYear === "" || 
            location.year.includes(parseInt(selectedYear));
        
        return typeMatch && yearMatch;
    });

    addMarkersToMap(filteredLocations);
}

initMap();

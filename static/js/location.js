document.addEventListener("DOMContentLoaded", () => {
    const venueLat = -1.0751970;
    const venueLng =  37.1505070;
    let map;

    const venueModal = document.getElementById('venueModal');
    venueModal.addEventListener('shown.bs.modal', () => {
        if (!map) {
            map = L.map('map').setView([venueLat, venueLng], 15);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
            }).addTo(map);

            const icon = new L.Icon({
                iconUrl: '/static/img/marker-icon.png',
                shadowUrl: '/static/img/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });

            L.marker([venueLat, venueLng], { icon: icon })
                .addTo(map)
                .bindPopup('Happy Valley Estate')
                .openPopup();
        } else {
            map.invalidateSize(); // ✅ Fix map not rendering when inside hidden modal
        }
    });

    // Directions button
    document.getElementById('getDirectionsBtn').addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
                const userLat = pos.coords.latitude;
                const userLng = pos.coords.longitude;

                const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${venueLat},${venueLng}&travelmode=driving`;
                window.open(mapsUrl, '_blank');
            }, () => {
                alert("Could not get your location. Please enable location access.");
            });
        } else {
            alert("Geolocation is not supported on this browser.");
        }
    });
});
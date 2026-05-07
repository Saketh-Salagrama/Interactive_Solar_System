
const Data = {
    sun: "TARGET: SUN \n\n[PHYSICAL DATA]\nRadius: 695,700 km (109x Earth)\nMass: 1.989 × 10^30 kg \nGravity: 274.0 m/s² (28 G)\nCore Temp: 15,000,000 °C\n\n[MISSION / FACTS]\nISRO Aditya-L1 is stationed at Lagrange Point 1 (L1), 1.5M km from Earth. Goal: Observe solar corona and solar wind dynamics.",
    
    mercury: "TARGET: MERCURY \n\n[PHYSICAL DATA]\nRadius: 2,439 km (0.38x Earth)\nMass: 3.30 × 10^23 kg\nGravity: 3.70 m/s²\nDistance from Sun: 0.39 AU\n\n[MISSION / FACTS]\nSmallest planet. Surface temps range from -173°C to 427°C. Used as a baseline for inner-solar system gravitational modeling.",
    
    venus: "TARGET: VENUS \n\n[PHYSICAL DATA]\nRadius: 6,051 km (0.95x Earth)\nMass: 4.86 × 10^24 kg\nGravity: 8.87 m/s²\nAtmosphere: 92x Earth Pressure\n\n[MISSION / FACTS]\nShukrayaan-1 (ISRO - Planned). Goal: Orbiter mission to study the toxic, high-pressure sulfuric acid atmosphere.",
    
    earth: "TARGET: EARTH \n\n[PHYSICAL DATA]\nRadius: 6,371 km\nMass: 5.97 × 10^24 kg\nGravity: 9.80 m/s²\nEscape Velocity: 11.2 km/s\n\n[MISSION / FACTS]\nGaganyaan (ISRO - Upcoming). Goal: India's first crewed orbital spacecraft. Supported by RISAT defense satellites.",
    
    mars: "TARGET: MARS \n\n[PHYSICAL DATA]\nRadius: 3,389 km (0.53x Earth)\nMass: 6.41 × 10^23 kg\nGravity: 3.71 m/s²\nAtmosphere: 95% Carbon Dioxide\n\n[MISSION / FACTS]\nMangalyaan / MOM (ISRO). India's first interplanetary mission. Studied Martian morphology and atmospheric methane.",
    
    jupiter: "TARGET: JUPITER \n\n[PHYSICAL DATA]\nRadius: 69,911 km (11x Earth)\nMass: 1.89 × 10^27 kg (318x Earth)\nGravity: 24.79 m/s²\nMoons: 95+\n\n[MISSION / FACTS]\nGas giant. ISRO's Deep Space Network (IDSN) provides telemetry tracking support for global deep-space missions.",
    
    saturn: "TARGET: SATURN \n\n[PHYSICAL DATA]\nRadius: 58,232 km (9x Earth)\nMass: 5.68 × 10^26 kg\nGravity: 10.44 m/s²\nDensity: 0.68 g/cm³ (Less than water)\n\n[MISSION / FACTS]\nComplex ring system. Its vast gravity well is heavily studied for deep-space trajectory and orbital mechanics.",
    
    uranus: "TARGET: URANUS \n\n[PHYSICAL DATA]\nRadius: 25,362 km (4x Earth)\nMass: 8.68 × 10^25 kg\nGravity: 8.69 m/s²\nAxial Tilt: 97.7° (Rotates on its side)\n\n[MISSION / FACTS]\nIce giant. Atmosphere is mostly hydrogen, helium, and methane. Monitored for deep-space atmospheric comparisons.",
    
    neptune: "TARGET: NEPTUNE \n\n[PHYSICAL DATA]\nRadius: 24,622 km (3.8x Earth)\nMass: 1.02 × 10^26 kg\nGravity: 11.15 m/s²\nWind Speeds: Up to 2,100 km/h\n\n[MISSION / FACTS]\nFurthest planet from the Sun. Acts as a critical comparative model for exoplanet discovery and observation."
};
function planetInfo(pname){
    
    document.getElementById('sund').innerText = Data[pname];
}

function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    // This adds the 'minimized' class if it's missing, or removes it if it's there!
    chatContainer.classList.toggle('minimized');
}
const planets = ['mercury','venus','earth','mars','jupiter','saturn','uranus','neptune'];
planets.forEach((planet, i) => {
    document.getElementById(`${planet}img`).style.left = `${670 + i * 100}px`;
});

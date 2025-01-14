//? ----------------------------
//? Constants
//? ----------------------------

// List of combined events by gender and track type
const combined_events = {
    /* Masculino*/
    "Masculino-Outdoor": ["Decatlo"],
    "Masculino-Indoor": ["Heptatlo"],
    /* Feminino */
    "Feminino-Outdoor": ["Heptatlo"],
    "Feminino-Indoor": ["Pentatlo"],
};

// List of events (in order) per combined event
const events = {
    /* Masculino-Outdoor */
    "Masculino-Outdoor-Decatlo": ["100m", "Salto em Comprimento", "Lançamento do Peso", "Salto em Altura", "400m", "110m Barreiras", "Lançamento do Disco", "Salto com Vara", "Lançamento do Dardo", "1500m"],
    /* Masculino-Indoor */
    "Masculino-Indoor-Heptatlo": ["60m", "Salto em Comprimento", "Lançamento do Peso", "Salto em Altura", "60m Barreiras", "Salto com Vara", "1000m"],
    /* Feminino-Outdoor */
    "Feminino-Outdoor-Heptatlo": ["100m Barreiras", "Salto em Altura", "Lançamento do Peso", "200m", "Salto em Comprimento", "Lançamento do Dardo", "800m"],
    /* Feminino-Indoor */
    "Feminino-Indoor-Pentatlo": ["60m Barreiras", "Salto em Altura", "Lançamento do Peso", "Salto em Comprimento", "800m"],
};

// List of events by each type, track events (in seconds), jumps (in centimeters) and throws (in meters)
const types_events = {
    /* Provas de Pista (em segundos) */
    "Track-events": ["60m", "100m", "200m", "400m", "60m Barreiras", "100m Barreiras", "110m Barreiras"],
    /* Provas de Pista (em minutos e segundos) */
    "Track-events-minutes": ["800m", "1000m", "1500m"],
    /* Provas de Saltos (em centímetros) */
    "Jumps": ["Salto em Comprimento", "Salto em Altura", "Salto com Vara"],
    /* Provas de Lançamentos (em metros) */
    "Throws": ["Lançamento do Peso", "Lançamento do Disco", "Lançamento do Dardo"],
}

// List of constant values (A, B and C) used in the formulas to calculate the points for each event
const formula_constants_events = {
    // --------------------------------
    // Provas de Pista
    // --------------------------------
    /* Masculino */
    "Masculino-60m": { A: 58.0150, B: 11.5, C: 1.81 },
    "Masculino-100m": { A: 25.4347, B: 18, C: 1.81 },
    "Masculino-400m": { A: 1.53775, B: 82, C: 1.81 },
    "Masculino-1000m": { A: 0.08713, B: 305.5, C: 1.85 },
    "Masculino-1500m": { A: 0.03768, B: 480, C: 1.85 },
    "Masculino-60m Barreiras": { A: 20.5173, B: 15.5, C: 1.92 },
    "Masculino-110m Barreiras": { A: 5.74352, B: 28.5, C: 1.92 },

    /* Feminino */
    "Feminino-200m": { A: 4.99087, B: 42.5, C: 1.81 },
    "Feminino-800m": { A: 0.11193, B: 254, C: 1.88 },
    "Feminino-60m Barreiras": { A: 20.0479, B: 17, C: 1.835 },
    "Feminino-100m Barreiras": { A: 9.23076, B: 26.7, C: 1.835 },

    // --------------------------------
    // Provas de saltos
    // --------------------------------
    /* Masculino */
    "Masculino-Salto em Comprimento": { A: 0.14354, B: 220, C: 1.4 },
    "Masculino-Salto em Altura": { A: 0.8465, B: 75, C: 1.42 },
    "Masculino-Salto com Vara": { A: 0.2797, B: 100, C: 1.35 },

    /* Feminino */
    "Feminino-Salto em Comprimento": { A: 0.188807, B: 210, C: 1.41 },
    "Feminino-Salto em Altura": { A: 1.8465, B: 75, C: 1.348 },

    // --------------------------------
    // Provas de lançamentos
    // --------------------------------
    /* Masculino */
    "Masculino-Lançamento do Peso": { A: 51.39, B: 1.5, C: 1.05 },
    "Masculino-Lançamento do Disco": { A: 12.91, B: 4, C: 1.1 },
    "Masculino-Lançamento do Dardo": { A: 10.14, B: 7, C: 1.08 },

    /* Feminino */
    "Feminino-Lançamento do Peso": { A: 56.0211, B: 1.5, C: 1.05 },
    "Feminino-Lançamento do Dardo": { A: 15.9803, B: 3.8, C: 1.04 },

};

// HTML elements
const genderSelector = document.getElementById("gender-selector");
const trackSelector = document.getElementById("track-selector");
const eventSelector = document.getElementById("event-selector");

//? ----------------------------
//? Main Functions
//? ----------------------------

// Taking in consideration the gender and track type, update the combined events options
function updateEventOptions() {
    const gender = genderSelector.value;
    const track = trackSelector.value;
    const key = `${gender}-${track}`;
    const eventOptions = combined_events[key] || [];

    // Clean previous options
    eventSelector.innerHTML = '<option value="">-- Selecione --</option>';

    // Add the new options
    eventOptions.forEach(event => {
        const option = document.createElement("option");
        option.value = event;
        option.textContent = event;
        eventSelector.appendChild(option);
    });
}

// Generate the table with the events
function generateTable() {
    const gender = genderSelector.value;
    const track = trackSelector.value;
    const event = eventSelector.value;
    const key = `${gender}-${track}-${event}`;
    const competitionsList = events[key] || [];

    // Obtenha o elemento onde a tabela será exibida
    const tableContainer = document.getElementById("table-container");

    // Limpe qualquer conteúdo anterior
    tableContainer.innerHTML = "";

    if (competitionsList.length === 0) {
        tableContainer.innerHTML = "<p>Não há competições disponíveis para este evento.</p>";
        return;
    }

    // Menciona qual é o evento selecionado
    const eventTitle = document.createElement("h3");
    eventTitle.textContent = event + '-' + track + ' ' + gender;
    tableContainer.appendChild(eventTitle);


    // Crie a tabela
    const table = document.createElement("table");
    table.classList.add("competitions-table");

    // Cabeçalho da tabela
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    headerRow.innerHTML = `
        <th>#</th>
        <th>Competição</th>
        <th>Marca</th>
        <th>Pontos</th>
    `;
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Corpo da tabela
    const tbody = document.createElement("tbody");
    competitionsList.forEach((competition, index) => {
        const row = document.createElement("tr");
        const isSpecial = types_events["Track-events-minutes"].includes(competition);
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${competition}</td>
            <td>
                ${
                    isSpecial
                        ? `
                        <input type="text" class="mark-min-input" data-competition="${competition}" placeholder="Min">:
                        <input type="text" class="mark-sec-input" data-competition="${competition}" placeholder="Seg">
                        `
                        : `<input type="text" class="mark-input" data-competition="${competition}" placeholder="Insira marca">`
                }
            </td>
            <td><input type="text" class="points-input" data-competition="${competition}" placeholder="Insira os pontos"></td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Adicione a tabela ao container
    tableContainer.appendChild(table);
    addInputListeners(gender);
}

//? ----------------------------
//? Auxiliary Functions
//? ----------------------------

function calculatePoints(gender, event, mark) {
    const { A, B, C } = formula_constants_events[`${gender}-${event}`] || {};
    if (!A || !B || !C) return 0;
    if (types_events["Track-events"].includes(event)) { return Math.floor(A * Math.pow(B - mark, C)); }
    else if(types_events["Track-events-minutes"].includes(event)) { return Math.floor(A * Math.pow(B - mark, C)); }
    else if (types_events["Jumps"].includes(event)) { return Math.floor(A * Math.pow((mark * 100) - B, C)); }
    else if (types_events["Throws"].includes(event)) { return Math.floor(A * Math.pow(mark - B, C)); }
}

function calculateMark(gender, event, points) {
    const { A, B, C } = formula_constants_events[`${gender}-${event}`] || {};
    if (!A || !B || !C) return 0;
    if (types_events["Track-events"].includes(event)) { return (B - Math.pow(points / A, 1 / C)).toFixed(2); }
    else if(types_events["Track-events-minutes"].includes(event)) { return (B - Math.pow(points / A, 1 / C)).toFixed(2); }
    else if (types_events["Jumps"].includes(event)) { return ((B + Math.pow(points / A, 1 / C)) / 100).toFixed(2); }
    else if (types_events["Throws"].includes(event)) { return (B + Math.pow(points / A, 1 / C)).toFixed(2); }
}

// Function responsible to add the "listeners" to make the "mark" and "points" update in "real-time"
function addInputListeners(gender) {
    const markInputs = document.querySelectorAll(".mark-input");
    const markMinInputs = document.querySelectorAll(".mark-min-input");
    const markSecInputs = document.querySelectorAll(".mark-sec-input");
    const pointsInputs = document.querySelectorAll(".points-input");

    // Added event listeners to the mark inputs (occurs everytime when the user types a value)
    markInputs.forEach(input => {
        input.addEventListener("input", (e) => {
            const competition = e.target.dataset.competition;
            const mark = parseFloat(e.target.value.replace(",", "."));
            const points = isNaN(mark) ? 0 : calculatePoints(gender, competition, mark);
            const pointsInput = document.querySelector(`.points-input[data-competition="${competition}"]`);
            if (pointsInput) pointsInput.value = points;
            calculateTotalPoints();
        });
    });

    markMinInputs.forEach(input => {
        input.addEventListener("input", (e) => {
            // Also gets what is in the seconds input (if empty assume 0)
            const secInput = document.querySelector(`.mark-sec-input[data-competition="${e.target.dataset.competition}"]`);
            const competition = e.target.dataset.competition;
            const markMin = parseFloat(e.target.value.replace(",", ".")) || 0;
            const markSec = parseFloat(secInput.value.replace(",", ".")) || 0;
            const mark = markMin * 60 + markSec;
            const points = isNaN(mark) ? 0 : calculatePoints(gender, competition, mark);
            const pointsInput = document.querySelector(`.points-input[data-competition="${competition}"]`);
            if (pointsInput) pointsInput.value = points;
            calculateTotalPoints();
        });
    });

    markSecInputs.forEach(input => {
        input.addEventListener("input", (e) => {
            // Also gets what is in the seconds input (if empty assume 0)
            const minInput = document.querySelector(`.mark-min-input[data-competition="${e.target.dataset.competition}"]`);
            const competition = e.target.dataset.competition;
            const markSec = parseFloat(e.target.value.replace(",", ".")) || 0;
            const markMin = parseFloat(minInput.value.replace(",", ".")) || 0;
            const mark = markMin * 60 + markSec;
            const points = isNaN(mark) ? 0 : calculatePoints(gender, competition, mark);
            const pointsInput = document.querySelector(`.points-input[data-competition="${competition}"]`);
            if (pointsInput) pointsInput.value = points;
            calculateTotalPoints();
        });
    });
    
    pointsInputs.forEach(input => {
        input.addEventListener("input", (e) => {
            const competition = e.target.dataset.competition;
            const points = parseInt(e.target.value, 10);
            const mark = isNaN(points) ? 0 : calculateMark(gender, competition, points);
            if (types_events["Track-events-minutes"].includes(competition)) {
                const min = Math.floor(mark / 60);
                const sec = (((mark * 100) % 6000) / 100).toFixed(2)
                const markMinInput = document.querySelector(`.mark-min-input[data-competition="${competition}"]`);
                const markSecInput = document.querySelector(`.mark-sec-input[data-competition="${competition}"]`);
                if (markMinInput) markMinInput.value = min;
                if (markSecInput) markSecInput.value = sec;
            } else {
                const markInput = document.querySelector(`.mark-input[data-competition="${competition}"]`);
                if (markInput) markInput.value = mark;
            }
            calculateTotalPoints();
        });
    });

}

function calculateTotalPoints() {
    const pointsInputs = document.querySelectorAll(".points-input");
    let totalPoints = 0;
    pointsInputs.forEach(input => {
        const points = parseInt(input.value, 10);
        if (!isNaN(points)) totalPoints += points;
    });
    let totalPointsField = document.getElementById("total-points");
    totalPointsField.textContent = totalPoints;
}

// If the user changes one of the selectors, update the event options
genderSelector.addEventListener("change", updateEventOptions);
trackSelector.addEventListener("change", updateEventOptions);
eventSelector.addEventListener("change", generateTable);

//? ----------------------------
//? Initialization
//? ----------------------------

window.addEventListener('DOMContentLoaded', () => {
    // Define o valor padrão para o género
    document.getElementById('gender-selector').value = "Masculino";

    // Define o valor padrão para a pista
    document.getElementById('track-selector').value = "Outdoor";

    updateEventOptions();

    // Define o valor padrão para a competição
    const eventSelector = document.getElementById('event-selector');
    eventSelector.value = "Decatlo";

    generateTable();
    // Opcional: Trigga evento 'change' para simular seleção (se necessário)
    eventSelector.dispatchEvent(new Event('change'));
});
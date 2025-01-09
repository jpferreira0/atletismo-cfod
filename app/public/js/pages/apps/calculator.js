// List of events
const combined_events = {
    "Masculino-Outdoor": ["Decatlo", "Triatlo (Sub-16)"],
    "Feminino-Outdoor": ["Heptatlo", "Triatlo (Sub-16)"],
    "Masculino-Indoor": ["Heptatlo", "Triatlo (Sub-16)"],
    "Feminino-Indoor": ["Pentatlo", "Triatlo (Sub-16)"],
};

const formulas = {
    "100m": { A: 25.4347, B: 18, C: 1.81 },
    "Salto em Comprimento": { A: 0.14354, B: 220, C: 1.4 },
    "Lançamento do Peso": { A: 51.39, B: 1.5, C: 1.05 },
    
};

const competition_types = {
    "Track-events": ["100m", "200m", "400m", "800m", "1500m", "5000m", "10000m", "110m Barreiras", "400m Barreiras", "3000m Obstáculos", "3000m Marcha", "5000m Marcha", "10000m Marcha"],
    "Jumps": ["Salto em Comprimento", "Salto em Altura", "Salto com Vara", "Triplo Salto"],
    "Throws": ["Lançamento do Peso", "Lançamento do Disco", "Lançamento do Dardo", "Lançamento do Martelo"],
}

const events = {
    /* Masculino-Outdoor */
    "Masculino-Outdoor-Decatlo": ["100m", "Salto em Comprimento", "Lançamento do Peso", "Salto em Altura", "400m", "110m Barreiras", "Lançamento do Disco", "Salto com Vara", "Lançamento do Dardo", "1500m"],
    "Masculino-Outdoor-Triatlo (Sub-16)": ["60m", "Salto em Comprimento", "Lançamento do Peso"],
    /* Masculino-Indoor */
    "Masculino-Indoor-Heptatlo": ["60m", "Salto em Comprimento", "Lançamento do Peso", "Salto em Altura", "60m Barreiras", "Salto com Vara", "1000m"],
    "Masculino-Indoor-Triatlo (Sub-16)": ["60m", "Salto em Comprimento", "Lançamento do Peso"],
    /* Feminino-Outdoor */
    "Feminino-Outdoor-Heptatlo": ["100m Barreiras", "Salto em Altura", "Lançamento do Peso", "200m", "Salto em Comprimento", "Lançamento do Dardo", "800m"],
    "Feminino-Outdoor-Triatlo (Sub-16)": ["60m", "Salto em Comprimento", "Lançamento do Peso"],
    /* Feminino-Indoor */
    "Feminino-Indoor-Pentatlo": ["60m Barreiras", "Salto em Altura", "Lançamento do Peso", "Salto em Comprimento", "800m"],
    "Feminin-Indoor-Triatlo (Sub-16)": ["60m", "Salto em Comprimento", "Lançamento do Peso"],
};


// HTML elements
const genderSelector = document.getElementById("gender-selector");
const trackSelector = document.getElementById("track-selector");
const eventSelector = document.getElementById("event-selector");

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
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${competition}</td>
            <td><input type="text" class="mark-input" data-competition="${competition}" placeholder="Insira marca"></td>
            <td><input type="text" class="points-input" data-competition="${competition}" placeholder="0"></td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);

    // Adicione a tabela ao container
    tableContainer.appendChild(table);
    addInputListeners(event);
}

function calculatePoints(event, mark) {
    const { A, B, C } = formulas[event] || {};
    if (!A || !B || !C) return 0;
    //TODO: Atualizar tendo em conta se é salto, de pista ou lançamento (cada uma tem a sua fórmula)
    return Math.floor(A * Math.pow(B - mark, C));
}

function calculateMark(event, points) {
    const { A, B, C } = formulas[event] || {};
    if (!A || !B || !C) return 0;
    //TODO: Atualizar tendo em conta se é salto, de pista ou lançamento (cada uma tem a sua fórmula)
    return (B - Math.pow(points / A, 1 / C)).toFixed(2);
}

function addInputListeners(event) {
    const markInputs = document.querySelectorAll(".mark-input");
    const pointsInputs = document.querySelectorAll(".points-input");

    markInputs.forEach(input => {
        input.addEventListener("input", (e) => {
            const competition = e.target.dataset.competition;
            const mark = parseFloat(e.target.value.replace(",", "."));
            const points = isNaN(mark) ? 0 : calculatePoints(event, mark);
            const pointsInput = document.querySelector(`.points-input[data-competition="${competition}"]`);
            if (pointsInput) pointsInput.value = points;
        });
    });

    pointsInputs.forEach(input => {
        input.addEventListener("input", (e) => {
            const competition = e.target.dataset.competition;
            const points = parseInt(e.target.value, 10);
            const mark = isNaN(points) ? 0 : calculateMark(event, points);
            const markInput = document.querySelector(`.mark-input[data-competition="${competition}"]`);
            if (markInput) markInput.value = mark;
        });
    });
}

// If the user changes one of the selectors, update the event options
genderSelector.addEventListener("change", updateEventOptions);
trackSelector.addEventListener("change", updateEventOptions);
eventSelector.addEventListener("change", generateTable);
const DATA = [
    ["", "[...]", ""],
    ["Tempo Presente", null],
    [
        "Il caso ha voluto...",
        "La nostra avventura inizia oggi, un evento segnerà l'inizio della campagna e dell'avventura di 7 avventurieri, riuniti sotto il nome dei Lyons' Pride",
        "979 EM",
        "/assets/img/dodo.png",
    ],
];

const template = (titolo, corpo, data, img) => {
    if (corpo == null) {
        return `
            <div class="timeline-block timeline-block-icon-only">
                <div class="timeline-icon timeline-icon-text timeline-icon-hide-border">
                    <span>${titolo}</span>
                </div>
                <div class="timeline-content"></div>
            </div>
        `;
    }

    return `<div class="timeline-block">
                        <div class="timeline-icon"></div>
                        <div class="timeline-content">
                            <h2>${titolo}</h2>
                            <p>${corpo}

                            ${img ? `<p><img src="${img}"/></p>` : ""}
                            
                            </p>
                            <div class="timeline-date">${data}</div>
                        </div>
                    </div>`;
};

document.addEventListener("DOMContentLoaded", () => {
    let timeline = document.getElementById("timeline");
    DATA.forEach((v) => {
        let node = document
            .createRange()
            .createContextualFragment(template(...v));
        timeline.appendChild(node);
    });
});

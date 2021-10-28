const timelineOne = [
    {
        "title": "College Student",
        "isi": "University Of Gunadarma - System Information (2017 - 2021)"
    },
    {
        "title": "test Student",
        "isi": "University Of Gunadarma - System Information (2017 - 2021)"
    },
    {
        "title": "test2 Student",
        "isi": "University Of Gunadarma - System Information (2017 - 2021)"
    }
];
const timelineTwo = [
    {
        "title": "Freelance",
        "isi": "Web Programmer, Desain Logo(beginner), Fixed Code PHP(Beginner). (2020 - Now)"
    },
    {
        "title": "Intern - Pt. Pratika Nugraha Jaya",
        "isi": "carbide welding, Bending, Cutting copper (2016 - 2016)"
    }
];
const Programming = [
    {
        "label": "HTML",
        "width": "80%"
    },
    {
        "label": "CSS",
        "width": "55%"
    },
    {
        "label": "JS",
        "width": "20%"
    },
    {
        "label": "PHP",
        "width": "70%"
    }
];
const Software = [
    {
        "label": "Adobe XD",
        "width": "35%"
    },
    {
        "label": "Photoshop",
        "width": "75%"
    },
    {
        "label": "Premiere",
        "width": "45%"
    }
];
const TableData = [
    {
        "th": "<i class='fas fa-map-marker-alt'></i>",
        "td": "Jakarta, Indonesia"
    },
    {
        "th": "<i class='fas fa-user'></i>",
        "td": "22th"
    },
    {
        "th": "<i class='fab fa-whatsapp'></i>",
        "td": "+62 858-1106-1854"
    },
    {
        "th": "<i class='fas fa-globe'></i>",
        "td": "wahiddun1.blogspot.com"
    },
    {
        "th": "<i class='fas fa-envelope'></i>",
        "td": "wahidariesta@gmail.com"
    }
];

document.getElementById("thisTimelineLoop1").innerHTML =`
${timelineOne.map(function (timeline) {
    return`
    <div class="time-label"></div>
    <div class="thisTimelineLoop">
        <i class="fas fa-dot-circle animate__animated animate__pulse animate__infinite"></i>
        <div class="timeline-item">
            <div class="timeline-body">
                <h6>${timeline.title}</h6>
                <small>${timeline.isi}</small>
            </div>
        </div>
    </div>`
}).join('')}`
document.getElementById("thisTimelineLoop2").innerHTML =`
${timelineTwo.map(function (timeline) {
    return`
    <div class="time-label"></div>
    <div class="thisTimelineLoop">
        <i class="fas fa-dot-circle animate__animated animate__pulse animate__infinite"></i>
        <div class="timeline-item">
            <div class="timeline-body">
                <h6>${timeline.title}</h6>
                <small>${timeline.isi}</small>
            </div>
        </div>
    </div>`
}).join('')}`

document.getElementById("skills").innerHTML =`
${Programming.map(function (Pskill) {
    return`
    <label>${Pskill.label}</label>
    <div class="progress" style="height: 9px;">
        <div class="progress-bar " role="progressbar" style="width: ${Pskill.width};" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100">
        </div>
    </div>`
}).join('')}`
document.getElementById("SftSkill").innerHTML =`
${Software.map(function (SFTskill) {
    return`
    <label>${SFTskill.label}</label>
    <div class="progress" style="height: 9px;">
        <div class="progress-bar " role="progressbar" style="width: ${SFTskill.width};" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100">
        </div>
    </div>`
}).join('')}`


document.getElementById("tableContent").innerHTML =`
${TableData.map(function (table) {
    return`
    <tr>
        <th>${table.th}</th>
        <td>${table.td}</td>
    </tr>
    `
}).join('')}`
// Funzioni
function persona(nome, ruolo, image){
    const dipendente = {
        nome: nome,
        ruolo: ruolo,
        image: image,
    }
    return dipendente;
};

function stampa(dipendete){
    console.log(dipendete.nome, dipendete.ruolo, dipendete.image) ;
    table.innerHTML += 
    `
    <tr>
    <td>${dipendete.nome}</td>
    <td>${dipendete.ruolo}</td>
    <td>${dipendete.image}</td>
    </tr>
    `;
};

const personale = [
    persona('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg'),
    persona('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg'),
    persona('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg'),
    persona('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg'),
    persona('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg'),
    persona('Barbara Ramos', 'Graphic Designer', ' barbara-ramos-graphic-designer.jpg'),
];

const table = document.querySelector('.dipendenti');

personale.forEach(stampa);

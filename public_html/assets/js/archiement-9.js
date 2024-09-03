const archiementNine = [
  {
    id: 1,
    archiementNineId: `NPSA`,
    body: ` Member Nigerian Political Science Association
 
    `,
  },
  {
    id: 2,
    archiementNineId: `IPAN `,
    body: ` Institute of Public Administration of Nigeria 
`,
  },
  {
    id: 3,
    archiementNineId: `IIPRDS `,
    body: `International Institute of Policy
Research and Development Strategies. 
`,
  },
  {
    id: 4,
    archiementNineId: `NACS `,
    body: `Nigeria Association of Chinese Studies
`,
  },
  {
    id: 5,
    archiementNineId: `NIM `,
    body: `Nigerian
Institute of Management
`,
  },
];

const archiementNineContainer = () => {
  const archiementNineEle = document.querySelector(".archiementNineEle");
  archiementNine.map((index) => {
    const { archiementNineId, body } = index;
    archiementNineEle.innerHTML += `
                   
                        <h6 class="title">${archiementNineId}</h6>
                        <p>${body}</p>
                  
                
        `;
  });
};
archiementNineContainer();

const archiementTwo = [
  {
    id: 1,
    archiementTwoId: `2007`,
    body: ` Report Preparation for PARP (National Assembly),Nigerian State Assemblies: A Study of Legislative
Activities 1999 – 2005. A Project Initiated by Policy Analysis and Research Project National Assembly, PARP
.
    `,
  },
  {
    id: 2,
    archiementTwoId: `2007`,
    body: ` REPORT SUBMITTED TO THE INTERNATIONAL REPUBLICAN INSTITUTE (I.R.I) on
Elections Observer Mission to CALABER 12th -15th APRIL.
`,
  },
  {
    id: 3,
    archiementTwoId: `October 2023`,
    body: ` Report of the committee to Reposition NTAC 
`,
  },
];

const archiementTwoContainer = () => {
  const archiementTwoEle = document.querySelector(".archiementTwoEle");
  archiementTwo.map((index) => {
    const { archiementTwoId, body, archiementTwoImg } = index;
    archiementTwoEle.innerHTML += `
                        <h6 class="title">${archiementTwoId}</h6>
                        <p>${body}</p>
               
        `;
  });
};
archiementTwoContainer();

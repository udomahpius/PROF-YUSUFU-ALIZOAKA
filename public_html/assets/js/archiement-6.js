const archiementSix = [
  {
    id: 1,
    archiementSixId: `ACP`,
    body: `Awarded Certificate of Participation of First Mobil Nigeria Universities Athletics Championships. 
    `,
  },
  {
    id: 2,
    archiementSixId: `1996-1997`,
    body: `Certificate of Service as Staff Adviser to the National Association of Political Science Students (NAPSS).
. 
`,
  },
  {
    id: 3,
    archiementSixId: `2003`,
    body: `Certificate of Honour by Staff School Graduation Committee . 
`,
  },
  {
    id: 4,
    archiementSixId: `2005-2006`,
    body: `Award of Honour by Students Union Electoral Committee . 
`,
  },
  {
    id: 5,
    archiementSixId: `2007`,
    body: `Commendation by End Poverty 2015 Africa Union Millennium Campaign  
`,
  },
  
];

const archiementSixContainer = () => {
  const archiementSixEle = document.querySelector(".archiementSixEle");
  archiementSix.map((index) => {
    const { archiementSixId, body } = index;
    archiementSixEle.innerHTML += `
                   
                        <h6 class="title">${archiementSixId}</h6>
                        <p>${body}</p>
                  
                
        `;
  });
};
archiementSixContainer();

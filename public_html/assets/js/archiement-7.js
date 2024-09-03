const archiementSeven = [
  {
    id: 1,
    archiementSevenId: `2017`,
    body: `Resource verification for Ph. D and M.Sc programs of the Department of Political Science, Federal
University Dutsima, Katsina state. 
    `,
  },
  {
    id: 2,
    archiementSevenId: `10-12/12/2017`,
    body: ` Accreditation of B.Sc degree program in Political Science of the Federal University Wukari, Taraba State
.
`,
  },
  {
    id: 3,
    archiementSevenId: `13-15/12/2017`,
    body: `Accreditation of B.Sc degree program in Political Science of the Department of Political Science at Bauchi
State University, Gadau, Bauchi State. 
`,
  },
  {
    id: 4,
    archiementSevenId: `13-15/12/2017`,
    body: `Accreditation of B.Sc degree program in Political Science of the Department of Political Science at Bauchi
State University, Gadau, Bauchi State.
`,
  },
  {
    id: 5,
    archiementSevenId: `23rd -25th, May, 2018`,
    body: ` Accreditation of B.Sc Political Science degree programme at Caritas University Amorji Nike, Enugu State
.
`,
  },
  {
    id: 6,
    archiementSevenId: `11-13
November 2019 `,
    body: `Accreditation of B.Sc Political Science Degree program at Gombe State University Damaturu.
`,
  },
  {
    id: 7,
    archiementSevenId: `March 12th-14th march 2021`,
    body: `Accreditation of B.SC Political Science degree programme at Federal University Kashere Gombe State.
 
`,
  },
  {
    id: 8,
    archiementSevenId: `Delta State`,
    body: `Accreditation of B.Sc International Relations degree program at Western Delta University Ogharra 
`,
  },
  {
    id: 9,
    archiementSevenId: `5th-7th November 2023`,
    body: `Accreditation of B.Sc Political Science degree program at the federal university Dutse Jigawa State
. 
`,
  },
  {
    id: 10,
    archiementSevenId: `2019-date`,
    body: `MEMBER Academic Advisory Board National Institute for Legislative and Democratic Studies (NILDS) NASS
ABUJA.  
    `,
  },
  {
    id: 11,
    archiementSevenId: `2020-2024 `,
    body: `PRESIDENT Nigerian Association of Chinese Studies ABUJA.
    `,
  },
  {
    id: 12,
    archiementSevenId: `2020-date `,
    body: `CHAIRMAN Nigerian Institute of Management University of Abuja Chapter 
    `,
  },
  {
    id: 13,
    archiementSevenId: `2021`,
    body: ` CHAIRMAN Induction and Awards Committee of the Institute of Leadership for Policy Implementation Abuja

    `,
  },
  {
    id: 14,
    archiementSevenId: `2018-2021`,
    body: `MEMBER Technical Advisory Group TETFUND (TAG).  
    `,
  },
  {
    id: 15,
    archiementSevenId: `2023-2025`,
    body: `SECRETARY: Social Science Academy of Nigeria . 
    `,
  },
];

const archiementSevenContainer = () => {
  const archiementSevenEle = document.querySelector(".archiementSevenEle");
  archiementSeven.map((index) => {
    const { archiementSevenId, body } = index;
    archiementSevenEle.innerHTML += `
                   
                        <h6 class="title">${archiementSevenId}</h6>
                        <p>${body}</p>
                  
                
        `;
  });
};
archiementSevenContainer();

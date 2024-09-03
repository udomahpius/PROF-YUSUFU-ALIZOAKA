const archiementFive = [
  {
    id: 1,
    archiementFiveId: `External Examiner`,
    body: ` ABU Zaria, Dept of Political Science,
Postgraduate Programme  
    `,
  },
  {
    id: 2,
    archiementFiveId: `External Examiner`,
    body: `  Nasarawa State University, Dept of Political Science, undergraduate Program
External Examiner Ph.D Candidates (4) ABU ZARIA 
`,
  },
  {
    id: 3,
    archiementFiveId: `MAHMOUD M. LAWAN (2009)`,
    body: ` The impact of public policy inconsistency on reform program in Nigeria: a case
study of the Electric power sector. Department of Political Science A.B.U Zaria  
`,
  },
  {
    id: 4,
    archiementFiveId: `Muhammad Kabir Isa 2010`,
    body: `The state and management of ethnic conflict in Nigeria: A study of ethnic conflicts
in Taraba state 1996-2006 department of political science ABU Zaria  
`,
  },
  {
    id: 5,
    archiementFiveId: `Stephen Lazi Akhere 2011`,
    body: ` The effects of deregulation of the downstream petroleum subsector on the
Nigerian economy; 1999-2007. Department of political science Nasarawa state university.  
`,
  },
  {
    id: 6,
    archiementFiveId: `2016 , 2017 & 2018 `,
    body: ` EXTERNAL EXAMINAR SECURITY INSTITUTE BWARI Abuja 
`,
  },
  {
    id: 7,
    archiementFiveId: `Facilitator`,
    body: ` Health Management Coordinating Centre.  
`,
  },
  {
    id: 8,
    archiementFiveId: `University of Abuja`,
    body: ` Federal Ministry of Health Training Centre. 
`,
  },
  {
    id: 9,
    archiementFiveId: `2006 – 2007`,
    body: ` Consultant to PARP National Assembly, Abuja . 
`,
  },
  {
    id: 10,
    archiementFiveId: `14th April 2007`,
    body: `International Election Observer represented IRI in the Governorship/State Assembly Elections  in Calabar, Cross River State.  
    `,
  },
  
];

const archiementFiveContainer = () => {
  const archiementFiveEle = document.querySelector(".archiementFiveEle");
  archiementFive.map((index) => {
    const { archiementFiveId, body } = index;
    archiementFiveEle.innerHTML += `
                        <h6 class="title">${archiementFiveId}</h6>
                        <p>${body}</p>
                  
                
        `;
  });
};
archiementFiveContainer();

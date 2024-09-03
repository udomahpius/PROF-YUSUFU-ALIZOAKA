const archiementOne = [
  {
    id: 1,
    archiementOneId: `3rd & 4th August 2000`,
    body: `National Workshop on Conflict Resolution Crisis Control and Crisis management in Tertiary
Institutions at N.U.C Abuja. 
    `,
  },
  {
    id: 2,
    archiementOneId: `2003`,
    body: `Training on Examination Misconduct /Cultism by exam Ethics in Owerri, Imo State  
`,
  },
  {
    id: 3,
    archiementOneId: `2005`,
    body: `Training on Examination Misconduct at African University Institute Imeko Ogun State  Training 
`,
  },
  {
    id: 4,
    archiementOneId: `2006 `,
    body: `Security by United Nation Drug Control Office abuse on Drug abuse, Cultism and HIV/Aids in Cosy Rest
Guest House Gwagwalada, Abuja 
`,
  },
  {
    id: 5,
    archiementOneId: `6th – 9th December 2006.`,
    body: `Workshop Training on Higher Education Management Project organized by ABU Zaria in collaboration with
MAC Arthur Foundation at the institute of Development Research  
`,
  },
  {
    id: 6,
    archiementOneId: `2006`,
    body: `Workshop Training on Partnering with Students for Peaceful Co-existence organized in Kaduna by Nigerian
Institute of Public Relations . 
`,
  },
  {
    id: 7,
    archiementOneId: `2006`,
    body: `Centre for Management Development Workshop on Management and Leadership Development for Good
Governance of Nigerian Universities  
`,
  },
  {
    id: 8,
    archiementOneId: `2009`,
    body: `Management Trainers’ Development Workshop (Basic MANDEV).  
`,
  },
  {
    id: 9,
    archiementOneId: `2009`,
    body: `Workshop for Health Managers’ of Coordinating Centres, Federal Ministry of Health, held in Vines Hotel,
Abuja. 
`,
  },
  {
    id: 10,
    archiementOneId: `22nd- 24th March 2017`,
    body: `INTERNATIONAL CONFERENCE Organized by the International Institute for Policy Review and Development
on ‘’ending Africa’s dependency on developed Countries held at Lagos State University, Nigeria 
. 
    `,
  },
  {
    id: 11,
    archiementOneId: `19th and 20th July 2017`,
    body: `International conference organized by Africa-EU Development Conference on policy and strategies held at
the University of Ghana. 
    `,
  },
  {
    id: 12,
    archiementOneId: `26th-29th March 2018 `,
    body: `International conference organized by Nigerian Political Science Association {NPSA} at its 31st Annual
Conference on the theme ‘’State Governance and Regional Integration in Africa held at Ebonyi State
University 
    `,
  },
  {
    id: 13,
    archiementOneId: `10th - 13th, June 2019`,
    body: `International workshop organized by the Association of African Universities on online teaching and learning
management systems at the University of Abuja. 
    `,
  },
  {
    id: 14,
    archiementOneId: `29th Sept – 2nd October 2021`,
    body: `Workshop organized by
the Doctoral Academy of Nigeria on the theme ‘’Enhancing the capacities of Doctoral Supervisors for
Research Supervision’’  at Committee of Vice Chancellors Conference
Hall Wuse ii Abuja 
    `,
  },
  {
    id: 15,
    archiementOneId: `12th and 13th October
2021`,
    body: `International Symposium on Africa-China Round Cooperation under the Multilateral
Framework: Achieving Sustainable Peace, Security, and Development in Post COVID-19 Organized by the
Institute For Peace and Conflict Resolution.Ministry of Foreign Affairs between  
    `,
  },
  {
    id: 16,
    archiementOneId: `2007`,
    body: `Training of 120 Peer Group educators at the University of Abuja by the Youth Friendly Centre in
conjunction with the Medical Centre Sponsored by the US Embassy fund for HIV/AIDS . 
    `,
  },
  {
    id: 16,
    archiementOneId: `NDDC`,
    body: ` Monetary in Collaboration with ALGON in 2001 at the International Conference Centre Abuja.
    `,
  },
];

const archiementOneContainer = () => {
  const archiementOneEle = document.querySelector(".archiementOneEle");
  archiementOne.map((index) => {
    const { archiementOneId, body, archiementOneImg } = index;
    archiementOneEle.innerHTML += `
              
                        <h6 class="title">${archiementOneId}</h6>
                        <p>${body}</p>
                   
        `;
  });
};
archiementOneContainer();

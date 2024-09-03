const archiementFour = [
  {
    id: 1,
    archiementFourId: `Facilitator`,
    body: ` National Population Census 1991  
    `,
  },
  {
    id: 2,
    archiementFourId: `Supervisor`,
    body: ` Doro War National SupervisorElectoral CommissionElections 1987/1990.  
`,
  },
  {
    id: 3,
    archiementFourId: `Exam Officer`,
    body: ` Department of Political Science University of Abuja. 1994 – 2000  
`,
  },
  {
    id: 4,
    archiementFourId: `Assistant Coordinator`,
    body: ` Certificate in Public Administrator Programme, University of Abuja.
Consultancy Service Programme  
`,
  },
  {
    id: 5,
    archiementFourId: `Secretary`,
    body: ` Biu Cultural Association Abuja (1995 – 1996)  
`,
  },
  {
    id: 6,
    archiementFourId: `Facilitator`,
    body: ` Training Workshop for Election Monitors at Arewa House Kaduna and Yola 1999.  
`,
  },
  {
    id: 7,
    archiementFourId: `Coordinator`,
    body: ` Remedial Arts, and Social Science, Sept 2000 – Sept 2002.  
`,
  },
  {
    id: 8,
    archiementFourId: `Deputy Dean`,
    body: ` Students Affairs University of Abuja, April 2000 – 2004.  
`,
  },
  {
    id: 9,
    archiementFourId: `Member`,
    body: ` Senate Committee on Examination Misconduct  
`,
  },
  {
    id: 10,
    archiementFourId: `Member`,
    body: ` Students Welfare Board  
    `,
  },
  {
    id: 11,
    archiementFourId: `Member`,
    body: ` Senate Committee on Animal Evacuation in Giri Quarters.  
    `,
  },
  {
    id: 12,
    archiementFourId: `Acting Dean`,
    body: `Students Affairs 2004 – 2007.  
    `,
  },
  {
    id: 13,
    archiementFourId: `Chairman`,
    body: ` Convocation Committee 8th, 9th, 10th Convocation Ceremony of the University of Abuja June,
2005  
    `,
  },
  {
    id: 14,
    archiementFourId: `Chairman`,
    body: ` Ceremonies Committee. Successfully organized a befitting Convocation ceremony, the 11th
and 12th Convocation Ceremony of the University of Abuja, February 10, 2007.  
    `,
  },
  {
    id: 15,
    archiementFourId: `Chairman`,
    body: ` Matriculation ceremony for three sessions Running from 2004/2005, 2005/2006, 2006/2007
sessions.  
    `,
  },
  {
    id: 16,
    archiementFourId: ` Chairman`,
    body: ` Examination Misconduct Committee 2004 – 2007 
    `,
  },
  {
    id: 17,
    archiementFourId: `Chairman`,
    body: ` Disciplinary Committee 2004 – 2007.  
    `,
  },
  {
    id: 18,
    archiementFourId: `Member`,
    body: ` Security Re-Organization Committee 2006  
    `,
  },
  {
    id: 19,
    archiementFourId: `Member`,
    body: ` University Management Committee 2005 – 2007.  
    `,
  },
  {
    id: 20,
    archiementFourId: `Member`,
    body: ` PG Board of Examiners 2004 - 2007  
    `,
  },
  {
    id: 21,
    archiementFourId: `Member`,
    body: `  Hostel Maintenance Committee 2005 – 2007 
    `,
  },
  {
    id: 22,
    archiementFourId: `H.O.D`,
    body: ` Department of Political Science and International Relations 2009 – 2011  
    `,
  },
  {
    id: 23,
    archiementFourId: `H.O.D`,
    body: ` Department of Political Science 2014-2018  
    `,
  },
  {
    id: 24,
    archiementFourId: `DEPUTY DEAN`,
    body: ` Faculty of Social Science 2014-2016  
    `,
  },
  {
    id: 25,
    archiementFourId: `DEAN`,
    body: ` Faculty of Social Science 2018-2020  
    `,
  },
  {
    id: 26,
    archiementFourId: `MEMBER`,
    body: ` CONVOCATION COMMITTEE2014-DATE  
    `,
  },
  {
    id: 27,
    archiementFourId: `CHAIRMAN`,
    body: ` SUBCOMMITTEE ON ACCOMMODATION, CONVOCATION COMMITTEE.  
    `,
  },
  {
    id: 28,
    archiementFourId: `MEMBER`,
    body: ` SENATE EXAMINATION MONITORING COMMITTEE 2014-DATE  
    `,
  },
  {
    id: 29,
    archiementFourId: `CHAIRMAN`,
    body: ` ADHOC-COMMITTEE ON VERIFICATION OF RESULT OF AISHA ALIYU SAMBO
OF ECONOMICS DEPARTMENT.MAY- JUNE 2015  
    `,
  },
  {
    id: 30,
    archiementFourId: `Chairman`,
    body: `committee to retrieve student’s union vehicle from the ex-president of the SUG June-October
2016  
    `,
  },
  {
    id: 31,
    archiementFourId: `Chairman`,
    body: ` ASUU Committee for the award of scholarships to indigent students 2019,2021  
    `,
  },
  {
    id: 32,
    archiementFourId: `Chairman`,
    body: ` ASUU ethics committee from 2017--date  
    `,
  },
  {
    id: 33,
    archiementFourId: `Member`,
    body: ` ASUU Electoral committee 2015,2017.2020  
    `,
  },
  
];

const archiementFourContainer = () => {
  const archiementFourEle = document.querySelector(".archiementFourEle");
  archiementFour.map((index) => {
    const { archiementFourId, body,} = index;
    archiementFourEle.innerHTML += `
                   
                        <h6 class="title">${archiementFourId}</h6>
                        <p>${body}</p>
                  
                
        `;
  });
};
archiementFourContainer();

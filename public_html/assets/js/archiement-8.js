const archiementEight = [
  {
    id: 1,
    archiementEightId: `BEIJING CHINA`,
    body: `  2010 DURATION OF STAY ONE MONTH To participate on a training of traditional Chinese
medicine for developing countries. from 06/10/2010—05/11/2010.
    `,
  },
  {
    id: 2,
    archiementEightId: `Lome TOGO`,
    body: ` 30/10/2012—02/11/2012 TO ATTEND AN INTERNATIONAL CONFERENCE 
`,
  },
  {
    id: 3,
    archiementEightId: `BEIJING CHINA`,
    body: ` 2012 FOR TWO WEEKS TO ATTEND AN INTERNATIONAL AFRICAN-THINK TANK FORUM WITH
CHINESE ACADEMICS AND GOVERNMENT / PARTY OFFICIALS. 
`,
  },
  {
    id: 4,
    archiementEightId: `ROME ITALY`,
    body: ` 2013 TO ATTEND AN INTERNATIONAL CONFERENCE BY IJAS 26/10/2013 – 02/11/2013 
`,
  },
  {
    id: 5,
    archiementEightId: `LOME TOGO`,
    body: `  To attend an international conference
`,
  },
  {
    id: 6,
    archiementEightId: `PORT NOVO BENIN REPUBLIC `,
    body: ` TO PARTICIPATE IN THE LAUNCH OF COLLABORATION BETWEEN
Entrepreneurial university COTONOU BENIN and CANADIAN GOVERNMENT
`,
  },
  {
    id: 7,
    archiementEightId: ` ROME ITALY`,
    body: ` 26/10/2014-02/11/2014 TO ATTEND AN INTERNATIONAL CONFERENCE BY IJAS IN ROME
`,
  },
  {
    id: 8,
    archiementEightId: `ANKARA-TURKEY`,
    body: ` 17/01/2015-20/01/2015 TO ATTEND AN INTERNATIONAL ROUND TABLE ON AFRICA –
TURKEY RELATIONS. 
`,
  },
  {
    id: 9,
    archiementEightId: `ROME ITALY`,
    body: ` 25-29 October 2015 to attend IJAS CONFERENCE 
`,
  },
  {
    id: 10,
    archiementEightId: ` QINGHAI CHINA`,
    body: ` 28/08/2016--6/09/2016 Cultural tour of Beijing China and Xining China.
    `,
  },
  {
    id: 11,
    archiementEightId: `ACCRA GHANA `,
    body: `University of Ghana, Legon between 19-20, July 2017 to present a paper at the conference
organized by the International Institute for Policy Review & Development Strategies. 
    `,
  },
  {
    id: 12,
    archiementEightId: `SLUBICE GERMANY`,
    body: ` on 2nd February 2018 for a visit 
    `,
  },
  {
    id: 13,
    archiementEightId: `BEIJING CHINA`,
    body: `  for 11 days governance capacity building program for African countries September 8-24 ,2019
    `,
  },
  {
    id: 14,
    archiementEightId: `COTONOU BENIN REPUBLIC`,
    body: ` FEBRUARY 24-27, 2020INTERNATIONAL CONFERENCE ON POVERTY REDUCTION
IN AFRICA. 
    `,
  },
  {
    id: 15,
    archiementEightId: `CARACAS Venezuela `,
    body: ` April 2023 world study tour for course31 National Defence College, Abuja. 
    `,
  },
  {
    id: 16,
    archiementEightId: `Lusaka Zambia`,
    body: `  May 2023 world study tour for course31 National Defence College, Abuja.
    `,
  },
  {
    id: 17,
    archiementEightId: `Beijing China`,
    body: ` July 2023 International Conference organized by IWAAS/CIA Beijing  China.
    `,
  },
  {
    id: 18,
    archiementEightId: `Beijing China`,
    body: ` March 2024 International Conference organized by IWAAS/CIA Beijing China. 
    `,
  },
];

const archiementEightContainer = () => {
  const archiementEightEle = document.querySelector(".archiementEightEle");
  archiementEight.map((index) => {
    const { archiementEightId, body } = index;
    archiementEightEle.innerHTML += `
                   
                        <h6 class="title">${archiementEightId}</h6>
                        <p>${body}</p>
                  
                
        `;
  });
};
archiementEightContainer();

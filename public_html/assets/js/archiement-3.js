const archiementThree = [
  {
    id: 1,
    archiementThreeId: `Member`,
    body: ` Implementation Committee, University of Abuja Staff Nursery and Primary School 1999 – 2000. 
    `,
  },
  {
    id: 2,
    archiementThreeId: `Member`,
    body: ` Sports Committee University of Abuja, 2001 – 2007 
`,
  },
  {
    id: 3,
    archiementThreeId: `Member`,
    body: `University of Abuja Staff Nursery and Primary School Management Board, 1999 – 2002 Secretary:
Academic Staff Union of Universities (ASUU), 1998 – 1999. 
`,
  },
  {
    id: 4,
    archiementThreeId: `Vice Chairman`,
    body: ` Academic Staff Union of Universities (ASUU) 2001 – 2003. 
`,
  },
  {
    id: 5,
    archiementThreeId: `Staff Adviser`,
    body: ` National Association of Political Science Students, University of Abuja Branch, 1996 – 2011 
`,
  },
  {
    id: 6,
    archiementThreeId: `Member`,
    body: ` Safety on Wheels Campaign 2004.Chairman:Act Right Campaign 2004. 
`,
  },
  {
    id: 7,
    archiementThreeId: `Member`,
    body: ` Management Committee on Students Union Government Elections, 2004/2005.  
`,
  },
  {
    id: 8,
    archiementThreeId: `Member`,
    body: `
Management Committee on Students Union Government Elections, 2005/2006. 
`,
  },
  {
    id: 9,
    archiementThreeId: `Member`,
    body: ` University of Abuja Security Committee, 2005 - 2007 
`,
  },
  {
    id: 10,
    archiementThreeId: `Member`,
    body: `  University of Abuja Committee that organized the 2006 Stakeholders’ Forum.
    `,
  },
  {
    id: 11,
    archiementThreeId: `Member`,
    body: `  University of Abuja, Junior Staff Recruitment Committee – 2005 – 2007.
    `,
  },
  {
    id: 12,
    archiementThreeId: `Assistant Secretary`,
    body: ` LCC Giri Cocin Church 2004/2007 Elder: LCC Giri COCIN Church,
2007/2010. 
    `,
  },
  {
    id: 13,
    archiementThreeId: `Book Reviewer`,
    body: ` at the Public presentation of the book Ahmed Mohammed Makarfi. The reality of my dream
by Solomon Tanko.
Publisher of the book The Instrumentality of Religion in Nigerian Foreign Policy: reflection on the D8 by
Abubakar O. Suleiman.
Founder of the Students News Journal Magazine Publication that reflect the interest of students, 2006.
Rapporteur to Syndicate 10 in the International Conference on the Establishment of the African
Union Organized by the Federal Ministry of Integration and Cooperation in Africa at ECOWAS Secretariat Abuja,
2001 
    `,
  },
  {
    id: 14,
    archiementThreeId: `Rapporteur`,
    body: `  Seminar on ECOWAS Trade Liberalization Scheme for Nigerian Stakeholders Organized by the
University of Abuja, Consultancy Services Unit in Collaboration with Nigerian Customs held at ECOWAS
Secretariat Abuja 3rd and 4th March 2004.
    `,
  },
  {
    id: 15,
    archiementThreeId: `Chairman`,
    body: ` Implementation/ Management Committee of the Youth Friendly Centre, University of Abuja 2005 –
2007. 
    `,
  },
  {
    id: 16,
    archiementThreeId: `Coordinator Publicity`,
    body: ` Academic Revival Initiative
28, June 2008, Presented a Memorandum to the Electoral Reform Committee.
28, June 2008, Granted Interview to the BBC Hausa Service. 
    `,
  },
];

const archiementThreeContainer = () => {
  const archiementThreeEle = document.querySelector(".archiementThreeEle");
  archiementThree.map((index) => {
    const { archiementThreeId, body } = index;
    archiementThreeEle.innerHTML += `
         <h6 class="title mb-0">${archiementThreeId}</h6>
          <p>${body}</p>
        `;
  });
};
archiementThreeContainer();

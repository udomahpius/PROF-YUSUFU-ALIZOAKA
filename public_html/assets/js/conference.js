// NOTE THAT IN CASE THERE IS ANY OTHER PUBLICATION TO UPLOAD PLEASE AFTER UPLOADING REMEMBER TO DELETE A CLASS NAME KNOWN AS remove-download-btn IN ORDER TO MAKE DOWNLOAD BUTTON FIELD FUNCTION

const conferences = [
  {
    id: 1,
    conferencesId: `Zoaka Y.A (2011)`,
    body: ` Religious, Politics and Conflict in Northern Nigeria a paper presented at a
Roundtable organized by The Centre for Peace Initiative and Development (CEPID) Jos in Collaboration with
UNDP at Kaduna between 12-15 September 2011.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 2,
    conferencesId: `Zoaka Y. A. (2011)`,
    body: ` ‘Ensuring Credible and Transparent Election in 2011 and Beyond: The role of the medial’ A
paper presented at the National Workshop on election reporting/monitoring for political correspondents and
media Executives on 31 March 2011 at Lafia Nasarawa State.
Attended International Conference on Traditional Chinese Medicine technique for developing English-speaking
countries in Beijing China from 5th October 2010 – 6th November 2010`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 3,
    conferencesId: `Zoaka, Y. A. (2011)`,
    body: ` The Inconsistency in Rural Development Policy Implementation and its Impact on SocioEconomic Development of the Rural Areas of Nigeria a paper presented at the International Conference at the
Universite De Lome in April 2011`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 4,
    conferencesId: `Zoaka, Y.A. (2011)`,
    body: ` “Lifestyles of Political office holders and its implications for political instability in Nigeria a
paper presented at the international conference in University of Legon Ghana October 2011.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 5,
    conferencesId: `Zoaka Y. A. (2017)`,
    body: ` A Political Economy of Trans-Border Migration Crises and Trafficking in Africa is a paper
prepared for presentation at the International Conference in Poznan, Poland Beyond Europe between 24=25
October.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 6,
    conferencesId: `Zoaka Y. A. (2017)`,
    body: ` Proportional Representation in Nigeria is A paper presented at the round table organized
by the KONRAD ADENAUER-STIFTUNG ABUJA, NIGERIA.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 7,
    conferencesId: `Zoaka. Y. A. &Collins O.(2018)`,
    body: ` Nigeria-China Relations and Trade Agreements in the Fourth Republic: A Critical
Examination in Alli.W.O (ed) Nigeria’s Diplomacy of Economic Development and China. Abuja: Centre for interHuman African and Human Development Studies.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 8,
    conferencesId: `Zoaka. Y. A. (2011)`,
    body: `One-day seminar organised by the Institute for Peace and Conflict Resolution (IPCR) in collaboration with the
Embassy of the people’s Republic of China on Monday, November 14 2011 in Abuja.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 9,
    conferencesId: `Zoaka. Y. A. (2017)`,
    body: `twelve Round Tables were organized for the Department of Political Science and International Relations in
collaboration with the Rosa Luxemburg Stiftung Foundation Abuja in the months of June, August,
September and November 2017-2023.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 10,
    conferencesId: `Zoaka, Y. A. (2002)`,
    body: ` Local Government and the Problems of Funding in Nigeria is a paper presented at a
workshop organized by the Bauchi State Local Government Service Commission on 25th April 2002 at Royal
Tropicana Hotel, Kano.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 11,
    conferencesId: `Zoaka, Y. A. (2002)`,
    body: ` Understanding the Concepts of Rural Development and Infrastructural Development is a
paper presented at a workshop organized by the Bauchi State Local Government Service Commission on 25th
April 2002 at Royal Tropicana Hotel, Kano.
Birai U. &Zoaka, Y. A. The Democracy Project in Nigeria and the Notion of Party Discipline in Perspective.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 12,
    conferencesId: `Zoaka, Y. A. (2003)`,
    body: ` “Resource Management at the Local Government Level in a Democratic
Setting”. Being a paper presented at a workshop on challenges of leadership at the Local Government Level
organized by Performance Services Nigeria Limited at the Green House Federal Ministry of Environment Abuja
on May 7th, 2003`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 13,
    conferencesId: `Zoaka, Y. A. (2003)`,
    body: `“Management Skills in Democratic Government” Being a paper presented at a Workshop
in Challenges of Leadership at the Local Government Level organized by Performance
Services Nigeria Limited at the Green House Federal Ministry of Environment Abuja on May 8th, 2003.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 14,
    conferencesId: `Zoaka, Y. A`,
    body: `. “Managing Employee Performance Appraisal and Documentation” Being a paper presented at a
workshop for Bank Executives in Minna Niger State.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 15,
    conferencesId: `Zoaka, Y. A. (2003) `,
    body: `“Interpersonal Skills for Managing People” Being a paper presented in a training workshop
for bank executives at Minna, Niger State.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 16,
    conferencesId: `Zoaka, Y. A. (2003)`,
    body: ` A Comparative analysis of Legislative practices and procedures in the United States
of America and Nigeria: Indices and modalities for improvement. A paper presented at a training
workshop at Obudu Cattle Ranch for Plateau State Legislators.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 17,
    conferencesId: `Zoaka, Y. A. (2006)`,
    body: ` Social Sciences and the Reform Agenda: The case of the civil services Reforms in
Nigeria being a paper Delivered at the First faculty of Social Science National Conference from 29-31st
August 2006 at the Indoor Theatre University of Abuja.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 18,
    conferencesId: `Zoaka, Y. A. (2006)`,
    body: ` Local Government Finance. (A workshop paper prepared for performances Services
limited.)`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 19,
    conferencesId: `Zoaka, Y. A. (2006)`,
    body: ` Effects of the New media on the Youth. A paper presented at workshop for E.Y.N
Clergymen at the African Continental meeting held at Ignobis Hotel Kubwa, Abuja.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 20,
    conferencesId: `Zoaka Y.A (2007)`,
    body: ` The role of the legislature in modern world diplomatic and political order for achieving
universal peace. A paper read at a workshop for the training of legislators.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 21,
    conferencesId: `Zoaka, Y. A (2017)`,
    body: ` Non-Kinetic Application of National Power Being a paper presented to participants of the
air college course 2 /2017 the Air Force War College Nigeria, Makurdi, Benue State on 28th September 2017’`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 22,
    conferencesId: `Zoaka, Y. A (2020)`,
    body: ` The Role of Opposition Party Politics in Nigeria and its Consequences on
Development being a Paper Presented at the NPSA North Central Zone Conference at the University of Abuja,
Nigeria from 21-24 October 2019.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 23,
    conferencesId: `Zoaka, Y. A. (2021)`,
    body: ` Security Challenges and Good Governance: Insurgency and the Search for Sustainable
Peace in North East Nigeria in the Era of Pandemic being a lead paper resented at the North East Zone of NPSA
Annual Conference at the Yobe State University Damaturu on 13th March 2021.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 24,
    conferencesId: `Zoaka, Y. A. (2021)`,
    body: ` Strengthening National Institutions for Governance and Sustainable Development in Africa
Being a Paper presented To course participants of the National Institute For Security Studies Abuja Nigeria.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 25,
    conferencesId: `Zoaka, Y.A.(2022)`,
    body: ` Commitment To National Emancipation And Development Through Effective Political
Engagement By Nigerian Workers is a paper presented at a one-day conference organized by the Nigerian
Labour Congress( NLC) at the NAF Conference Center Kado Abuja on 2 March 2022.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 26,
    conferencesId: `Zoaka, Y.A.(2022)`,
    body: `Case Study of Policy Evaluation: The COVID-19 Health Protection Regulation in Perspectives,
a paper presented to NDC Course 31 at the Abacha Hall`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 27,
    conferencesId: `Zoaka, Y.A(2023)`,
    body: ` Strengthening National Unity for Security and National Development in Nigeria: The SocioPolitical Environment in Perspectives, a paper presented to NDC Course 31 at the Abacha Hall`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 28,
    conferencesId: `Zoaka, Y.A(2017) `,
    body: `Non-kinetic Application of National Power a paper presented at Airforce War College on 28
September 2017.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 29,
    conferencesId: `Zoaka, Y.A.(2024)`,
    body: ` Joining hands Joining Hands to Promote BRI Cooperation by Sharing Development
Experience Between China And Africa Being A Paper Presented At The 3rd Conference On Dialogue
Between Chinese And African Civilization From 9-13 April, 2024 At Institute Of West Asia And African
Studies & CHINA AFRICAN INSTITUTE. (IWAAS/CIA), BEIJING -CHINA.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 30,
    conferencesId: `Zoaka,Y.A(2023)`,
    body: ` POVERTY ALLEVIATION AND SOCIAL SECURITY/SOCIAL INVESTMENT IN NIGERIA: LESSONS
FROM CHINA Paper presented at the International conference on ‘’China and the World: Towards Building a
Community with shared future for Mankind’’, organized by the Chinese Academy of Social Science, Beijing
China 5th July 2023`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 31,
    conferencesId: `Zoaka, Y. A. (2021)`,
    body: ` Overview of FOCAC and COVID-19 Recovery: Context and Prospects Organized by the
Institute For Peace and Conflict Resolution. Ministry of Foreign Affairs between 12th and 13th October 2021.
at the institute Hall.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 32,
    conferencesId: `Zoaka, Y. A. (1998)`,
    body: ` Power Shift, Restructuring of the Country and Political Stability in Nigeria – a Paper
Presented in Government Girls Secondary School, Kuje on 28th October, in Celebration of the Social Science
Week.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 33,
    conferencesId: `Zoaka, Y. A. (1998)`,
    body: ` Public Servant and the Law – A Paper Presented in a Workshop for Kwali Area Council
Employees – on 24th August.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 34,
    conferencesId: `Zoaka, Y. A. (1998)`,
    body: ` The Essence of Area Councils within the Federal Capital Territory – A Paper Presented in a
workshop for Kwali Area Council Employees on 24th August.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 35,
    conferencesId: `Zoaka, Y. A. (1999)`,
    body: ` Developing a Strong/Domestic Monitoring Observation Network. – A Paper Presented in a
Training workshop for Election Monitors Organised by the Centre Abuja in Arewa House, Kaduna from 5th –
7th January`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 36,
    conferencesId: `Zoaka, Y. A. (1999)`,
    body: ` An Overview of Elections in Nigeria – A Paper Presented at a Workshop for Election
Monitors organized by the Centre Abuja in Arewa House Kaduna from 5th – 7th January.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 37,
    conferencesId: `Zoaka, Y. A. (2001)`,
    body: ` The Role of Traditional Institution in Crisis Prevention and Management being a paper
presented at a three-day natural workshop organized by the Federal Ministry of Intergovernmental Affairs
with`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
];

const conferencesContainer = () => {
  const conferencesEle = document.querySelector(".conferencesEle");
  conferences.map((conference) => {
    const { conferencesId, body, download } = conference;
    conferencesEle.innerHTML += `
        <div class="col-md-6 col-lg-4  branding">
         <div class="portfolio-item shadow p-4 bg-gray">
                                <div class="text-holder">
                                    <h6 class="title ">${conferencesId}</h6>
                                    <p class="subtitle">${body}</p>
                                    <p>${download}</p>
                                    
                                </div>
                        </div>
                        </div>
        `;
  });
};
conferencesContainer();

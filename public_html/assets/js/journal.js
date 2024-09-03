
// NOTE THAT IN CASE THERE IS ANY OTHER PUBLICATION TO UPLOAD PLEASE AFTER UPLOADING REMEMBER TO DELETE A CLASS NAME KNOWN AS remove-download-btn IN ORDER TO MAKE DOWNLOAD BUTTON FIELD FUNCTION

const journals = [
  {
    id: 1,
    journalsId: `Zoaka, Y. A. (2003)`,
    body: ` Critical Issues and Priorities in Local Government Social Policy Reform In the Journal of
Development and Society Vol. 1. No. 4, Abuja.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 2,
    journalsId: `Zoaka, Y. A. (2003)`,
    body: ` “Separation of Powers and the Crises of Politics and Power in Nigeria” In Benue Valley
Journal of Humanities Vol. 5 No. 2. Makurdi: Department of History, Benue State University.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 3,
    journalsId: `Zoaka, Y. A. (2003)`,
    body: ` Towards Violence-Free Elections in Nigeria: a Recipe for Sustainable Democracy in The
Abuja Management Review Vol. 1 No. 2 Kaduna: Faculty of Management Science, University of Abuja. Pp 192-
202.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 4,
    journalsId: `Zoaka, Y. A. (2003)`,
    body: ` The Impact and Legacies of the Babangida’s Administration in the Long-Term Context of
Nigeria’s Political History in Abubakar S. et al (ed) SAPHA; A Journal of Historical Studies. Vol 1 No. 1 June,
Abuja; Department of History, University of Abuja. Pp 135-145.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 5,
    journalsId: `Zoaka, Y A. (2004)`,
    body: ` Civil Service Rules, Anti-Corruption Organisations and the Prospects of
Tackling Corruption in Nigeria in Ogbu S. O. (ed) Journal of Political Studies: A Journal on Contemporary
Political Studies and Development. Abuja; Department of Political Science. Pp 7180.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 6,
    journalsId: `Zoaka, Y.A. (2006)`,
    body: ` Improving on the operational abilities of parliament in Nigeria: Strategies and procedures
for obtaining financial autonomy for the legislature of Liman A.N (ed) Journal of Political Studies; Special
Edition on Democracy in Nigeria. Abuja, Department of Political Science. Pp 187196.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 7,
    journalsId: `Zoaka Y.A & Dahida D. P. (2006)`,
    body: ` “The Youth and Sustainable Development” in Vol. 4. N.1 Abuja Management
Review Abuja: Faculty of Management Sciences.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 8,
    journalsId: `Zoaka Y.A. (2007)`,
    body: ` The Nexus between Youth anti-social conducts and empowerment, identifying Roles and
Factors in the Journal of International Affairs Quarterly vol1 No.4 a Publication of the Department of Political
Science and International Relations University of Abuja pp. 150-154.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 9,
    journalsId: `Zoaka, Y. A. (2007)`,
    body: ` “The Legislature and Security Sector Reform” Vol. 1 No. 1 Journal of Legislative Studies
Centre for Legislative Studies; Kaduna. Pp 71-78`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 10,
    journalsId: `Zoaka, Y. A. (2008)`,
    body: ` “Social science and the Reform Agenda The case of the civil service reforms in Nigeria”. In
Nasarawa Journal of Political Science vol. No 1 A publication of the Department of Political Science Nasarawa
state University, Keffi Pp 151-164.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 11,
    journalsId: `Zoaka Y. A. (2009)`,
    body: ` “Making Constituency Office More Effective to the Legislators and the Public” in Journal of
Legislative Studies, a publication of the Institute of Legislative Studies University of Abuja, vol. 1 No.2. pp 73-
79`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 12,
    journalsId: `Zoaka Y. A. (2009)`,
    body: ` “The State and Human Rights: Popular Fallacies and Options” In Journal of Political Studies
a Publication of the Department of Political Science University of Abuja. Vol. 1 No. 4. Pp 133-140.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 13,
    journalsId: `Zoaka, Y. A. and Agaba H (2010)`,
    body: ` “The role of civil society organizations in the Nigerian political process (1999-
2010) in Journal of political studies vol. 2 No 1. A publication of the Department of political science and
International Relations, University of Abuja Pp 186-201.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 14,
    journalsId: `Zoaka, Y. A. (2010)`,
    body: ` Democratic consolidation and the need for voter’s education in Nigeria in Journal of
Political Studies vol. 2 No 1. A publication of the Department of Political Science and International Relations,
University of Abuja Pp 224-236.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 15,
    journalsId: `Zoaka, Y. A. and Otinche S.I (2010)`,
    body: ` “The national security implication of the 7point Agenda: a mid-term
assessment”. In Keffi Journal of Administration and Policy Review vol. 1 No1 A publication of the Department
of Public Administration, Nasarawa State University Pp 57-77`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 16,
    journalsId: `Zoaka Y. A. (2011)`,
    body: ` Human Trafficking Concerns for Sustainable Development and Human Security in Journal of
Political Studies vol2 No.2: A Publication of the Department of Political Science and International Relations
University of Abuja (Forthcoming)`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 17,
    journalsId: `Zoaka, Y. A. (2011)`,
    body: ` The Inconsistency in Rural Development Policy Implementation and its Impact on SocioEconomic Development of the Rural Areas of Nigeria in International Journal of Social
Sciences. Centre for the Promotion of International Relations Studies and Development, Accra, Ghana`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 18,
    journalsId: `Zoaka, Y. A. (2011)`,
    body: ` “Lifestyles of political office holders and its implications for political instability in Nigeria in
International Journal of Social Sciences vol.4 No3 A publication of the Center for the Promotion of
International al Relations Studies and Development, Ghana. Pp 85-94`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 19,
    journalsId: `Zoaka, Y. A. (2013)`,
    body: ` The cost of governance and its implications for development and political
Stability in Nigeria, 1999-2011 in International Journal of Development Studies, vol7,6`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 20,
    journalsId: `Ibrahim SG, Zoaka YA,& Farouq, B (2013)`,
    body: ` Great Powers’ Conflict Management And Resolution in South East
Asia: An Evaluation of North Korean Denuclearization Process and six-party Talks in Global Journal of Social
Sciences, Vol13,3,10.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 21,
    journalsId: `Zoaka, Y. A. (2014)`,
    body: ` Citizenship and Nationhood in Nigeria: Issues Arising in International Journal of Social
Sciences Vol9,8`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 22,
    journalsId: `Zoaka, Y. A, & Collins O. (2017)`,
    body: ` Growing an indigenous economy in Nigeria as an antidote to
Economic dependency in International Journal of development strategies in
Humanities,Managemenigt & Social Sciences vol7,1`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 23,
    journalsId: `Zoaka, Y. A., Collins O, & Jacob A. O. (2017)`,
    body: ` Roadblocks to grassroots democracy, Good Governance and
Development A case Study of State and Local Government Council’s relations in Nigeria,1999-2016. In
International Journal of Development Strategies in Humanities, Management& Social Sciences vol7,2`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 24,
    journalsId: `Zoaka,Y. A, Samson A. A; Ernest E & Collins O. (2017)`,
    body: ` Political economy of small and medium scale
enterprises in China: Lessons for Nigeria.in International Journal of Advanced Research in Public Policy, Social
Development and Enterprise Studies vol28,40`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 25,
    journalsId: `Zoaka, Y. A, Jacob. J, Ereke, E and Collins. O (2017)`,
    body: ` ‘’Arms Proliferation and Rural Armed banditry in Nigeria:
Issues and perspectives for peace And Progress. Is a paper presented twelfth International Conference On
New Trends in Arts and Science organized by Devon Service company Abuja 12th-15th June 2017?`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 26,
    journalsId: `Zoaka, Y. A, Ibori , M. and Collins O.(2017)`,
    body: ` ‘’Confucianism and Chinese Economic Development: Lessons for
Nigeria in Review of Nigerian Political Economy.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 27,
    journalsId: `Anas A. A, & ZOAKA. Y. A. (2018)`,
    body: ` Implication of monetization as a reform policy on Employees
Commitment: A case study of the Federal Ministry of Education, Abuja, Nigeria. Public Policy and
Administration Research Vol8(12)`,
    download: `<a class="btn btn-primary btn-rounded" href="/publication/234670253.pdf" download="/publication/234670253.pdf"><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 28,
    journalsId: `Zoaka, Y.A, Collins O., Itodo, M. S, & Phinos. N. (2019)`,
    body: ` Interrogating the role of Intervening variable in public
policy formulation and implementation in Nigeria in Journal of Political Studies vol3No1.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 29,
    journalsId: `Zoaka,.Y. A (2020)`,
    body: ` Poverty and National Security: Government Initiatives in Perspectives.
International journal of Operations Research in Management, Social Sciences, and Education vol6(1)`,
    download: `<a class="btn btn-primary btn-rounded" href="/publication/ARTICLE13-47.pdf" download="/publication/ARTICLE13-47.pdf"><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 30,
    journalsId: `ZoakaY.A(2022)`,
    body: ` Youths ,Democratic Participationand the Nigerian Electoral Process in 2023: Prospects and
Challenges in International Journal of Innovative Science and Research Technology volume7/Issue9.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
];

const journalsContainer = () => {
    const journalsEle = document.querySelector(".journalsEle");
    journals.map((journal) => {
        const { journalsId, body, download } = journal;
        journalsEle.innerHTML += `
        <div class="col-md-6 col-lg-4  new ">
         <div class="portfolio-item shadow p-4 bg-gray">
                                <div class="text-holder">
                                    <h6 class="title ">${journalsId}</h6>
                                    <p class="subtitle">${body}</p>
                                    <p>${download}</p>
                                    
                                </div>
                        </div>
                        </div>
        `;
    });
}
journalsContainer()
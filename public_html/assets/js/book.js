

// NOTE THAT IN CASE THERE IS ANY OTHER PUBLICATION TO UPLOAD PLEASE AFTER UPLOADING REMEMBER TO DELETE A CLASS NAME KNOWN AS remove-download-btn IN ORDER TO MAKE DOWNLOAD BUTTON FIELD FUNCTION
const books = [
  {
    id: 1,
    booksId: `Zoaka, Y. A. & Saleh, (1998) `,
    body: `Issues in Local Government Administration in Nigeria Zaria: Joyce Publishers,
Kaduna.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 2,
    booksId: `Zoaka,Y.A., Abdulhamid,S.O & Samson .A. A, Edts;( 2019)`,
    body: ` Public Policy and National Development in Nigeria
Kaduna: Joyce Publishers.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 3,
    booksId: `Zoaka.Y.A(2022)`,
    body: ` The Quest for Proportional Representation in Nigeria in odah A.O & Nosaze, O.L Nigeria:
Issues in Economy ,politics and Society , Abuja: The Rosa Luxemburg Stiftung`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 4,
    booksId: `Zoaka,Y.A & Colins. O.,(2018)`,
    body: ` Nigeria -China Relations and Trade Agreements in the Fourth Republic: A Critical
Examination in Alli. W.O Nigeria’s Diplomacy of Economic Development and China.
Abuja: Yaliam Press LTD`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 5,
    booksId: `Zoaka,Y.A.(2019)`,
    body: ` Public Policy And Development in Zoaka, Y.A, etal; Public Policy and National Development
in Nigeria Kaduna: Joyce Publishers.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 6,
    booksId: `Zoaka,Y.A (2019)`,
    body: ` The Role of Opposition Party Politics in Nigeria and its Consequences on Development in
Anam.B&Chukwu D; edits Reviews on Nation Building in Africa. Cross Rivers,: Directorate of Policy Research.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 7,
    booksId: `Zoaka, Y. A. (2010)`,
    body: ` Internal Democracy and Discipline in Political Parties in Mato K. (ed). The democracy
question and election Management in Africa. Ibadan: Daily Graphics Nig. Ltd. Pp 124138.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 8,
    booksId: `Zoaka, Y. A. (2011)`,
    body: ` “The Role of Political Party Primaries in the Promotion of a Stable and Sustainable
Democracy”, in Zoaka Y.A. and Uke I. I. (eds) Conducting Peaceful, Free and Fair Elections in 2011 and Beyond:
The Role of Stakeholders. Department of Political Science. University of Abuja. Gwagwalada. Pp. 242-249.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 9,
    booksId: `Zoaka, Y.A. (2011).`,
    body: ` Local Government Reforms and their Impact, since Independence in Barkindo B.M,
Ifamose F. and Akpen P. (eds) Nigeria at fifty: issues and challenges in Governance A Publication of the
Department of History University of Abuja.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 10,
    booksId: `Zoaka, Y. A, Abubakar S., Waziri I. A. and Jibrin I. O. (2001).`,
    body: ` “The Evolution and Growth of Central
Administration and Management in Abubakar, S. (ed). The Foundation and Growth of the University of Abuja.
1988-2001. Kaduna, Joyce Publishers.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 11,
    booksId: `Zoaka Y. A.`,
    body: ` Political Parties and Elections in Hamidu A. Muhammad S. B. (eds)Citizenship Education in Tertiary
Institutions in Nigeria Abuja: Abdul Hamidu Abdullahi.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 12,
    booksId: `Zoaka, Y. A. (2005) `,
    body: `Renegotiating Political Power in Nigeria: The Case of Legitimated Authorities,
Pipeline Vandalization and Communal Violence in Dauda S and Liman A. (eds) Issues in Nigeria’s
Political and Economic Development. Abuja, Zumunta Publishers`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
  {
    id: 13,
    booksId: `Zoaka, Y. A. (2006)`,
    body: ` Restructuring of Policy Instruments on Examination Malpractices in Nigeria in Adesina S.
and Adewuyi L. (eds) Examination Malpractices in Nigeria Educational System. Lagos:
African University Institute. Pp 29-46.`,
    download: `<a class="btn btn-primary btn-rounded remove-download-btn" href="" download=""><i class="ti-download pr-2"></i> Download </a>`,
  },
];

const booksContainer = () => {
  const booksEle = document.querySelector(".booksEle");
  books.map((book) => {
    const { booksId, body, download } = book;
    booksEle.innerHTML += `
        <div class="col-md-6 col-lg-4  advertising">
         <div class="portfolio-item shadow p-4 bg-gray">
                                <div class="text-holder">
                                    <h6 class="title ">${booksId}</h6>
                                    <p class="subtitle">${body}</p>
                                    <p>${download}</p>
                                    
                                </div>
                        </div>
                        </div>
        `;
  });
};
booksContainer();

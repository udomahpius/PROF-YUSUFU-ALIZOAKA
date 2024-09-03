
const courses = [
  {
    id: 1,
    coursesId: `POS 101`,
    body: ` Introduction to Political Science `,
  },
  {
    id: 2,
    coursesId: `POS 102`,
    body: ` Introduction to African Politics
`,
  },
  {
    id: 3,
    coursesId: `POS 201`,
    body: ` Nigerian Politics I
`,
  },
  {
    id: 4,
    coursesId: `POS 202`,
    body: ` Nigerian Politics II
`,
  },
  {
    id: 5,
    coursesId: `POS 206`,
    body: ` Political Ideas
`,
  },
  {
    id: 6,
    coursesId: `POS 208`,
    body: ` Citizenship and the Nigerian State
`,
  },
  {
    id: 7,
    coursesId: `POS 301`,
    body: ` History of Political Thought I
`,
  },
  {
    id: 8,
    coursesId: `POS 302`,
    body: ` History of Political Thought II
`,
  },
  {
    id: 9,
    coursesId: `POS 401`,
    body: `Nigerian Local Government
`,
  },
  {
    id: 10,
    coursesId: `POS 718`,
    body: `Theories of Revolution`,
  },
  {
    id: 11,
    coursesId: `POS 719`,
    body: `Theories of Imperialism`,
  },
  {
    id: 12,
    coursesId: `POS 727`,
    body: `Nigerian Administration and Local Government`,
  },
  {
    id: 13,
    coursesId: `POS 728`,
    body: `Development Policy and Social Change`,
  },
  {
    id: 14,
    coursesId: `POS 828/928`,
    body: ` Development Administration`,
  },
  {
    id: 15,
    coursesId: `POS 725 `,
    body: ` Rural Development`,
  },
  {
    id: 16,
    coursesId: `POS 726`,
    body: `Public Enterprises `,
  },
  {
    id: 17,
    coursesId: `POS 909`,
    body: ` Theory and Practice of Diplomacy(Ph.D Class)`,
  },
  {
    id: 18,
    coursesId: `POS 803`,
    body: `Terrorism in International Perspectives`,
  },
  {
    id: 19,
    coursesId: `PSD 2552`,
    body: `Introduction to Local Government`,
  },
  {
    id: 20,
    coursesId: `PSD 3382`,
    body: `Public Policy Analysis`,
  },
  {
    id: 21,
    coursesId: `PSD 3431`,
    body: `Politics of Development and Underdevelopment`,
  },
  {
    id: 22,
    coursesId: `PSD 3171`,
    body: `Contemporary Political Analysis`,
  },
  {
    id: 23,
    coursesId: `PSD 3451`,
    body: `Theory and Practice of Marxism`,
  },
  {
    id: 24,
    coursesId: `PSD 6192`,
    body: `Contemporary Diplomatic Practice`,
  },
  {
    id: 25,
    coursesId: `MCS 805`,
    body: ` CORRUPTION IN PUBLIC AND PRIVATE SECTORS`,
  },
  {
    id: 26,
    coursesId: `PPG 901/801`,
    body: `Theories and Issues in public policy and governance`,
  },
  {
    id: 27,
    coursesId: `PPG803/903 `,
    body: `Policy Analysis and Evaluation`,
  },
];

const coursesContainer = () => {
    const coursesEle = document.querySelector(".coursesEle");
    courses.map((course) => {
        const { coursesId, body, coursesTltle } = course;
        coursesEle.innerHTML += `
         <div class="col-md-6 col-lg-3">
                    <div class="row ">
                        <div class="col-5 text-right text-light border-right py-3">
                            <div class="m-auto">${coursesId}</div>
                        </div>
                        <div class="col-7 text-left py-3">
                            <p class="text-light mb-1">${body}</p>
                        </div>
                    </div>
                </div>
        `
    });
}
coursesContainer()
export const journeySteps = {
    voter: [
        {
            id: 1,
            title: "Voter Registration",
            icon: "📋",
            brief: "Register yourself on the Electoral Roll using Form 6.",
            context: "In India, citizens above 18 can register as voters via the NVSP portal or Voter Helpline App. You need your Aadhaar, address proof, and a photo.",
            quiz: {
                question: "What is the minimum age to vote in Indian general elections?",
                options: ["16", "18", "21", "25"],
                answer: "18",
            },
        },
        {
            id: 2,
            title: "Voter ID & EPIC Card",
            icon: "🪪",
            brief: "Receive your Elector's Photo Identity Card (EPIC).",
            context: "The EPIC card (Voter ID) is issued by the Election Commission. It's your primary identity proof at the polling booth. You can also use 12 other alternative documents.",
            quiz: {
                question: "Which body issues the Voter ID card in India?",
                options: ["State Government", "Election Commission of India", "Aadhaar Authority", "Ministry of Home Affairs"],
                answer: "Election Commission of India",
            },
        },
        {
            id: 3,
            title: "Model Code of Conduct",
            icon: "📜",
            brief: "Understand the rules in force once elections are announced.",
            context: "The MCC kicks in when the Election Commission announces election dates. It restricts political parties and governments from making policy announcements that could influence voters.",
            quiz: {
                question: "When does the Model Code of Conduct come into effect?",
                options: ["When voting begins", "When results are declared", "When election dates are announced", "One month before voting"],
                answer: "When election dates are announced",
            },
        },
        {
            id: 4,
            title: "Polling Day",
            icon: "🗳️",
            brief: "Visit your assigned polling booth and cast your vote.",
            context: "Polling booths are set up within 2km of every voter's residence. You show your ID, your finger gets marked with indelible ink, and you press the EVM button for your candidate.",
            quiz: {
                question: "What is the purpose of indelible ink applied to voters?",
                options: ["Decoration", "To prevent double voting", "Medical requirement", "Government record"],
                answer: "To prevent double voting",
            },
        },
        {
            id: 5,
            title: "NOTA & Secret Ballot",
            icon: "🔒",
            brief: "Your vote is secret. NOTA is available if you reject all candidates.",
            context: "India's EVMs are tamper-proof. The secret ballot ensures no one can trace your vote. NOTA (None of the Above) was introduced by the Supreme Court in 2013.",
            quiz: {
                question: "In which year was NOTA introduced in Indian elections?",
                options: ["2004", "2009", "2013", "2019"],
                answer: "2013",
            },
        },
        {
            id: 6,
            title: "Vote Counting & Results",
            icon: "🏆",
            brief: "Votes are counted and the winner is declared.",
            context: "Counting happens at designated centres. EVMs are opened in the presence of candidates and their agents. The candidate with the most votes in their constituency wins (First Past The Post system).",
            quiz: {
                question: "What voting system does India use for Lok Sabha elections?",
                options: ["Proportional Representation", "First Past The Post", "Ranked Choice", "Two-Round System"],
                answer: "First Past The Post",
            },
        },
    ],

    candidate: [
        {
            id: 1, title: "Filing Nomination", icon: "✍️",
            brief: "Submit Form 2B to the Returning Officer with a deposit.",
            context: "A candidate files a nomination paper along with a security deposit (₹25,000 for general seats, ₹12,500 for SC/ST). Independents need 10 voter signatures from the constituency.",
            quiz: {
                question: "What is the security deposit for a general Lok Sabha candidate?",
                options: ["₹10,000", "₹25,000", "₹50,000", "₹1,00,000"],
                answer: "₹25,000",
            },
        },
        {
            id: 2, title: "Nomination Scrutiny", icon: "🔍",
            brief: "The Returning Officer checks all nomination documents.",
            context: "The RO verifies eligibility — age (25 for Lok Sabha), citizenship, not holding office of profit, and no disqualifications under RPA 1951.",
            quiz: {
                question: "Minimum age to contest Lok Sabha elections?",
                options: ["18", "21", "25", "35"],
                answer: "25",
            },
        },
        {
            id: 3, title: "Campaign Period", icon: "📣",
            brief: "Campaign within ECI guidelines — no cash, no hate speech.",
            context: "Candidates get 2–3 weeks to campaign. Expenses are capped (₹95 lakh for Lok Sabha). Violations can lead to disqualification. No campaigning 48 hours before polling (silence period).",
            quiz: {
                question: "What is the election expense limit for a Lok Sabha candidate?",
                options: ["₹50 lakh", "₹70 lakh", "₹95 lakh", "₹1.5 crore"],
                answer: "₹95 lakh",
            },
        },
        {
            id: 4, title: "Polling Day (Candidate)", icon: "👁️",
            brief: "Deploy polling agents. Monitor every booth in your constituency.",
            context: "Each candidate can appoint one polling agent per booth. Agents verify voter identity, object to impersonation, and receive a copy of booth-level vote counts (Form 17C).",
            quiz: {
                question: "What form do polling agents receive with booth-level vote data?",
                options: ["Form 6", "Form 2B", "Form 17C", "Form 26"],
                answer: "Form 17C",
            },
        },
        {
            id: 5, title: "Counting Day", icon: "🔢",
            brief: "Watch rounds of counting at the counting centre.",
            context: "Each round counts votes from a set of EVMs. Candidates/agents can be present. Results are announced round by round. The winner gets an official certificate of election.",
            quiz: {
                question: "Who declares a candidate the official winner?",
                options: ["President of India", "Chief Election Commissioner", "Returning Officer", "State Governor"],
                answer: "Returning Officer",
            },
        },
    ],

    officer: [
        {
            id: 1, title: "Election Announcement", icon: "📢",
            brief: "Chief Election Commissioner announces the schedule.",
            context: "The ECI releases the election schedule specifying Phase dates, notification dates, last date for nominations, scrutiny, withdrawal, and polling dates. MCC kicks in immediately.",
            quiz: {
                question: "What automatically activates when election dates are announced?",
                options: ["Emergency Powers", "Model Code of Conduct", "President's Rule", "Curfew"],
                answer: "Model Code of Conduct",
            },
        },
        {
            id: 2, title: "Electoral Roll Revision", icon: "📑",
            brief: "Ensure the voter list is accurate, current, and complete.",
            context: "BLOs (Booth Level Officers) go door-to-door to verify voter details. The final electoral roll is published before notification day. Any eligible citizen can add, delete or correct entries.",
            quiz: {
                question: "Who conducts door-to-door voter verification?",
                options: ["Police", "Revenue Officer", "Booth Level Officer (BLO)", "Collector"],
                answer: "Booth Level Officer (BLO)",
            },
        },
        {
            id: 3, title: "EVM Deployment", icon: "⚙️",
            brief: "Commission, seal, and distribute Electronic Voting Machines.",
            context: "EVMs are checked in mock polls in the presence of candidate representatives. They're sealed and stored in strong rooms with CCTV and armed guards until polling day.",
            quiz: {
                question: "EVMs are stored in strong rooms guarded by?",
                options: ["Local Police only", "CRPF/Armed Forces + CCTV", "Private Security", "Volunteers"],
                answer: "CRPF/Armed Forces + CCTV",
            },
        },
        {
            id: 4, title: "Polling Day Operations", icon: "🏛️",
            brief: "Oversee voting across thousands of booths.",
            context: "Presiding Officers manage each booth. They handle voter verification, assist differently-abled voters, maintain order, and document incidents in the presiding officer's diary.",
            quiz: {
                question: "Who is in charge of each polling booth on voting day?",
                options: ["District Collector", "Presiding Officer", "Sub-Inspector", "Booth Level Officer"],
                answer: "Presiding Officer",
            },
        },
        {
            id: 5, title: "VVPAT Verification", icon: "🖨️",
            brief: "Ensure every vote has a paper trail via VVPAT.",
            context: "VVPAT (Voter Verifiable Paper Audit Trail) prints a slip showing the symbol of the candidate voted for. The voter sees it for 7 seconds, then it drops into a sealed box.",
            quiz: {
                question: "How long does a voter see their VVPAT slip?",
                options: ["3 seconds", "5 seconds", "7 seconds", "10 seconds"],
                answer: "7 seconds",
            },
        },
        {
            id: 6, title: "Results & Archival", icon: "📦",
            brief: "Tabulate results, archive records, return EVMs.",
            context: "After results, EVMs go back to strong rooms for 45 days (period for election petitions). All records — nomination papers, Form 17C, polling diary — are archived for 1 year.",
            quiz: {
                question: "For how many days are EVMs stored after results for petition purposes?",
                options: ["15 days", "30 days", "45 days", "90 days"],
                answer: "45 days",
            },
        },
    ],
};
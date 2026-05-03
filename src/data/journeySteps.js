export const journeySteps = {
    voter: [
        {
            id: 1,
            title: "Voter Registration",
            icon: "📋",
            brief: "Register yourself on the Electoral Roll using Form 6.",
            context: `Voting in India is a fundamental right granted under Article 326 of the Constitution. Every Indian citizen who is 18 years or older on the qualifying date (1st January of the year of electoral roll revision) is eligible to register as a voter.

To register, you must submit Form 6 — either online at voters.eci.gov.in, through the Voter Helpline App, or physically at your local Electoral Registration Officer (ERO) office. You'll need proof of age (Aadhaar, birth certificate, or school leaving certificate), proof of address, and a passport-sized photo.

Once verified, your name is added to the Electoral Roll of your constituency. You'll receive an EPIC card (Voter ID). The electoral roll is revised annually — the final roll is published before every election. If you've moved to a new address, you must update your registration using Form 8A, or your vote won't count in your new location.

Key facts:
- Qualifying age: 18 years as of January 1st of the revision year
- Registration portal: voters.eci.gov.in or Voter Helpline App (1950)
- Form 6: for new registration | Form 8: for corrections | Form 8A: for address change
- India had over 97 crore registered voters in the 2024 General Election`,
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
            context: `The EPIC (Elector's Photo Identity Card), commonly called the Voter ID card, is issued by the Election Commission of India through the Electoral Registration Officer of your constituency. It serves as your primary identity document at the polling booth on election day.

However, the Voter ID is not the only document you can use. The Election Commission of India officially recognises 12 alternative photo identity documents for voters who don't have or have lost their EPIC card:
1. Aadhaar Card
2. MNREGA Job Card
3. Passbooks with photo (issued by bank/post office)
4. Health Insurance Smart Card (under Ministry of Labour)
5. Driving Licence
6. PAN Card
7. NPR Smart Card
8. Indian Passport
9. Pension documents with photo
10. Service Identity Cards (Central/State Govt, PSUs, Public Ltd companies)
11. Unique Disability ID (UDID)
12. Official ID issued by Members of Parliament / MLAs / MLCs

Your EPIC card has a unique EPIC number linked to your name in the electoral roll. You can download a digital version (e-EPIC) from the ECI website and use it on your phone at the booth.

Key facts:
- Issued by: Election Commission of India via ERO
- 12 alternative documents accepted if EPIC is unavailable
- e-EPIC: downloadable digital version valid at polling booths
- Lost EPIC? Apply for a duplicate using Form 002`,
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
            context: `The Model Code of Conduct (MCC) is a set of guidelines issued by the Election Commission of India that comes into immediate effect the moment the election schedule is announced — and remains in force until the results are declared.

The MCC applies to all political parties, candidates, and the government itself. Its primary purpose is to ensure free and fair elections by preventing any party in power from using government machinery or public funds to gain an unfair electoral advantage.

What the MCC prohibits:
- The ruling government cannot announce new welfare schemes, lay foundation stones for new projects, or make new appointments that could influence voters
- No use of government vehicles, officials, or resources for campaigning
- No appeals to voters on the basis of religion, caste, or community
- No distribution of cash, liquor, or gifts to voters (bribery)
- Campaign materials must not be placed on private property without permission
- Polling booths cannot be set up within 200 metres of a religious place

What it allows:
- Parties can continue existing government schemes
- Criticism of policies and governments is permitted
- Public meetings are allowed subject to prior permission from local authorities

The MCC is not a statutory law — it is enforced through the moral authority of the ECI and backed by existing laws like the Representation of the People Act, 1951 and the IPC.

Key facts:
- Activated: the moment election dates are announced by the ECI
- Applies to: all parties, candidates, central and state governments
- Duration: from announcement date until result declaration
- Violation can lead to: disqualification, FIR, or cancellation of candidature`,
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
            context: `Polling day is the most visible part of an Indian election. Every voter is assigned a specific polling booth based on their registered address — booths are mandated to be within 2 km of every voter's home. You can find your booth number and location on your EPIC card or at voters.eci.gov.in.

On polling day, booths typically open at 7:00 AM and close at 6:00 PM, though timings can vary. Even if the booth closes, anyone already standing in line is allowed to vote.

The voting process:
1. You arrive at your assigned polling booth and join the queue
2. A polling officer verifies your identity using your EPIC or an alternative document
3. Your name is marked in the electoral roll and your left index finger is marked with indelible ink — this prevents double voting
4. You are given a voter slip and directed to the EVM (Electronic Voting Machine)
5. You press the button next to your chosen candidate's name and party symbol
6. The VVPAT machine next to the EVM prints a paper slip showing your candidate's symbol — you can see it for 7 seconds through a glass window before it drops into a sealed box

The indelible ink used is manufactured exclusively by the Mysore Paints and Varnish Limited and is designed to remain visible for 2–3 weeks, making it impossible to vote twice.

Key facts:
- Booths open: 7 AM | Close: 6 PM (varies by region)
- Indelible ink: manufactured by Mysore Paints and Varnish Limited
- If you are already in queue at 6 PM, you are still allowed to vote
- No campaigning allowed within 100 metres of a polling booth
- Mobile phones are not permitted inside the voting compartment`,
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
            context: `India's voting system is built on two pillars: the secrecy of the ballot and the freedom to reject all candidates.

Secret Ballot: No one — not the government, not your employer, not your family — can legally compel you to reveal who you voted for. The EVMs are designed so that there is no way to link a vote to a specific voter. Even polling officers cannot see who you vote for once you enter the voting compartment. This principle is protected under the Representation of the People Act, 1951.

NOTA (None of the Above): Introduced by the Supreme Court of India on 27 September 2013 following a PIL by the People's Union for Civil Liberties (PUCL), NOTA allows a voter to formally reject all candidates on the ballot without abstaining. On the EVM, NOTA appears as the last option with a ballot paper icon.

Important things to know about NOTA:
- NOTA is recorded as a valid vote in the final count
- If NOTA receives the highest number of votes, it does NOT trigger a re-election — the candidate with the next highest votes still wins (this is a common misconception)
- NOTA was first used in the 5 state assembly elections in November 2013 (Chhattisgarh, Mizoram, Rajasthan, Delhi, Madhya Pradesh)
- In the 2019 Lok Sabha elections, over 65 lakh votes were cast for NOTA
- Some states like Maharashtra and Haryana have debated giving NOTA a stronger legal effect, but currently it has no power to cancel an election

EVMs (Electronic Voting Machines):
- Manufactured by BEL (Bharat Electronics Limited) and ECIL (Electronics Corporation of India Limited)
- Standalone devices — no WiFi, Bluetooth, or internet connectivity
- Battery-operated — not connected to any power grid on polling day
- Tested by IIT professors and international observers before every election

Key facts:
- NOTA introduced: September 27, 2013 (Supreme Court order)
- NOTA symbol: ballot paper icon, last option on EVM
- NOTA does NOT cancel an election even if it gets the most votes
- Secret ballot is protected under the Representation of the People Act, 1951`,
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
            context: `Vote counting in India is a meticulously controlled process that takes place at designated Counting Centres, typically a few days after the last phase of polling. All EVMs from a constituency are transported under armed guard and stored in sealed strong rooms with CCTV surveillance until counting day.

Counting Day process:
1. Counting begins at 8:00 AM
2. Postal ballots (from armed forces, government officials on duty, etc.) are counted first
3. EVMs are then opened round by round — each round covers a set of EVMs from a specific area
4. Counting agents (representatives of each candidate) are present in the hall to observe every round
5. The count from each round is displayed on a public notice board and updated on the ECI results portal in real time
6. Once all rounds are complete, the Returning Officer totals the votes and declares the winner

The Counting Centre has strict entry rules: only authorised personnel, candidates, their counting agents, and ECI observers are allowed. Mobile phones with cameras are banned inside.

India uses the First Past The Post (FPTP) system:
- The constituency is divided into one seat
- Voters choose one candidate
- The candidate with the most votes wins — even if they don't have a majority (more than 50%)
- Example: If A gets 40,000 votes, B gets 35,000, and C gets 25,000 — A wins, even though 60% voted against A

For Lok Sabha: 543 seats total. A party or alliance needs 272+ seats for a majority to form the government.

After winning, the Returning Officer issues the winner a Certificate of Election — the official document confirming their election.

Key facts:
- Counting starts: 8:00 AM on counting day
- System used: First Past The Post (FPTP)
- 543 Lok Sabha seats | 272 needed for majority
- Postal ballots counted first before EVM votes
- Certificate of Election issued by: Returning Officer`,
            quiz: {
                question: "What voting system does India use for Lok Sabha elections?",
                options: ["Proportional Representation", "First Past The Post", "Ranked Choice", "Two-Round System"],
                answer: "First Past The Post",
            },
        },
    ],

    candidate: [
        {
            id: 1,
            title: "Filing Nomination",
            icon: "✍️",
            brief: "Submit Form 2B to the Returning Officer with a deposit.",
            context: `Filing a nomination is the formal step through which a person declares their intent to contest an election. This is done by submitting a nomination paper (Form 2B for Lok Sabha) to the Returning Officer (RO) of the constituency during the notification period specified in the election schedule.

Along with the nomination form, candidates must submit:

1. Security Deposit:
- ₹25,000 for general category candidates for Lok Sabha
- ₹12,500 for SC/ST category candidates
- This deposit is refunded if the candidate secures more than 1/6th of total valid votes; otherwise it is forfeited to the government

2. Affidavit (Form 26):
- A mandatory sworn statement disclosing criminal cases (pending or convicted), assets and liabilities (of self and spouse), educational qualifications, and PAN details
- False declarations in Form 26 are a criminal offence
- Affidavits are made public on the ECI website — voters can check their candidate's background

3. For Independent candidates:
- Must submit signatures of at least 10 registered voters from the constituency as proposers

4. Party symbol:
- Recognised national and state parties get reserved symbols (e.g., lotus, hand, bicycle)
- Unrecognised parties and independents choose from a list of free symbols provided by the ECI

A candidate can file up to 4 nomination papers for the same constituency. The RO checks each one for validity during scrutiny.

Key facts:
- Form: 2B (Lok Sabha) | Form 2A (State Assembly)
- Deposit: ₹25,000 general | ₹12,500 SC/ST
- Deposit forfeited if votes < 1/6th of total valid votes
- Form 26 (affidavit) is mandatory and public
- Independent candidates need 10 voter signatures as proposers`,
            quiz: {
                question: "What is the security deposit for a general Lok Sabha candidate?",
                options: ["₹10,000", "₹25,000", "₹50,000", "₹1,00,000"],
                answer: "₹25,000",
            },
        },
        {
            id: 2,
            title: "Nomination Scrutiny",
            icon: "🔍",
            brief: "The Returning Officer checks all nomination documents.",
            context: `After nominations are filed, the Returning Officer (RO) conducts a formal scrutiny of all nomination papers on the date specified in the election schedule. This is a critical stage — invalid nominations are rejected here.

Eligibility criteria the RO checks (as per Representation of the People Act, 1951):

Age:
- Minimum 25 years for Lok Sabha and State Legislative Assembly
- Minimum 30 years for Rajya Sabha and State Legislative Council

Citizenship:
- Must be a citizen of India

Electoral Roll:
- Must be a registered voter in India (for Lok Sabha, can be registered in any constituency)

Disqualifications checked:
- Must not hold any Office of Profit under the Union or State Government (unless exempted)
- Must not be of unsound mind (declared by a competent court)
- Must not be an undischarged insolvent (bankrupt)
- Must not have been convicted and sentenced to imprisonment of 2 or more years
- Must not have been disqualified under anti-defection law or other provisions

The RO can reject a nomination only on specific legal grounds — not arbitrarily. If rejected, the candidate can appeal to the Election Commission.

Withdrawal period: After scrutiny, candidates have a window to withdraw their candidature by submitting a withdrawal notice to the RO. This is the last chance to step out of the race before the final candidate list is published.

Key facts:
- Minimum age: 25 (Lok Sabha/Assembly) | 30 (Rajya Sabha/Council)
- Conviction of 2+ years disqualifies a candidate
- RO cannot reject nominations arbitrarily — must cite specific legal ground
- Candidates can withdraw after scrutiny during the withdrawal window
- Final candidate list published after withdrawal deadline`,
            quiz: {
                question: "Minimum age to contest Lok Sabha elections?",
                options: ["18", "21", "25", "35"],
                answer: "25",
            },
        },
        {
            id: 3,
            title: "Campaign Period",
            icon: "📣",
            brief: "Campaign within ECI guidelines — no cash, no hate speech.",
            context: `Once nominations are finalised, candidates enter the campaign period — typically 2 to 3 weeks of intensive outreach to voters. Campaigns in India are governed by strict rules under the Model Code of Conduct and the Representation of the People Act.

Election Expense Limits (as of 2022 revision):
- Lok Sabha: ₹95 lakh per candidate
- State Assembly: ₹40 lakh per candidate (varies slightly by state)
- Candidates must maintain a daily account of all expenses
- A Expenditure Observer appointed by ECI monitors spending
- Exceeding the limit is an election offence and can lead to disqualification

What candidates can do:
- Hold public rallies, door-to-door campaigns, press conferences
- Distribute printed material (with ECI's declaration of printer/publisher)
- Run paid advertisements in newspapers and TV (must be pre-certified by the ECI's Media Certification and Monitoring Committee — MCMC)
- Use social media for campaigning

What candidates cannot do:
- Bribe voters with cash, liquor, goods, or jobs — this is a cognisable offence under Sections 171B/E of IPC
- Appeal for votes on grounds of religion, race, caste, or language (corrupt practice under RPA)
- Use government resources for personal campaigning
- Campaign within 48 hours before polling ends (the Silence Period)
- Put up campaign material without permission

The 48-hour Silence Period:
- Begins 48 hours before the scheduled closing time of polling
- No rallies, speeches, processions, or advertisements allowed
- Social media posts that count as campaigning are also banned

Key facts:
- Expense cap: ₹95 lakh (Lok Sabha) | ₹40 lakh (Assembly)
- Silence period: 48 hours before polling closes
- Paid ads need pre-certification from ECI's MCMC
- Cash/liquor distribution: criminal offence under IPC
- Flying Squads deployed to intercept undeclared cash`,
            quiz: {
                question: "What is the election expense limit for a Lok Sabha candidate?",
                options: ["₹50 lakh", "₹70 lakh", "₹95 lakh", "₹1.5 crore"],
                answer: "₹95 lakh",
            },
        },
        {
            id: 4,
            title: "Polling Day (Candidate)",
            icon: "👁️",
            brief: "Deploy polling agents. Monitor every booth in your constituency.",
            context: `On polling day, the candidate is not inside the booth — but their presence is felt through polling agents and booth agents stationed at every polling station across the constituency.

Polling Agents:
- Each candidate is entitled to appoint one polling agent per polling booth
- The agent sits inside the polling station and monitors the voting process throughout the day
- They verify voter identity alongside polling officers
- They can raise objections if they suspect impersonation
- They must carry a valid appointment letter issued by the candidate

Form 17C — The Critical Document:
- At the close of polling, the Presiding Officer hands over Form 17C to each polling agent
- Form 17C contains: the total number of voters who voted, the EVM serial number, and a statement of votes recorded
- This is a legally critical document — candidates compare Form 17C data with the counting day results to verify accuracy
- Discrepancies in Form 17C can be the basis of an election petition

Counting Agents:
- Separate from polling agents — appointed specifically for counting day
- Present in the counting hall to observe each round of counting
- Can raise objections to any irregularities in the count

On polling day, candidates and their teams also:
- Operate party booths outside (beyond 100 metres from the polling booth)
- Help voters reach the polling station (voter transportation — but no pressure or inducement)
- Monitor voter turnout and identify supporters who haven't voted

Key facts:
- One polling agent per booth per candidate
- Form 17C: issued at end of polling, contains vote count data
- Polling agents can formally object to impersonation
- Booth camps must be 100+ metres away from the polling station
- Counting agents are separate from polling agents`,
            quiz: {
                question: "What form do polling agents receive with booth-level vote data?",
                options: ["Form 6", "Form 2B", "Form 17C", "Form 26"],
                answer: "Form 17C",
            },
        },
        {
            id: 5,
            title: "Counting Day",
            icon: "🔢",
            brief: "Watch rounds of counting at the counting centre.",
            context: `Counting Day is the culmination of the entire election process — the day when EVMs are opened, votes are tallied, and winners emerge. It is conducted at Counting Centres designated by the Returning Officer.

The Counting Process:
1. Entry is strictly controlled: only authorised officials, candidates, their counting agents, and ECI observers are allowed
2. Mobile phones with cameras are banned inside the counting hall
3. Postal ballots (from armed forces personnel, government staff on duty, overseas voters) are counted first — before any EVM is opened
4. EVMs are brought round by round from secure strong rooms
5. Each round covers EVMs from a specific batch of booths
6. The votes in each EVM are displayed on a counting table and recorded
7. A running tally is maintained and results are updated on the ECI website (results.eci.gov.in) in real time
8. Counting agents can request a VVPAT slip count from 5 randomly selected EVMs per constituency (this was increased as a result of Supreme Court directions)

After the final round:
- The Returning Officer announces the total votes secured by each candidate
- The candidate with the highest votes is declared elected (First Past The Post)
- The winner is handed the Certificate of Election — the official document of their victory
- Runners-up receive nothing officially — they can, however, file an election petition in the High Court within 45 days if they believe there was electoral malpractice

The EVMs are then resealed and returned to strong rooms for 45 days — the statutory period during which election petitions can be filed.

Key facts:
- Counting starts: 8:00 AM
- Postal ballots counted before EVM votes
- Winner declared by: Returning Officer
- Certificate of Election: official proof of victory
- EVMs stored 45 days post-result for election petition period`,
            quiz: {
                question: "Who declares a candidate the official winner?",
                options: ["President of India", "Chief Election Commissioner", "Returning Officer", "State Governor"],
                answer: "Returning Officer",
            },
        },
    ],

    officer: [
        {
            id: 1,
            title: "Election Announcement",
            icon: "📢",
            brief: "Chief Election Commissioner announces the schedule.",
            context: `The election process officially begins when the Election Commission of India (ECI) announces the election schedule at a formal press conference — typically held by the Chief Election Commissioner (CEC) along with the two Election Commissioners.

The ECI is a constitutional body established under Article 324 of the Indian Constitution. It is fully independent of the government — the CEC can only be removed through a process similar to that of a Supreme Court judge (an address by both Houses of Parliament).

The announcement includes:
- Number of election phases (Lok Sabha elections often have 5–7 phases)
- For each phase: the notification date, last date for nominations, date of scrutiny, last date for withdrawal, polling date, and counting date
- Which states and constituencies go to polls in which phase

The moment the schedule is announced:
- Model Code of Conduct (MCC) activates immediately across all states
- The government cannot announce new welfare schemes or make major policy changes
- Transfer of key election officials requires ECI approval
- Political advertising on government-owned media is restricted

The ECI also deploys Central Observer teams — IAS and IPS officers from other states — to oversee each constituency and ensure the district administration conducts elections without bias.

General Election 2024 facts:
- Announced: March 16, 2024
- 7 phases of polling
- Polling dates: April 19 to June 1, 2024
- Counting: June 4, 2024
- 543 Lok Sabha constituencies | ~10.5 lakh polling stations

Key facts:
- ECI established under: Article 324, Constitution of India
- CEC removal process: same as Supreme Court judge
- MCC activates: the instant the schedule is announced
- Central Observers: IAS/IPS officers from other states deployed to each constituency`,
            quiz: {
                question: "What automatically activates when election dates are announced?",
                options: ["Emergency Powers", "Model Code of Conduct", "President's Rule", "Curfew"],
                answer: "Model Code of Conduct",
            },
        },
        {
            id: 2,
            title: "Electoral Roll Revision",
            icon: "📑",
            brief: "Ensure the voter list is accurate, current, and complete.",
            context: `The Electoral Roll (voter list) is the official register of all eligible voters in a constituency. Maintaining its accuracy is one of the ECI's most critical administrative tasks — a faulty voter list directly undermines democratic participation.

Who maintains it:
- The Electoral Registration Officer (ERO) of each constituency is legally responsible for the roll
- Booth Level Officers (BLOs) — usually government employees like schoolteachers — are assigned to specific booths and go door-to-door to verify and update voter information

Electoral Roll Revision Process:
1. Summary Revision: conducted annually — the roll is published in draft form, objections are invited, and corrections are made
2. Special Summary Revision: conducted before every major election — a more intensive revision with a specific cut-off date
3. Continuous Updation: voters can register or update details at any time through the NVSP portal or ERO Net system

What BLOs do:
- Verify that all existing voters still reside at their listed address
- Identify and add newly eligible citizens (turning 18)
- Remove entries of deceased voters
- Correct errors in names, addresses, and photos
- Collect and process Form 6, 7, and 8 applications

The final electoral roll is published on the ECI website before the notification date of the election. Any citizen can download and check the roll for their booth.

Photo Electoral Roll: Every entry includes the voter's photo (sourced from EPIC card data), making it harder to impersonate another voter.

Key facts:
- BLO: Booth Level Officer — door-to-door verification agent
- Annual revision + Special revision before elections
- Final roll published before notification date
- Anyone can check the roll at voters.eci.gov.in
- Deceased voter entries can be flagged by family using Form 7`,
            quiz: {
                question: "Who conducts door-to-door voter verification?",
                options: ["Police", "Revenue Officer", "Booth Level Officer (BLO)", "Collector"],
                answer: "Booth Level Officer (BLO)",
            },
        },
        {
            id: 3,
            title: "EVM Deployment",
            icon: "⚙️",
            brief: "Commission, seal, and distribute Electronic Voting Machines.",
            context: `Electronic Voting Machines (EVMs) were first introduced in India in 1982 (pilot in Kerala) and became universal across all elections by 2004. They replaced paper ballots and eliminated booth capturing, ballot stuffing, and the counting of invalid votes.

EVM Components:
1. Ballot Unit (BU): The unit inside the voting compartment that the voter interacts with. Has buttons for each candidate and NOTA.
2. Control Unit (CU): Held by the Presiding Officer. Controls when voting is enabled and stores the vote count.
3. VVPAT (Voter Verifiable Paper Audit Trail): Introduced in 2013, mandatory since 2019. Prints a paper slip showing the candidate voted for — visible to the voter for 7 seconds through a glass window.

EVM Security Protocol:
- Manufactured by: BEL (Bharat Electronics Limited) and ECIL (Electronics Corporation of India Ltd) — both government-owned
- No wireless connectivity — no WiFi, Bluetooth, internet, or radio frequency capability
- Not connected to any network on polling day
- Runs on a one-time programmable chip — cannot be reprogrammed after manufacturing
- Tested by technical experts and IIT professors
- Mock poll conducted before every election in presence of candidate representatives to verify accuracy

Deployment Process:
1. First Level Checking (FLC): Technical teams check every EVM for defects months before the election
2. Randomisation: EVMs are assigned to constituencies and booths through a computerised random draw to prevent any official from knowing in advance which EVM goes where
3. Candidate symbol setting: Candidate names and symbols are loaded onto the BU in the presence of candidates and their agents
4. Sealing: EVMs are sealed with pink paper seals signed by candidates and polling officers
5. Strong Room storage: EVMs stored under CCTV, armed guard, and with candidate agents permitted to sit outside

Key facts:
- EVM introduced nationally: 2004 General Election
- Manufactured by: BEL and ECIL (both Govt of India PSUs)
- VVPAT mandatory since: 2019 General Election
- Randomisation: computerised, two-stage — first to district, then to booth
- EVMs are standalone — zero network connectivity`,
            quiz: {
                question: "EVMs are stored in strong rooms guarded by?",
                options: ["Local Police only", "CRPF/Armed Forces + CCTV", "Private Security", "Volunteers"],
                answer: "CRPF/Armed Forces + CCTV",
            },
        },
        {
            id: 4,
            title: "Polling Day Operations",
            icon: "🏛️",
            brief: "Oversee voting across thousands of booths.",
            context: `Managing polling day across India is one of the largest logistical operations on the planet. In the 2024 General Election, over 10.5 lakh polling stations were set up across the country, staffed by approximately 1.5 crore polling personnel.

The Polling Station Hierarchy:
- Presiding Officer: In charge of each polling booth. Responsible for the entire conduct of the poll at that station.
- Polling Officers (usually 3–4 per booth): Handle voter verification, inking, and voter slips.
- Micro Observers: ECI-appointed officials who observe randomly selected polling stations on election day.
- Sector Officers: Supervise a cluster of booths, moving between them throughout the day.

Voter Flow at the Booth:
1. Voter arrives → first polling officer checks name on electoral roll
2. Second officer verifies ID (EPIC or alternative document)
3. Third officer applies indelible ink on left index finger
4. Voter is given a voter slip → proceeds to the EVM compartment
5. Votes → VVPAT slip appears for 7 seconds → vote is cast
6. Voter exits

Special Provisions:
- Differently-abled voters and senior citizens (above 85) can request home voting (Postal Ballot) or get priority queuing and assistance at booths
- If a voter's name is on the roll but their photo doesn't match, the officer takes a photograph before allowing them to vote
- If a polling officer suspects impersonation, they can challenge the voter — the challenged voter must sign an additional declaration

Polling Day Restrictions:
- No vehicles other than authorised ones near booth on polling day
- No display of election symbols within 100 metres of polling station
- Security forces (CRPF, State Police) deployed based on constituency sensitivity rating

Key facts:
- 10.5+ lakh polling stations in 2024
- Presiding Officer is sole in-charge of each booth
- Voter's name must be on electoral roll to vote — even if they have an EPIC card
- Home voting (postal ballot) available for aged 85+ and differently-abled voters
- No photography inside the voting compartment — strict rule`,
            quiz: {
                question: "Who is in charge of each polling booth on voting day?",
                options: ["District Collector", "Presiding Officer", "Sub-Inspector", "Booth Level Officer"],
                answer: "Presiding Officer",
            },
        },
        {
            id: 5,
            title: "VVPAT Verification",
            icon: "🖨️",
            brief: "Ensure every vote has a paper trail via VVPAT.",
            context: `The VVPAT (Voter Verifiable Paper Audit Trail) was introduced as a transparency measure to allow voters to verify that their vote was recorded correctly on the EVM.

How it works:
- The VVPAT is a small printer unit attached to the side of the EVM's Ballot Unit
- When a voter presses a button on the EVM, the VVPAT prints a paper slip showing:
  — The serial number of the candidate
  — The candidate's name
  — The candidate's party symbol (in colour)
- The slip is visible to the voter through a transparent glass window for exactly 7 seconds
- After 7 seconds, the slip is automatically cut and drops into a sealed drop box inside the VVPAT unit
- The voter cannot touch or take the slip — it remains sealed inside the machine

Why 7 seconds?
- This was determined by a committee to be the minimum time needed for a voter to read and verify the slip before it drops
- The voter does not receive a physical copy — this prevents vote-buying (where a party pays voters after seeing proof of their vote)

VVPAT in Counting:
- After polls close, the VVPAT boxes are sealed and transported to the counting centre along with EVMs
- As per Supreme Court orders (2019), VVPAT slips from 5 randomly selected EVMs per constituency must be counted and matched against EVM results
- If there is a mismatch, the VVPAT count is treated as final

Scale: In the 2024 General Election, over 55 lakh VVPAT units were deployed — one per polling booth.

Key facts:
- VVPAT introduced: 2013 (pilot) | Mandatory: 2019 General Election
- Slip visible for: 7 seconds
- Voter cannot touch or keep the VVPAT slip
- VVPAT count of 5 random EVMs per constituency is mandatory during counting
- If EVM and VVPAT mismatch: VVPAT count is the final authority
- Manufactured by: BEL and ECIL`,
            quiz: {
                question: "How long does a voter see their VVPAT slip?",
                options: ["3 seconds", "5 seconds", "7 seconds", "10 seconds"],
                answer: "7 seconds",
            },
        },
        {
            id: 6,
            title: "Results & Archival",
            icon: "📦",
            brief: "Tabulate results, archive records, return EVMs.",
            context: `After the election results are declared, the Returning Officer and the entire district election machinery don't simply shut down. An extensive post-election process follows to ensure legal compliance, accountability, and institutional memory.

Post-Result Steps:

1. Certificate of Election:
- The Returning Officer issues the Certificate of Election to the winning candidate
- This is the formal legal document confirming their election to the seat
- Without this certificate, the winner cannot take oath or assume office

2. EVM and VVPAT Strong Room Custody:
- EVMs and VVPAT units are resealed after counting and returned to strong rooms
- They must be kept for 45 days after the result declaration
- This is the statutory period during which a losing candidate can file an Election Petition in the High Court challenging the result
- Candidates can request re-verification of EVMs during this period as part of a court-ordered inspection
- After 45 days (if no petition is pending), EVMs are returned to the ECI's district stores for future use

3. Election Record Archival:
- The following documents are archived for 1 year minimum: Nomination papers (Form 2B), Form 26 affidavits, Form 17C (booth-level vote counts), Presiding Officer's diaries, postal ballot records
- Some records (like election petitions) may be kept longer depending on court proceedings

4. Expenditure Submission:
- Every candidate (winners and losers) must submit a complete account of their election expenditure to the Returning Officer within 30 days of the result
- Failure to submit is a disqualification offence under the RPA 1951
- Accounts are scrutinised by the ECI's expenditure observers

Key facts:
- EVMs stored post-result: 45 days (election petition window)
- Certificate of Election: issued by Returning Officer to winner
- Expenditure accounts due: within 30 days of result
- Election records archived: minimum 1 year
- Election petition must be filed in High Court within 45 days of result`,
            quiz: {
                question: "For how many days are EVMs stored after results for petition purposes?",
                options: ["15 days", "30 days", "45 days", "90 days"],
                answer: "45 days",
            },
        },
    ],
};
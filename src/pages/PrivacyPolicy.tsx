import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const EFFECTIVE_DATE = "6 November 2026";
const CONTACT_EMAIL = "privacy@esheda.com";

type Section = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  after?: string[];
};

const sections: Section[] = [
  {
    title: "Introduction",
    paragraphs: [
      "Esheda (\"Esheda\", \"we\", \"us\" or \"our\") is based in Nigeria and operates the website esheda.com (the \"Site\"). This Privacy Policy explains how we collect, use, store, share and protect your personal data when you visit the Site or join our waitlist, and the rights you have in relation to that data.",
      "We process personal data in line with the Nigeria Data Protection Act 2023 (\"NDPA\") and, where it applies to visitors from other countries, laws such as the EU General Data Protection Regulation (\"GDPR\").",
      "By using the Site or submitting the waitlist form, you confirm that you have read and understood this Privacy Policy.",
    ],
  },
  {
    title: "Data Controller",
    paragraphs: [
      "Esheda is the data controller for the personal data described in this Policy. If you have any questions about how we handle your data, you can contact us using the details in Section 15.",
    ],
  },
  {
    title: "Information We Collect",
    paragraphs: ["We collect the following categories of personal data:"],
    bullets: [
      "Information you give us. When you join the waitlist we collect your full name, your email address and your answer to the question \"What will you make first?\".",
      "Information we collect automatically. When you visit the Site, our hosting infrastructure may automatically record technical data such as your IP address, browser type and version, device type, operating system, referring page, pages viewed and the date and time of your visit. This data is used for security and to keep the Site running.",
      "Correspondence. If you email us, we keep a record of that correspondence.",
    ],
    after: [
      "We do not knowingly collect sensitive personal data such as health, religious, political or biometric information, and we ask that you do not send it to us.",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: ["We use the personal data we collect for the following purposes:"],
    bullets: [
      "To add you to the Esheda waitlist and manage your place on it.",
      "To email you when your access is ready, and to send occasional important updates about Esheda before launch.",
      "To understand what early members intend to create, so we can prioritise the right features.",
      "To respond to enquiries you send us.",
      "To operate, secure, maintain and improve the Site.",
      "To comply with legal obligations and to establish, exercise or defend legal claims.",
    ],
    after: [
      "We do not use your personal data for automated decision-making or profiling that produces legal or similarly significant effects on you.",
    ],
  },
  {
    title: "Lawful Basis for Processing",
    paragraphs: ["We rely on the following lawful bases under the NDPA and, where applicable, the GDPR:"],
    bullets: [
      "Consent. You give us consent when you submit the waitlist form. You can withdraw that consent at any time by contacting us.",
      "Legitimate interests. We have a legitimate interest in operating and securing the Site, understanding demand for our product and communicating with people who have asked to hear from us.",
      "Legal obligation. Where we need to process data to comply with a law that applies to us.",
    ],
  },
  {
    title: "Cookies and Analytics",
    paragraphs: [
      "The Site does not currently use advertising cookies, tracking pixels or third-party analytics tools. Your browser may store a small amount of data locally so that the waitlist form works correctly; this data stays on your device and is not sent to us.",
      "If we introduce analytics or cookies in future, we will update this Policy and, where required, ask for your consent before they are set.",
    ],
  },
  {
    title: "Sharing Your Information",
    paragraphs: ["We do not sell your personal data, and we do not share it with third parties for their own marketing. We may share personal data with:"],
    bullets: [
      "Service providers. Companies that host our infrastructure, store our data and deliver our email. They act on our instructions, process your data only to provide their services to us and are bound by contractual confidentiality and data protection obligations.",
      "Legal and regulatory authorities. Where disclosure is required by law, court order or a regulator, or is necessary to protect the rights, property or safety of Esheda, our users or others.",
      "Business transfers. If Esheda is involved in a merger, acquisition, financing or sale of assets, your data may be transferred as part of that transaction. We will notify you of any change in ownership or in how your personal data is used.",
    ],
  },
  {
    title: "International Transfers",
    paragraphs: [
      "Some of our service providers are located outside Nigeria, which means your personal data may be stored or processed in other countries. Where we transfer personal data internationally, we take steps required by the NDPA to ensure it remains protected, including transferring only to countries with adequate protection or putting appropriate contractual safeguards in place.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We keep your waitlist details for as long as the waitlist is active and until you are invited to create an account, or until you ask us to remove you, whichever comes first. If we close the waitlist without launching, we will delete the list.",
      "Technical log data is kept for a limited period for security purposes and is then deleted or anonymised. We may retain some data for longer where the law requires it or where it is needed to resolve disputes or enforce our agreements.",
    ],
  },
  {
    title: "Data Security",
    paragraphs: [
      "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, misuse, alteration or disclosure. These include encrypted connections to the Site, access controls and limiting the people who can view waitlist data.",
      "No method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security. If we become aware of a breach that affects your personal data, we will notify you and the relevant authorities as required by law.",
    ],
  },
  {
    title: "Your Rights",
    paragraphs: ["Under the NDPA and, where it applies, the GDPR, you have the right to:"],
    bullets: [
      "Access the personal data we hold about you.",
      "Ask us to correct personal data that is inaccurate or incomplete.",
      "Ask us to delete your personal data, including removing you from the waitlist.",
      "Object to, or ask us to restrict, our processing of your personal data.",
      "Receive a copy of the data you gave us in a structured, commonly used format.",
      "Withdraw your consent at any time, without affecting the lawfulness of processing carried out before withdrawal.",
      "Lodge a complaint with the Nigeria Data Protection Commission (NDPC) or, if you are outside Nigeria, with your local data protection authority.",
    ],
    after: [
      "To exercise any of these rights, contact us using the details in Section 15. We will respond within the time required by law and may need to verify your identity before acting on your request.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "The Site is not directed at children under the age of 18, and we do not knowingly collect personal data from them. If you believe a child has submitted personal data to us, please contact us and we will delete it.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time as Esheda evolves or as the law changes. When we do, we will revise the effective date at the top of this page. For significant changes, we will also notify waitlist members by email. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "This Privacy Policy is governed by the laws of the Federal Republic of Nigeria. Nothing in this Policy limits any rights you may have under the data protection laws of the country in which you live.",
    ],
  },
  {
    title: "Contact Us",
    paragraphs: [
      "If you have questions, concerns or requests relating to this Privacy Policy or your personal data, contact us at:",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-6 py-12 sm:px-10 md:px-16 md:py-16 lg:px-24 lg:py-20 xl:px-32">
      <Nav hideActions />

      <main className="mx-auto mt-16 max-w-3xl md:mt-20">
        <Link
          to="/"
          className="text-sm font-semibold text-[#A3A6A0] hover:text-white"
        >
          &larr; Back to waitlist
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        <p className="mt-3 text-sm text-[#6B6E68]">
          Effective date: {EFFECTIVE_DATE}
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section, i) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold">
                {i + 1}. {section.title}
              </h2>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#A3A6A0] md:text-base">
                {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}

                {section.bullets && (
                  <ul className="list-disc space-y-2 pl-5 marker:text-[#535353]">
                    {section.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}

                {section.after?.map((p) => <p key={p}>{p}</p>)}

                {section.title === "Contact Us" && (
                  <address className="not-italic">
                    <p className="font-semibold text-white">Esheda</p>
                    <p>Nigeria</p>
                    <p>
                      Email:{" "}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="text-white underline underline-offset-2"
                      >
                        {/* {CONTACT_EMAIL} */}
                      </a>
                    </p>
                  </address>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

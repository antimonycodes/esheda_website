import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const LAST_UPDATED = "5 November 2026";
const CONTACT_EMAIL = "privacy@esheda.com";

const sections = [
  {
    title: "What we collect",
    body: [
      "When you join the waitlist we ask for your full name, your email address, and what you plan to make first. That is all we collect through the form.",
      "Like most websites, our hosting provider may record basic technical data such as your IP address, browser type, and the pages you visit, to keep the service running and secure.",
    ],
  },
  {
    title: "How we use it",
    body: [
      "We use your email to tell you when your spot opens up and, occasionally, to share important updates about Esheda before launch.",
      "We use your answer to \"What will you make first?\" to understand what early members want so we can prioritise the right features.",
      "We do not sell your data, and we do not share it with third parties for their own marketing.",
    ],
  },
  {
    title: "Who we share it with",
    body: [
      "We rely on a small number of service providers to store data and send email. They process your information only on our instructions and only to provide those services to us.",
      "We may disclose information if required by law or to protect the rights, safety, or property of Esheda, our users, or others.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep your waitlist details until you are invited in and create an account, or until you ask us to remove you, whichever comes first. If we close the waitlist without launching, we will delete the list.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "You can leave the waitlist at any time by emailing us. We will remove your details and stop contacting you.",
      "Depending on where you live, you may also have the right to access, correct, export, or delete the personal data we hold about you. Email us and we will help.",
    ],
  },
  {
    title: "Security",
    body: [
      "We take reasonable technical and organisational steps to protect your information. No method of storage or transmission is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Children",
    body: [
      "Esheda is not directed at children under 16, and we do not knowingly collect personal data from them. If you believe a child has joined the waitlist, contact us and we will delete the record.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this policy as the product evolves. When we do, we will change the date at the top of this page and, for significant changes, let waitlist members know by email.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-6 py-12 sm:px-10 md:px-16 md:py-16 lg:px-24 lg:py-20 xl:px-32">
      <Nav />

      <main className="mx-auto mt-16 max-w-2xl md:mt-20">
        <Link
          to="/"
          className="text-sm font-semibold text-[#A3A6A0] hover:text-white"
        >
          &larr; Back to waitlist
        </Link>

        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          Privacy <span className="text-gradient">policy</span>
        </h1>
        <p className="mt-3 text-sm text-[#6B6E68]">
          Last updated {LAST_UPDATED}
        </p>

        <p className="mt-8 text-sm font-semibold text-[#A3A6A0] md:text-base">
          This policy explains what Esheda collects when you join the waitlist,
          how we use it, and the choices you have. We keep it short on purpose.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold">{section.title}</h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-sm leading-relaxed text-[#A3A6A0] md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-bold">Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#A3A6A0] md:text-base">
              Questions, or want to be removed from the list? Email{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white underline underline-offset-2"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

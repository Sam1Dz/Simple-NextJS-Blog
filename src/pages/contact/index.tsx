import React from "react";
import Head from "next/head";
import ContactFormComponents from "@/components/page/contact/contact-form";

function ContactPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages!" />
      </Head>

      <ContactFormComponents />
    </React.Fragment>
  );
}

export default ContactPage;

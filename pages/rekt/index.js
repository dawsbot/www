import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { blogCss } from '../../src/blog/styles';

const TITLE = 'Rekt | Dawson Botsford';
const DESCRIPTION =
  'Rekt is a native macOS meeting recorder: on-device transcription, speaker identification from your Google Calendar, and export to Attio.';

function Rekt() {
  return (
    <main className="zb">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content="https://dawsbot.com/rekt" />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: blogCss }} />
      <section className="band-light">
        <div className="wrap-narrow">
          <span className="eyebrow">macOS app</span>
          <h1 className="page-title">Rekt</h1>
          <p className="page-intro">{DESCRIPTION}</p>
          <div className="article">
            <ul>
              <li>Records your microphone and your Mac&apos;s audio, so every participant is captured.</li>
              <li>Transcribes and separates speakers on your Mac. Audio never leaves your computer.</li>
              <li>Reads your Google Calendar (read-only) to know who is in each meeting.</li>
              <li>Sends notes and transcripts to your Attio workspace when you ask it to.</li>
            </ul>
            <p>
              <Link href="/rekt/privacy">Privacy policy</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Rekt;

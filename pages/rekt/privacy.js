import React from 'react';
import Head from 'next/head';

import { blogCss } from '../../src/blog/styles';

const TITLE = 'Rekt Privacy Policy | Dawson Botsford';

function RektPrivacy() {
  return (
    <main className="zb">
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content="How the Rekt macOS app handles your data." />
      </Head>
      <style dangerouslySetInnerHTML={{ __html: blogCss }} />
      <section className="band-light">
        <div className="wrap-narrow">
          <span className="eyebrow">Rekt</span>
          <h1 className="page-title">Privacy policy</h1>
          <div className="article">
            <p>Last updated October 14, 2026.</p>

            <h2>What Rekt is</h2>
            <p>
              Rekt is a macOS app that records meetings on your own computer. There is no Rekt server and no Rekt
              account. The developer does not receive, store, or have access to any of your data.
            </p>

            <h2>Google user data</h2>
            <p>
              When you link a Google account, Rekt requests read-only access to Google Calendar
              (<code>calendar.readonly</code>) and your email address (<code>openid email</code>). Rekt uses this
              to show your upcoming meetings and to know each meeting&apos;s title, time, and attendees (names and
              email addresses) so it can label who spoke.
            </p>
            <ul>
              <li>Calendar data is fetched directly from Google to your Mac and kept only on your Mac.</li>
              <li>OAuth tokens are stored in your macOS Keychain.</li>
              <li>
                Meeting titles and attendee names/emails are shared only with services you configure yourself:
                your Attio workspace (when you send a meeting to Attio) and, if you add an Anthropic API key,
                the Claude API to write a meeting summary.
              </li>
              <li>Google user data is never sold, used for advertising, or used to train AI models.</li>
            </ul>
            <p>
              Rekt&apos;s use and transfer of information received from Google APIs adheres to the{' '}
              <a href="https://developers.google.com/terms/api-services-user-data-policy">
                Google API Services User Data Policy
              </a>
              , including the Limited Use requirements.
            </p>

            <h2>Recordings</h2>
            <p>
              Audio, transcripts, voiceprints, and notes are stored in a folder on your Mac. Transcription and speaker
              identification run on-device. You can delete any meeting folder at any time.
            </p>

            <h2>Removing access</h2>
            <p>
              Remove an account in Rekt › Settings › Calendar, or revoke access at{' '}
              <a href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</a>.
            </p>

            <h2>Contact</h2>
            <p>
              Questions: <a href="mailto:dawsonbotsford@gmail.com">dawsonbotsford@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RektPrivacy;

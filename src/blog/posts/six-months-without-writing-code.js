import React from 'react';

const localModels = [
  {
    name: 'qwen/qwen3.6-35b-a3b',
    href: 'https://huggingface.co/Qwen/Qwen3.6-35B-A3B',
    speed: '125.0 tok/s',
    ttft: '0.20s',
  },
  {
    name: 'qwen3.6-35b-a3b-abliterated-heretic-mlx',
    href:
      'https://huggingface.co/Youssofal/Qwen3.6-35B-A3B-Abliterated-Heretic-MLX-4bit',
    speed: '114.5 tok/s',
    ttft: '0.18s',
  },
  {
    name: 'deepseek-v4-flash',
    href: 'https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash',
    speed: '32.3 tok/s',
    ttft: '1.38s',
  },
];

// Opens in a new tab, matching every other outbound link on the site.
const Ext = ({ href, className, children }) => (
  <a
    href={href}
    className={className}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

const PostBody = () => (
  <>
    <p>
      {`It's August 12, 2026. I haven't written a line of code in about 6 months.
      I fulltime "vibe-code" now. It's faster than me and writes future bugs.`}
    </p>

    <h2>The models have converged</h2>
    <p>
      Nowadays Claude Code on{' '}
      <Ext
        className="model"
        href="https://www.anthropic.com/news/claude-opus-5"
      >
        Opus 5
      </Ext>{' '}
      is strong, but so is Codex on{' '}
      <Ext className="model" href="https://openai.com/index/gpt-5-6/">
        Sol 5.6
      </Ext>{' '}
      and also{' '}
      <Ext className="model" href="https://x.ai/news/grok-4-5">
        Grok 4.5
      </Ext>
      . I can hardly tell a difference between each model. They all get the job
      done good enough.
    </p>

    <h2>Nobody reviews code anymore. Models do.</h2>
    <p>
      {`Pull requests for code changes from teammates are so big that you can't
      review them as a human. So teammates make AI code and I review the code
      with AI. It's helpful to mix frontier models for code review. My favorite
      pattern is:`}
    </p>
    <ul>
      <li>Opus 5 or Fable 5 does the code.</li>
      <li>Codex does the code review.</li>
      <li>{`Opus/Fable makes the needed code changes from Codex's feedback.`}</li>
    </ul>

    <div className="pull">
      Teammates make AI code and I review the code with AI.
    </div>

    <h2>Hopeful and hopeless, alternating</h2>
    <p>
      Many software engineers I know and myself alternate between hopeful and
      excited to make all the software we ever wanted and hopeless that finding
      traditional software engineering openings is harder than ever. If{' '}
      {`you're`} employed by a large company people are often worried about
      their long-term prospects. Layoffs are big, but AI is in peak hype right
      now. The <strong>{`"AI Bubble"`}</strong> has not burst and there is no
      end in sight, yet it does feel shaky to me.
    </p>
    <p>
      Crypto is dead and stocks are up huge. My index funds are at all-time
      highs. The advent of AI has created the <strong>OPTION</strong> for more
      leisure time but the <strong>reality</strong> of less leisure time as I
      want to constantly stay on the bleeding edge.
    </p>

    <h2>Twitter is the newswire</h2>
    <p>
      I use twitter nearly all day now. {`It's`} the only place to hear about
      the latest model releases and the hacks as they come out.
    </p>
    <p>
      Last week OpenAI and anthropic both paused frontier research because their
      models broke out of the sandbox. The world is realizing that{' '}
      <strong>{`"full alignment"`}</strong> might be impossible so we need to
      stay where we are at a little longer while sandboxing is solved better.
    </p>

    <h2>Local models are close</h2>
    <p>
      Local models are coming along quickly. {`We're`} almost at the point it
      can replace frontier models, so I just upgraded from my M1 macbook pro
      with 64gb RAM to the latest <strong>M5 macbook pro with 128gb RAM</strong>
      . {`It's`} fast and performs the exact same for everyday use, but using
      LMStudio I can run a ton of models. I currently have all of the following
      loaded which are fun to toy with.
    </p>

    <div className="table-scroll">
      <table>
        <thead>
          <tr>
            <th scope="col">Model</th>
            <th scope="col">Speed</th>
            <th scope="col">TTFT</th>
          </tr>
        </thead>
        <tbody>
          {localModels.map(model => (
            <tr key={model.name}>
              <td>
                <Ext href={model.href}>{model.name}</Ext>
              </td>
              <td className="num">{model.speed}</td>
              <td className="num">{model.ttft}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p>
      As mentioned, {`they're`} not frontier level though, so {`I'm`} not using
      any of these as an everyday driver. When I do drive with them, I like{' '}
      <strong>OpenCode</strong> because {`that's`} made to work with OpenAI
      compatible endpoints and LMStudio also {`"speaks that language"`} by
      default.
    </p>
    <p>
      <Ext className="model" href="https://qwen.ai/blog?id=qwen3.8">
        Qwen 3.8 27b
      </Ext>{' '}
      comes out in two days and people are hoping that will be the tide changing
      in on-device AI. {`I'll`} be running that right away of course to see!
    </p>

    <h2>Still the best time to build</h2>
    <p>
      {`I'm having a blast and it's the best time in history to be a technical
      builder!`}
    </p>
  </>
);

export default PostBody;

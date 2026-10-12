
      <Section id="specialties" title="Specialties">
        <ul className="list-disc ml-5 space-y-2">
          <li>Supporting women through pregnancy, postpartum, and motherhood</li>
          <li>
            Supporting parents navigating a child’s challenges at home and at
            school
          </li>
          <li>Emotion regulation &amp; stress management</li>
          <li>Family communication and routines</li>
          <li>Life transitions</li>
          <li>Anxiety, depression, and chronic illness</li>
        </ul>
      </Section>

      <Section id="approach" title="Approach">
        <div className="space-y-6 leading-relaxed text-[1.05rem]">
          <p>
            I work from a strengths-based, collaborative perspective. I strive
            to provide encouragement knowing that progress is well within reach.
            I have a nurturing and empathic style that helps individuals and
            families feel safe and comfortable. I believe that trust and safety
            in the therapeutic relationship are paramount.
          </p>

          <p>
            My initial goal is to build a secure relationship and create space
            to explore the challenges a person is experiencing. I view myself as
            a scientist—listening, examining, observing, and asking the
            questions needed to create a plan. I work collaboratively with my
            clients to help them meet their goals and live their best lives.
          </p>
        </div>
      </Section>

      <Section id="services" title="Services &amp; Fees">
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium mb-2">Sessions</h3>
            <ul className="list-disc ml-5 space-y-1">
              <li>Initial consultation (20 min): complimentary</li>
              <li>Individual session (60 min): $215</li>
              <li>Parent consultation (50 min): $195</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-5">
            <h3 className="font-medium mb-2">Insurance</h3>
            <p>
              I do <strong>not</strong> accept insurance. I can provide a
              superbill upon request.
            </p>
          </div>
        </div>
      </Section>

      <Section id="telehealth" title="Telehealth">
        <p>
          Sessions are conducted via a secure, HIPAA-aware video platform.
          You’ll receive a private link before each appointment. Please find a
          quiet, comfortable space and reliable internet connection.
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <p className="mb-6">
          Please share a few details below. I’ll be in touch to schedule a
          brief consultation.
        </p>

        <form
          name="contact"
          method="POST"
          action="/thanks.html"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="grid gap-4 max-w-xl not-prose"
          netlify
        >
          <input type="hidden" name="form-name" value="contact" />

          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <label className="block">
            <span className="text-sm">Name</span>
            <input
              name="name"
              required
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="text-sm">Email</span>
            <input
              type="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </label>

          <label className="block">
            <span className="text-sm">Message</span>
            <textarea
              name="message"
              rows={4}
              className="mt-1 w-full rounded-lg border px-3 py-2"
            />
          </label>

          <button className="rounded-xl bg-slate-900 text-white px-5 py-2 w-fit">
            Send
          </button>
          <p className="text-xs text-slate-500">
            By submitting, you consent to being contacted by email.
          </p>
        </form>
      </Section>

      <footer className="border-t mt-16">
        <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>
            © {new Date().getFullYear()} Michelle Greenberg, LCSW-C, PMH-C ·
            Telehealth only · Private practice in Maryland

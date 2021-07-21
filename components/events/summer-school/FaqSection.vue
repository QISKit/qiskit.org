<template>
  <section class="faq-section">
    <h2>
      Frequently asked questions
    </h2>
    <cv-accordion align="end">
      <cv-accordion-item>
        <template #title>
          What are the pre-requisites for enrolling in the Summer School?
        </template>
        <template #content>
          <p>
            Minimal prerequisites are required for the Qiskit Global Summer School. If you know
            <AppLink v-bind="khanacademy">
              how to multiply two matrices
            </AppLink>
            , and have some programming experience in Python, you are ready for the Summer School.
          </p>
          <p>
            You can
            <AppLink v-bind="pythonAndJupyter">
              brush up on Python programming
            </AppLink>
            before attending the lectures by using the Qiskit Textbook. To make the most out of these lectures, you may also consider looking through the
            <AppLink v-bind="linearAlgebra">
              linear algebra prerequisites
            </AppLink>
            section of the Qiskit Textbook.
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          What are the application requirements for the Summer School?
        </template>
        <template #content>
          <p>
            There is no application or pre-registration for the Qiskit Global Summer School 2021. Registration will be on a first come, first serve basis, with scheduled global availability. Once the Summer School registration reaches capacity, unfortunately we will not be able to register any additional students. Please submit an enquiry below if you have any additional questions!
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          What is the time requirement for the Summer School? Is the scheduled fixed or flexible?
        </template>
        <template #content>
          <p>
            The summer school is made up of a total of 20 lectures, 5 lab sessions &amp; application exercises, in addition to the daily Live Q&amp;A Sessions and final Commencement Celebration. Participation and completion of all labs and lectures are required in order to receive a certificate of completion from the Summer School, with the optional Q&A Sessions and Commencement activities to enhance your Summer School experience. The schedule is not fixed, aside from final lab submission deadlines, and all students can participate on the schedule that works best for them. Students should anticipate a minimum time commitment of 30 hours for the full Summer School, but we recommend planning on 41 hours of participation, with additional time for discussion and collaboration with other students.
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          I was a student at the Qiskit Global Summer School 2020 - should I enroll in the 2021 Summer School as well?
        </template>
        <template #content>
          <p>
            The 2021 Summer School will cover briefly introduce quantum computing before diving into classical and quantum machine learning, which was not covered in the 2020 Summer School, so you should enroll if you are interested!
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          Will the lectures and labs be recorded? Or will they only be accessible live?
        </template>
        <template #content>
          <p>
            Lectures and labs sessions will all be recorded and available for live participation and post viewing, as well as the daily Q&A sessions.
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          Do I need to download anything in order to participate?
        </template>
        <template #content>
          <p>
            Nope! Everything can be done in-browser.
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          What is the cost to enroll in the Summer School?
        </template>
        <template #content>
          <p>
            There is no cost to participate in the summer school!
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          Will I need any supplies or equipment in order to participate?
        </template>
        <template #content>
          <p>
            You will need an operating computer with a reliable internet connection and either a mobile device or webcam/microphone on your computer to communicate with mentors and other students. You will need to be able to view seminars and connect virtually. Other than that, you just need to bring yourself
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          Is there an age limit to participate in the Summer School?
        </template>
        <template #content>
          <p>
            The age limit for Qiskit Global Summer School 2021 is 14. If you are under the age limit, but still want to be part of the community, please check out other ways you can get connected, and other events that may be available in your area!
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          I'm interested in hosting my own summer school or implementing Qiskit into my coursework - Where can I learn more?
        </template>
        <template #content>
          <p>
            Explore IBM Quantums Educators Program
            <AppLink v-bind="qCEducators">
              online here
            </AppLink>
            , or email
            <AppLink v-bind="mailtoQCEducators">
              quantum.education@us.ibm.com
            </AppLink>
            to connect with the latest coursework and classroom resources for educators and students alike.
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          How do I connect more with the Quantum Community?
        </template>
        <template #content>
          <p>
            There are several different ways you can connect with the IBM Quantum Community - depending on your preference. You can
            <AppLink v-bind="twitterQiskit">
              follow Qiskit
            </AppLink>
            and
            <AppLink v-bind="twitterIBMResearch">
              IBM Research
            </AppLink>
            on Twitter for the latest updates on new events, activities, and features on what is going on with the community. There is also a
            <AppLink v-bind="githubQiskit">
              community Github
            </AppLink>
            that you can explore and contribute to, and you can read regular
            <AppLink v-bind="mediumQiskit">
              blog posts from our team and community members on Medium
            </AppLink>
            . You can also
            <AppLink v-bind="qiskitSubscribe">
              subscribe to the Qiskit YouTube
            </AppLink>
            for the latest video content and our weekly live Seminar Series.
          </p>

          <p>
            If you want to collaborate and connect with other members of the community, and participate in some of the ongoing conversations about quantum computing, you will want to
            <AppLink v-bind="joinqiskitslack">
              check out our ever-growing Slack Community
            </AppLink>
            . From there you can connect with current and past interns, IBM researchers, Qiskit advocates, and fellow community members directly.
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          Are there any upcoming events in my area that I can participate in?
        </template>
        <template #content>
          <p>
            All of our announced
            <AppLink v-bind="qiskitEvents">
              upcoming events are listed on qiskit.org
            </AppLink>
            , which is continually updated as we roll out more events throughout the year. You can also
            <AppLink v-bind="twitterQiskit">
              follow Qiskit on Twitter
            </AppLink>
            for the latest announcements on new and upcoming events!
          </p>
        </template>
      </cv-accordion-item>

      <cv-accordion-item>
        <template #title>
          Still have more questions?
        </template>
        <template #content>
          <p>
            For any questions about the summer school, please submit your questions using the form below. For all other enquiries, feel free to email us directly at
            <AppLink v-bind="mailtoQiskit">
              qiskit.events@us.ibm.com
            </AppLink>.
          </p>
        </template>
      </cv-accordion-item>
    </cv-accordion>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import { CtaClickedEventProp } from '~/constants/segment'

interface TrackedLink {
  url: string,
  segment: CtaClickedEventProp
}

@Component
export default class FaqSection extends Vue {
  khanacademy: TrackedLink = {
    url: 'https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:matrices/x9e81a4f98389efdf:multiplying-matrices-by-matrices/v/matrix-multiplication-intro',
    segment: { cta: 'khanacademy-matrix-multiplication-intro', location: 'faq' }
  }

  pythonAndJupyter: TrackedLink = {
    url: 'https://learn.qiskit.org/course/ch-prerequisites/introduction-to-python-and-jupyter-notebooks',
    segment: { cta: 'textbook-python-and-jupyter-notebooks', location: 'faq' }
  }

  linearAlgebra: TrackedLink = {
    url: 'https://learn.qiskit.org/course/ch-appendix/an-introduction-to-linear-algebra-for-quantum-computing',
    segment: { cta: 'qiskit-linear-algebra', location: 'faq' }
  }

  qCEducators: TrackedLink = {
    url: 'https://quantum-computing.ibm.com/programs/educators',
    segment: { cta: 'ibm-quantum-educators-program', location: 'faq' }
  }

  mailtoQCEducators: TrackedLink = {
    url: 'mailto:quantum.education@us.ibm.com',
    segment: { cta: 'mailto-quantum-educators-program', location: 'faq' }
  }

  twitterQiskit: TrackedLink = {
    url: 'https://twitter.com/qiskit',
    segment: { cta: 'qiskit-twitter', location: 'faq' }
  }

  twitterIBMResearch: TrackedLink = {
    url: 'https://twitter.com/IBMResearch',
    segment: { cta: 'ibmresearch-twitter', location: 'faq' }
  }

  githubQiskit: TrackedLink = {
    url: 'https://github.com/Qiskit',
    segment: { cta: 'qiskit-github', location: 'faq' }
  }

  mediumQiskit: TrackedLink = {
    url: 'https://medium.com/qiskit',
    segment: { cta: 'qiskit-medium', location: 'faq' }
  }

  qiskitSubscribe: TrackedLink = {
    url: 'https://qisk.it/sub',
    segment: { cta: 'qiskit-youtube-subscribe', location: 'faq' }
  }

  joinqiskitslack: TrackedLink = {
    url: 'https://ibm.co/joinqiskitslack',
    segment: { cta: 'qiskit-slack-join', location: 'faq' }
  }

  qiskitEvents: TrackedLink = {
    url: 'https://qiskit.org/events',
    segment: { cta: 'qiskit-org-events', location: 'faq' }
  }

  mailtoQiskit: TrackedLink = {
    url: 'mailto:qiskit.events@us.ibm.com',
    segment: { cta: 'mailto-qiskit-events', location: 'faq' }
  }
}
</script>

<style lang="scss" scoped>
.faq-section {
  ::v-deep {
    .bx--accordion__title {
      color: $text-color;
    }

    .bx--accordion__heading:hover,
    .bx--accordion__heading:hover::before {
      background-color: $background-color-lighter;
    }

    .bx--accordion__arrow {
      fill: $text-color;
    }
  }
}
</style>

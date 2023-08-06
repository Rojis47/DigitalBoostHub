import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How can DigitalGrowth help my business?',
      answer:
        'DigitalGrowth specializes in creating customized digital marketing strategies tailored to your business needs, ensuring increased online presence and customer engagement.',
    },
    {
      question: 'Do you offer analytics and performance tracking?',
      answer:
        'Absolutely! We believe in transparent results. Our clients receive regular analytics reports to track and measure their digital growth.',
    },
    {
      question: 'Can I opt for a custom package or strategy?',
      answer:
        'Certainly! We understand each business is unique. Our team will work closely with you to craft a strategy that best suits your objectives and budget.',
    },
  ],
  [
    {
      question: 'Wait, this really does the thing, right?',
      answer: 'Yes, Amanda, it truly does the thing.',
    },
    {
      question: 'Is there a contract or minimum commitment period?',
      answer:
        'We offer flexible engagement models, both contract-based and month-to-month. Our goal is to provide you with the best solution that aligns with your business goals.',
    },
    {
      question: 'Do you cater to small businesses?',
      answer:
        'Yes, we believe every business, big or small, deserves a strong digital presence. We offer solutions tailored to fit various business sizes and budgets.',
    },
  ],
  [
    {
      question: 'How do you measure campaign success?',
      answer:
        'Success is measured using a variety of metrics like ROI, customer engagement, conversion rates, and more. We focus on achieving tangible results that drive growth.',
    },
    {
      question: 'What if I want to change my strategy mid-campaign?',
      answer:
        'Flexibility is key in digital marketing. If you wish to pivot or adjust your strategy, our team is on hand to recalibrate and ensure continued success.',
    },
    {
      question: 'How can I reach out for support or queries?',
      answer:
        'Our dedicated support team is available via email, phone, and live chat. We pride ourselves on quick and efficient responses to ensure your business runs smoothly.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

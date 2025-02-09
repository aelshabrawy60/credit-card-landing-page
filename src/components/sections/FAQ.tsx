import React from 'react'
import FAQCard from '../ui/FAQCard'
import Dora from '../ui/dora'

const faqs = [
    {
        question: "What credit score do I need to apply for a credit card?",
        answer: "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards."
    },
    {
        question: "How can I improve my credit score?",
        answer: "You can improve your credit score by making on-time payments, reducing your credit utilization ratio, avoiding new hard inquiries, and maintaining a long credit history."
    },
    {
        question: "What is a secured credit card?",
        answer: "A secured credit card requires a cash deposit as collateral, which acts as your credit limit. It’s often used by individuals looking to build or rebuild their credit."
    },
    {
        question: "How does applying for a credit card affect my credit score?",
        answer: "Each time you apply for a credit card, a hard inquiry is made on your credit report, which may slightly lower your credit score temporarily."
    },
    {
        question: "What is the difference between a credit card and a debit card?",
        answer: "A credit card allows you to borrow money up to a certain limit, while a debit card deducts money directly from your bank account."
    },
    {
        question: "What is an annual percentage rate (APR) on a credit card?",
        answer: "The APR represents the yearly cost of borrowing money on a credit card, including interest and fees, if you carry a balance from month to month."
    },
    {
        question: "Can I get a credit card with no credit history?",
        answer: "Yes, you may qualify for a secured credit card or a student credit card, which are designed for individuals with little to no credit history."
    }
];


function FAQ() {
  return (
    <div className='relative'>
        <Dora left={0} top={100}/>
        <Dora left={-50} top={200}/>
        <div className='text-[40px] mb-[64px] text-center'>
            FAQs
        </div>
        <div className='flex flex-col gap-4'>
            {faqs.map((FAQ, i)=> <FAQCard key={i} question={FAQ.question} answer={FAQ.answer}/>)}
        </div>
    </div>
    
  )
}

export default FAQ
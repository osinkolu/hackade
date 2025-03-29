import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export const Faqs = () => {
    const faqs = [
        {
          question: "How can I participate in the hackathons?",
          answer: "You can register for upcoming hackathons through our hackathons page. Make sure to be on the lookout for our updates via your inbox."
        },
        {
          question: "What are the sponsorship opportunities?",
          answer: "We offer various sponsorship tiers with different benefits. Visit our sponsors page for detailed information or contact us directly."
        },
        {
          question: "Do I need to be a Nigerian to participate?",
          answer: "Yes, you need to be a Nigerian but you don't need to be in Nigeria before you can participate because they are primarily conducted online, allowing Nigerians from anywhere to join."
        }
      ]
    return (
        <div className="mx-auto mt-32 max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-center mb-8">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
}
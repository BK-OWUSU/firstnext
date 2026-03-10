import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Question } from "@/types/types"

interface FAQSectionProps {
    faqSection: Question[]
}

export default function FAQSection({faqSection}: FAQSectionProps) {

  return (
   <Accordion type="single" collapsible className="w-full">
    {
        faqSection.map((question: Question) => (
            <AccordionItem key={question.value} value={question.value}>
                <AccordionTrigger>{question.trigger}</AccordionTrigger>
                <AccordionContent>{question.content}</AccordionContent>
            </AccordionItem>
        ))
    }
   </Accordion>
  )
}

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";

export function Faq() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      id="faq"
      className="relative py-16 sm:py-24 justify-between lg:flex-row flex-col gap-y-8 gap-x-16 px-4 sm:px-6 flex w-full max-w-7xl mx-auto"
    >
      <motion.h2
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="font-semibold text-3xl sm:text-4xl shrink-0 lg:text-left text-center"
      >
        Frequently Asked Questions
      </motion.h2>

      <motion.div variants={FADE_UP_ANIMATION_VARIANTS} className="grow lg:max-w-3xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-6">
            <AccordionTrigger>How do I create work on Gibwork?</AccordionTrigger>
            <AccordionContent>
              Open the Gibwork app and select the option to create a new bounty or task.
               Follow the prompts to describe the work, set the reward, and post it for contributors to complete.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What&apos;s the difference between a bounty and a task?
            </AccordionTrigger>
            <AccordionContent>
              A bounty is a GitHub issue with a monetary reward. A task is a
              specific job that needs to be completed, often within a shorter timeframe.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I get paid for completed work?</AccordionTrigger>
            <AccordionContent>
              Once the work is approved by the creator, the agreed reward is released to your noncustodial wallet.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>What payment methods does gibwork support?</AccordionTrigger>
            <AccordionContent>
              Gibwork uses wallet-based payments. Rewards are sent directly to your wallet
               in supported cryptocurrencies or stablecoins.
            </AccordionContent>
          </AccordionItem>
          {/* <AccordionItem value="item-4">
            <AccordionTrigger>Are there any fees for using gibwork?</AccordionTrigger>
            <AccordionContent>
              Gibwork charges a 5% service fee on transactions, the lowest in the industry!
            </AccordionContent>
          </AccordionItem> */}
          {/* <AccordionItem value="item-5">
            <AccordionTrigger>What is the purpose of the $WORK token?</AccordionTrigger>
            <AccordionContent>
              The $WORK Token provide access to a range of utilities within the platform, which could include community voting rights and participation in allocation of rewards funded by operational revenue.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Where can I get $WORK?</AccordionTrigger>
            <AccordionContent>
              You can seamlessly swap any SPL token for $WORK by using the platform at <a className="text-violet-600" href="https://jup.ag/swap/SOL-WORK">https://jup.ag/swap/SOL-WORK</a>.
            </AccordionContent>
          </AccordionItem> */}
        </Accordion>
      </motion.div>
    </motion.section>
  );
}

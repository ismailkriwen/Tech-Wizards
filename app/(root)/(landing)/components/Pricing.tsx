"use client";

import { PLANS } from "@/constants";
import { formatPrice } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { X } from "lucide-react";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

export const Pricing = () => {
  return (
    <section className="pb-6">
      <div className="text-center py-4 font-semibold text-4xl tracking-wide bg-clip-text text-transparent primary-gr">
        Pricing
      </div>
      <div className="container mt-4 flex items-center md:items-start justify-center gap-5 max-md:flex-col">
        {PLANS.map((plan, index) => (
          <div
            className="rounded-md min-h-80 shadow-md dark:shadow-white/[.15] px-6 py-4 flex flex-1 justify-center flex-col gap-5"
            key={index}
          >
            <div className="font-bold text-2xl flex items-center gap-2">
              {plan.icon && <plan.icon />}
              {plan.name}{" "}
              <span className="text-base">({formatPrice(plan.price)})</span>
            </div>
            <div className="space-y-2">
              {plan.features.map((feature, idx) => (
                <div className="flex gap-2 items-center" key={idx}>
                  <FaCheck />
                  <span>{feature}</span>
                </div>
              ))}
              {plan?.unavailable?.map((feature, idx) => (
                <div className="flex gap-2 items-center" key={idx}>
                  <X className="w-5 h-5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            {plan.cta && (
              <Button
                variant="shadow"
                as={Link}
                className="bg-gradient-to-br text-white border-none primary-gr shadow-md px-8 rounded-[4px]"
                href={plan.cta.href}
              >
                {plan.cta.text}
              </Button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

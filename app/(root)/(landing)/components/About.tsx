"use client";

import { Button, Link, useDisclosure } from "@nextui-org/react";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import { AboutModal } from "./modals/about";
import { useTheme } from "next-themes";

export const About = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { theme } = useTheme();

  return (
    <>
      <section className="container py-8 flex max-md:flex-col gap-10 items-center md:items-start justify-between">
        <div className="flex flex-col justify-between flex-1 h-[275px] max-md:text-center gap-5 md:gap-5">
          <div>
            <div className="bg-clip-text text-transparent font-extrabold text-5xl primary-gr">
              Tech Wizards
            </div>
            <div className="text-small font-light tracking-wider pt-1">
              Crafting Tomorrow&apos;s Digital Magic Today
            </div>
            <div className="text-small tracking-wider md:w-3/4 pt-5">
              Welcome to Tech Wizards, where we empower aspiring developers to
              master web development and transform from novices to tech wizards!
            </div>
          </div>
          <div className="flex gap-5 items-center max-md:justify-center">
            <Button
              as={Link}
              href="/auth"
              color={theme === "dark" ? "danger" : "primary"}
              className="rounded-[4px] px-8"
            >
              Get Started
            </Button>
            <Button
              variant="ghost"
              color={resolvedTheme === "dark" ? "danger" : "primary"}
              className="rounded-[4px] px-8"
              onPress={onOpen}
              endContent={<AlertCircle className="w-4 h-4" />}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative w-72 aspect-square">
          <Image
            src="/about-img.png"
            alt="About Image"
            fill
            sizes="30vw"
            priority
            className="object-cover rounded-full"
          />
        </div>
      </section>
      <AboutModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

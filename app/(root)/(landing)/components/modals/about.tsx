"use client";

import { FEATURES } from "@/constants";
import {
  Modal,
  ModalBody,
  ModalContent,
  ScrollShadow,
} from "@nextui-org/react";

type AboutModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
};

export const AboutModal = ({ isOpen, onOpenChange }: AboutModalProps) => {
  return (
    <Modal radius="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalBody>
          <ScrollShadow className="w-full h-72 mt-6 p-2">
            <div className="font-bold py-2 text-2xl text-transparent bg-clip-text primary-gr">
              What makes Tech Wizards special?
            </div>
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="pl-2">
                <div className="font-bold text-lg">{feature.heading}</div>
                <div className="font-light text-base pl-2">
                  {feature.content}
                </div>
              </div>
            ))}
          </ScrollShadow>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

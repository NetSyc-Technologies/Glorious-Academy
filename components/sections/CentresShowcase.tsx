"use client";

import React from "react";
import { motion } from "motion/react";
import { centresData } from "@/content/centres";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/MotionElements";
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export function CentresShowcase() {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E2E8F0] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0F766E]/[0.015] rounded-full blur-3xl pointer-events-none" />

      <div className="site-container relative z-10">
        <FadeIn>
          <SectionHeading
            eyebrow="Campus Presence"
            title="Find Your Nearest Glorious Academy Centre"
            description="Visit our dedicated academic campuses in Chandrapur and Bhadrawati for classroom coaching, library access, and admissions counseling."
            align="center"
          />
        </FadeIn>

        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {centresData.map((centre) => (
            <StaggerItem key={centre.slug}>
              <motion.div
                className="rounded-3xl bg-[#FAFAF7] p-8 sm:p-10 border border-[#D8E1EB] shadow-xs card-hover-lift flex flex-col justify-between h-full relative overflow-hidden"
                whileHover={{ borderColor: "rgba(15, 118, 110, 0.25)" }}
              >
                {/* Gradient accent at top */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1E40AF] via-[#0F766E] to-[#2563EB]" />

                {/* Campus Image Banner */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 border border-[#D8E1EB] shadow-xs group">
                  <img
                    src={centre.slug === "chandrapur" ? "/images/centre-chandrapur.jpg" : "/images/centre-bhadrawati.jpg"}
                    alt={`${centre.name} campus facilities`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                    <span className="text-xs font-bold drop-shadow-sm">
                      {centre.slug === "chandrapur" ? "Warora Naka Main Campus" : "Bhadrawati Study Centre & Library"}
                    </span>
                    <span className="text-[10px] bg-white/90 text-[#1E40AF] font-bold px-2 py-0.5 rounded-full">
                      Physical Campus
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold text-[#0F766E] bg-[#ECFDF5] border border-[#A7F3D0] shimmer-badge">
                      {centre.city} Centre
                    </span>
                    <span className="text-xs font-semibold text-[#64748B]">
                      PIN: {centre.pin}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                    {centre.shortName}
                  </h3>

                  <div className="mt-4 space-y-3 text-sm text-[#4B5563]">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#1E40AF] shrink-0 mt-0.5" />
                      <span>{centre.fullAddress}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#1E40AF] shrink-0" />
                      <a
                        href={`tel:${centre.phone.replace(/\s+/g, "")}`}
                        className="font-bold text-[#111827] hover:text-[#1E40AF] transition-colors"
                      >
                        {centre.phone}
                      </a>
                    </div>

                    <div className="flex items-start gap-3 text-xs text-[#64748B]">
                      <Clock className="w-4 h-4 text-[#64748B] shrink-0 mt-0.5" />
                      <span>{centre.operatingHours}</span>
                    </div>
                  </div>

                  {/* Key Centre Features */}
                  <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                    <span className="text-xs font-bold text-[#111827] uppercase tracking-wider block mb-2.5">
                      Centre Highlights
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#4B5563]">
                      {centre.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#0F766E] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-center gap-3">
                  <motion.div
                    className="w-full sm:flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      href={`/admissions?centre=${centre.slug}`}
                      variant="primary"
                      size="md"
                      className="w-full text-xs sm:text-sm"
                    >
                      <span>Enquire for This Centre</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </motion.div>

                  <motion.div
                    className="w-full sm:w-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      href={centre.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="outline"
                      size="md"
                      className="w-full text-xs sm:text-sm"
                    >
                      <span>Get Directions</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

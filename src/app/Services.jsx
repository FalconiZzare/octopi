"use client";

import Section from "@/components/Section";
import Heading from "@/components/Heading";
import { service1, service2, service3, check } from "@/assets";
import { technologyServices, professionalServices, managedServices } from "@/constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage
} from "@/components/design/Services";
import Image from "next/image";

import Generating from "@/components/Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Secure your business with Octopi."
          text="Safeguard your data and information through advanced cybersecurity practices, ensuring the highest level of protection against potential threats."
        />

        <div className="relative">
          <div className="relative z-1 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-[46rem]">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-full md:w-3/5 xl:w-auto">
              <Image
                className="h-full w-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 ml-auto max-w-[17rem]">
              <h4 className="h4 mb-4">Core Services</h4>
              <p className="body-2 mb-[3rem] text-n-3">Empowering Security in a Digital Frontier</p>
              <ul className="body-2">
                {professionalServices.map((item, index) => (
                  <li key={index} className="flex items-start border-t border-n-6 py-4">
                    <Image width={24} height={24} src={check} alt={"tick"} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/*<Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />*/}
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] overflow-hidden rounded-3xl border border-n-1/10">
              <div className="absolute inset-0">
                <Image
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
                <h4 className="h4 mb-4">Technology Services</h4>
                {/*<p className="body-2 mb-[3rem] text-n-3">*/}
                {/*  Automatically enhance your photos using our AI app&apos;s*/}
                {/*  photo editing feature. Try it now!*/}
                {/*</p>*/}
                <ul className="body-2 w-80">
                  {technologyServices.map((item, index) => (
                    <li key={index} className="flex items-start border-t border-n-6 py-4">
                      <Image width={24} height={24} src={check} alt={"tick"} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/*<PhotoChatMessage />*/}
            </div>

            <div className="overflow-hidden rounded-3xl bg-n-7 p-4 lg:min-h-[46rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="h4 mb-4">Managed Services</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world’s most powerful AI photo and video art generation engine. What will you
                  create?
                </p>

                <ul className="body-2">
                  {managedServices.map((item, index) => (
                    <li key={index} className="flex items-start border-t border-n-6 py-4">
                      <Image width={24} height={24} src={check} alt={"tick"} />
                      <p className="ml-4">{item}</p>
                    </li>
                  ))}
                </ul>

                {/*<ul className="flex items-center justify-between">*/}
                {/*  {brainwaveServicesIcons.map((item, index) => (*/}
                {/*    <li*/}
                {/*      key={index}*/}
                {/*      className={`rounded-2xl flex items-center justify-center ${*/}
                {/*        index === 2*/}
                {/*          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"*/}
                {/*          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"*/}
                {/*      }`}*/}
                {/*    >*/}
                {/*      <div*/}
                {/*        className={*/}
                {/*          index === 2*/}
                {/*            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"*/}
                {/*            : ""*/}
                {/*        }*/}
                {/*      >*/}
                {/*        <Image src={item} width={24} height={24} alt={item} />*/}
                {/*      </div>*/}
                {/*    </li>*/}
                {/*  ))}*/}
                {/*</ul>*/}
              </div>

              <div className="relative h-[20rem] overflow-hidden rounded-xl bg-n-8 md:h-[25rem]">
                <Image
                  src={service3}
                  className="h-full w-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                {/*<VideoChatMessage />*/}
                {/*<VideoBar />*/}
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;

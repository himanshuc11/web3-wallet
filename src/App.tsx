import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Menu, X, Play } from "lucide-react";

export default function SignupPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purple-900 via-gray-700 to-purple-800 text-white min-w-screen">
      <header className="bg-black bg-opacity-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Mint Easy</div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-purple-300">
              Home
            </a>
            <a href="#about" className="hover:text-purple-300">
              About
            </a>
            <a href="#faq" className="hover:text-purple-300">
              FAQ
            </a>
          </nav>
          <Button
            variant="ghost"
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-black bg-opacity-50 p-4">
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-white hover:text-purple-300">
                Home
              </a>
              <a href="#about" className="text-white hover:text-purple-300">
                About
              </a>
              <a href="#faq" className="text-white hover:text-purple-300">
                FAQ
              </a>
            </div>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Join the Web3 Revolution
            </h1>
            <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="p-8 rounded-lg">
                  <h2 className="text-2xl font-bold mb-6 text-white">
                    Join our waitlist.
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="email" className="text-gray-300">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="satoshi@gmail.com"
                        className="bg-gray-800 text-white"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                    >
                      Join Waitlist
                    </Button>
                  </form>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-8 text-center lg:text-left">
                  Discover Web3 with Us
                </h2>
                <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
                  {isVideoPlaying ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                      title="Web3 Explanation Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/placeholder.svg?height=480&width=640"
                        alt="Video thumbnail"
                        className="w-full h-full object-cover"
                      />
                      <Button
                        onClick={playVideo}
                        className="absolute bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4"
                        aria-label="Play video"
                      >
                        <Play className="w-8 h-8" />
                      </Button>
                    </div>
                  )}
                </div>
                <p className="mt-6 text-center">
                  Watch our explainer video to learn how Web3 is revolutionizing
                  the internet and how you can be part of it.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">
              About Our Mint Easy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">
                  Decentralized Infrastructure
                </h3>
                <p className="text-gray-300">
                  We're building the foundation for a truly decentralized
                  internet, empowering users with control over their data and
                  digital identities.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">
                  Smart Contract Innovation
                </h3>
                <p className="text-gray-300">
                  Our team is at the forefront of smart contract development,
                  creating secure and efficient solutions for decentralized
                  applications.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">
                  Community-Driven Governance
                </h3>
                <p className="text-gray-300">
                  We believe in the power of community. Our platform is governed
                  by token holders, ensuring a fair and transparent
                  decision-making process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">
            How it works for a
          </h2>
          <div className="container flex flex-1 justify-center px-4">
            <Tabs defaultValue="buyer" className="w-1/2">
              <TabsList className="w-full">
                <TabsTrigger value="buyer" className="w-1/2">
                  Buyer
                </TabsTrigger>
                <TabsTrigger value="seller" className="w-1/2">
                  Seller
                </TabsTrigger>
              </TabsList>
              <TabsContent value="buyer">
                <section id="faq" className="py-3">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                      Frequently Asked Questions for a buyer
                    </h2>
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full max-w-2xl mx-auto"
                    >
                      <AccordionItem
                        value="item-1"
                        className="bg-white bg-opacity-10 backdrop-blur-md mb-2 rounded-lg"
                      >
                        <AccordionTrigger className="text-purple-300 hover:text-purple-200 px-4">
                          What is Web3?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 px-4 pb-4">
                          Web3 refers to the next generation of the internet,
                          built on decentralized networks using blockchain
                          technology. It aims to create a more open, trustless,
                          and permissionless web.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="item-2"
                        className="bg-white bg-opacity-10 backdrop-blur-md mb-2 rounded-lg"
                      >
                        <AccordionTrigger className="text-purple-300 hover:text-purple-200 px-4">
                          How do I get started with your platform?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 px-4 pb-4">
                          To get started, simply sign up for an account using
                          the form above. Once registered, you'll have access to
                          our suite of Web3 tools and services.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="item-3"
                        className="bg-white bg-opacity-10 backdrop-blur-md mb-2 rounded-lg"
                      >
                        <AccordionTrigger className="text-purple-300 hover:text-purple-200 px-4">
                          Do I need to own cryptocurrency to use your services?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 px-4 pb-4">
                          While some of our advanced features may require
                          cryptocurrency for transactions, many of our basic
                          services can be used without owning any crypto. We're
                          working on making Web3 accessible to everyone.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="item-4"
                        className="bg-white bg-opacity-10 backdrop-blur-md mb-2 rounded-lg"
                      >
                        <AccordionTrigger className="text-purple-300 hover:text-purple-200 px-4">
                          How does your platform ensure security?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 px-4 pb-4">
                          We employ state-of-the-art encryption and security
                          measures, including decentralized storage and
                          multi-factor authentication. Our smart contracts are
                          regularly audited by third-party security firms.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </section>
              </TabsContent>
              <TabsContent value="seller">
                <section id="faq" className="py-3">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">
                      Frequently Asked Questions for a seller
                    </h2>
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full max-w-2xl mx-auto"
                    >
                      <AccordionItem
                        value="item-1"
                        className="bg-white bg-opacity-10 backdrop-blur-md mb-2 rounded-lg"
                      >
                        <AccordionTrigger className="text-purple-300 hover:text-purple-200 px-4">
                          What is Web3?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 px-4 pb-4">
                          Web3 refers to the next generation of the internet,
                          built on decentralized networks using blockchain
                          technology. It aims to create a more open, trustless,
                          and permissionless web.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="item-2"
                        className="bg-white bg-opacity-10 backdrop-blur-md mb-2 rounded-lg"
                      >
                        <AccordionTrigger className="text-purple-300 hover:text-purple-200 px-4">
                          How do I get started with your platform?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 px-4 pb-4">
                          To get started, simply sign up for an account using
                          the form above. Once registered, you'll have access to
                          our suite of Web3 tools and services.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="item-3"
                        className="bg-white bg-opacity-10 backdrop-blur-md mb-2 rounded-lg"
                      >
                        <AccordionTrigger className="text-purple-300 hover:text-purple-200 px-4">
                          Do I need to own cryptocurrency to use your services?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 px-4 pb-4">
                          While some of our advanced features may require
                          cryptocurrency for transactions, many of our basic
                          services can be used without owning any crypto. We're
                          working on making Web3 accessible to everyone.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem
                        value="item-4"
                        className="bg-white bg-opacity-10 backdrop-blur-md mb-2 rounded-lg"
                      >
                        <AccordionTrigger className="text-purple-300 hover:text-purple-200 px-4">
                          How does your platform ensure security?
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 px-4 pb-4">
                          We employ state-of-the-art encryption and security
                          measures, including decentralized storage and
                          multi-factor authentication. Our smart contracts are
                          regularly audited by third-party security firms.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </section>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <footer className="bg-black bg-opacity-50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm mb-4 md:mb-0 text-gray-300">
              © 2024 Mint Easy. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-purple-300">
                Terms
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-300">
                Privacy
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

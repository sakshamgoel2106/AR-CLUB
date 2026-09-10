"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter, Mail } from "lucide-react"

function Footerdemo() {
  return (
    <footer className="relative border-t border-white/10 bg-transparent text-[var(--text-100)] transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8 relative z-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">AR CLUB</h2>
            <p className="mb-6 text-[var(--text-300)]">
              Join our newsletter for the latest updates on Hackathons and exclusive tech events.
            </p>
            <form className="relative" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm bg-white/5 border-white/10 text-white placeholder-[var(--text-400)] focus-visible:ring-white/30"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-white text-black transition-transform hover:scale-105 hover:bg-white/90"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <nav className="space-y-2 text-sm text-[var(--text-300)]">
              <a href="#manifesto" className="block transition-colors hover:text-white">
                Manifesto
              </a>
              <a href="#capabilities" className="block transition-colors hover:text-white">
                Capabilities
              </a>
              <a href="#team" className="block transition-colors hover:text-white">
                Team
              </a>
              <a href="#events" className="block transition-colors hover:text-white">
                Events
              </a>
              <a href="#gallery" className="block transition-colors hover:text-white">
                Gallery
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-[var(--text-300)]">
              <p>IT-117 JMIT Radaur</p>
              <p>Haryana, India</p>
              <p>Email: arclub@jmit.ac.in</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 bg-transparent text-white hover:bg-white/10" onClick={() => window.location.href='mailto:arclub@jmit.ac.in'}>
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white text-black border-none">
                    <p>Contact via Email</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 bg-transparent text-white hover:bg-white/10" onClick={() => window.open('https://x.com/arclub_tech21', '_blank')}>
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white text-black border-none">
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 bg-transparent text-white hover:bg-white/10" onClick={() => window.open('https://www.instagram.com/arclub_tech/', '_blank')}>
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white text-black border-none">
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="rounded-full border-white/10 bg-transparent text-white hover:bg-white/10" onClick={() => window.open('https://www.linkedin.com/company/ar-club-jmit', '_blank')}>
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white text-black border-none">
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center md:flex-row">
          <p className="text-sm text-[var(--text-300)]">
            © {new Date().getFullYear()} AR CLUB. All rights reserved. v4.1.0
          </p>
          <nav className="flex gap-4 text-sm text-[var(--text-300)]">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }

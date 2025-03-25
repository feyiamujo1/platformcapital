import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="mb-4">
              <img src="/images/platform-capital-logo.png" alt="Platform Capital" className="h-8 mb-4" />
            </div>
            <p className="text-muted-foreground mb-4">
              Africa's Largest Glo-Cal Investment Firm. Transforming Businesses, Shaping the Future.
            </p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/investments" className="text-muted-foreground hover:text-primary">
                  Investments
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-muted-foreground hover:text-primary">
                  Impact Initiatives
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-muted-foreground hover:text-primary">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Initiatives</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/unicorn-group" className="text-muted-foreground hover:text-primary">
                  Unicorn Group
                </Link>
              </li>
              <li>
                <Link href="/diatom-impact" className="text-muted-foreground hover:text-primary">
                  Diatom Impact
                </Link>
              </li>
              <li>
                <Link href="/africa-walk" className="text-muted-foreground hover:text-primary">
                  Africa Walk Conference
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-muted-foreground">
              <p className="mb-2">Lagos, Nigeria</p>
              <p className="mb-2">Email: info@platformcapital.com</p>
              <p>Phone: +234 123 456 7890</p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Platform Capital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


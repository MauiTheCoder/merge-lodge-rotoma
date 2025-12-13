"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-sky-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sky-900">Merge Lodge</h1>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-sky-900 hover:text-sky-600 transition-colors">About</a>
            <a href="#features" className="text-sky-900 hover:text-sky-600 transition-colors">Features</a>
            <a href="#gallery" className="text-sky-900 hover:text-sky-600 transition-colors">Gallery</a>
            <a href="#location" className="text-sky-900 hover:text-sky-600 transition-colors">Location</a>
          </div>
          <div className="md:hidden flex gap-4 text-sm">
            <a href="#about" className="text-sky-900 hover:text-sky-600 transition-colors">About</a>
            <a href="#features" className="text-sky-900 hover:text-sky-600 transition-colors">Features</a>
            <a href="#gallery" className="text-sky-900 hover:text-sky-600 transition-colors">Gallery</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/optimized/Merge%20Lodge.webp"
            alt="Lake Rotoma view with caravans"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Merge Lodge
          </h1>
          <p className="text-xl md:text-2xl mb-4 drop-shadow-md">
            The Beacon of Summer Memories
          </p>
          <p className="text-lg md:text-xl mb-8 drop-shadow-md max-w-2xl mx-auto">
            A permanent caravan camping site at beautiful Lake Rotoma
          </p>
          <Button
            size="lg"
            className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-6 text-lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Discover More
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-sky-900">
            He aha te Merge Lodge?
          </h2>
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 leading-relaxed">
              Merge Lodge is a permanent caravan camping site located in Rotoma on the main highway
              between Rotorua and Kawerau. Situated at the stunning Lake Rotoma, we are the beacon
              of summer memories for families and friends seeking the perfect lakeside getaway.
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/optimized/Lake%20beach%20zoomed%20out.webp"
              alt="Beautiful Lake Rotoma beach"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-sky-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-sky-900">
            Why Choose Merge Lodge?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white hover:shadow-xl transition-shadow border-sky-100">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="text-2xl font-semibold mb-3 text-sky-900">Lakeside Location</h3>
              <p className="text-gray-600">
                Direct access to the pristine waters of Lake Rotoma, perfect for swimming,
                boating, and fishing.
              </p>
            </Card>

            <Card className="p-8 bg-white hover:shadow-xl transition-shadow border-sky-100">
              <div className="text-4xl mb-4">🚐</div>
              <h3 className="text-2xl font-semibold mb-3 text-sky-900">Permanent Sites</h3>
              <p className="text-gray-600">
                Secure permanent caravan sites that become your home away from home,
                season after season.
              </p>
            </Card>

            <Card className="p-8 bg-white hover:shadow-xl transition-shadow border-sky-100">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-2xl font-semibold mb-3 text-sky-900">Prime Location</h3>
              <p className="text-gray-600">
                Conveniently located on the main highway between Rotorua and Kawerau,
                with easy access to amenities.
              </p>
            </Card>

            <Card className="p-8 bg-white hover:shadow-xl transition-shadow border-sky-100">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-2xl font-semibold mb-3 text-sky-900">Summer Paradise</h3>
              <p className="text-gray-600">
                Create lasting memories with family and friends in New Zealand's
                most beautiful summer destination.
              </p>
            </Card>

            <Card className="p-8 bg-white hover:shadow-xl transition-shadow border-sky-100">
              <div className="text-4xl mb-4">⛺</div>
              <h3 className="text-2xl font-semibold mb-3 text-sky-900">Camping Community</h3>
              <p className="text-gray-600">
                Join a welcoming community of camping enthusiasts who return
                year after year.
              </p>
            </Card>

            <Card className="p-8 bg-white hover:shadow-xl transition-shadow border-sky-100">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="text-2xl font-semibold mb-3 text-sky-900">Water Activities</h3>
              <p className="text-gray-600">
                Enjoy kayaking, paddleboarding, jet skiing, and other water sports
                right at your doorstep.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-sky-900">
            Experience Lake Rotoma
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "/optimized/Merge%20Lodge.webp",
              "/optimized/Lake%20beach%20zoomed%20out.webp",
              "/optimized/Front%20camping%20sites.webp",
              "/optimized/Shops%20zoomed%20out.webp",
              "/optimized/Sunset%20across%20the%20lake%20.webp",
              "/optimized/Pinic%20table%20area.webp",
              "/optimized/Boat%20ramp.webp",
              "/optimized/Campers%20area.webp",
              "/optimized/Campsite%20and%20lake%20from%20top%20house.webp",
              "/optimized/Campsite%20entrance.webp",
              "/optimized/Lake%20meets%20the%20wall.webp",
              "/optimized/Lake%20beach%20zoomed%20in.webp",
              "/optimized/Shops%20zoomed%20in.webp",
            ].map((src) => (
              <div key={src} className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <Image
                  src={src}
                  alt={(src.split('/').pop() ?? "").replace(/%20/g, ' ').replace('.webp','')}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 px-4 bg-sky-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Visit Merge Lodge
          </h2>
          <p className="text-xl mb-6">
            Located in Rotoma, on the main highway between Rotorua and Kawerau
          </p>
          <p className="text-lg mb-8 text-sky-100">
            Lake Rotoma, Bay of Plenty, New Zealand
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-sky-900 hover:bg-sky-50 px-8 py-6 text-lg"
            >
              <a href="mailto:calfgirl10@gmail.com" aria-label="Contact Merge Lodge by email">Contact Us</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              <a
                href="https://www.google.com/maps/place/Lake+Rotoma+Gas+(BP)/@-38.0524041,176.5710452,20z/data=!3m1!5s0x6d6e8cd77bcde3ab:0x98d852a1ff937eba!4m9!1m2!2m1!1slake+rotoma!3m5!1s0x6d6e9d882ad7e3eb:0x6d5fc37752aea8f!8m2!3d-38.0525253!4d176.570714!16s%2Fg%2F1pycbyh6n?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2N0gBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Lake Rotoma location in Google Maps"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-sky-950 text-sky-200 text-center">
        <p>&copy; 2025 Merge Lodge. All rights reserved.</p>
        <p className="mt-2 text-sm">The Beacon of Summer Memories at Lake Rotoma</p>
      </footer>
    </div>
  );
}

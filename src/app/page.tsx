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
            <a href="#accommodation" className="text-sky-900 hover:text-sky-600 transition-colors">Accommodation</a>
            <a href="#gallery" className="text-sky-900 hover:text-sky-600 transition-colors">Gallery</a>
            <a href="#location" className="text-sky-900 hover:text-sky-600 transition-colors">Location</a>
          </div>
          <div className="md:hidden flex gap-4 text-sm">
            <a href="#about" className="text-sky-900 hover:text-sky-600 transition-colors">About</a>
            <a href="#accommodation" className="text-sky-900 hover:text-sky-600 transition-colors">Stay</a>
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

      {/* Accommodation Section */}
      <section id="accommodation" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-sky-900">
            Accommodation at Merge Lodge
          </h2>
          <p className="text-center text-xl text-gray-600 mb-2 max-w-3xl mx-auto">
            Located just up the road from the camping ground, we offer a range of accommodation options to suit every visitor.
          </p>
          <p className="text-center text-sky-700 font-medium mb-16">
            Contact us to check availability and pricing
          </p>

          {/* Lake Houses */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-10 text-sky-900">
              🏠 Lake Houses for Rent
            </h3>
            <div className="grid md:grid-cols-2 gap-8">

              {/* House 1 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-sky-100">
                {/* Main photo */}
                <div className="relative h-56">
                  <Image
                    src="/lake-house-1-a.jpg"
                    alt="Lake House 1 — glass veranda"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Thumbnail strip */}
                <div className="grid grid-cols-3 gap-0.5">
                  <div className="relative h-28">
                    <Image src="/lake-house-1-b.jpg" alt="Lake House 1 exterior" fill className="object-cover" />
                  </div>
                  <div className="relative h-28">
                    <Image src="/lake-house-1-c.jpg" alt="Lake House 1 kitchen" fill className="object-cover" />
                  </div>
                  <div className="relative h-28">
                    <Image src="/lake-house-1-d.jpg" alt="Lake House 1 living room" fill className="object-cover" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2 text-sky-900">Lake House 1</h4>
                  <p className="text-gray-600 mb-5">
                    A beautifully appointed 2 bedroomlake house featuring a stunning enclosed veranda, modern kitchen with island bench, and spacious open-plan living with timber-painted floors, perfect for families or groups.
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-gray-500 mb-6">
                    <li>✓ Enclosed veranda with outdoor seating</li>
                    <li>✓ Modern kitchen, fully equipped</li>
                    <li>✓ Spacious lounge with large TV</li>
                    <li>✓ Just up the road from the camping ground</li>
                  </ul>
                  <Button asChild className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                    <a href="mailto:calfgirl10@gmail.com?subject=Lake%20House%201%20Enquiry">Enquire Now</a>
                  </Button>
                </div>
              </Card>

              {/* House 2 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-sky-100">
                {/* Main photo */}
                <div className="relative h-56">
                  <Image
                    src="/lake-house-2-a.jpg"
                    alt="Lake House 2 — bedroom"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Thumbnail strip */}
                <div className="grid grid-cols-3 gap-0.5">
                  <div className="relative h-28">
                    <Image src="/lake-house-2-b.jpg" alt="Lake House 2 outdoor dining" fill className="object-cover" />
                  </div>
                  <div className="relative h-28">
                    <Image src="/lake-house-2-c.jpg" alt="Lake House 2 kitchen" fill className="object-cover" />
                  </div>
                  <div className="relative h-28">
                    <Image src="/lake-house-2-d.jpg" alt="Lake House 2 lounge" fill className="object-cover" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-2 text-sky-900">Lake House 2</h4>
                  <p className="text-gray-600 mb-5">
                    A comfortable and well-equipped 2 bedroom holiday home with a relaxed lounge, fully equipped kitchen, cosy bedroom, and a sunny outdoor dining area — ideal for a quiet lakeside escape.
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-gray-500 mb-6">
                    <li>✓ Fully equipped kitchen</li>
                    <li>✓ Comfortable lounge & bedroom</li>
                    <li>✓ Sunny outdoor dining area</li>
                    <li>✓ Just up the road from the camping ground</li>
                  </ul>
                  <Button asChild className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                    <a href="mailto:calfgirl10@gmail.com?subject=Lake%20House%202%20Enquiry">Enquire Now</a>
                  </Button>
                </div>
              </Card>
            </div>
          </div>

          {/* Caravan Plots */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-10 text-sky-900">
              🚐 Caravan Plots
            </h3>
            <div className="grid md:grid-cols-2 gap-8">

              {/* Nightly Caravan Plots */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-sky-100 flex flex-col">
                <div className="bg-sky-50 flex-1 p-8 text-center flex flex-col justify-between">
                  <div>
                    <div className="text-6xl mb-4">🌙</div>
                    <h4 className="text-2xl font-semibold mb-3 text-sky-900">Nightly Caravan Plots</h4>
                    <p className="text-gray-600 mb-6">
                      Bring your own caravan and settle in for the night — or longer. Plots are available per night and sit within easy reach of the lake and all facilities.
                    </p>
                    <ul className="flex flex-col gap-2 text-sm text-gray-500 text-left mb-8 pl-4">
                      <li>✓ Multiple plots available</li>
                      <li>✓ Priced per night</li>
                      <li>✓ Close to lake access and facilities</li>
                      <li>✓ Relaxed community atmosphere</li>
                    </ul>
                  </div>
                  <Button asChild className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                    <a href="mailto:calfgirl10@gmail.com?subject=Caravan%20Plot%20Enquiry">Check Availability</a>
                  </Button>
                </div>
              </Card>

              {/* Fully Furnished Caravan */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow border-sky-400 ring-2 ring-sky-400">
                <div className="bg-sky-600 text-white text-center py-2 text-sm font-semibold tracking-wider uppercase">
                  Fully Furnished — Arrive and Relax
                </div>
                {/* Two photos side by side */}
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="relative h-52">
                    <Image
                      src="/furnished-caravan-1.jpg"
                      alt="Furnished caravan — bunk beds"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-52">
                    <Image
                      src="/furnished-caravan-2.jpg"
                      alt="Furnished caravan — lounge area"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mb-3 text-sky-900">Furnished Caravan Plot</h4>
                  <p className="text-gray-600 mb-4">
                    Everything is set up and waiting. With a double bunk and a comfortable lounge area, the whole family can arrive with just a bag and start enjoying Lake Rotoma straight away.
                  </p>
                  <ul className="flex flex-col gap-2 text-sm text-gray-500 mb-6">
                    <li>✓ Double bunk bed — sleeps the whole family</li>
                    <li>✓ Comfortable lounge/sleeping area</li>
                    <li>✓ Fully furnished — no setup required</li>
                    <li>✓ Available per night</li>
                  </ul>
                  <Button asChild className="w-full bg-sky-600 hover:bg-sky-700 text-white">
                    <a href="mailto:calfgirl10@gmail.com?subject=Furnished%20Caravan%20Enquiry">Book Now</a>
                  </Button>
                </div>
              </Card>
            </div>
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

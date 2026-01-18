import Link from "next/link";
import Image from "next/image";
import Footer from "./components/Footer";
import ParallaxPhotoScroll from "./components/ParallaxPhotoScroll";
import ContactForm from "./components/ContactForm";
import { preparePhotosForCarousel } from "./lib/photos";
import { prepareActivityPhotos } from "./lib/activityPhotos";

export default function Home() {
  // All portfolio photos shuffled in random order
  const portfolioPhotos = preparePhotosForCarousel();

  // All activity photos shuffled
  const activityPhotos = prepareActivityPhotos();

  // Pedicab photos
  const pedicabPhotos = [
    "/photos/projects/pedicab/E852893D-03C3-4371-96D9-2BCDD91D6907_1_105_c.jpeg",
    "/photos/projects/pedicab/5BFA921F-2D1F-42A8-BE78-4C792BF6AD74_1_105_c.jpeg",
    "/photos/projects/pedicab/CFB2DC2E-187D-464B-B907-5E9A32E13D8D_1_105_c.jpeg",
    "/photos/projects/pedicab/A96CFD93-7D63-4A40-9C2A-8C6E42382214_1_105_c.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:col-span-2 xl:col-auto">
              Technical Account Manager & Infrastructure Engineer
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Enterprise technology advisor with 15+ years managing complex hybrid infrastructures for Fortune 500 companies and global SaaS platforms.
                Now building modern applications with AI tools to bridge infrastructure expertise with software development.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://github.com/BigBirbI-10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md bg-zinc-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-zinc-700 transition-colors dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  View GitHub
                </a>
                <a href="https://www.linkedin.com/in/michaelhaertel/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors">
                  LinkedIn <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-10 aspect-[6/5] w-full max-w-lg sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36">
              <Image
                src="/photos/headshot.jpg"
                alt="Michael Haertel in Barcelona"
                width={800}
                height={667}
                className="rounded-2xl object-cover w-full h-full bg-zinc-200 dark:bg-zinc-800 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Status Badge */}
      <section className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="flex items-center justify-center gap-x-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Available for Technical Account Manager, DevOps, or Solutions Architect roles
            </p>
          </div>
        </div>
      </section>

      {/* Story Introduction */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl mb-8">
              A Career Built on Understanding Systems — and People
            </h2>
            <div className="prose prose-lg prose-zinc dark:prose-invert max-w-none space-y-6">
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                I entered the hosting world in 2009, after several years working hands-on with hardware in a local computer shop and in laptop repair at Jabil Circuit.
                I enjoyed fixing things properly, but I wanted to work on larger systems — infrastructure that supported real businesses at scale.
              </p>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
                Learning Infrastructure the Hard Way (2009–2012)
              </h3>
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                I started at Hostway on July 1, 2009, during a period when infrastructure was still very physical and deeply hands-on. As a NOC technician,
                I was responsible for building, imaging, and racking servers—primarily Dell PowerEdge hardware—along with supporting Cisco ASAs, Fortinet and BSD firewalls,
                and Linux-based iptables shared firewalls. Within six months I was promoted to L2 Support, taking on customer-facing tickets and support calls while continuing
                to work regularly in the data center. Hostway emphasized root-cause resolution and long-term stability, and that mindset shaped how I still approach systems today:
                understand how things fail, then design them so they don't fail again.
              </p>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
                Exposure to Scale and Cloud (2012–2014)
              </h3>
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                At HostGator, I was exposed to hosting at massive scale—supporting high-volume environments with millions of domains. At Datapipe, where I worked as a Unix System Administrator,
                I gained early exposure to hybrid cloud architectures and AWS-adjacent infrastructure. Together, these experiences clarified what I enjoyed most: environments where deep technical understanding,
                customer trust, and thoughtful design all mattered.
              </p>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
                Returning as a Technical Account Manager (2015–2023)
              </h3>
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                In January 2015, I returned to Hostway—later Ntirety—as a Technical Account Manager. This role brought everything together. As a TAM, I served as the bridge between clients
                and engineering teams, helping organizations operate, scale, and modernize complex infrastructure. I worked closely with large customers, including Wix, and traveled internationally
                to support client relationships, including multiple trips to Israel and visits to teams and customers across the U.S. and Europe. I became known for handling complex environments
                and high-stakes situations calmly and thoroughly. By early 2023, after many years of continuous on-call work, I was ready for a reset.
              </p>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
                A Deliberate Reset and Reinvestment (2023–Present)
              </h3>
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                In February 2023, I stepped away from full-time employment and intentionally took time to recalibrate—something I hadn't done since I was a teenager.
                This period has been active and purposeful, not idle. I focused on personal resilience and performance, improved my physical health through cycling, and invested heavily
                in community involvement and leadership. Professionally, I returned to technology on my own terms—building cloud-native applications, exploring AI tools, and re-engaging
                with the security community.
              </p>

              <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mt-12 mb-4">
                Where I'm Headed
              </h3>
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                I'm now looking to return to a Remote Technical Account Manager role. I bring more than 15 years of perspective across legacy infrastructure, cloud transitions,
                and client-facing technical leadership. I understand how systems used to be built, how they fail, and how modern, cloud-native architectures can be designed to avoid those failures altogether.
                Most importantly, I'm calm under pressure, clear with clients, and effective at translating complexity into confidence. That's the value I'm ready to bring to my next team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What I've Been Up To */}
      <section className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              What I've Been Up To
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Community leadership, entrepreneurship, cycling, side hustles, and experimenting with AI tools every single day.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">

            {/* AI Experimentation - MOST IMPORTANT */}
            <article className="flex flex-col items-start">
              <div className="max-w-xl">
                <div className="flex items-center gap-x-4 text-xs flex-wrap mb-4">
                  <span className="relative z-10 rounded-full bg-purple-50 dark:bg-purple-900/30 px-3 py-1.5 font-medium text-purple-600 dark:text-purple-400">
                    AI Tools
                  </span>
                  <span className="relative z-10 rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 font-medium text-blue-600 dark:text-blue-400">
                    Experimentation
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
                  Experimentally Building with AI Tools Every Day
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  This is where I spend most of my technical time: pushing AI coding tools to their limits. ChatGPT, Gemini, Claude, Cursor, Antigravity, Claude Code, MCP Servers.
                  Running local models on Nvidia Jetson Nano with ollama, programmatic LLM data enrichment via Google AI Studio.
                  Learning what these tools can actually do—and where they break. This website, FareScout, and countless experiments are all built this way.
                </p>
              </div>
            </article>

            {/* Entrepreneurship */}
            <article className="flex flex-col items-start">
              <div className="max-w-xl">
                <div className="flex items-center gap-x-4 text-xs flex-wrap mb-4">
                  <span className="relative z-10 rounded-full bg-green-50 dark:bg-green-900/30 px-3 py-1.5 font-medium text-green-600 dark:text-green-400">
                    Entrepreneurship
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
                  Small Business Founder
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  <strong className="text-zinc-900 dark:text-zinc-50"><a href="https://farescout.app" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600 dark:hover:text-zinc-300">FareScout.App</a></strong> — Production SaaS helping pedicab drivers find events up to 6 months in advance. Next.js, TypeScript, PostgreSQL on GCP.
                  <br/><br/>
                  <strong className="text-zinc-900 dark:text-zinc-50">Moonshine Lube Co.</strong> — Personal lubricant business. Learning polymer science, product development, Shopify, and e-commerce operations.
                  Domains on AWS, email on Google Workspace.
                </p>
              </div>
            </article>

            {/* Side Hustles */}
            <article className="flex flex-col items-start">
              <div className="max-w-xl">
                <div className="flex items-center gap-x-4 text-xs flex-wrap mb-4">
                  <span className="relative z-10 rounded-full bg-yellow-50 dark:bg-yellow-900/30 px-3 py-1.5 font-medium text-yellow-600 dark:text-yellow-400">
                    Side Hustles
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
                  Embracing the Side Hustle
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  <strong>Pedicabbing</strong> since August 2023—Austin, Chicago, major festivals. Fast sales cycles, high-pressure logistics, customer service under time constraints.
                  <br/><br/>
                  <strong>Flipping cars and server electronics</strong> — Buying, fixing, selling. Understanding market dynamics and arbitrage opportunities.
                  <br/><br/>
                  <strong>Managing investment portfolio</strong> — Dabbling in day trading, selling options, learning capital markets firsthand.
                </p>
              </div>
            </article>

            {/* Volunteer Work & Community Leadership */}
            <article className="flex flex-col items-start">
              <div className="max-w-xl">
                <div className="flex items-center gap-x-4 text-xs flex-wrap mb-4">
                  <span className="relative z-10 rounded-full bg-pink-50 dark:bg-pink-900/30 px-3 py-1.5 font-medium text-pink-600 dark:text-pink-400">
                    Community Leadership
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
                  Volunteer Work & Event Production
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  <strong>Queer Bomb Staff</strong> — Event production and logistics for Austin's radical queer visibility march.
                  <br/><br/>
                  <strong>Flipside Effigy Build Team (DaFT)</strong> — Design and fabrication of large-scale art installations for regional Burning Man event.
                  <br/><br/>
                  <strong>Austin Rubber Roundup Staff (ARR)</strong> — Organizing leather/kink community events.
                  <br/><br/>
                  <strong>Burner Ranger training</strong> — Earned Stop the Bleed certification. Community safety and emergency response.
                </p>
              </div>
            </article>

            {/* Cycling */}
            <article className="flex flex-col items-start">
              <div className="max-w-xl">
                <div className="flex items-center gap-x-4 text-xs flex-wrap mb-4">
                  <span className="relative z-10 rounded-full bg-orange-50 dark:bg-orange-900/30 px-3 py-1.5 font-medium text-orange-600 dark:text-orange-400">
                    Cycling
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
                  Cycling & Community Rides
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  Active with <strong>Social Cycling Austin</strong> and <strong>Bat City Cycling</strong>.
                  <br/><br/>
                  Participated in <strong>Hill Country Ride for AIDS</strong> fundraiser.
                  <br/><br/>
                  Cycling has been central to my physical and mental reset—building endurance, connecting with community, and exploring Austin's infrastructure from a different perspective.
                </p>
              </div>
            </article>

            {/* Security Research */}
            <article className="flex flex-col items-start">
              <div className="max-w-xl">
                <div className="flex items-center gap-x-4 text-xs flex-wrap mb-4">
                  <span className="relative z-10 rounded-full bg-red-50 dark:bg-red-900/30 px-3 py-1.5 font-medium text-red-600 dark:text-red-400">
                    Security
                  </span>
                </div>
                <h3 className="text-xl font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
                  Security Research & Tools
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
                  <strong>DEF CON 33 attendee</strong> — Helped Hak5 at the conference.
                  <br/><br/>
                  Built open-source tools for <strong>Hak5 WiFi Pineapple Pager</strong>: BLE scanner and wardriving data uploader.
                  <br/><br/>
                  Experimenting with <strong>Meshtastic</strong> mesh networking. Understanding offensive security from an infrastructure defense perspective.
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <a href="https://wigle.net" target="_blank" rel="noopener noreferrer">
                    <img src="https://wigle.net/bi/mHmJVGnV2D9QUJ3QHuNQ4w.png" alt="WiGLE.net wardriving stats" className="h-8" />
                  </a>
                  <a
                    href="https://github.com/BigBirbI-10/hak5-pager-ble-scanner"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                  >
                    View on GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </article>

          </div>

          {/* Activity Photo Parallax Scroll */}
          <div className="mt-24">
            <ParallaxPhotoScroll photos={activityPhotos} />
          </div>
        </div>
      </section>

      {/* Photography Portfolio with Parallax Scroll */}
      <section className="py-24 sm:py-32 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Photography
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Here are a few favorites from my travels and adventures.
            </p>
          </div>
          <ParallaxPhotoScroll photos={portfolioPhotos} />
        </div>
      </section>

      {/* Professional Experience - Full Resume */}
      <section className="py-24 sm:py-32 bg-zinc-50 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Professional Experience
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Enterprise technology advisor with deep hands-on experience from data center operations through hybrid cloud management.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-3xl lg:mx-0 lg:max-w-none">

            {/* Professional Summary */}
            <div className="mb-12 p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">Professional Summary</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-7">
                Enterprise technology advisor with 15+ years of experience across managed service providers. Proven expertise in technical account management,
                enterprise architecture design, cloud migrations, and disaster recovery planning. Deep hands-on experience from data center operations through
                hybrid cloud management, supporting diverse clients from high-growth technology companies to global enterprises with complex multi-tenant infrastructures.
                Maintained technical currency through personal infrastructure projects and modern application development.
              </p>
            </div>

            <div className="space-y-12">

              {/* Current Projects */}
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Career Break & Personal Projects
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  February 2023 – Present
                </p>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400 italic">
                  Intentional career break while pursuing personal projects and entrepreneurial ventures.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Developed <a href="https://farescout.app" className="text-zinc-900 dark:text-zinc-50 hover:text-zinc-600 dark:hover:text-zinc-300 font-semibold">cloud-native web application (FareScout.App)</a> deployed on Google Cloud Platform using Next.js, TypeScript, and PostgreSQL</li>
                  <li>• Implemented containerized deployment pipeline from local development (Docker Desktop) through test environment (Docker on Proxmox-hosted Linux VM) to production (GCP Cloud Run)</li>
                  <li>• Built data processing pipeline integrating multiple third-party APIs with LLM-based enrichment and payment processing (Stripe)</li>
                  <li>• Deployed Proxmox-based home lab environment with TrueNAS storage management, Home Assistant automation, and NVIDIA Jetson Nano running Ollama for local LLMs</li>
                  <li>• Leveraged AI coding tools (Claude, Cursor, Antigravity) for rapid application development</li>
                  <li>• Active pedicab driver since August 2023 across Austin, Chicago, and major events—intensive real-world sales training</li>
                </ul>
              </div>

              {/* Ntirety */}
              <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Senior Technical Account Manager
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  Ntirety (formerly Hostway) | January 2015 – February 2023 | 8 years
                </p>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Technical SME and escalation contact for Ntirety's largest enterprise and managed services clients with the most complex environments,
                  custom support scopes, and unique infrastructure requirements. Led architecture design, disaster recovery planning, infrastructure management,
                  and support enablement while building strong client relationships.
                </p>
                <h4 className="mt-6 font-semibold text-zinc-900 dark:text-zinc-50">Key Achievements:</h4>
                <ul className="mt-2 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Built and led the Technical Account Manager team from inception, growing it into a full engagement services department</li>
                  <li>• Managed strategic relationships with enterprise clients across financial services, technology, sports/outdoor, and media industries with complex hybrid infrastructure requirements</li>
                  <li>• Supported global SaaS platforms serving 200M+ users, Fortune 500 retailers processing billions in transactions, and top-10 U.S. REITs managing 100K+ residential units</li>
                  <li>• Designed and orchestrated complex infrastructure migrations including on-premises to public cloud, data center relocations, and platform modernizations</li>
                  <li>• Partnered with sales, solutions engineering, and product teams to align service offerings with enterprise client requirements</li>
                  <li>• Managed offshore technical resources and coordinated cross-functional teams for large-scale projects</li>
                  <li>• Reduced client escalations by 40% through proactive infrastructure reviews and architecture optimization</li>
                  <li>• Maintained infrastructure during Hurricane Florence viral livestream event (2018) - millions of concurrent viewers with zero downtime</li>
                </ul>
                <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                  <strong>Environment Expertise:</strong> On-premises data centers, dedicated servers, VPS, VDI, shared and dedicated private clouds,
                  hybrid environments, AWS/Azure/GCP public cloud, VMware, Nutanix, VxRail, HyperV
                </p>
              </div>

              {/* Datapipe */}
              <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Unix Administrator
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  Datapipe | May 2013 – January 2015 | 1.5 years
                </p>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Provided technical support and configuration management of fully managed, enterprise hybrid infrastructure for Fortune 500 clients
                  during the early adoption phase of hybrid cloud architecture. Worked as part of a major AWS partnership with multiple 10GbE connections
                  to AWS US-East data centers, managing complex environments that bridged traditional enterprise infrastructure with cloud-native applications.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Managed hybrid environments combining large-scale database servers on robust SAN infrastructure with cloud-native applications running on AWS</li>
                  <li>• Administered enterprise-grade storage systems including multi-tier, multi-tenant SAN via fiber channel and MPIO</li>
                  <li>• Configured and maintained AWS services (EC2, S3, DirectConnect) integrated with on-premises Datapipe Private Cloud infrastructure</li>
                  <li>• Supported Fortune 500 clients transitioning from traditional data center models to hybrid cloud architectures before "hybrid cloud" became industry standard</li>
                </ul>
              </div>

              {/* HostGator */}
              <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Linux Administrator
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  HostGator | March 2012 – May 2013 | 1 year
                </p>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Provided technical support for large-scale shared hosting platform serving millions of domains across thousands of Linux servers.
                  Gained extensive experience supporting cPanel and Plesk control panels and managing break-fix issues at massive scale.
                </p>
              </div>

              {/* Hostway */}
              <div className="border-l-4 border-zinc-300 dark:border-zinc-700 pl-6">
                <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Systems Administrator (Level 2)
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 font-medium">
                  Hostway | June 2009 – March 2012 | 3 years
                </p>
                <p className="mt-4 text-zinc-600 dark:text-zinc-400">
                  Started as NOC Technician performing server builds, rack and stack deployment, and data center operations across SAS 70/SSAE 16 compliant facilities
                  in Austin, TX and Vancouver, Canada. Promoted to Level 2 Systems Administrator after six months.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <li>• Managed administration and break-fix support for 6,000+ dedicated servers supporting SMB custom enterprise deployments</li>
                  <li>• Configured customer environments including Cisco, Fortinet, and BSD firewalls, dedicated servers, private switching/VLANs, and storage systems (Dell DAS/NAS, NetApp)</li>
                  <li>• Supported Linux, Windows, and FreeBSD operating systems, Plesk and cPanel control panels, virtual private servers, cloud services, and R1Soft managed backups</li>
                  <li>• Conducted daily data center walkthroughs, monitoring infrastructure systems (HVAC, UPS, generators, network, security)</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="bg-white dark:bg-zinc-950 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Technical Expertise
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              From enterprise infrastructure to modern application development.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            <div className="flex flex-col gap-y-3 border-l border-zinc-300 dark:border-zinc-700 pl-6">
              <dt className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Cloud Platforms</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                AWS · GCP · Azure
              </dd>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Production deployments, migrations, hybrid infrastructure
              </p>
            </div>
            <div className="flex flex-col gap-y-3 border-l border-zinc-300 dark:border-zinc-700 pl-6">
              <dt className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Development</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                Next.js · TypeScript
              </dd>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Full-stack web applications, React, Node.js, PostgreSQL
              </p>
            </div>
            <div className="flex flex-col gap-y-3 border-l border-zinc-300 dark:border-zinc-700 pl-6">
              <dt className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Infrastructure</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                VMware · Docker
              </dd>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Virtualization, containers, networking, storage systems
              </p>
            </div>
            <div className="flex flex-col gap-y-3 border-l border-zinc-300 dark:border-zinc-700 pl-6">
              <dt className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">Experience</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
                15+ Years
              </dd>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Enterprise IT, managed services, technical account management
              </p>
            </div>
          </dl>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-zinc-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Let's Talk
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              Looking for a Technical Account Manager who understands both enterprise infrastructure and modern software development.
              Available for TAM, DevOps, or Solutions Architect roles where infrastructure expertise meets product delivery.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="https://github.com/BigBirbI-10" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
                GitHub <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="https://www.linkedin.com/in/michaelhaertel/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
                LinkedIn <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="https://farescout.app" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors">
                FareScout.App <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-form" className="py-24 sm:py-32 bg-white dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Let's Connect
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Interested in working together? Looking for a Technical Account Manager who bridges infrastructure and client relationships?
              I respond within 24-48 hours to legitimate inquiries.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mb-12">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/michaelhaertel/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-x-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-50 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    LinkedIn
                  </h3>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Professional inquiries
                  </p>
                </div>
                <svg className="h-5 w-5 text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Email Form Badge */}
              <div className="relative flex items-center gap-x-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 dark:bg-zinc-700">
                  <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold leading-7 text-zinc-900 dark:text-zinc-50">
                    Secure Email
                  </h3>
                  <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    Use form below
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 bg-white dark:bg-zinc-900">
              <ContactForm />
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                For privacy and security, I don't publish email addresses or phone numbers directly on this site.
                <br />
                Messages are delivered securely via email.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

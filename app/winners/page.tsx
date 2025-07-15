import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Trophy,
  Medal,
  Award,
  Github,
  Linkedin,
  Twitter,
  Users,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const presentWinners = [
  {
    name: "Itopa_",
    team: "Odeyiany Miriam Itopa",
    position: "1st Place",
    date: "April 2025",
    solution: "Air Quality Prediction from Low-Cost IoT devices",
    image: "https://i.ibb.co/BVHq57gv/Miriam-Itopa.jpg",
    links: {
        twitter: "https://x.com/miriamodeyiany?t=qgn_Jl9LcoTmO5ydy99kIA&s=09",
        linkedin:
          "https://www.linkedin.com/in/miriam-itopa-odeyiany-919787245",
      },
    },

  {
    name: "Zeee_ML",
    team: "Zainab Muhammad Tukur",
    position: "2nd Place",
    date: "April 2025",
    solution: "Air Quality Prediction from Low-Cost IoT devices",
    image: "https://i.ibb.co/m5MPMfcj/zainab-muhd-Tukur.jpg",
    links: {
      twitter: null,
      linkedin: "https://www.linkedin.com/in/zainab-muhd-tukur-2b09362a6",
    },
  },
  {
    name: "Ziggi",
    team: "Bello Abdulbasit Olayemi",
    position: "3rd Place",
    date: "April 2025",
    solution: "Air Quality Prediction from Low-Cost IoT devices",
    image:
      "https://i.ibb.co/yn6XQvnV/Abdulbasit-BELLO.png",
    links: {
      twitter: "https://x.com/Ziggiphase001?t=q_4ynZauEMujtgi4uzCMUg&s=09",
      linkedin: "https://www.linkedin.com/in/abdulbasit-bello-3a883b228/",
    },
  },
];

const winners = [
  {
    name: "DE-MODULATORS",
    team: ["EDIFON EMMANUEL JIMMY", "Yusuf Agboola Tajudeen"],
    position: "1st Place",
    date: "January 2025",
    solution: "Air Quality Prediction from Low-Cost IoT devices",
    image: [
      "https://i.ibb.co/v6Y2YHBB/Edifon-Jimmy.jpg",
      "https://i.ibb.co/R4V99tsJ/Agboola-yusuf.jpg",
    ],
    links: [
      {
        twitter: "https://x.com/youngboi_eddy?s=09",
        linkedin:
          "https://www.linkedin.com/in/edifon-jimmy-b4033b260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        twitter: "https://x.com/agboolayus93855",
        linkedin: "https://ng.linkedin.com/in/yusuf-tajudeen-b512b227b",
      },
    ],
  },
  {
    name: "Ifeoluwa Adewumi",
    team: "Ifeadewumi",
    position: "2nd Place",
    date: "January 2025",
    solution: "Air Quality Prediction from Low-Cost IoT devices",
    image: "https://i.ibb.co/wXPQHnv/Ifeoluwa-Adewumi.jpg",
    links: {
      twitter: "https://x.com/TheIfeAdewumi",
      linkedin: null,
    },
  },
  {
    name: "Oladepo Oluwaferanmi Praise",
    team: "Oluwaferanmi_O",
    position: "3rd Place",
    date: "January 2025",
    solution: "Air Quality Prediction from Low-Cost IoT devices",
    image:
      "https://i.ibb.co/Z1gjYt4q/Oluwaferanmi-Oladepo-Oladepo-Oluwaferanmi.jpg",
    links: {
      twitter: null,
      linkedin: "https://www.linkedin.com/in/oluwaferanmioladepo/",
    },
  },
];

const stats = [
  {
    name: "Total Prize Awarded",
    value: "₦100k",
    icon: Trophy,
  },
  {
    name: "Winners",
    value: (presentWinners.length + winners.length).toString().padStart(2, "0"),
    icon: Medal,
  },
  {
    name: "Submissions",
    value: "50+",
    icon: Award,
  },
];

export default function WinnersPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hall of Fame
          </h1>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Celebrating the brilliant minds shaping Nigeria&apos;s data science
            future
          </p>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-16 max-w-5xl">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <Card key={stat.name} className="pt-6">
                <CardContent className="text-center">
                  <stat.icon className="mx-auto h-8 w-8 text-primary" />
                  <dt className="mt-4 text-base leading-7 text-muted-foreground">
                    {stat.name}
                  </dt>
                  <dd className="mt-2 text-3xl font-bold tracking-tight">
                    {stat.value}
                  </dd>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>

  {/* Present Winners Grid */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Recent Winners
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Meet the talented individuals who&apos;ve excelled in our hackathons
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {presentWinners.map((presentWinner) => (
            <Card key={presentWinner.name} className="flex flex-col overflow-hidden">
              <div className="flex items-center gap-6 p-6">
                <div className="relative">
                  {Array.isArray(presentWinner.image) ? (
                    <div
                      className={`flex`}
                    >
                      <Popover>
                        <PopoverTrigger className="flex items-center w-16 relative mr-4">
                            {presentWinner.image.map((img, index) => (
                            <div
                              key={index}
                              className="w-16 flex absolute -top-8"
                              style={{ zIndex: presentWinner.image.length - index, left: index * 10 }}
                            >
                              <Image
                                src={img}
                                alt={`${
                                  presentWinner.name[index] || presentWinner.name
                                } Avatar`}
                                className="h-16 w-16 rounded-full object-cover"
                                width={1400}
                                height={2100}
                              />
                            </div>
                          ))}
                          <ChevronDown size={16} className="absolute -right-7 top-1/2 -translate-y-1/2" />
                        </PopoverTrigger>
                        <PopoverContent className="flex">
                          {presentWinner.image.map((img, index) => (
                            <div
                              key={index}
                              className="relative flex"
                              style={{ zIndex: presentWinner.image.length - index }}
                            >
                              <Image
                                src={img}
                                alt={`${
                                  presentWinner.name[index] || presentWinner.name
                                } Avatar`}
                                className="h-16 w-16 rounded-full object-cover"
                                width={1400}
                                height={2100}
                              />
                            </div>
                          ))}
                        </PopoverContent>
                      </Popover>
                    </div>
                  ) : (
                    <Image
                      src={presentWinner.image}
                      alt={presentWinner.name}
                      className="h-16 w-16 rounded-full object-cover"
                      width={1400}
                      height={2100}
                    />
                  )}
                </div>
                <div>
                  <CardTitle className="text-xl">{presentWinner.name}</CardTitle>
                  {Array.isArray(presentWinner.team) ? (
                    <Popover>
                      <PopoverTrigger className="border px-2 py-1 text-muted-foreground text-sm mt-1 flex items-center gap-1 rounded">
                        Team Members <ChevronDown size={14} />
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-col gap-3">
                        {presentWinner.team.map((name, index) => (
                          <div className="flex flex-col gap-2" key={index}>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {name}
                            </p>
                            <div className="flex gap-2">
                              {Array.isArray(presentWinner.links) &&
                              presentWinner.links[index].twitter ? (
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={presentWinner.links[index].twitter}>
                                    <Twitter className="mr-2 h-4 w-4" />
                                    Connect
                                  </Link>
                                </Button>
                              ) : null}
                              {Array.isArray(presentWinner.links) &&
                              presentWinner.links[index].linkedin ? (
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={presentWinner.links[index].linkedin}>
                                    <Linkedin className="mr-2 h-4 w-4" />
                                    Connect
                                  </Link>
                                </Button>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {presentWinner.team}
                    </p>
                  )}
                </div>
              </div>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span>
                    {presentWinner.position} - {presentWinner.date}
                  </span>
                </div>
                <p className="text-muted-foreground">{presentWinner.solution}</p>
                <div className="flex gap-4">
                  {!Array.isArray(presentWinner.links) && presentWinner.links.twitter ? (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={presentWinner.links.twitter}>
                        <Twitter className="mr-2 h-4 w-4" />
                        Connect
                      </Link>
                    </Button>
                  ) : null}
                  {!Array.isArray(presentWinner.links) && presentWinner.links.linkedin ? (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={presentWinner.links.linkedin}>
                        <Linkedin className="mr-2 h-4 w-4" />
                        Connect
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Past Winners Grid */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Past Winners
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Meet the talented individuals who&apos;ve excelled in our hackathons
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {winners.map((winner) => (
            <Card key={winner.name} className="flex flex-col overflow-hidden">
              <div className="flex items-center gap-6 p-6">
                <div className="relative">
                  {Array.isArray(winner.image) ? (
                    <div
                      className={`flex`}
                    >
                      <Popover>
                        <PopoverTrigger className="flex items-center w-16 relative mr-4">
                            {winner.image.map((img, index) => (
                            <div
                              key={index}
                              className="w-16 flex absolute -top-8"
                              style={{ zIndex: winner.image.length - index, left: index * 10 }}
                            >
                              <Image
                                src={img}
                                alt={`${
                                  winner.name[index] || winner.name
                                } Avatar`}
                                className="h-16 w-16 rounded-full object-cover"
                                width={1400}
                                height={2100}
                              />
                            </div>
                          ))}
                          <ChevronDown size={16} className="absolute -right-7 top-1/2 -translate-y-1/2" />
                        </PopoverTrigger>
                        <PopoverContent className="flex">
                          {winner.image.map((img, index) => (
                            <div
                              key={index}
                              className="relative flex"
                              style={{ zIndex: winner.image.length - index }}
                            >
                              <Image
                                src={img}
                                alt={`${
                                  winner.name[index] || winner.name
                                } Avatar`}
                                className="h-16 w-16 rounded-full object-cover"
                                width={1400}
                                height={2100}
                              />
                            </div>
                          ))}
                        </PopoverContent>
                      </Popover>
                    </div>
                  ) : (
                    <Image
                      src={winner.image}
                      alt={winner.name}
                      className="h-16 w-16 rounded-full object-cover"
                      width={1400}
                      height={2100}
                    />
                  )}
                </div>
                <div>
                  <CardTitle className="text-xl">{winner.name}</CardTitle>
                  {Array.isArray(winner.team) ? (
                    <Popover>
                      <PopoverTrigger className="border px-2 py-1 text-muted-foreground text-sm mt-1 flex items-center gap-1 rounded">
                        Team Members <ChevronDown size={14} />
                      </PopoverTrigger>
                      <PopoverContent className="flex flex-col gap-3">
                        {winner.team.map((name, index) => (
                          <div className="flex flex-col gap-2" key={index}>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {name}
                            </p>
                            <div className="flex gap-2">
                              {Array.isArray(winner.links) &&
                              winner.links[index].twitter ? (
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={winner.links[index].twitter}>
                                    <Twitter className="mr-2 h-4 w-4" />
                                    Connect
                                  </Link>
                                </Button>
                              ) : null}
                              {Array.isArray(winner.links) &&
                              winner.links[index].linkedin ? (
                                <Button variant="outline" size="sm" asChild>
                                  <Link href={winner.links[index].linkedin}>
                                    <Linkedin className="mr-2 h-4 w-4" />
                                    Connect
                                  </Link>
                                </Button>
                              ) : null}
                            </div>
                          </div>
                        ))}
                      </PopoverContent>
                    </Popover>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {winner.team}
                    </p>
                  )}
                </div>
              </div>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-primary" />
                  <span>
                    {winner.position} - {winner.date}
                  </span>
                </div>
                <p className="text-muted-foreground">{winner.solution}</p>
                <div className="flex gap-4">
                  {!Array.isArray(winner.links) && winner.links.twitter ? (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={winner.links.twitter}>
                        <Twitter className="mr-2 h-4 w-4" />
                        Connect
                      </Link>
                    </Button>
                  ) : null}
                  {!Array.isArray(winner.links) && winner.links.linkedin ? (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={winner.links.linkedin}>
                        <Linkedin className="mr-2 h-4 w-4" />
                        Connect
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mx-auto mt-32 max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to join them?
          </h2>
          <p className="mt-2 text-lg leading-8 text-muted-foreground">
            Register for our next hackathon and showcase your skills
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/hackathons">Join Next Hackathon</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

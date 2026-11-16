export const cats = ["Amazon & Retail", "Launch & Reviews", "Social & Advertising", "Creative & Branding", "Audience & Strategy"] as const;
type S = { slug: string; title: string; cat: (typeof cats)[number]; icon: string; short: string };
export const services: S[] = [
  { slug: "amazon-book-marketing", title: "Amazon Book Marketing", cat: cats[0], icon: "ShoppingCart", short: "Position your book page, categories and promotion so the right Amazon readers find it." },
  { slug: "amazon-kdp-promotion", title: "Amazon KDP Promotion", cat: cats[0], icon: "BookOpen", short: "Promotion planning for KDP titles, including free and discounted promotion windows." },
  { slug: "book-launch-campaigns", title: "Book Launch Campaigns", cat: cats[1], icon: "Rocket", short: "A paced pre-launch, launch and post-launch plan that builds early momentum." },
  { slug: "ethical-book-review-campaigns", title: "Ethical Book Review Campaigns", cat: cats[1], icon: "Star", short: "Genuine reader and reviewer outreach that follows each platform's policies." },
  { slug: "goodreads-marketing", title: "Goodreads Marketing", cat: cats[1], icon: "Library", short: "Build your presence where readers track, shelve and discuss books." },
  { slug: "bookbub-promotion", title: "BookBub Promotion", cat: cats[1], icon: "Tag", short: "Preparation and positioning for BookBub featured deals and ads." },
  { slug: "social-media-book-marketing", title: "Social Media Book Marketing", cat: cats[2], icon: "Share2", short: "Content planning that turns social attention into reader interest." },
  { slug: "facebook-instagram-advertising", title: "Facebook and Instagram Advertising", cat: cats[2], icon: "Target", short: "Targeted ad campaigns built around your genre and readers." },
  { slug: "tiktok-book-promotion", title: "TikTok Book Promotion", cat: cats[2], icon: "Video", short: "Short-form video ideas that fit the BookTok community." },
  { slug: "pinterest-marketing", title: "Pinterest Marketing", cat: cats[2], icon: "Pin", short: "Visual, searchable pins that keep sending readers to your book." },
  { slug: "book-cover-design", title: "Book Cover Design", cat: cats[3], icon: "Palette", short: "Covers that signal your genre and stand out in a crowded thumbnail." },
  { slug: "book-formatting", title: "Book Formatting", cat: cats[3], icon: "LayoutTemplate", short: "Clean print and ebook interiors that read well on every device." },
  { slug: "book-description-blurb-writing", title: "Book Description and Blurb Writing", cat: cats[3], icon: "PenLine", short: "Descriptions and blurbs that turn a curious browser into a buyer." },
  { slug: "author-branding", title: "Author Branding", cat: cats[3], icon: "Fingerprint", short: "A consistent voice and look that readers remember across books." },
  { slug: "email-marketing", title: "Email Marketing", cat: cats[4], icon: "Mail", short: "Reader email sequences that build a direct line to your audience." },
  { slug: "reader-engagement-campaigns", title: "Reader Engagement Campaigns", cat: cats[4], icon: "Users", short: "Ways to start and keep real conversations with your readers." },
  { slug: "influencer-outreach", title: "Influencer Outreach", cat: cats[4], icon: "MessageCircle", short: "Respectful outreach to bloggers, reviewers and creators who fit your book." },
  { slug: "book-seo-keyword-research", title: "Book SEO and Keyword Research", cat: cats[4], icon: "Search", short: "Find the words readers actually search, then use them in the right places." },
  { slug: "author-website-design", title: "Author Website Design", cat: cats[4], icon: "Globe", short: "A focused author website that presents your books and captures interest." },
  { slug: "book-sales-strategy", title: "Book Sales Strategy", cat: cats[4], icon: "TrendingUp", short: "A clear plan linking your channels, audience and sales goals." },
  { slug: "publishing-consultation", title: "Publishing Consultation", cat: cats[4], icon: "Compass", short: "One-to-one guidance on publishing decisions before and after release." },
];
export const packages = [
  { name: "Essential Book Visibility", for: "First-time and self-published authors who need a solid foundation.", includes: ["Book and author assessment", "Description and keyword review", "Amazon page optimization guidance", "Starter promotion plan"], goal: "Get your book discoverable and presented well.", benefit: "A strong base to build on.", client: "Authors with a published or nearly published book." },
  { name: "Growth and Reader Reach", for: "Authors ready to reach new readers across several channels.", includes: ["Everything in Essential, as needed", "Social media and ad planning", "Ethical review outreach", "Email and engagement setup", "Monthly progress reports"], goal: "Widen your audience and keep readers engaged.", benefit: "Coordinated promotion instead of scattered effort.", client: "Authors with a few titles or an older book to revive." },
  { name: "Comprehensive Book Marketing", for: "Authors and publishers wanting a full, managed campaign.", includes: ["Full strategy development", "Launch or relaunch campaign", "Multi-channel promotion", "Branding and website guidance", "Ongoing reporting and optimization"], goal: "Run a complete, measured marketing program.", benefit: "One strategist coordinating every moving part.", client: "Established authors, series and independent publishers." },
];
export const process = [
  ["Initial Consultation", "We talk about your book, goals and any past marketing."],
  ["Book and Author Assessment", "I review your book page, positioning, audience and current visibility."],
  ["Marketing Strategy Development", "You receive a plan tied to your genre, stage and goals."],
  ["Package Selection and Agreement", "We agree on scope, deliverables and a custom quote."],
  ["Campaign Preparation", "Assets, copy, targeting and schedules are prepared for your approval."],
  ["Marketing Execution", "The campaign goes live across the agreed channels."],
  ["Performance Monitoring", "I track what is working and what is not."],
  ["Reporting and Optimization", "You get clear progress updates and reports by email, and we adjust the plan."],
];
export const faqs = [
  ["Who do you work with?", "Authors and publishers of all kinds: first-time, established, self-published, traditionally published, independent presses and publishing companies."],
  ["Do you work with first-time authors?", "Yes. Many clients are publishing their first book, and I explain each step in plain language."],
  ["Do you market books across all genres?", "Yes. The strategy changes by genre because readers discover books differently."],
  ["Do you work with self-published authors?", "Yes, including authors publishing through Amazon KDP."],
  ["Do you work with traditionally published authors?", "Yes. I can support your publisher's efforts with additional author-led marketing."],
  ["Do you offer worldwide services?", "Yes. I am based in the United States and work fully remotely with clients worldwide."],
  ["What book marketing services do you provide?", "Amazon and KDP promotion, launches, ethical review campaigns, social and paid advertising, branding, email, SEO, design and consulting. See the Services page for all 21."],
  ["Do you offer customized packages?", "Yes. Packages are shaped around your goals, genre, publishing stage and needs."],
  ["How does pricing work?", "I do not publish fixed prices. After a consultation I send a custom quote for your scope."],
  ["Do you offer free consultations?", "Yes. Requests are pending until I personally confirm a time with you by email."],
  ["How long does a marketing campaign take?", "It depends on the goals and services. Launches often run several weeks; ongoing work runs month to month."],
  ["Do you provide progress reports?", "Yes. You receive regular updates and performance reports during the campaign."],
  ["Can you market an already published book?", "Yes. Older books can often be repositioned and promoted again."],
  ["Can you help with a new book launch?", "Yes. The earlier we start before release, the more we can prepare."],
  ["How do I get started?", "Request a free consultation or send an inquiry through the contact page."],
];
export const posts = [
  { slug: "five-things-before-you-promote-your-book", title: "Five Things to Check Before You Promote Your Book", cat: "Book Marketing Tips", min: 3, excerpt: "Promotion sends readers to your book page. Make sure the page is ready.", body: ["Promotion only pays off if the page readers land on does its job. Before spending time or money, review five things.", "First, your cover: does it signal your genre at thumbnail size? Second, your description: does the opening line give a reader a reason to keep going? Third, your categories and keywords: do they match where your readers browse?", "Fourth, your price and format options. Fifth, your next step for readers, such as a mailing list or the next book. Fix these first and every promotion works harder."] },
  { slug: "amazon-kdp-keywords-explained", title: "Amazon KDP Keywords, Explained Simply", cat: "Amazon KDP", min: 3, excerpt: "How readers search on Amazon and how to reflect that in your listing.", body: ["Amazon is a search engine for books. Readers type phrases, and your listing needs to match what they type.", "Start by listing phrases a reader of your genre might use. Look at how comparable books describe themselves. Use natural phrases in your keyword boxes and description rather than stuffing words.", "Review your keywords every few months. Reader language changes, and so does the competition."] },
  { slug: "a-simple-book-launch-timeline", title: "A Simple Book Launch Timeline", cat: "Book Launch Strategies", min: 4, excerpt: "A calm way to plan the weeks before and after release.", body: ["A launch works best as a sequence rather than a single day.", "Before release, finish your book page, gather genuine early readers and prepare your announcement. On release week, tell your audience clearly and keep promotion consistent.", "After release, keep going. Share reader reactions, adjust what you are doing, and review results so the next book starts from a stronger place."] },
];

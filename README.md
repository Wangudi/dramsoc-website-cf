# 🎭 Strathmore Drama Society Website

**Status**: Under Development | **Deployment**: Cloudflare

---

## 📋 About Strathmore Drama Society (DRAMSOC)

Welcome to the official repository for the Strathmore Drama Society website. This is a modern, responsive, and visually stunning platform showcasing the vibrant theatrical community at Strathmore University.

### 🎯 Our Mission

To enhance and encourage teamwork, improve the quality of life by building, developing and nurturing talent through social, theatrical and community life at large.

### 🌟 Our Vision

To be a premier arts institution in Kenya and beyond, inspiring creativity, fostering cultural dialogue, and empowering individuals to use the transformative power of theatre and film for personal and societal growth.

### 💫 Our Motto

**"Take It to the Next Level!"**

---

## 🌐 Website Structure

### 1. **Home** 🏠
- Hero banner: "Take It to the Next Level!"
- Quick links to upcoming shows
- Short motto banner with inspiring tagline
- Call-to-action sections

### 2. **About Us** 🎭
- Mission statement
- Vision statement
- Our motto and core values
- Society history and achievements

### 3. **Recent Productions** 🎬

#### 2025 (September) – The Waiting Room
"The Waiting Room" is a gripping drama that explores the anxiety and anticipation felt by individuals in life's transitional moments. Set in a hospital waiting room, the play delves into the lives of strangers brought together by circumstance, each carrying their own hopes, fears, and secrets.

Through powerful dialogue and compelling character development, this production examines themes of mortality, hope, human connection, and the shared experiences that bind us all. The intimate setting allows for raw, emotional performances that will leave audiences reflecting on their own life's waiting rooms.

#### 2025 (April) – The Homecoming
"The Homecoming" brings to life a contemporary drama that explores themes of family, reconciliation, and the complexities of returning home after years away. The play examines how time changes people and relationships, while questioning what home truly means in a rapidly evolving world.

With nuanced character arcs and emotionally resonant scenes, "The Homecoming" promises to deliver powerful performances that resonate with audiences on deeply personal levels, exploring the bonds that hold us together and the challenges we face when reconnecting with our past.

#### 2024 – The Samaritan
"The Samaritan" is John Lara's powerful contemporary drama that tackles corruption, moral decay, and the struggle for justice in modern society. This compelling play follows the story of individuals fighting against systemic corruption while grappling with their own moral choices.

Through its intricate plot and well-developed characters, the play explores themes of integrity, redemption, and the price of standing up for what's right. Our production promises to deliver thought-provoking performances that will challenge audiences to examine their own values and the society we live in.

#### Previous Productions
- 2023 – Major Barbara
- 2022 – The Accidental Death of an Anarchist

**Note**: Each production features posters, promotional photos, and detailed descriptions arranged horizontally for easy browsing.

### 4. **Departments** 🧩
- Directing & Production
- Technical
- PR & Marketing
- Training & Development
- Finance & Sponsorship
- Scriptwriting & Research
- Costume & Makeup

Each department includes descriptions and sample activities/photos.

### 5. **Production Team** 👥
- Director
- Stage Manager
- Cast
- Technical Crew
- Photo carousel from rehearsals

*Updated per production.*

### 6. **Alumni** 🎓
- Profiles of former members in film/theatre/media
- "Where Are They Now?" section
- Alumni signup form for staying connected

### 7. **Articles & Updates** 📰
- News, interviews, and creative features
- Categories:
  - Behind the Scenes
  - Actor's Journal
  - Director's Corner
  - Society News

### 8. **Contact Us** 💌
- **Email**: strathmoreDramaSociety@strathmore.edu
- **Social Media**:
  - Instagram: [@strathmore.drama.society](https://instagram.com/strathmore.drama.society)
  - YouTube: [Strathmore Drama Society](https://youtube.com/)
  - TikTok: [@strathmore.drama.society](https://tiktok.com/)
- **Location**: Strathmore University Campus Map
- **Contact Form**: For inquiries and sponsorship opportunities

### 9. **Join Us** 🎟️
- Registration form (integrated or Google Form)
- Upcoming auditions calendar
- Membership benefits overview

---

## 👥 Leadership Team

### Current Officers (2025)

| Position | Name |
|----------|------|
| **President** | Dan Kakuru |
| **Vice President** | Leila Kaisa |
| **Organizing Secretary** | Joe Abala |
| **Secretary General** | Cherise Chomba |
| **Financial Manager** | Paula Nimurungi |

*Team photos will be uploaded alongside names and roles.*

---

## 🎨 Design & Branding

### Style & Theme
- **Aesthetic**: Creative & youthful with theatrical flair
- **Background**: Dark stage-inspired design
- **Primary Colors**: 
  - **Crimson Red**: #B80000
  - **Charcoal Black**: #111111
  - **Warm Gold**: #FFD700
  - **White**: #FFFFFF
- **Typography**: Elegant sans-serif (Poppins or Lora)
- **Layout**: Modern grid style with large visuals and animated transitions
- **Tone**: Confident, inspiring, and artistic

### Logo & Branding
- Official Strathmore University emblem with "Drama Society" text variation
- Alternative: Simplified gold mask logo
- **Shortform**: DRAMSOC

### Social Media Handles
- **Instagram**: @strathmore.drama.society
- **YouTube**: Strathmore Drama Society
- **TikTok**: @strathmore.drama.society

---

## 📱 Responsive Design

✅ **Mobile-Optimized**: Fully responsive design for seamless viewing across all devices
✅ **Touch-Friendly**: Optimized navigation and interactive elements for mobile phones
✅ **Performance**: Fast loading times optimized for various connection speeds
✅ **Accessibility**: WCAG compliant with proper contrast ratios and font sizes

---

## 🔧 Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Hosting**: Cloudflare Pages
- **Repository**: GitHub (dramsoc-website-cf)
- **CI/CD**: Cloudflare Auto-deployment from main branch

---

## 🚀 Deployment Instructions

### Setup Cloudflare Pages

1. Connect GitHub repository to Cloudflare Pages
2. Set build command: `npm run build` (or appropriate build command)
3. Set publish directory: `dist/` or `public/`
4. Configure automatic deployments from `main` branch
5. Enable preview deployments for pull requests

### Environment Variables

```env
VITE_API_ENDPOINT=your_api_endpoint
VITE_GA_ID=your_google_analytics_id
```

---

## 📁 Repository Structure

```
dramsoc-website-cf/
├── README.md                 # This file
├── index.html               # Main HTML entry point
├── css/
│   ├── styles.css          # Main stylesheet
│   └── responsive.css      # Mobile responsive styles
├── js/
│   ├── main.js             # Main JavaScript logic
│   ├── navigation.js       # Navigation toggle
│   └── animations.js       # Animated transitions
├── images/
│   ├── productions/        # Production photos and posters
│   ├── team/              # Leadership team photos
│   ├── logo/              # DRAMSOC logo variations
│   └── social/            # Social media assets
├── pages/
│   ├── home.html
│   ├── about.html
│   ├── productions.html
│   ├── departments.html
│   ├── team.html
│   ├── alumni.html
│   ├── articles.html
│   ├── contact.html
│   └── join.html
└── assets/
    ├── fonts/             # Custom fonts (Poppins, Lora)
    └── icons/             # Social media icons
```

---

## 📧 Contact Information

- **Email**: [strathmoreDramaSociety@strathmore.edu](mailto:strathmoreDramaSociety@strathmore.edu)
- **Location**: Strathmore University, Nairobi, Kenya
- **Social Media**:
  - Instagram: [@strathmore.drama.society](https://instagram.com/strathmore.drama.society)
  - YouTube: [Strathmore Drama Society](https://youtube.com/)
  - TikTok: [@strathmore.drama.society](https://tiktok.com/)

---

## 🔐 Contributing

This website is maintained by the Strathmore Drama Society leadership team. For suggestions, features, or issues, please contact:

**Dan Kakuru** (President) - President@strathmore.edu

---

## 📜 License & Copyright

**Copyright © 2025 Strathmore Drama Society**

All content, images, and videos are the intellectual property of Strathmore Drama Society and Strathmore University. Unauthorized reproduction or distribution is prohibited.

---

## 🎭 Key Features

✨ **Animated Navigation**: Smooth three-line toggle menu with animations
✨ **Production Showcase**: Horizontal carousel for recent productions with posters and descriptions
✨ **Team Gallery**: Photo profiles of leadership with roles and responsibilities
✨ **Department Overview**: Comprehensive view of all society departments
✨ **Alumni Network**: Connected alumni community platform
✨ **Article Platform**: Multiple content categories for news and features
✨ **Contact Integration**: Multiple contact channels and inquiry forms
✨ **Social Media Integration**: Direct links to all official social platforms
✨ **Responsive Mobile Design**: Optimized for phones, tablets, and desktops
✨ **Fast Loading**: Optimized for Cloudflare CDN performance

---

## 🌟 Website Navigation Structure

```
┌─────────────────────────────────────────┐
│  🎭 DRAMSOC Logo  [☰ Menu Toggle]     │ (Top Left + Right)
└─────────────────────────────────────────┘
              ↓
    ┌─────────────────────┐
    │ • Home              │
    │ • About Us          │
    │ • Team              │
    │ • Departments       │
    │ • Alumni            │
    │ • Articles          │
    │ • Contact           │
    │ • Join Us           │
    └─────────────────────┘
```

---

## 🚀 Status

🔄 **In Development**: Website structure and content are being finalized
📸 **Awaiting Assets**: Production images, team photos, and logo files
🎨 **Design Phase**: Color scheme and responsive layouts being implemented
🔧 **Technical Setup**: Cloudflare Pages integration and CI/CD pipeline

---

## 📞 Support

For technical issues or questions about the website, please contact the society or visit our campus office.

**Last Updated**: October 30, 2025

---

*Built with 🎭 for the Strathmore Drama Society Community*

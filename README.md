# Skip Hire Selection Page - Project Enhancements
### Project Improvements
#### 🎨 UI/UX Enhancements
- 🌓 **Theme toggle** with system preference detectionLight/Dark Mode
Implemented a theme toggle with carefully selected color palettes (blue/orange accents) for both modes in order to accessibility and visual comfort.
- Implemented Smooth animations in order to clear visual feedbacks improving the UX

#### 🔄 Progress Indicator Section
- Redesigned the step tracker with:

  - Clean, responsive layout for all devices

  - Smooth animations for active and completed steps

  - Improved mobile spacing and touch targets

#### 📸 Skip Visualization System
- Created an interactive guide lightbox featuring:

  - Zoomable images for mobile users

  - Responsive positioning (fixed bottom bar on mobile)

  - Smooth transitions and animations

- Since I didn't have access to the actual images and information about the skips you used for your clients, I downloaded three images from various websites. The references for each one are as follows::

  -  [[Guide-1](https://www.rabbitskips.co.uk/wp-content/uploads/2023/04/rabbit-skip-hire-sizes-made-simple.png)]

  -  [[Guide-2](https://www.skiphireisleofwight.co.uk/wp-content/uploads/2014/01/Dimensions.jpg)]

  -  [[Guide-3](https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/465462216_28023924923872584_3306418396610901225_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=z_JurjdnAgMQ7kNvgEIw1pA&_nc_oc=AdmozWMtnqMszxH0wIcFx3lKfUpCNIcE3r714s_ZdzzumEXiCwk6zA8Gx9gycku2HwzI1bGE4uAWDdpmS9xK2nz6&_nc_zt=23&_nc_ht=scontent-fra5-2.xx&_nc_gid=sRW0RhyoXJ8aQK9LiwZfaQ&oh=00_AYHfbKqpG7m4hz24CO168Tns5_Wd4RWlPZ6JvZwAtiMptQ&oe=67E580CD)]

#### 🃏 Skip Cards
- Designed intuitive visual representations featuring:

  - Estimated capacity indicators: Since the data provided by the server did not include an image for each skip, I designed a custom layout for each card to better guide users and help them visualize the capabilities of each skip. I also implemented icons, animations, and transitions for hovering and selecting the cards. As I didn’t have the exact specifications for your skips, I estimated their capacities based on information available online.

  - Clear private/public property distinctions

  - Interactive hover/select states: For improved user experience on the skip cards, I focused on those that were private property only and made them unselectable. Additionally, I disabled the buttons for them and changed the button text, and modified the hover behavior to help users better understand how to interact with the website.

  - Responsive sizing constraints to prevent layout breaks: For tablet and mobile devices that should display the cards in a single column, I attempted to set a maximum width to prevent excessive empty spaces within the cards. This also helps avoid issues with the images becoming too wide and disproportionate to their height, which ultimately could harm the user interface.

#### 💻 Technical Implementation
##### Architecture
  - Component-based structure with:

#####Code Quality
- Strictly used:

  - Pure styled-components (no CSS frameworks): In developing the app, I focused on implementing light/dark mode, enhancing responsiveness, and designing intuitive user interfaces. I made a deliberate choice to utilize only styled-components, avoiding any CSS frameworks, to better showcase my design and CSS abilities.

  - TypeScript for type safety

  - localStorage for state persistence: In moments of disconnection or unexpected challenges, empowered the users by storing essential global states in localStorage, allowing them to seamlessly continue their process without the need to start anew.

  - Trying to apply Mobile-first responsive design


#### Key Features
✔ Theme system persists across sessions
✔ Interactive visual guides
✔ Clear skip selection feedback
✔ Full mobile/tablet support
✔ Accessible UI patterns

------------
### Deployed on:
https://codesandbox.io/p/github/Amin-Mashayekhan/skip-select-page/master
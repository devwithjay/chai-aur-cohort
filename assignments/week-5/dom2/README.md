<a href="./">
  <h1 align="center">DOM Challenges(6-10)</h1>
</a>

<br>

### [Enhanced Clock ⏰](./challenge-6/app.js)

Create an **enhanced clock** featuring both a digital and an analog display, with smooth hand movements and a date display.

### Challenges

#### Digital Clock Display

- Display the **current time** in **HH:MM:SS** format.

- Update the time **every second**.

- Numbers should be **padded with leading zeros** (e.g., `01:05:08`).

- Use a **clear and readable font** for better visibility.

#### Analog Clock Face

- Create a **circular clock face** with numbers **1 to 12**.

- Include **three hands**:

  - Hour (shortest and thickest)

  - Minute (medium length and thickness)

  - Second (longest and thinnest)

- Mark the **center point** with a dot.

#### Hand Movement

- The **second hand** should move every second (**6° per second**).

- The **minute hand** should move **smoothly** (**6° per minute**).

- The **hour hand** should reflect **both hours and minutes**.

- Ensure all hands **rotate smoothly**.

#### Date Display

- Display the **current date** below the clock in **day, month, year** format.

### [Accordion 🪗](./challenge-7/app.js)

Build an **accordion component** with collapsible sections that allows only one section to be open at a time.

### Challenges

#### Accordion Structure

- Display **multiple collapsible sections**.

- Each section includes:

  - A **header** (clickable button)

  - A **content area** (hidden by default)

- **Only one section** should be open at any time.

#### Section Headers

- Each header should show:

  - A **section title** on the left.

  - A **dropdown arrow (▼)** on the right.

- Add **hover effects** to headers.

- The **arrow should rotate** when a section is opened.

#### Content Display

- Content should:

  - **Appear with a fade-in animation** when opened.

  - Be styled distinctly from headers.

  - **Adjust dynamically** to text length.

#### Interaction Behavior

- Clicking a closed section should **open it** and **close any previously open section**.

- Clicking an open section should **close it**.

### [Simple Shopping Cart 🛒](./challenge-8/app.js)

Create a **shopping cart application** that allows users to add products to a cart, adjust quantities, and view totals.

### Challenges

#### Product Display

- Show at least **four products**, each with:

  - **Product name**

  - **Price**

  - An **"Add to Cart"** button

  - A simple **product image** (use placeholders if needed)

#### Cart Functionality

- Users can:

  - **Add items** to the cart.

  - **Remove items** from the cart.

  - **Adjust item quantities** (increase/decrease).

- The cart should display:

  - A **list of added items** with quantities.

  - **Item subtotals** (price × quantity).

  - The **total cost** of all items.
  
### [Sliding Menu 🪟](./challenge-9/app.js)

Create a **sliding menu** that opens from the right side with smooth transitions and user-friendly interactions.

### Challenges

#### Menu Structure

- Create a **slide-out menu panel** from the **right side** with:

  - At least **four menu items**

  - A **header/title** at the top

  - A **close button** in the top right corner

#### Interaction Features

- Add a **toggle button** to open the menu.

- Clicking the **close button** or **outside the menu** should close it.

- Clicking a menu item should:

  - **Show an alert** indicating the clicked item.

  - **Automatically close** the menu.

#### UX (User Experience)

- Implement **smooth opening and closing transitions**.

- Prevent **content shifts** when the menu opens.

- Provide:

  - **Hover effects** on clickable elements.

  - **Proper cursor indicators**.

  - **No scrolling issues** while the menu is open.
  
### [Interactive Memory Card Game 🂫](./challenge-10/app.js)

Develop a **memory matching card game** with interactive gameplay, move tracking, and a timer.

### Challenges

#### Game Setup

- Create a **4×4 grid** containing **8 pairs of cards**.

- Cards should:

  - **Flip when clicked**

  - Reveal **matching pairs** to win

- Include:

  - A **move counter**

  - A **timer** to track progress

#### Game Features

- **Shuffle cards** at the start of the game.

- Show a **victory message** when all pairs are matched.

- Include a **restart button** to reset the game.

- Display a **score** based on moves and time.

#### Emojis (Optional)

- Use images, icons, or emojis for cards.  

- Suggested emoji pairs: 🐶, 🐱, 🐭, 🐹, 🐰, 🦊, 🐻, 🐼.
<a href="./">
  <h1 align="center">DOM Challenges(1-5)</h1>
</a>

<br>

### [Light Bulb Toggle 💡 🌚](./challenge-1/app.js)

Create a webpage featuring a **light bulb** image or representation.  
Implement a button that **toggles the light bulb** between on and off states.

### Challenge

- When the bulb is **on**, it should appear in **yellow or gold** (or any other suitable color) with a **glow effect**.

- When the bulb is **off**, it should appear **gray** with **no glow**.

- The button text should **dynamically update** based on the bulb’s state (e.g., `"Turn On"` / `"Turn Off"`).

- Apply a **dark mode effect** to the page when the bulb is off.

### [Change Text Color 🦎](./challenge-2/app.js)

Create a webpage with a heading that says **"Change My Color!"**.  
Allow users to change the heading’s text color using buttons.

### Challenge

- Add **five buttons**: Red, Green, Blue, Purple (or any four colors of your choice), and Reset.

- Clicking a color button should **change the heading’s text color** to the corresponding color.

- Clicking the **Reset** button should **restore** the text color to **black**.

### [Real-time Form Input Display 📋](./challenge-3/app.js)

Design a **profile form** with fields that display real-time updates in a preview section.

### Challenge

- Create a form with the following fields:
  
  - **Name** (text input)
  
  - **Job Title** (text input)
  
  - **Age** (number input)
  
  - **Bio** (textarea)

- Add a **"Profile Preview"** section that **dynamically displays** the entered information.

- The preview should **update in real-time** as the user types.

- If a field is left empty, display **"Not provided"** in the preview instead.

### [Task Management 🧏🏻‍♂️](./challenge-4/app.js)

Create a **task management application** that allows users to add, complete, and delete tasks, along with task statistics.

### Challenge

#### Task Management

- Users should be able to:

  - **Add a new task** via an input field and "Add" button or by pressing **Enter**.

  - See each task in a list with:

    - A **checkbox** to mark as completed.
    
    - A **delete button** to remove tasks.

#### Task Completion

- Completed tasks should:

  - Be **visually distinct** (e.g., strikethrough text, different color).
  - Be revertible to an **incomplete state** when unchecked.

#### Task List State

- Display the message **"No tasks yet. Add one above!"** if no tasks exist.

- The message should:

  - **Disappear** when a task is added.

  - **Reappear** when all tasks are deleted.

#### Task Statistics

- Show:

  - The **total number of tasks**.
  
  - The **number of completed tasks**.

- Statistics should **update dynamically** as tasks are managed.

#### [Image Carousel Application 🖼️](./challenge-5/app.js)

Create an **image carousel** that allows users to navigate through a set of images with captions and automatic slideshow functionality.

### Challenge

#### Image Display

- Display **one image at a time** with a **caption** at the bottom.

#### Navigation Controls

- Provide:

  - A **"Next"** button to move to the next image.
  
  - A **"Previous"** button to go back to the previous image.
  
  - **Indicator dots** to navigate to specific images.

#### Automatic Slideshow

- Implement an **auto-play mode** where images **transition automatically**.

- Add a **Start/Stop** button for auto-play.

- Display a **countdown timer** showing seconds remaining before the next image.

#### Indicators

- Show **navigation dots** below the carousel.

- The **active image’s indicator** should be **highlighted**.

- Clicking a dot should **navigate directly** to the corresponding image.

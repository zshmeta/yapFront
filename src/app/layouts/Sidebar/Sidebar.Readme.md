Sure, let's create the Navbar component with the desired animations and functionality. I'll provide a more detailed explanation of each step.

1. First, create a new folder called `components` inside the `yap` folder, if it doesn't already exist.

2. Inside the `components` folder, create a new file called `Navbar.js`.

3. In `Navbar.js`, import the necessary dependencies and create a functional component. We'll use the array and props method for managing the visibility of icons:

```javascript



```

4. Create a new file called `Navbar.css` in the `components` folder. This file will contain the styles for our navigation bar.

5. Add the following CSS rules to `Navbar.css` for the basic styling, hover effect, and animations:


```

6. Now, let's add some nav items with Font Awesome icons to our `Navbar.js`. First, install the Font Awesome package:

```bash
npm install --save font-awesome
```

7. Import Font Awesome CSS in your `_app.js` file:

```javascript
import 'font-awesome/css/font-awesome.min.css';
```

8. Finally, import and use the `Navbar` component in your desired page, for example in `pages/old_index.js`:

```javascript
import Navbar from '../components/Navbar';

export default function Home() {
    return (
    <div>
        <Navbar iconsToShow={['user', 'briefcase', 'envelope']} />
        {/* Your page content goes here */}
    </div>
    );
}



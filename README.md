# Traversy React
Coursework and projects from Brad Traversy's [React Front to Back](https://www.udemy.com/course/modern-react-front-to-back) course on Udemy

## Projects
1. Github Finder
2. Contact Keeper
3. ITLogger

## Folder Structure

```bash
src
├───assets # static assets
├───components # reusable components
├───context # context providers, state, and reducers
├───pages # page components 
├───routes # router (app) component
├───scss
│   └───index.scss  # scss reset
│   └───_shared.scss # vars available to all scss
└───index.js # app entrypoint
```

## Notes

### Hooks
Functions that let us hook into React state and lifecycle methods from a functional component
- useState
- useEffect (allows lifecycle methods)
- useContext
- useReducer (similar to redux: use actions)
- useRef
- etc

```js
// Import hooks
import {useState, useEffect} from 'react';

const Component = (props) => {
    // Using useState hook
    const [data, setData] = useState('');
    const [users, setUsers] = useState([]);
    // state data and setter | (default value)
    // useState destructures into default value and setter function
    // setData variable is essentially this.setState but for a specific piece of state
    // data can be any individual piece of state 

    // using useEffect hook
    useEffect(() => {
        getUsers();
    }, []);
    // the action of useEffect depends on the value in the 2nd param.
    // [] mimics componentDidUpdate (runs once)
    // putting values in the array is adding dependencies;
    // the hook will run whenever those are updated
}
```

### Context API
Context is complicated.


## Best Practices
- Each component gets its own file


## Further Reading

Folder Structure
- [https://engineering.kapost.com/2016/01/organizing-large-react-applications/]
- [https://dev.to/farazamiruddin/an-opinionated-guide-to-react-folder-structure-file-naming-1l7i]
- [https://daveceddia.com/react-project-structure/]
- [https://github.com/diegohaz/arc/tree/master/src-example/components]

TypeScript
- [https://www.sitepoint.com/react-with-typescript-best-practices/]
- [https://www.typescriptlang.org/docs/handbook/basic-types.html]

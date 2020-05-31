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
├───routes # router and pages
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
// Using useState hook
const Component = (props) => {
    const [data, setData] = useState('');
    // state data and setter | (default value)
    // useState destructures into default value and setter function
    // setData variable is essentially this.setState but for a specific piece of state
    // data can be any individual piece of state 
}
```


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

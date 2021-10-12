# React Glitch Text

<img src="https://github.com/belferink1996/react-glitch-text/blob/main/preview.gif" />

## Installation and usage

Install from npm:

```bash
npm i --save react-glitch-text
```

Then use it in your app:

```jsx
import Glitch from 'react-glitch-text'

function App(){
  return (
    <Glitch color='whitesmoke' fontSize='42px'>
      Your super crazy c00l T3XT goes here!
    </Glitch>
  )
}
```


## Props

Common props you may want to include:

| Prop      	| Requirement 	| Default Value 	| Description                         	|
|-----------	|-------------	|---------------	|-------------------------------------	|
| children  	| Required    	| none          	| Should contain the text             	|
| color     	| Optional    	| 'whitesmoke'  	| Text color                          	|
| fontSize  	| Optional    	| '42px'        	| Text font size                      	|
| style     	| Optional    	| {}            	| React.CSSProperties style object    	|
| className 	| Optional    	| null          	| Additional class name(s)            	|
| onClick   	| Optional    	| () => null    	| Function triggered by onClick event 	|
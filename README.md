![](https://img.shields.io/npm/v/react-native-full-switch.svg?style=flat)
![](https://img.shields.io/npm/dt/react-native-full-switch.svg)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# react-native-full-switch

A simple and fully customizable React Native component that implements a switch (toggle) for android and ios, that also support in RTL.

Example
:-------------------------:
![](https://github.com/eldareini/react-native-full-switch/blob/master/assets/example.gif) 
[example](https://github.com/eldareini/react-native-full-switch/blob/master/example/App.js)

## Installation

If using yarn:

```
yarn add react-native-full-switch
```

If using npm:

```
npm i react-native-react-native-full-switch
```

##Usage

```
import Switch from 'react-native-full-switch'
...

const [checked, setChecked] = useState(false)
...

<Switch
    isOn={checked}
    onChange={isOn => setChecked(isOn)}
    />
```

## Documentation

| Name                  | Description                            | Default | Type    |
|-----------------------|----------------------------------------|---------|---------|
| isOn                  | Require, determine if the Switch is on | false           | Boolean  |
| onChange              | Require, a function that returns the new state of the switch after a press |    | Function |
| trackWidth            | The width style property of the track  | 40      | Number  |
| trackHeight           | The height style property of the track | 24      | Number  |
| curserWidth           | The width style property of the curser | 20      | Number  |
| curserHeight          | The height style property of the curser| 20      | Number  |
| space                 | The space of the curser from the beginning and the end of the track | 3  | Number  |
| disable               | Disable the Switch for touch            | false  | Boolean |
| opacity               | Opacity of the press. number between 0 to 1 | 0.8 | Number  |
| trackOnColor          | The color of the track on on state      | "rgb(78,209,100)" | String  |
| trackOffColor         | The color of the track on off state     | "rgb(223,223,223)" | String  |
| vertical              | Change the animation to vertical        | false  | Boolean |
| text                  | Text to show on the track               | ""     | String  |
| textStyle             | A custom style for the text             |        | Style object |
| reversed              | Revers the direction of the animation   | false  | Boolean |
| trackStyle            | A custom style for the track            |        | Style object |
| curserOnColor         | The color of the curser on on state     | white  | String  |
| curserOffColor        | The color of the curser on off state    | white  | String  |
| curserStyle           | A custom style for the curser           |        | Style object |
| disableOnCurserColor  | Disable color of the curser in on state | "rgb(233,233,233)" | String |
| disableOffCurserColor | Disable color of the curser in off state| "rgb(233,233,233)" | String |
| duration              | The duration of the animation in milliseconds | 500 | Number  |  
| disableOnTrackColor   | Disable color of the track on on state  | "rgba(78,209,100, 0.6)" | String |
| disableOffTrackColor  | Disable color of the track on off state | "rgba(223,223,223,0.6)" | String |
| renderChildCurser     | Render a custom child component to the curser |        | Component |

## Contributing
Pull requests are always welcome! Feel free to open a new GitHub issue for any changes that can be made.

## License
[MIT](https://github.com/eldareini/react-native-full-switch/blob/master/LICENSE)




# BetterLog.js

![version](https://img.shields.io/badge/version-1.0.7-brightgreen)
![npm](https://img.shields.io/npm/dw/@sh4manik/betterlog.js)

### JavaScript library

BetterLog.js is a **lightweight** and **fast** JavaScript library that improves the logging experience by adding many
new features and customization.

# Documentation

### Quick Start (Browser)

First you need to import the library. To do this, you need to write a script connection in the HTML file:

```HTML
<script src="https://sh4man4ik.github.io/BetterLog.js/betterlog.js"></script>
```

In JavaScript code, you need to create an object:

```JavaScript
let cons = new BetterLog();
```

### Quick Start (Node.js)

First you need to download the library. But note that many things that work in the browser may not work in the console.
You can do this with the command:

```bash
npm install @sh4manik/betterlog.js
```

In JavaScript code, you need to create an object:

```JavaScript
const BetterLog = require('@sh4manik/betterlog.js');
let cons = new BetterLog();
```

### Improved console output

```JavaScript
cons.success('Success!');
```

```JavaScript
cons.debug('Debug!');
```

```JavaScript
cons.info('Info!');
```

```JavaScript
cons.warn('Warn!');
```

```JavaScript
cons.error('Error!');
```

Output:

![Screenshot_1](./Screenshots/Screenshot_1.png)

### Custom console output

You can choose which styles you want to apply to your output. The example shows all styles.

```JavaScript
cons.custom("Custom text").color('#000000').background_color('#ffffff').font_size('16px').text_decoration('underline').bold().padding('0px', '20px').log();
```

Output:

![Screenshot_2](./Screenshots/Screenshot_2.png)

### Tests in the browser

```JavaScript
cons.test(4, 2 + 2);
```

```JavaScript
cons.test(5, 3 + 6);
```

Output:

![Screenshot_3](./Screenshots/Screenshot_3.png)

### Mute console output

You can mute some of the outputs in the console when you need.

```JavaScript
cons.mute();
cons.success('Hello');
cons.unmute();
cons.success('World');
```

Output:

![Screenshot_4](./Screenshots/Screenshot_4.png)

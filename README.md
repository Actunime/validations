## Run Locally

Clone the project

```bash
  git clone https://github.com/Actunime/validations.git
```

Go to the project directory

```bash
  cd validations
```

Install dependencies

```bash
pnpm install
```

Start watch server

```bash
pnpm run watch
```

Test output

```bash
pnpm run dev
```

Build

```bash
pnpm run build
```

## Usage/Examples

```javascript
import { validation } from '@actunime/validations';

console.log('Hello World');
```

## Test dev in other repo

Usefull for live test before push
Clone the project

Go to the package directory

```bash
  cd validations
```

Install dependencies

```bash
pnpm install
```

Start watch updates server

```bash
pnpm run watch
```

Link the repo globaly

```bash
pnpm link --global
```

Go to your project directory

```bash
  cd your-project
```

```bash
pnpm link @actunime/validations --global
```

When everything work well you can commit the package in a **dev** branch

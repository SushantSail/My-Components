```bash
npm install @reduxjs/toolkit react-redux
```

### Folder Structure

```text
src/
 ├── app/
 │    └── store.js
 ├── features/
 │    └── counter/
 │         ├── Counter.js
 │         └── counterSlice.js
 ├── App.js
 └── index.js
```

---

## 1. store.js

```javascript
// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

---

## 2. counterSlice.js

```javascript
// src/features/counter/counterSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
```

---

## 3. Counter.js

```javascript
// src/features/counter/Counter.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
```

---

## 4. App.js

```javascript
// src/App.js

import React from 'react';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
```

---

## 5. index.js

```javascript
// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

Run the app:

```bash
npm start
```

This creates a basic counter app using:

* `configureStore`
* `createSlice`
* `useSelector`
* `useDispatch`
  from Redux Toolkit.

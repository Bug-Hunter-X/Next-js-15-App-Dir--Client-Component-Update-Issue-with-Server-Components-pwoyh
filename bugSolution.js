```javascript
// app/page.js
import MyClientComponent from './MyClientComponent';

export default async function Home() {
  const data = await fetchData();

  return (
    <main>
      <MyClientComponent data={data} />
    </main>
  );
}

async function fetchData() {
  // Simulate fetching data
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { count: 10 };
}

// app/MyClientComponent.js
function MyClientComponent({ data }) {
  // Using useState to manage and force update
  const [count, setCount] = React.useState(data.count);

  React.useEffect(() => {
     setCount(data.count)
  }, [data.count])

  return (
    <div>Count: {count}</div>
  );
}
```
import { Link } from "@next-esm-repro/design-system";

const Home = () => {
  return (
    <div style={{ padding: 64, boxSizing: "border-box" }}>
      <Link href="/">Welcome home</Link>
    </div>
  );
};

export default Home;

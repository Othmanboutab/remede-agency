import Feature from "../components/Feature";
import { featuresList } from "../config/features";

const Home = () => {
  return (
    <main>
      <div className="hero">
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className="features">
        <h2 className="sr-only">Features</h2>
        {featuresList.map((feature: Feature, index: number) => {
          return (
            <Feature
              key={index}
              logo={feature.logo}
              title={feature.title}
              description={feature.description}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Home;

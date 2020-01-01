import React from "react";
import Layout from "@layouts/Layout";

import "@styles/index.scss";
import withLogin from "../hocs/withLogin";

const Home = ({ isSigned }) => {
  return (
    <Layout isSigned={isSigned}>
      <section className="pre-face">
        <div className="pre-face__container">
          <h1>Next Book Me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            massa, eleifend et feugiat vitae, tempus sagittis velit. Maecenas
            feugiat vulputate orci ac placerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
            massa, eleifend et feugiat vitae, tempus sagittis velit. Maecenas
            feugiat vulputate orci ac placerat.
          </p>
        </div>
      </section>
      <main className="main">
        <section className="main__usability">
          <div>{/*  */}</div>
        </section>
        <section className="main__cards">
          {Array.from({ length: 3 }, () => ({
            title: "Lorem ipsum",
            subtitle: "Lorem ipsum dolor sit amet",
            label:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat massa, eleifend et feugiat vitae, tempus sagittis velit."
          }))
            .map((card, i) => ({ ...card, key: `${card.title}-${i}` }))
            .map(card => (
              <div key={card.key} className="card">
                <div className="card-body">
                  <h5 className="card-title">{card.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {card.subtitle}
                  </h6>
                  <p className="card-text">{card.label}</p>
                </div>
              </div>
            ))}
        </section>
        <section className="main__use-now card">
          <section className="main__use-now__information">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat
              massa, eleifend et feugiat vitae, tempus sagittis velit. Maecenas
              feugiat vulputate orci ac placerat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed erat massa, eleifend et feugiat
              vitae, tempus sagittis velit. Maecenas feugiat vulputate orci ac
              placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed erat massa, eleifend et feugiat vitae, tempus sagittis velit.
              Maecenas feugiat vulputate orci ac placerat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed erat massa, eleifend et
              feugiat vitae, tempus sagittis velit. Maecenas feugiat vulputate
              orci ac placerat.
            </p>
          </section>
          <section className="main__use-now__cards">
            {Array.from({ length: 3 }, () => ({
              title: "Lorem ipsum",
              label:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat massa, eleifend et feugiat vitae, tempus sagittis velit."
            }))
              .map((card, i) => ({ ...card, key: `${card.title}-${i}` }))
              .map(card => (
                <div key={card.key} className="card" style={{ width: "100%" }}>
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.label}</p>
                  </div>
                </div>
              ))}
          </section>
        </section>
      </main>
    </Layout>
  );
};

export default withLogin(Home);

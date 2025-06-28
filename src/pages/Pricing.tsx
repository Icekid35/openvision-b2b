import React from "react";
export default function Pricing() {
  return (
    <div
      style={{ maxWidth: 900, margin: "0 auto", padding: "96px 24px 0 24px" }}
    >
      <h1
        style={{
          fontSize: 44,
          fontWeight: 900,
          color: "#222",
          marginBottom: 32,
        }}
      >
        Pricing
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 40,
        }}
      >
        {[
          { title: "Starter", price: "$2,000", desc: "Perfect for startups." },
          { title: "Pro", price: "$5,000", desc: "For growing brands." },
          {
            title: "Enterprise",
            price: "Custom",
            desc: "Tailored for large orgs.",
          },
        ].map((plan, i) => (
          <div
            key={i}
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 16px #eaeaea",
              padding: 32,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: "#4F8CFF",
                margin: 0,
              }}
            >
              {plan.title}
            </h2>
            <div
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: "#222",
                margin: "16px 0",
              }}
            >
              {plan.price}
            </div>
            <p
              style={{
                color: "#666",
                fontSize: 16,
                margin: 0,
                textAlign: "center",
              }}
            >
              {plan.desc}
            </p>
            <button
              style={{
                background: "#FFB86B",
                color: "#fff",
                border: 0,
                borderRadius: 8,
                padding: "12px 32px",
                fontWeight: 700,
                fontSize: 16,
                marginTop: 24,
                cursor: "pointer",
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

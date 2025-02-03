import { Check } from "lucide-react";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: number;
  originalPrice: number;
  features: PricingFeature[];
  icon: "plus" | "cross" | "circle";
  variant?: "default" | "featured";
}

export function PricingCard({
  title,
  price,
  originalPrice,
  features,
  icon,
  variant = "default",
}: PricingCardProps) {
  const isFeatured = variant === "featured";

  return (
    <div
      style={{
        background: isFeatured
          ? "linear-gradient(to bottom, #000066, #1CAAAA)"
          : "white",
        borderRadius: "16px",
        padding: "24px",
        color: isFeatured ? "#FCFCFD" : "#101828",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: isFeatured ? "rgba(255, 255, 255, 0.2)" : "#006",
            color: "white",
          }}
        >
          {icon === "plus" && "+"}
          {icon === "cross" && "×"}
          {icon === "circle" && "•"}
        </div>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <h3 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "8px" }}>
          {title}
        </h3>
        <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
          <span style={{ fontSize: "24px", fontWeight: "bold" }}>৳{price}</span>
          <span
            style={{
              fontSize: "14px",
              color: isFeatured ? "#FCFCFD" : "#101828",
              textDecorationLine: "line-through",
            }}
          >
            ৳{originalPrice}
          </span>
        </div>
        <p
          style={{
            fontSize: "16px",
            color: isFeatured ? "#FCFCFD" : "#6b7280",
            marginTop: "8px",
          }}
        >
          Introductory Offer
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <h4
          style={{
            marginBottom: "16px",

            color: isFeatured ? "#fff" : "#03106C",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "35.556px",
            letterSpacing: "-0.569px",
          }}
        >
          What you will get ?
        </h4>

        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {features.map((feature, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
                marginBottom: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: isFeatured ? "#FCFCFD" : "#006",
                  flexShrink: 0,
                }}
              >
                <Check size={12} color={isFeatured ? "#1CAAAA" : "#fff"} />
              </div>
              <span style={{ fontSize: "14px" }}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <label
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "8px",
            marginBottom: "16px",
          }}
        >
          <input
            type="checkbox"
            style={{
              marginTop: "2px",
              width: "20px",
              height: "20px",
              borderRadius: "5px",

              backgroundColor: "#FFF",
            }}
          />

          <span style={{ fontSize: "12px", color: "#006" }}>
            I agree with the{" "}
            <a href="#" style={{ color: isFeatured ? "white" : "#1CAAAA" }}>
              terms
            </a>{" "}
            and{" "}
            <a href="#" style={{ color: isFeatured ? "white" : "#1CAAAA" }}>
              conditions
            </a>
            ,{" "}
            <a href="#" style={{ color: isFeatured ? "white" : "#1CAAAA" }}>
              privacy policy
            </a>{" "}
            and{" "}
            <a href="#" style={{ color: isFeatured ? "white" : "#1CAAAA" }}>
              refund policy
            </a>
          </span>
        </label>

        <button
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "14px",
            color: isFeatured ? "white" : "#252E33",
            background: "none",
            marginBottom: "16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Have a coupon?
        </button>

        <button
          style={{
            width: "100%",
            padding: "8px 0",
            borderRadius: "6px",
            fontSize: "14px",
            fontWeight: 600,
            textAlign: "center",
            backgroundColor: isFeatured ? "white" : "#006",
            color: isFeatured ? "#000066" : "white",
            border: "none",
            cursor: "pointer",
           
          }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

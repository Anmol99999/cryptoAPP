import React from "react";

const Buymoney = () => {
  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "15px" }}
      >
        <iframe
          style={{
            boxShadow: "0 2px 10px 0 rgba(0,0,0,.20)",
            borderRadius: "var(--border-radius)",
            margin: "auto",
            maxWidth: "420px",
          }}
          src="https://widget.onramper.com?color=000000&apiKey=pk_test_x5M_5fdXzn1fxK04seu0JgFjGsu7CH8lOvS9xZWzuSM0"
          height="660px"
          width="482px"
          title="Onramper widget"
          frameBorder="0"
          allow="accelerometer; autoplay; camera; gyroscope; payment"
        ></iframe>
      </div>
    </div>
  );
};

export default Buymoney;

import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div className="inner" style={{ "--quantity": 10 }}>
          <div
            className="card"
            style={{ "--index": 0, "--color-card": "142, 249, 252" }}
          >
            <div className="img" />
          </div>
          <div
            className="card"
            style={{ "--index": 1, "--color-card": "142, 252, 204" }}
          >
            <div className="img" />
          </div>
          {/* Additional cards here */}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .inner {
    --quantity: 10; /* Define quantity here */
    --w: 100px;
    --h: 150px;
    --translateZ: calc((var(--w) + var(--h)) + 0px);
    --rotateX: -15deg;
    --perspective: 1000px;
    position: absolute;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    animation: rotating 20s linear infinite;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    border: 2px solid rgba(var(--color-card, 0, 0, 0), 1); /* Default fallback */
    border-radius: 12px;
    inset: 0;
    transform: rotateY(calc(360deg / var(--quantity) * var(--index)))
      translateZ(var(--translateZ));
  }

  .img {
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle,
      rgba(var(--color-card, 0, 0, 0), 0.2) 0%,
      rgba(var(--color-card, 0, 0, 0), 0.6) 80%,
      rgba(var(--color-card, 0, 0, 0), 0.9) 100%
    );
  }
`;

export default Card;

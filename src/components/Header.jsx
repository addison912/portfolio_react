/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export const Header = () => {
  return (
    <header css={header}>
      <div css={headerContent}>
        <img
          css={headerImage}
          src={require("url:../assets/me.jpeg")}
          alt="Addison"
          type="image/jpeg"
        />
      </div>
    </header>
  );
};

//styles
const header = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const headerContent = css`
  width: 50%;
  padding: 50px 0;
`;

const headerImage = css`
  border-radius: 50%;
  width: 96px;
`;

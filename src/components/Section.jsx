/** @jsx jsx */
import { css, jsx } from "@emotion/react";

export const Section = ({ title, children }) => {
  return (
    <section css={section}>
      <h3 css={sectionTitle}>{title ? title : null}</h3>
      <div css={sectionBody}>{children}</div>
    </section>
  );
};

//css
const section = css`
  display: flex;
  margin-bottom: 32px;
`;
const sectionTitle = css`
  width: 25%;
  text-align: right;
  padding-right: 24px;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  margin: 0;
`;

const sectionBody = css`
  width: 75%;
  display: flex;
  text-align: left;
  padding-right: 12%;
`;

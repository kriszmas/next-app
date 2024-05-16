import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text style={heading}>Hello {name}</Text>
          </Container>
          <Link href="http://www.google.com">www.google.com</Link>
        </Body>
      </Tailwind>
    </Html>
  );
};

const body: CSSProperties = {
  background: "#fff",
};
const heading: CSSProperties = {
  fontSize: "32px",
};
export default WelcomeTemplate;

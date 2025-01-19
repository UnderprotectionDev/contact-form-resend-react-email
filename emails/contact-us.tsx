import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Tailwind,
  Hr,
} from "@react-email/components";
import { Atom } from "lucide-react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({
  name,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission from {name}</Preview>
      <Tailwind>
        <Body className="bg-[#000] bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] font-sans">
          <Container className="mx-auto my-10 p-5 max-w-2xl">
            <Section className="bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0.1)] rounded-3xl p-12 shadow-2xl border border-[rgba(255,255,255,0.2)]">
              <Heading className="text-white text-4xl font-bold text-center mb-8">
                📬 New Contact Message
              </Heading>

              <Text className="text-gray-200 text-xl text-center mb-10">
                You have received a new message from your contact form.
              </Text>

              <Section className="bg-gradient-to-br from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.3)] rounded-2xl p-8 mb-10 border border-[#63e] border-opacity-40 shadow-xl">
                <Text className="text-[#a29aff] text-lg font-bold text-center mb-2">
                  From:
                </Text>
                <Text className="text-white text-xl text-center mb-6">
                  {name}
                </Text>

                <Text className="text-[#a29aff] text-lg font-bold text-center mb-2">
                  Email:
                </Text>
                <Text className="text-white text-xl text-center mb-6">
                  {email}
                </Text>

                <Text className="text-[#a29aff] text-lg font-bold text-center mb-2">
                  Message:
                </Text>
                <Text className="text-white text-xl text-center">
                  {message}
                </Text>
              </Section>

              <Button
                href={`mailto:${email}`}
                className="bg-[#63e] rounded-xl text-white text-xl font-bold no-underline text-center py-5 px-10 mx-auto block w-4/5 hover:bg-[#52d] transition-colors duration-300 shadow-lg"
              >
                Reply to {name}
              </Button>

              <Hr className="my-8 border-gray-600" />

              <Row>
                <Column align="center">
                  <Text className="text-[18px] font-bold leading-[28px] text-indigo-500 text-center">
                    Try now
                  </Text>
                  <Text className="text-gray-300 text-center mb-4">
                    The app all cheese enthusiasts have been waiting for
                  </Text>
                  <table>
                    <tr>
                      <td className="pr-[16px]">
                        <Button href="https://react.email">
                          <Img
                            alt="Get it on Google Play button"
                            height={54}
                            width={162}
                            src="https://react.email/static/get-it-on-google-play.png"
                          />
                        </Button>
                      </td>
                      <td className="pl-[16px]">
                        <Button href="https://react.email">
                          <Img
                            alt="Download on the App Store button"
                            height={54}
                            width={162}
                            src="https://react.email/static/download-on-the-app-store.png"
                          />
                        </Button>
                      </td>
                    </tr>
                  </table>
                </Column>
              </Row>

              <Hr className="my-8 border-gray-600" />

              <Row>
                <Column align="center">
                  <div className="w-12 h-12 bg-[#63e] rounded-full flex items-center justify-center overflow-hidden shadow-lg">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="50" fill="#fff" />
                      <circle cx="50" cy="50" r="46" fill="#63e" />
                    </svg>
                  </div>
                  <Heading
                    as="h3"
                    className="m-0 mt-2 text-base font-medium leading-6 text-white"
                  >
                    Underprotection
                  </Heading>
                  <Text className="m-0 text-sm font-medium leading-4 text-gray-400">
                    Co-Founder & CEO
                  </Text>
                </Column>
              </Row>

              <Hr className="my-8 border-gray-600" />

              <Section className="mt-16">
                <Row>
                  <Column align="center">
                    <div className="mx-auto mb-6">
                      <Atom className="w-16 h-16 text-white" />
                    </div>
                    <Text className="text-white text-2xl font-bold mb-2 text-center">
                      Acme Corporation
                    </Text>
                    <Text className="text-gray-300 text-lg mb-8 text-center">
                      Think different
                    </Text>
                  </Column>
                </Row>
                <Row>
                  <Column align="center">
                    <div className="inline-block whitespace-nowrap mb-8">
                      <Link href="#" className="inline-block mx-4">
                        <Img
                          src="https://react.email/static/facebook-logo.png"
                          width="40"
                          height="40"
                          alt="Facebook"
                        />
                      </Link>
                      <Link href="#" className="inline-block mx-4">
                        <Img
                          src="https://react.email/static/x-logo.png"
                          width="40"
                          height="40"
                          alt="X"
                        />
                      </Link>
                      <Link href="#" className="inline-block mx-4">
                        <Img
                          src="https://react.email/static/instagram-logo.png"
                          width="40"
                          height="40"
                          alt="Instagram"
                        />
                      </Link>
                    </div>
                  </Column>
                </Row>
                <Row>
                  <Column align="center">
                    <Text className="text-gray-300 text-lg leading-6 text-center">
                      123 Main Street Anytown, CA 12345
                    </Text>
                    <Text className="text-gray-300 text-lg leading-6 text-center">
                      mail@example.com | +123456789
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            <Text className="text-gray-400 text-base mt-8 text-center">
              © 2025 Acme Corporation. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

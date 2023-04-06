'use client';

import '../globals.css';
import { Kanit, Kalam } from 'next/font/google';
import { Connector } from 'mqtt-react-hooks';

const kanit = Kanit({
  subsets: ['latin'],
  variable: '--kanit-font-family',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const kalam = Kalam({
  subsets: ['latin'],
  variable: '--kalam-font-family',
  weight: '700',
});

export default function BattleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const MQTT_BROKER_URL = process.env.NEXT_PUBLIC_MQTT_BROKER_URL ?? '';
  const MQTT_BROKER_USERNAME =
    process.env.NEXT_PUBLIC_MQTT_BROKER_USERNAME ?? '';
  const MQTT_BROKER_PASSWORD =
    process.env.NEXT_PUBLIC_MQTT_BROKER_PASSWORD ?? '';

  return (
    <html lang="en">
      <body className={`${kanit.variable} ${kalam.variable}`}>
        <Connector
          brokerUrl={MQTT_BROKER_URL}
          options={{
            port: 9001,
          }}
        >
          {children}
        </Connector>
      </body>
    </html>
  );
}
